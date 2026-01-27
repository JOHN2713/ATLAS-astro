import { motion } from 'framer-motion';

export default function Insights() {
  const insights = [
    {
      category: 'FOUNDATIONAL ESSAYS',
      date: 'DECEMBER 2024',
      title: 'Structure Over Speculation: A Framework for Long-Term Capital',
      excerpt: 'The distinction between building wealth and preserving it requires a fundamentally different orientation toward risk, time, and decision-making.',
      link: '/insights/structure-over-speculation',
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
          <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
        </svg>
      ),
    },
    {
      category: 'FINANCIAL PERSPECTIVES',
      date: 'NOVEMBER 2024',
      title: 'Governance and Clarity in Family Wealth',
      excerpt: 'Without clear governance structures, even the most substantial wealth tends to dissipate within three generations. The solution lies not in legal documents alone.',
      link: '/insights/governance-and-clarity',
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="12" cy="12" r="10" />
          <line x1="2" y1="12" x2="22" y2="12" />
          <line x1="12" y1="2" x2="12" y2="22" />
        </svg>
      ),
    },
    {
      category: 'LETTERS & NOTES',
      date: 'JANUARY 2024',
      title: 'A Letter to Clients: On Patience and Perspective',
      excerpt: 'Reflecting on the role of discipline and long-term thinking in periods of market uncertainty and broader economic transition.',
      link: '/insights/letter-january-2024',
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="2" y="4" width="20" height="16" rx="2" />
          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
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
      
      <div className="container mx-auto max-w-5xl px-6 md:px-12 relative z-10">
        {/* Title with icon */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex items-center gap-4 mb-20"
        >
          <svg className="w-5 h-5 text-atlas-dark/40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
            <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
          </svg>
          <h2 className="text-xs tracking-[0.3em] uppercase text-atlas-dark/70">
            INSIGHTS
          </h2>
        </motion.div>

        {/* Articles list */}
        <div className="space-y-16">
          {insights.map((insight, index) => (
            <motion.article
              key={insight.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="flex gap-8">
                {/* Icon */}
                <div className="flex-shrink-0 w-12 h-12 border border-atlas-dark/20 flex items-center justify-center text-atlas-dark/40 group-hover:border-atlas-gold group-hover:text-atlas-gold transition-all duration-300">
                  {insight.icon}
                </div>

                {/* Content */}
                <div className="flex-1">
                  {/* Category and date */}
                  <p className="text-[10px] tracking-widest uppercase text-atlas-dark/40 mb-3">
                    {insight.category} · {insight.date}
                  </p>

                  {/* Title */}
                  <h3 className="text-xl md:text-2xl font-serif font-normal mb-4 text-atlas-dark group-hover:text-atlas-gold transition-colors duration-300">
                    <a href={insight.link}>{insight.title}</a>
                  </h3>

                  {/* Excerpt */}
                  <p className="text-sm md:text-base leading-relaxed text-atlas-dark/60 mb-4">
                    {insight.excerpt}
                  </p>

                  {/* Read more link */}
                  <a
                    href={insight.link}
                    className="inline-flex items-center gap-2 text-xs tracking-wider uppercase text-atlas-dark/50 hover:text-atlas-gold transition-colors duration-300 group"
                  >
                    Read article
                    <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                  </a>
                </div>
              </div>

              {/* Separator line */}
              {index < insights.length - 1 && (
                <div className="w-full h-px bg-atlas-dark/10 mt-16" />
              )}
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
