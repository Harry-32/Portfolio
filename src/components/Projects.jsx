import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, ShieldAlert, Cpu, Map, Search } from 'lucide-react';

const deployments = [
  {
    id: "01",
    title: "Hybrid Classical-Quantum Machine Learning Framework for Network Anomaly Detection",
    type: "Cybersecurity Defense",
    desc: "Real-time network traffic analysis using hybrid machine learning to detect and flag unknown attack patterns before they propagate.",
    icon: <ShieldAlert size={22} className="text-fuchsia-400" />,
    status: "System Active",
    statusColor: "text-green-400 border-green-500/40 bg-green-900/20",
    statusDot: "bg-green-400 shadow-[0_0_8px_#4ade80]",
    tags: ["Auto-Encoder", "LSTM", "Variational Quantum Circuits", "QSVM"],
  },
  {
    id: "02",
    title: "QGAN Synthetic Meta Data Generation",
    type: "Cybersecurity Defense",
    desc: "Quantum Generative Adversarial Network for producing high-fidelity synthetic datasets to augment cybersecurity training pipelines.",
    icon: <Cpu size={22} className="text-fuchsia-400" />,
    status: "Optimized",
    statusColor: "text-purple-300 border-purple-500/40 bg-purple-900/20",
    statusDot: "bg-purple-400 shadow-[0_0_8px_rgba(168,85,247,0.8)]",
    tags: ["QGAN", "Quantum ML", "GAN", "Synthetic Data", "PyTorch", "TensorFlow"],
  },
  {
    id: "03",
    title: "TrekBuddy: AI Vacation Planning",
    type: "Recommendation System",
    desc: "AI-powered travel assistant that generates personalized itineraries using NLP and collaborative filtering on user preferences.",
    icon: <Map size={22} className="text-fuchsia-400" />,
    status: "Developed for Startup (Mini-Project)",
    statusColor: "text-sky-300 border-sky-500/40 bg-sky-900/20",
    statusDot: "bg-sky-400 shadow-[0_0_8px_rgba(56,189,248,0.8)]",
    tags: ["NLP", "React", "Python", "Recommendation AI Engine"],
  },
  {
    id: "04",
    title: "GENFACE: Forensic Framework for Suspect Face Generation and Criminal Identification",
    type: "Forensic Intelligence",
    desc: "Building an AI-driven forensic system that generates suspect faces from witness descriptions and matches them against criminal databases to speed up investigations.",
    icon: <Search size={22} className="text-fuchsia-400" />,
    status: "Core Project (Ongoing)",
    statusColor: "text-fuchsia-300 border-fuchsia-500/40 bg-fuchsia-900/20",
    statusDot: "bg-fuchsia-400 shadow-[0_0_8px_rgba(232,121,249,0.8)]",
    tags: ["Diffusion Models", "Siamese CNN"],
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-16 md:py-24 px-4 sm:px-6 md:px-16 bg-transparent relative" style={{ scrollMarginTop: '72px' }}>


      <div className="max-w-7xl mx-auto relative z-10">

        {/* 2. THE HEADER LINE EFFECT (Symmetrical) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4 mb-20"
        >
          <div className="h-[1px] flex-grow bg-gradient-to-r from-transparent via-purple-500/50 to-purple-500/50" />
          <h2 className="text-3xl md:text-5xl font-black text-white whitespace-nowrap tracking-tighter uppercase shrink-0">
            PROJECTS
          </h2>
          <div className="h-[1px] flex-grow bg-gradient-to-l from-transparent via-purple-500/50 to-purple-500/50" />
        </motion.div>

        {/* 3. PROJECTS GRID (Indented to clear the spine) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8 ml-0 sm:ml-4 md:ml-10">
          {deployments.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="glass-card group relative p-7 overflow-hidden border border-white/10 hover:border-purple-500/50 transition-all duration-400"
            >
              {/* Decorative ID */}
              <span className="absolute top-4 right-6 text-6xl font-black text-white/[0.04] group-hover:text-purple-400/10 transition-colors duration-500 select-none">
                {project.id}
              </span>

              {/* Hover Glow Accent */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-fuchsia-500/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="flex items-start gap-5 mb-6">
                <div className="p-3 rounded-xl bg-purple-900/30 border border-purple-500/30 group-hover:border-fuchsia-400/60 transition-all duration-400 shrink-0">
                  {project.icon}
                </div>

                <div className="flex-grow min-w-0">
                  <span className="text-[10px] font-mono text-purple-400 uppercase tracking-[0.2em] mb-1 block">
                    {project.type}
                  </span>
                  <h3 className="text-xl font-bold text-white group-hover:text-fuchsia-300 transition-colors duration-300 leading-snug">
                    {project.title}
                  </h3>
                </div>
              </div>

              <p className="text-slate-400 text-sm leading-relaxed mb-6 group-hover:text-slate-300 transition-colors duration-300">
                {project.desc}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag, tIdx) => (
                  <span key={tIdx} className="px-3 py-1 text-[10px] font-bold text-fuchsia-300/80 uppercase border border-fuchsia-500/20 rounded bg-fuchsia-500/5">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-3">
                <div className={`w-2 h-2 rounded-full animate-pulse ${project.statusDot}`} />
                <span className={`text-[10px] font-mono uppercase tracking-widest px-3 py-1 rounded-full border ${project.statusColor}`}>
                  {project.status}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;