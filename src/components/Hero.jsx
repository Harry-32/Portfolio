import React from 'react';
import { motion } from 'framer-motion';

const badges = [
  { label: 'Data Science', color: 'from-indigo-600/20 to-violet-600/20 border-indigo-500/40 text-indigo-300' },
  { label: 'AI / ML', color: 'from-violet-600/20 to-purple-600/20 border-violet-500/40 text-violet-300' },
  { label: 'Cybersecurity', color: 'from-fuchsia-600/20 to-pink-600/20 border-fuchsia-500/40 text-fuchsia-300' },
];

const Hero = () => {
  return (
    <section
      id="home"
      className="
        relative min-h-screen
        flex items-center justify-center
        px-6 md:px-12 lg:px-20
        overflow-hidden
        bg-transparent
      "
    >
      {/* TOP NAV */}
      <nav className="absolute top-0 left-0 w-full flex justify-between items-center px-8 md:px-16 py-8 z-30">
        {/* Logo mark */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="font-mono text-xs tracking-[0.3em] text-purple-400/70 uppercase hidden md:block"
        >
          PORTFOLIO
        </motion.div>

        <div className="flex gap-6 md:gap-10 ml-auto">
          {['Skills', 'Projects', 'Experience', 'Contact'].map((item, i) => (
            <motion.a
              key={item}
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 + i * 0.1 }}
              href={`#${item.toLowerCase()}`}
              className="
                relative group text-[0.7rem] font-semibold text-white/80 
                hover:text-fuchsia-400 transition-all duration-500 tracking-[0.3em] uppercase
                before:absolute before:bottom-[-8px] before:left-1/2 before:-translate-x-1/2 
                before:w-0 before:h-[2px] before:bg-gradient-to-r before:from-fuchsia-400/50 before:to-fuchsia-400/80
                before:rounded-full before:opacity-0 before:transition-all before:duration-500
                hover:before:w-6 hover:before:opacity-100 hover:before:translate-y-1
              "
            >
              {item}
            </motion.a>
          ))}
        </div>
      </nav>

      {/* MAIN CONTENT */}
      <div className="relative z-40 max-w-6xl w-full mx-auto flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-16 pt-20 lg:pt-0">

        {/* LEFT: IMAGE WITH DUAL HALO */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="isolate flex shrink-0 justify-center lg:justify-start relative"
        >
          {/* Outer halo ring */}
          <div
            className="
              pointer-events-none
              absolute -inset-8
              rounded-full
              border border-fuchsia-400/25
              opacity-60
              animate-slow-spin
            "
          />
          {/* Inner halo ring */}
          <div
            className="
              pointer-events-none
              absolute -inset-4
              rounded-full
              border border-purple-500/40
              opacity-80
              animate-slow-spin-reverse
            "
            style={{ borderStyle: 'dashed' }}
          />
          {/* Glow behind image */}
          <div
            className="absolute inset-0 rounded-full pointer-events-none"
            style={{
              background: 'radial-gradient(circle, rgba(168,85,247,0.35) 0%, transparent 70%)',
              filter: 'blur(20px)',
            }}
          />
          {/* Profile image */}
          <div className="relative w-60 h-60 lg:w-72 lg:h-72 xl:w-80 xl:h-80 rounded-full overflow-hidden border-4 border-purple-500/60 shadow-[0_0_40px_rgba(168,85,247,0.4),0_0_80px_rgba(168,85,247,0.15)] animate-pulse-glow">
            <img
              src="/HARIHARAN image.jpg"
              alt="HARI HARAN R"
              className="w-full h-full object-cover object-[center_20%] rounded-full"
            />
          </div>
        </motion.div>

        {/* RIGHT: TEXT */}
        <motion.div
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="isolate flex flex-col items-center lg:items-start text-center lg:text-left max-w-lg lg:max-w-xl"
        >
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="font-mono text-sm lg:text-base text-purple-400/80 mb-3 tracking-[0.4em] uppercase"
          >
            &lt; Hello, I'm &gt;
          </motion.p>

          {/* Animated gradient name */}
          <motion.h1
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.0, delay: 0.4 }}
            className="text-5xl md:text-6xl lg:text-[4rem] xl:text-[4.5rem] font-black tracking-tight uppercase leading-tight mb-4"
          >
            <span className="text-white drop-shadow-2xl">HARI </span>
            <span className="text-gradient-purple drop-shadow-2xl">HARAN R</span>
          </motion.h1>

          {/* Specialty badges */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.65 }}
            className="flex flex-wrap gap-2 justify-center lg:justify-start mb-5"
          >
            {badges.map((b, i) => (
              <span
                key={i}
                className={`inline-flex items-center px-3 py-1 rounded-full text-[0.68rem] font-semibold tracking-wider border bg-gradient-to-r ${b.color} backdrop-blur-sm transition-all duration-300 hover:scale-105`}
              >
                {b.label}
              </span>
            ))}
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-lg md:text-xl lg:text-2xl text-white font-semibold mb-3 leading-relaxed drop-shadow-md"
          >
          Bridging the Gap Between Advanced Data Science and Next-Gen Cyber-Resilience.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            className="text-base md:text-lg text-white/80 leading-relaxed drop-shadow-md"
          >
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.15 }}
            className="mt-8 flex flex-wrap gap-4 justify-center lg:justify-start"
          >
            <a
              href="/HARIHARAN_R_RESUME.pdf"
              download
              className="
                shimmer-btn group relative inline-flex items-center justify-center gap-2
                px-10 lg:px-12 py-4 rounded-xl overflow-hidden
                bg-gradient-to-r from-fuchsia-600/90 to-purple-600/90
                text-white text-sm font-black tracking-[0.3em] uppercase
                shadow-[0_15px_40px_rgba(168,85,247,0.4)] border border-fuchsia-400/50
                hover:shadow-[0_25px_60px_rgba(168,85,247,0.7)]
                hover:scale-[1.05] hover:-translate-y-1 transition-all duration-400
              "
            >
              <span></span> Download Resume
            </a>
            <a
              href="#contact"
              className="
                group relative inline-flex items-center justify-center gap-2
                px-8 py-4 rounded-xl
                bg-transparent text-purple-300 text-sm font-bold tracking-[0.25em] uppercase
                border border-purple-500/40
                hover:border-fuchsia-400/70 hover:text-fuchsia-300
                hover:bg-purple-900/20 hover:shadow-[0_0_20px_rgba(168,85,247,0.2)]
                transition-all duration-400
              "
            >
              Contact Me →
            </a>
          </motion.div>

          {/* System status */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.3 }}
            className="mt-6 flex items-center justify-center lg:justify-start gap-2 opacity-80"
          >
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse shadow-[0_0_8px_#4ade80]" />
            <span className="font-mono text-xs tracking-widest text-green-400 uppercase">
              Status: Online
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
