import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github } from 'lucide-react';

const email = "hariharan@gmail.com";

const socialLinks = [
  {
    name: "EMAIL",
    icon: <Mail size={26} />,
    href: `mailto:${email}`,
    label: "hariharan@gmail.com",
    desc: "Drop me a message",
    color: "from-purple-600/20 to-fuchsia-600/20 border-purple-500/30 hover:border-fuchsia-400/60",
    iconBg: "bg-purple-900/40 border-purple-500/30 group-hover:border-fuchsia-400/60 group-hover:shadow-[0_0_20px_rgba(168,85,247,0.3)]",
    iconColor: "text-purple-300 group-hover:text-fuchsia-300",
  },
  {
    name: "LINKEDIN",
    icon: <Linkedin size={26} />,
    href: "https://www.linkedin.com/in/hariharan~r/", // Replace with your active LinkedIn profile URL
    label: "hari-haran32",
    desc: "Let's connect professionally",
    color: "from-blue-600/20 to-purple-600/20 border-blue-500/30 hover:border-purple-400/60",
    iconBg: "bg-blue-900/30 border-blue-500/30 group-hover:border-purple-400/60 group-hover:shadow-[0_0_20px_rgba(99,102,241,0.3)]",
    iconColor: "text-blue-300 group-hover:text-purple-300",
  },
  {
    name: "GITHUB",
    icon: <Github size={26} />,
    href: "https://github.com/Harry-32",
    label: "Harry-32",
    desc: "Explore my repositories",
    color: "from-slate-600/20 to-purple-600/20 border-slate-500/30 hover:border-fuchsia-400/60",
    iconBg: "bg-slate-900/40 border-slate-500/30 group-hover:border-fuchsia-400/60 group-hover:shadow-[0_0_20px_rgba(168,85,247,0.3)]",
    iconColor: "text-slate-300 group-hover:text-fuchsia-300",
  },
];

const Contact = () => {
  return (
    <section 
      id="contact" 
      className="py-16 md:py-24 px-4 sm:px-6 md:px-16 bg-transparent relative overflow-hidden" 
      style={{ scrollMarginTop: '72px' }}
    >
      {/* Background orb */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(168,85,247,0.06) 0%, transparent 70%)',
          filter: 'blur(40px)',
        }}
      />

      <div className="max-w-5xl mx-auto relative z-10 text-center">
        {/* Header Line Effect */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-center gap-6 mb-12"
        >
          <div className="h-[1px] flex-grow bg-gradient-to-r from-transparent via-purple-500/50 to-purple-500/50" />
          <h2 className="text-3xl md:text-5xl font-black text-white whitespace-nowrap tracking-tighter uppercase shrink-0">
            CONTACT
          </h2>
          <div className="h-[1px] flex-grow bg-gradient-to-l from-transparent via-purple-500/50 to-purple-500/50" />
        </motion.div>

        {/* Availability badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex justify-center mb-8"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-900/20 border border-green-500/30 text-green-400 text-xs font-mono tracking-widest uppercase">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse shadow-[0_0_8px_#4ade80]" />
            Open to Opportunities
          </span>
        </motion.div>

        {/* Description */}
        <p className="text-slate-300 text-lg md:text-xl leading-relaxed mb-14 max-w-3xl mx-auto">
          I am currently seeking Full-time opportunities in{' '}
          <span className="text-fuchsia-400 font-bold">Data Science</span> and{' '}
          <span className="text-purple-400 font-bold">Cybersecurity</span>.{' '}
          My systems are open for technical discussions or career inquiries.
        </p>

        {/* Social Cards (3-column layout) */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 justify-items-center max-w-5xl mx-auto w-full text-center">
          {socialLinks.map((link, idx) => (
            <motion.a
              key={idx}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className={`group flex flex-col items-center gap-5 p-8 rounded-2xl bg-gradient-to-br ${link.color} backdrop-blur-sm border transition-all duration-400 relative overflow-hidden w-full`}
            >
              {/* Top glow line */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-fuchsia-500/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Icon */}
              <div className={`p-4 rounded-xl border ${link.iconBg} ${link.iconColor} transition-all duration-400`}>
                {link.icon}
              </div>

              {/* Text */}
              <div className="flex flex-col gap-1 items-center">
                <span className="font-mono text-xs tracking-[0.3em] text-purple-300 font-bold uppercase">
                  {link.name}
                </span>
                <span className="text-white/80 text-sm font-medium group-hover:text-white transition-colors break-all px-2">
                  {link.label}
                </span>
                <span className="text-slate-500 text-[11px] font-mono group-hover:text-slate-400 transition-colors">
                  {link.desc}
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;