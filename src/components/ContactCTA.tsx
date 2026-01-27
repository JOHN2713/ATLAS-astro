import { motion } from 'framer-motion';

export default function ContactCTA() {
  return (
    <section id="contact" className="py-32 bg-atlas-dark text-atlas-primary">
      <div className="container mx-auto max-w-7xl px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          {/* Title with icon */}
          <div className="flex items-center justify-center gap-3 mb-16">
            <svg className="w-5 h-5 text-atlas-primary/60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            </svg>
            <h2 className="text-sm tracking-[0.3em] uppercase text-atlas-primary/80">
              BEGIN A CONVERSATION
            </h2>
          </div>

          {/* Main content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <p className="text-2xl md:text-3xl lg:text-4xl font-serif font-light leading-relaxed mb-12">
              Engagements begin with a conversation.
            </p>
            
            <p className="text-base md:text-lg text-atlas-primary/70 mb-16">
              All inquiries are reviewed with discretion.
            </p>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <a
              href="/contact"
              className="inline-flex items-center gap-2 border border-atlas-primary px-8 py-4 text-xs tracking-[0.2em] uppercase transition-all duration-300 hover:bg-atlas-primary hover:text-atlas-dark group"
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
