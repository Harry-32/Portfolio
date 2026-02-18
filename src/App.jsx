import React, { useEffect, useState } from 'react'
import Hero from './components/Hero.jsx'
import Skills from './components/Skills.jsx'
import Projects from './components/Projects.jsx'
import Experience from './components/Experience.jsx'
import Contact from './components/Contact.jsx'
import InteractiveDots from './components/InteractiveDots.jsx'
import SmoothCursor from './components/SmoothCursor.jsx'

function App() {
  const [systemStatus, setSystemStatus] = useState('ONLINE')

  // CYBERSECURITY SYSTEM STATUS ANIMATION
  useEffect(() => {
    const statuses = ['ONLINE']
    let index = 0
    const interval = setInterval(() => {
      setSystemStatus(statuses[index])
      index = (index + 1) % statuses.length
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div
      className="min-h-screen relative overflow-hidden selection:bg-[#a855f7]/40 selection:text-white"
      style={{ cursor: 'none' }}
    >
      {/* ── SMOOTH CURSOR ── */}
      <SmoothCursor />

      {/* ── LAYER 0: Deep space base gradient ── */}
      <div
        className="fixed inset-0 pointer-events-none"
        style={{
          zIndex: 0,
          background: `
            radial-gradient(ellipse 80% 60% at 20% 10%, rgba(88,28,135,0.55) 0%, transparent 60%),
            radial-gradient(ellipse 60% 50% at 80% 90%, rgba(67,20,105,0.45) 0%, transparent 55%),
            radial-gradient(ellipse 50% 40% at 50% 50%, rgba(30,10,60,0.3) 0%, transparent 70%),
            linear-gradient(160deg, #0d0018 0%, #130025 30%, #0a0015 60%, #050010 100%)
          `,
        }}
      />

      {/* ── LAYER 1: Interactive Dot Grid ── */}
      <InteractiveDots dotColor="#a855f7" gridSpacing={28} animationSpeed={0.004} />

      {/* ── LAYER 2: Animated glowing orbs ── */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 2 }}>
        {/* Orb 1 — top left, large purple */}
        <div
          className="animate-orb-1 absolute -top-40 -left-40 w-[650px] h-[650px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(168,85,247,0.18) 0%, rgba(139,92,246,0.08) 45%, transparent 70%)',
            filter: 'blur(50px)',
          }}
        />
        {/* Orb 2 — bottom right, deep violet */}
        <div
          className="animate-orb-2 absolute -bottom-48 -right-48 w-[700px] h-[700px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(107,33,168,0.22) 0%, rgba(168,85,247,0.1) 45%, transparent 70%)',
            filter: 'blur(60px)',
          }}
        />
        {/* Orb 3 — center fuchsia whisper */}
        <div
          className="animate-orb-3 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(232,121,249,0.07) 0%, rgba(168,85,247,0.04) 50%, transparent 75%)',
            filter: 'blur(70px)',
          }}
        />
        {/* Orb 4 — mid-left accent */}
        <div
          className="absolute top-[40%] -left-24 w-[350px] h-[350px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(99,102,241,0.12) 0%, transparent 65%)',
            filter: 'blur(45px)',
            animation: 'orb1 18s ease-in-out infinite alternate',
          }}
        />
      </div>

      {/* ── LAYER 3: Subtle cyber grid ── */}
      <div
        className="fixed inset-0 pointer-events-none"
        style={{
          zIndex: 3,
          opacity: 0.07,
          backgroundImage: `
            linear-gradient(to right, #a855f718 1px, transparent 1px),
            linear-gradient(to bottom, #64ffda12 1px, transparent 1px)
          `,
          backgroundSize: '52px 52px',
        }}
      />

      {/* ── LAYER 4: Vignette overlay ── */}
      <div
        className="fixed inset-0 pointer-events-none"
        style={{
          zIndex: 4,
          background: `
            radial-gradient(ellipse 100% 100% at 50% 50%, transparent 40%, rgba(5,0,16,0.6) 100%)
          `,
        }}
      />

      {/* ── LAYER 5: Mouse-following radial glow ── */}
      <MouseGlow />

      {/* ── CONTENT ── */}
      <div className="relative" style={{ zIndex: 30 }}>
        <Hero />
        <Skills />
        <Projects />
        <Experience />
        <Contact />

        {/* PROFESSIONAL CYBER FOOTER */}
        <footer className="py-10 text-center border-t border-purple-900/30 bg-black/30 backdrop-blur-sm relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 px-6 max-w-6xl mx-auto">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse shadow-[0_0_8px_#4ade80]" />
              <p className="font-mono text-sm tracking-[0.25em] uppercase text-white/70">
                {systemStatus} | READY TO CONNECT & WORK
              </p>
            </div>
            <p className="font-mono text-xs text-white/40 tracking-wider">
              © 2026 BATCH | SAEC
            </p>
            <div className="flex items-center gap-2">
              <span className="badge-purple">I'm Waiting</span>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}

// Separate component so it can use its own event listener cleanly
function MouseGlow() {
  const glowRef = React.useRef(null)

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (glowRef.current) {
        requestAnimationFrame(() => {
          glowRef.current.style.backgroundImage = `
            radial-gradient(600px at ${e.clientX}px ${e.clientY}px,
              rgba(168, 85, 247, 0.09) 0%,
              rgba(100, 255, 218, 0.04) 40%,
              transparent 70%)
          `
        })
      }
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <div
      ref={glowRef}
      className="fixed inset-0 pointer-events-none transition-all duration-150"
      style={{ zIndex: 5 }}
    />
  )
}

export default App
