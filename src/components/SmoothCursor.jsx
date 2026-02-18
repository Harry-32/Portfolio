import { useState, useEffect, useRef } from 'react';

const SmoothCursor = () => {
    const mousePosition = useRef({ x: 0, y: 0 });
    const dotPosition = useRef({ x: 0, y: 0 });
    const borderDotPosition = useRef({ x: 0, y: 0 });
    const [renderPos, setRenderPos] = useState({
        dot: { x: 0, y: 0 },
        border: { x: 0, y: 0 },
    });
    const [isHovering, setIsHovering] = useState(false);
    const [isClicking, setIsClicking] = useState(false);

    const DOT_SMOOTHNESS = 0.22;
    const BORDER_DOT_SMOOTHNESS = 0.1;

    useEffect(() => {
        const handleMouseMove = (e) => {
            mousePosition.current = { x: e.clientX, y: e.clientY };
        };
        const handleMouseDown = () => setIsClicking(true);
        const handleMouseUp = () => setIsClicking(false);

        const handleMouseEnter = () => setIsHovering(true);
        const handleMouseLeave = () => setIsHovering(false);

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mousedown', handleMouseDown);
        window.addEventListener('mouseup', handleMouseUp);

        const updateInteractiveElements = () => {
            const interactiveElements = document.querySelectorAll('a, button, img, input, textarea, select, [data-cursor-hover]');
            interactiveElements.forEach((el) => {
                el.addEventListener('mouseenter', handleMouseEnter);
                el.addEventListener('mouseleave', handleMouseLeave);
            });
            return interactiveElements;
        };

        const elements = updateInteractiveElements();

        const lerp = (start, end, factor) => start + (end - start) * factor;

        const animate = () => {
            dotPosition.current.x = lerp(dotPosition.current.x, mousePosition.current.x, DOT_SMOOTHNESS);
            dotPosition.current.y = lerp(dotPosition.current.y, mousePosition.current.y, DOT_SMOOTHNESS);
            borderDotPosition.current.x = lerp(borderDotPosition.current.x, mousePosition.current.x, BORDER_DOT_SMOOTHNESS);
            borderDotPosition.current.y = lerp(borderDotPosition.current.y, mousePosition.current.y, BORDER_DOT_SMOOTHNESS);

            setRenderPos({
                dot: { x: dotPosition.current.x, y: dotPosition.current.y },
                border: { x: borderDotPosition.current.x, y: borderDotPosition.current.y },
            });

            animId = requestAnimationFrame(animate);
        };

        let animId = requestAnimationFrame(animate);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mousedown', handleMouseDown);
            window.removeEventListener('mouseup', handleMouseUp);
            elements.forEach((el) => {
                el.removeEventListener('mouseenter', handleMouseEnter);
                el.removeEventListener('mouseleave', handleMouseLeave);
            });
            cancelAnimationFrame(animId);
        };
    }, []);

    return (
        <div className="pointer-events-none fixed inset-0 z-[9999] hidden md:block">
            {/* Inner dot */}
            <div
                style={{
                    position: 'absolute',
                    width: isClicking ? '5px' : '7px',
                    height: isClicking ? '5px' : '7px',
                    borderRadius: '50%',
                    background: 'radial-gradient(circle, #f0abfc, #a855f7)',
                    boxShadow: '0 0 8px rgba(168,85,247,0.9)',
                    transform: 'translate(-50%, -50%)',
                    left: `${renderPos.dot.x}px`,
                    top: `${renderPos.dot.y}px`,
                    transition: 'width 0.15s, height 0.15s',
                }}
            />

            {/* Outer ring */}
            <div
                style={{
                    position: 'absolute',
                    width: isHovering ? '46px' : isClicking ? '22px' : '30px',
                    height: isHovering ? '46px' : isClicking ? '22px' : '30px',
                    borderRadius: '50%',
                    border: '1.5px solid rgba(168,85,247,0.7)',
                    boxShadow: isHovering
                        ? '0 0 16px rgba(168,85,247,0.4), inset 0 0 8px rgba(168,85,247,0.1)'
                        : '0 0 8px rgba(168,85,247,0.25)',
                    transform: 'translate(-50%, -50%)',
                    left: `${renderPos.border.x}px`,
                    top: `${renderPos.border.y}px`,
                    transition: 'width 0.3s cubic-bezier(0.25,0.46,0.45,0.94), height 0.3s cubic-bezier(0.25,0.46,0.45,0.94), box-shadow 0.3s',
                    backdropFilter: isHovering ? 'blur(1px)' : 'none',
                }}
            />
        </div>
    );
};

export default SmoothCursor;
