import { motion } from 'framer-motion';

export default function WhoWeServe() {
  const clients = [
    {
      icon: (
        <svg className="w-8 h-8 text-atlas-gold" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
          <path d="M12 2L2 7l10 5 10-5-10-5z" />
          <path d="M2 17l10 5 10-5M2 12l10 5 10-5" />
        </svg>
      ),
      title: 'Ultra-High-Net-Worth Individuals',
      description: 'Principals seeking sophisticated wealth structuring, privacy, and multi-generational planning.'
    },
    {
      icon: (
        <svg className="w-8 h-8 text-atlas-gold" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      ),
      title: 'Multi-Generational Families',
      description: 'Established families navigating succession, governance, and the preservation of shared values.'
    },
    {
      icon: (
        <svg className="w-8 h-8 text-atlas-gold" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <path d="M3 9h18M9 21V9" />
        </svg>
      ),
      title: 'Family Offices',
      description: 'Single and multi-family offices requiring strategic oversight and operational excellence.'
    },
    {
      icon: (
        <svg className="w-8 h-8 text-atlas-gold" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
          <rect x="2" y="7" width="20" height="14" rx="2" />
          <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
        </svg>
      ),
      title: 'Founders & Entrepreneurs',
      description: 'Business owners planning liquidity events, exits, or transitioning to stewardship roles.'
    },
    {
      icon: (
        <svg className="w-8 h-8 text-atlas-gold" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
          <path d="M12 2L4 6v6c0 5.5 3.8 10.7 8 12 4.2-1.3 8-6.5 8-12V6l-8-4z" />
        </svg>
      ),
      title: 'Institutional Stakeholders',
      description: 'Trusts, foundations, and endowments seeking aligned advisory partnerships.'
    },
    {
      icon: (
        <svg className="w-8 h-8 text-atlas-gold" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
          <circle cx="12" cy="12" r="10" />
          <line x1="2" y1="12" x2="22" y2="12" />
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        </svg>
      ),
      title: 'Global Citizens',
      description: 'Internationally mobile individuals with complex cross-border considerations.'
    }
  ];

  return (
    <section className="py-24 bg-atlas-secondary relative">
      <div className="container mx-auto max-w-6xl px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          {/* Title */}
          <div className="flex items-center justify-center gap-3 mb-12">
            <svg className="w-4 h-4 text-atlas-gold" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <circle cx="12" cy="12" r="10" />
            </svg>
            <h2 className="text-[10px] tracking-[0.3em] uppercase text-atlas-dark/60">
              WHO WE SERVE
            </h2>
          </div>
          
          {/* Main heading */}
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-2xl md:text-3xl lg:text-4xl font-serif font-light text-center leading-relaxed mb-6 text-atlas-dark max-w-4xl mx-auto"
          >
            ATLAS works with a limited number of individuals and families worldwide.
          </motion.h3>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-center text-sm md:text-base text-atlas-dark/60 mb-16"
          >
            Relationships are intentional. Capacity is finite.
          </motion.p>

          {/* Client cards grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {clients.map((client, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * index }}
                className="bg-[#f2eee9] border border-atlas-dark/10 p-8 hover:border-atlas-gold/30 transition-colors duration-300 relative group overflow-hidden"
              >
                {/* Corner decorations */}
                <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-atlas-gold origin-top-left scale-0 group-hover:scale-100 transition-transform duration-300" />
                <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-atlas-gold origin-top-right scale-0 group-hover:scale-100 transition-transform duration-300" />
                <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-atlas-gold origin-bottom-left scale-0 group-hover:scale-100 transition-transform duration-300" />
                <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-atlas-gold origin-bottom-right scale-0 group-hover:scale-100 transition-transform duration-300" />

                <div className="mb-6 inline-block p-3 border border-atlas-gold/20">
                  {client.icon}
                </div>
                <h4 className="text-base font-serif mb-4 text-atlas-dark leading-tight">
                  {client.title}
                </h4>
                <p className="text-sm text-atlas-dark/60 leading-relaxed">
                  {client.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
            className="text-center"
          >
            <a
              href="/services"
              className="inline-flex items-center gap-2 text-[10px] tracking-[0.3em] uppercase text-atlas-gold hover:text-atlas-dark transition-colors duration-300 group"
            >
              VIEW SERVICES
              <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
