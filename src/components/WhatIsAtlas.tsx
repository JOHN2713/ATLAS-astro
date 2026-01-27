import { motion } from 'framer-motion';

export default function WhatIsAtlas() {
  return (
    <section className="py-24 bg-[#0c1825] text-atlas-primary">
      <div className="container mx-auto max-w-5xl px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Title with icon */}
          <div className="flex items-center gap-3 mb-16">
            <svg className="w-5 h-5 text-atlas-primary/60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M12 2L4 6v6c0 5.5 3.8 10.7 8 12 4.2-1.3 8-6.5 8-12V6l-8-4z" />
            </svg>
            <h2 className="text-sm tracking-[0.3em] uppercase font-light text-atlas-primary/80">
              WHAT IS ATLAS
            </h2>
          </div>

          {/* Main content */}
          <div className="space-y-12">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-2xl md:text-3xl lg:text-4xl font-serif font-light leading-relaxed text-atlas-primary"
            >
              ATLAS is a private wealth and legacy platform designed for individuals and
              families who value structure over speculation, discretion over exposure, and
              long-term clarity over short-term performance.
            </motion.p>

            {/* Decorative separator */}
            <div className="flex py-8">
              <svg className="w-3 h-3 text-atlas-gold/60" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L22 12L12 22L2 12Z" />
              </svg>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="text-lg md:text-xl font-light leading-relaxed text-atlas-primary/90"
            >
              We do not sell financial products. We represent judgment, structure, and
              stewardship of capital across generations.
            </motion.p>
          </div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="mt-16"
          >
            <a
              href="/contact"
              className="inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase text-atlas-primary/60 hover:text-atlas-primary transition-colors duration-300 group"
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
