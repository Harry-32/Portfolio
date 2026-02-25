import React from 'react';
import { motion } from 'framer-motion';
import { Award, Briefcase, Shield, Zap, Calendar, MapPin } from 'lucide-react';

const experiences = [
  {
    date: "JUNE 2025 — MAY 2026",
    location: "Chennai, India",
    title: "INTERN: C-DAC, CHENNAI",
    desc: "Researching Quantum-Safe security frameworks and Cloud protection solutions within HPC environments.",
    icon: <Briefcase size={14} />,
    badge: "Research and Development",
    badgeColor: "text-purple-300 border-purple-500/40 bg-purple-900/20",
    icon2: <Shield size={14} />,
    badge2: "Cybersecurity",
    badgeColor2: "text-purple-300 border-purple-500/40 bg-purple-900/20",
    tags: ["Quantum Computing", "HPC", "Cloud Security", "Purple Team"],
    accentColor: "rgba(168,85,247,0.12)",
    dotColor: "bg-purple-500",
    dotGlow: "shadow-[0_0_15px_rgba(168,85,247,0.8)]",
  },
  {
    date: "2024 — 2025",
    location: "Tamil Nadu, India",
    title: "HACKATHON AWARDEE",
    desc: "• Won 2nd prize at Stella Maris College (HackAiThon)",
    desc2: "• 3rd prize at Meenakshi Sundararajan Engineering College (PowerBI dashboard analytics)",
    desc3: "• Participated in the offline round of HackFinity 2025 (National Level 24-Hour Hackathon) at SIMATS Engineering.",
    icon: <Award size={14} />,
    badge: "Award",
    badgeColor: "text-fuchsia-300 border-fuchsia-500/40 bg-fuchsia-900/20",
    icon2: <Zap size={14} />,
    badge2: "Participation",
    badgeColor2: "text-fuchsia-300 border-fuchsia-500/40 bg-fuchsia-900/20",
    tags: ["AI/ML", "Innovation", "Problem Solving"],
    accentColor: "rgba(232,121,249,0.10)",
    dotColor: "bg-fuchsia-500",
    dotGlow: "shadow-[0_0_15px_rgba(232,121,249,0.8)]",
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-16 md:py-24 px-4 sm:px-6 md:px-16 bg-transparent relative overflow-hidden" style={{ scrollMarginTop: '72px' }}>

      {/* Section-level ambient glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 70% 50% at 50% 50%, rgba(168,85,247,0.04) 0%, transparent 70%)',
        }}
      />

      <div className="max-w-5xl mx-auto relative z-10">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4 mb-20"
        >
          <div className="h-[1px] flex-grow bg-gradient-to-r from-transparent via-purple-500/50 to-purple-500/50" />
          <h2 className="text-3xl md:text-5xl font-black text-white whitespace-nowrap tracking-tighter uppercase shrink-0 animate-text-glow">
            EXPERIENCE
          </h2>
          <div className="h-[1px] flex-grow bg-gradient-to-l from-transparent via-purple-500/50 to-purple-500/50" />
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Animated flowing timeline line */}
          <div className="absolute left-4 md:left-6 top-0 bottom-0 w-[2px] timeline-line rounded-full" />

          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2, duration: 0.65, ease: 'easeOut' }}
              className="mb-14 ml-10 sm:ml-14 md:ml-20 relative"
            >
              {/* Timeline node */}
              <div
                className={`absolute -left-[46px] md:-left-[58px] top-6 w-5 h-5 ${exp.dotColor} rounded-full border-4 border-[#0a0015] animate-node-pulse z-10`}
              >
                <div className="w-full h-full rounded-full animate-ping bg-fuchsia-400 opacity-20" />
              </div>

              {/* Connector line to card */}
              <div className="absolute -left-[28px] md:-left-[40px] top-[26px] w-6 md:w-8 h-[1px] bg-gradient-to-r from-purple-500/50 to-transparent" />

              {/* Card */}
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
                className="relative p-6 md:p-8 rounded-2xl border border-white/10 backdrop-blur-sm group hover:border-purple-500/50 transition-all duration-400 overflow-hidden"
                style={{
                  background: `linear-gradient(135deg, rgba(17,34,64,0.6) 0%, rgba(10,0,21,0.7) 100%)`,
                  boxShadow: '0 4px 24px rgba(0,0,0,0.3)',
                }}
              >
                {/* Card inner top glow on hover */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-fuchsia-500/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Subtle corner accent */}
                <div
                  className="absolute top-0 right-0 w-24 h-24 pointer-events-none opacity-30 group-hover:opacity-60 transition-opacity duration-500"
                  style={{
                    background: `radial-gradient(circle at top right, ${exp.accentColor}, transparent 70%)`,
                  }}
                />

                {/* Date + Location row */}
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <span className="inline-flex items-center gap-1.5 font-mono text-purple-400 text-xs tracking-widest">
                    <Calendar size={11} className="opacity-70" />
                    {exp.date}
                  </span>
                  <span className="inline-flex items-center gap-1 font-mono text-slate-500 text-[10px] tracking-wide">
                    <MapPin size={10} className="opacity-60" />
                    {exp.location}
                  </span>
                </div>

                {/* Badge Row */}
                <div className="flex flex-wrap items-center gap-2 mb-4">
                  {exp.badge && (
                    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[0.65rem] font-bold border ${exp.badgeColor}`}>
                      {exp.icon} {exp.badge}
                    </span>
                  )}
                  {exp.badge2 && (
                    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[0.65rem] font-bold border ${exp.badgeColor2}`}>
                      {exp.icon2} {exp.badge2}
                    </span>
                  )}
                </div>

                <h3 className="text-xl md:text-2xl font-bold text-white mb-4 tracking-tight group-hover:text-fuchsia-300 transition-colors duration-300">
                  {exp.title}
                </h3>

                {/* Multi-line Descriptions */}
                <div className="space-y-2 mb-6">
                  {exp.desc && <p className="text-slate-300/90 text-sm md:text-base leading-relaxed">{exp.desc}</p>}
                  {exp.desc2 && <p className="text-slate-300/90 text-sm md:text-base leading-relaxed">{exp.desc2}</p>}
                  {exp.desc3 && <p className="text-slate-400/80 text-sm md:text-base leading-relaxed italic">{exp.desc3}</p>}
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {exp.tags.map((tag, tIdx) => (
                    <motion.span
                      key={tIdx}
                      initial={{ opacity: 0, scale: 0.85 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: idx * 0.2 + tIdx * 0.05 }}
                      viewport={{ once: true }}
                      className="px-3 py-1 text-[0.7rem] font-bold text-white/60 uppercase tracking-tighter border border-white/10 rounded-md bg-white/5 hover:bg-purple-500/10 hover:border-purple-500/30 hover:text-purple-300 transition-all duration-200"
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;