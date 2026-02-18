import { useEffect, useRef, useCallback } from 'react';

const InteractiveDots = ({
    dotColor = '#a855f7',
    gridSpacing = 28,
    animationSpeed = 0.004,
}) => {
    const canvasRef = useRef(null);
    const timeRef = useRef(0);
    const animationFrameId = useRef(null);
    const mouseRef = useRef({ x: -9999, y: -9999, isDown: false });
    const ripples = useRef([]);
    const dotsRef = useRef([]);
    const dprRef = useRef(1);

    const getMouseInfluence = (x, y) => {
        const dx = x - mouseRef.current.x;
        const dy = y - mouseRef.current.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const maxDistance = 130;
        return Math.max(0, 1 - distance / maxDistance);
    };

    const getRippleInfluence = (x, y, currentTime) => {
        let totalInfluence = 0;
        ripples.current.forEach((ripple) => {
            const age = currentTime - ripple.time;
            const maxAge = 2800;
            if (age < maxAge) {
                const dx = x - ripple.x;
                const dy = y - ripple.y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                const rippleRadius = (age / maxAge) * 280;
                const rippleWidth = 55;
                if (Math.abs(distance - rippleRadius) < rippleWidth) {
                    const rippleStrength = (1 - age / maxAge) * ripple.intensity;
                    const proximityToRipple = 1 - Math.abs(distance - rippleRadius) / rippleWidth;
                    totalInfluence += rippleStrength * proximityToRipple;
                }
            }
        });
        return Math.min(totalInfluence, 2);
    };

    const initializeDots = useCallback(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const canvasWidth = canvas.clientWidth;
        const canvasHeight = canvas.clientHeight;
        const dots = [];
        for (let x = gridSpacing / 2; x < canvasWidth; x += gridSpacing) {
            for (let y = gridSpacing / 2; y < canvasHeight; y += gridSpacing) {
                dots.push({
                    x,
                    y,
                    originalX: x,
                    originalY: y,
                    phase: Math.random() * Math.PI * 2,
                });
            }
        }
        dotsRef.current = dots;
    }, [gridSpacing]);

    const resizeCanvas = useCallback(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const dpr = window.devicePixelRatio || 1;
        dprRef.current = dpr;
        const displayWidth = window.innerWidth;
        const displayHeight = window.innerHeight;
        canvas.width = displayWidth * dpr;
        canvas.height = displayHeight * dpr;
        canvas.style.width = displayWidth + 'px';
        canvas.style.height = displayHeight + 'px';
        const ctx = canvas.getContext('2d');
        if (ctx) ctx.scale(dpr, dpr);
        initializeDots();
    }, [initializeDots]);

    const handleMouseMove = useCallback((e) => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const rect = canvas.getBoundingClientRect();
        mouseRef.current.x = e.clientX - rect.left;
        mouseRef.current.y = e.clientY - rect.top;
    }, []);

    const handleMouseDown = useCallback((e) => {
        mouseRef.current.isDown = true;
        const canvas = canvasRef.current;
        if (!canvas) return;
        const rect = canvas.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        ripples.current.push({ x, y, time: Date.now(), intensity: 2 });
        const now = Date.now();
        ripples.current = ripples.current.filter((r) => now - r.time < 2800);
    }, []);

    const handleMouseUp = useCallback(() => {
        mouseRef.current.isDown = false;
    }, []);

    const animate = useCallback(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        timeRef.current += animationSpeed;
        const currentTime = Date.now();
        const canvasWidth = canvas.clientWidth;
        const canvasHeight = canvas.clientHeight;

        // Clear with full transparency — background comes from CSS
        ctx.clearRect(0, 0, canvasWidth, canvasHeight);

        // Parse dot color once
        const r = parseInt(dotColor.slice(1, 3), 16);
        const g = parseInt(dotColor.slice(3, 5), 16);
        const b = parseInt(dotColor.slice(5, 7), 16);

        dotsRef.current.forEach((dot) => {
            const mouseInfluence = getMouseInfluence(dot.originalX, dot.originalY);
            const rippleInfluence = getRippleInfluence(dot.originalX, dot.originalY, currentTime);
            const totalInfluence = mouseInfluence + rippleInfluence;

            dot.x = dot.originalX;
            dot.y = dot.originalY;

            const baseDotSize = 1.2;
            const dotSize =
                baseDotSize +
                totalInfluence * 5 +
                Math.sin(timeRef.current + dot.phase) * 0.4;

            const opacity = Math.max(
                0.08,
                0.18 +
                totalInfluence * 0.7 +
                Math.abs(Math.sin(timeRef.current * 0.4 + dot.phase)) * 0.06
            );

            ctx.beginPath();
            ctx.arc(dot.x, dot.y, Math.max(0.5, dotSize), 0, Math.PI * 2);
            ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${opacity})`;
            ctx.fill();

            // Glow halo on high influence dots
            if (totalInfluence > 0.3) {
                ctx.beginPath();
                ctx.arc(dot.x, dot.y, dotSize * 2.5, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${totalInfluence * 0.08})`;
                ctx.fill();
            }
        });

        animationFrameId.current = requestAnimationFrame(animate);
    }, [dotColor, animationSpeed]);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        resizeCanvas();
        const handleResize = () => resizeCanvas();
        window.addEventListener('resize', handleResize);
        canvas.addEventListener('mousemove', handleMouseMove);
        canvas.addEventListener('mousedown', handleMouseDown);
        canvas.addEventListener('mouseup', handleMouseUp);
        animate();
        return () => {
            window.removeEventListener('resize', handleResize);
            canvas.removeEventListener('mousemove', handleMouseMove);
            canvas.removeEventListener('mousedown', handleMouseDown);
            canvas.removeEventListener('mouseup', handleMouseUp);
            if (animationFrameId.current) {
                cancelAnimationFrame(animationFrameId.current);
                animationFrameId.current = null;
            }
            timeRef.current = 0;
            ripples.current = [];
            dotsRef.current = [];
        };
    }, [animate, resizeCanvas, handleMouseMove, handleMouseDown, handleMouseUp]);

    return (
        <div className="fixed inset-0 w-full h-full overflow-hidden pointer-events-none" style={{ zIndex: 1 }}>
            <canvas
                ref={canvasRef}
                className="block w-full h-full pointer-events-auto"
                style={{ display: 'block' }}
            />
        </div>
    );
};

export default InteractiveDots;
