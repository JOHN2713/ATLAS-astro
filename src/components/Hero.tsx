import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative bg-atlas-primary pt-32 md:pt-20">
      {/* Content */}
      <div className="relative z-20 text-center px-6 max-w-6xl mx-auto py-12 md:py-0">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          {/* Top decorative separator - hidden on mobile */}
          <div className="hidden md:flex items-center justify-center gap-4 mb-8">
            <div className="w-12 h-px bg-atlas-dark/20"></div>
            <svg className="w-2 h-2 text-atlas-gold/50" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2L22 12L12 22L2 12Z" />
            </svg>
            <div className="w-12 h-px bg-atlas-dark/20"></div>
          </div>

          {/* Main title */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-serif font-light tracking-[0.15em] mb-6 md:mb-8 text-atlas-dark">
            ATLAS
          </h1>
          
          {/* Subtitle */}
          <p className="text-[10px] sm:text-xs md:text-sm tracking-[0.25em] uppercase mb-10 md:mb-12 text-atlas-dark/70">
            PRIVATE WEALTH & LEGACY OFFICE
          </p>

          {/* Decorative separator */}
          <div className="flex items-center justify-center gap-4 mb-10 md:mb-16">
            <div className="w-12 md:w-16 h-px bg-atlas-dark/20"></div>
            <svg className="w-2 h-2 text-atlas-gold" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2L22 12L12 22L2 12Z" />
            </svg>
            <div className="w-12 md:w-16 h-px bg-atlas-dark/20"></div>
          </div>

          {/* Main tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-serif font-light leading-relaxed mb-12 md:mb-16 text-atlas-dark max-w-4xl mx-auto px-4"
          >
            Structure over speculation. Discretion over exposure. <br />Long-term clarity.
          </motion.p>

          {/* Founder info */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-xs sm:text-sm tracking-wide mb-12 md:mb-16 text-atlas-dark/60"
          >
            Founded & led by Gonzalo Martinez
          </motion.p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="flex flex-col items-center gap-6 md:gap-8"
        >
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <a
              href="/contact"
              className="inline-flex items-center gap-2 border border-atlas-dark px-6 sm:px-8 py-3 text-[10px] sm:text-xs tracking-[0.2em] uppercase transition-all duration-300 hover:bg-atlas-dark hover:text-atlas-primary group"
            >
              TALK TO AN EXPERT
              <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
            </a>
          </div>
        </motion.div>

        {/* Scroll indicator line */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-8 md:bottom-12 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-px h-12 md:h-16 bg-atlas-dark/20" />
        </motion.div>
      </div>
    </section>
  );
}
