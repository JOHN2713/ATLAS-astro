import { motion } from 'framer-motion';

export default function AreasOfFocus() {
  const areas = [
    {
      title: 'Private Wealth Structuring',
      description: 'Designing capital architecture that aligns with long-term objectives and values.',
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
          <rect x="3" y="3" width="7" height="18" />
          <rect x="14" y="8" width="7" height="13" />
        </svg>
      ),
    },
    {
      title: 'Family Governance',
      description: 'Establishing frameworks for decision-making across generations.',
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
          <circle cx="9" cy="7" r="3" />
          <circle cx="15" cy="7" r="3" />
          <path d="M3 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2" />
          <path d="M13 21v-2a4 4 0 0 1 4-4h0a4 4 0 0 1 4 4v2" />
        </svg>
      ),
    },
    {
      title: 'Capital Architecture',
      description: 'Building structures that preserve and protect wealth through market cycles.',
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
          <rect x="4" y="4" width="16" height="16" rx="2" />
          <line x1="8" y1="8" x2="8" y2="12" />
          <line x1="8" y1="14" x2="8" y2="16" />
          <line x1="12" y1="8" x2="12" y2="16" />
          <line x1="16" y1="8" x2="16" y2="12" />
        </svg>
      ),
    },
    {
      title: 'Intergenerational Planning',
      description: 'Preparing the next generation for the responsibilities of stewardship.',
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
          <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
        </svg>
      ),
    },
    {
      title: 'Strategic Advisory',
      description: 'Providing counsel on complex decisions that shape long-term outcomes.',
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
          <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" />
          <line x1="7" y1="7" x2="7.01" y2="7" />
        </svg>
      ),
    },
  ];

  return (
    <section className="py-24 bg-atlas-primary relative">
      {/* Grid pattern background */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `
            linear-gradient(to right, #0a1624 1px, transparent 1px),
            linear-gradient(to bottom, #0a1624 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }}
      />
      
      <div className="container mx-auto max-w-6xl px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          {/* Title */}
          <div className="flex items-center justify-center gap-3 mb-16">
            <svg className="w-5 h-5 text-atlas-dark/60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <circle cx="12" cy="12" r="10" />
              <path d="M12 6v6l4 2" />
            </svg>
            <h2 className="text-sm tracking-[0.3em] uppercase text-atlas-dark/70">
              AREAS OF FOCUS
            </h2>
          </div>

          {/* Areas Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {areas.map((area, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                {/* Icon */}
                <div className="w-16 h-16 border border-atlas-dark/20 flex items-center justify-center mb-6 text-atlas-dark/40 group-hover:border-atlas-gold group-hover:text-atlas-gold transition-all duration-300">
                  {area.icon}
                </div>
                
                {/* Title */}
                <h3 className="text-xl font-serif font-normal mb-4 tracking-wide text-atlas-dark">
                  {area.title}
                </h3>
                
                {/* Description */}
                <p className="text-sm leading-relaxed text-atlas-dark/60">
                  {area.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Bottom line separator */}
          <div className="w-full h-px bg-atlas-dark/10 mt-20 mb-8" />

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <a
              href="/contact"
              className="inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase text-atlas-dark/60 hover:text-atlas-dark transition-colors duration-300 group"
            >
              TALK TO AN EXPERT
              <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
