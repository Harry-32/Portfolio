import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, Shield, BrainCircuit, FlaskConical, Layers } from 'lucide-react';

const skillCategories = [
  {
    title: "Programming Languages",
    icon: <Terminal size={20} className="text-fuchsia-400" />,
    desc: "Core languages powering data pipelines.",
    skills: ["Python", "SQL", "Java"],
    proficiency: 88,
    delay: 0,
    accentColor: "from-fuchsia-500/20 to-purple-500/10",
    barColor: "from-fuchsia-500 to-purple-500",
  },
  {
    title: "AI / Machine Learning",
    icon: <BrainCircuit size={20} className="text-violet-400" />,
    desc: "Machine Learning and Deep Learning for intelligent systems.",
    skills: ["TensorFlow", "LSTM", "LLMs", "NLP", "Scikit-Learn", "Computer Vision", "PyTorch"],
    proficiency: 85,
    delay: 0.12,
    accentColor: "from-violet-500/20 to-indigo-500/10",
    barColor: "from-violet-500 to-indigo-500",
  },
  {
    title: "Data Science & Analytics",
    icon: <Shield size={20} className="text-sky-400" />,
    desc: "Data analysis, visualization and business intelligence.",
    skills: ["Power BI", "Tableau", "Excel", "Jupyter"],
    proficiency: 80,
    delay: 0.24,
    accentColor: "from-sky-500/20 to-cyan-500/10",
    barColor: "from-sky-500 to-cyan-400",
  },
  {
    title: "Cyber Security & Research",
    icon: <FlaskConical size={20} className="text-emerald-400" />,
    desc: "Post-quantum cryptography, synthetic data and HPC research.",
    skills: ["QGAN", "Post-Quantum Crypto", "High Performance Computing", "Purple Teaming"],
    proficiency: 72,
    delay: 0.36,
    accentColor: "from-emerald-500/20 to-teal-500/10",
    barColor: "from-emerald-500 to-teal-400",
  },
  {
    title: "Tools",
    icon: <Layers size={20} className="text-orange-400" />,
    desc: "Development ecosystem for building, versioning and deploying projects.",
    skills: ["Git / GitHub", "Docker", "Linux", "MS Office 365"],
    proficiency: 82,
    delay: 0.48,
    accentColor: "from-orange-500/20 to-amber-500/10",
    barColor: "from-orange-500 to-amber-400",
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-16 md:py-24 px-4 sm:px-6 md:px-16 bg-transparent relative" style={{ scrollMarginTop: '72px' }}>
      {/* Vertical spine line */}
      <div className="absolute left-4 md:left-6 top-0 bottom-0 w-[2px] bg-gradient-to-b from-purple-500/60 via-fuchsia-500/30 to-transparent" />

      <div className="max-w-6xl mx-auto relative z-10">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4 mb-16"
        >
          <div className="h-[1px] flex-grow bg-gradient-to-r from-transparent via-purple-500/50 to-purple-500/50" />
          <h2 className="text-3xl md:text-5xl font-black text-white whitespace-nowrap tracking-tighter uppercase shrink-0">
            SKILLS
          </h2>
          <div className="h-[1px] flex-grow bg-gradient-to-l from-transparent via-purple-500/50 to-purple-500/50" />
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 ml-0 sm:ml-4 md:ml-10">
          {skillCategories.map((cat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: cat.delay, duration: 0.55 }}
              viewport={{ once: true }}
              className={`glass-card p-6 group relative overflow-hidden border border-white/10 hover:border-purple-500/40 transition-all duration-400 bg-gradient-to-br ${cat.accentColor}`}
            >
              {/* Top glow line on hover */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-fuchsia-500/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Icon + Title */}
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 rounded-lg bg-black/30 border border-white/10 group-hover:border-fuchsia-400/40 transition-colors duration-300 shrink-0">
                  {cat.icon}
                </div>
                <h3 className="text-sm font-bold text-white group-hover:text-fuchsia-200 transition-colors duration-300 leading-tight">
                  {cat.title}
                </h3>
              </div>

              {/* Description */}
              <p className="text-slate-400 text-[11px] leading-relaxed mb-4 group-hover:text-slate-300 transition-colors duration-300">
                {cat.desc}
              </p>

              {/* Badge pills */}
              <div className="flex flex-wrap gap-1.5 mb-5">
                {cat.skills.map((skill, sIdx) => (
                  <motion.span
                    key={sIdx}
                    initial={{ opacity: 0, scale: 0.85 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: cat.delay + sIdx * 0.04 }}
                    viewport={{ once: true }}
                    className="px-2.5 py-0.5 text-[10px] font-semibold text-purple-200/80 border border-purple-500/25 rounded-full bg-purple-500/10 hover:bg-purple-500/20 hover:text-white transition-colors duration-200"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>

              {/* Proficiency bar */}
              <div className="mt-auto">
                <div className="flex justify-between items-center mb-1.5">
                  <span className="text-[9px] font-mono text-slate-500 uppercase tracking-widest">Proficiency</span>
                  <span className="text-[9px] font-mono text-slate-400">{cat.proficiency}%</span>
                </div>
                <div className="h-[3px] w-full bg-white/5 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${cat.proficiency}%` }}
                    transition={{ delay: cat.delay + 0.3, duration: 0.9, ease: 'easeOut' }}
                    viewport={{ once: true }}
                    className={`h-full rounded-full bg-gradient-to-r ${cat.barColor}`}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;