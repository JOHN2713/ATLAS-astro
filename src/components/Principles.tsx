import { motion } from 'framer-motion';

export default function Principles() {
  const principles = [
    {
      number: '01',
      text: 'Capital is not grown. It is structured.',
    },
    {
      number: '02',
      text: 'Wealth is not managed. It is governed.',
    },
    {
      number: '03',
      text: 'Legacy is not assumed. It is designed.',
    },
  ];

  return (
    <section className="py-24 bg-atlas-primary relative">
      <div className="container mx-auto max-w-5xl px-6 md:px-12">
        {/* Vertical line on left */}
        <div className="absolute left-12 top-24 bottom-24 w-px bg-atlas-dark/10 hidden md:block" />

        <div className="space-y-32 md:pl-24">
          {principles.map((principle, index) => (
            <motion.div
              key={principle.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative"
            >
              {/* Number on the left */}
              <div className="absolute -left-4 md:-left-20 top-0 text-xs tracking-widest text-atlas-dark/20">
                {principle.number}
              </div>

              {/* Quote marks */}
              <div className="flex justify-center mb-6">
                <svg className="w-8 h-8 text-atlas-dark/10" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z"/>
                </svg>
              </div>

              {/* Principle text */}
              <p className="text-2xl md:text-3xl lg:text-4xl font-serif font-light text-center text-atlas-dark leading-relaxed mb-6">
                {principle.text}
              </p>

              {/* Small separator line */}
              <div className="flex justify-center">
                <div className="w-16 h-px bg-atlas-dark/20" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom line separator */}
        <div className="w-full h-px bg-atlas-dark/10 mt-24 mb-12" />

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center md:text-left md:pl-24"
        >
          <a
            href="/contact"
            className="inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase text-atlas-dark/60 hover:text-atlas-dark transition-colors duration-300 group"
          >
            TALK TO AN EXPERT
            <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
