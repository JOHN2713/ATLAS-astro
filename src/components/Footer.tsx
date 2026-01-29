export default function Footer() {
  const currentYear = new Date().getFullYear();

  const links = [
    { name: 'PHILOSOPHY', href: '/philosophy' },
    { name: 'OUR SERVICES', href: '/services' },
    { name: 'INSIGHTS', href: '/insights' },
    { name: 'ABOUT', href: '/about' },
    { name: 'CONTACT', href: '/contact' },
  ];

  return (
    <footer className="bg-atlas-primary border-t border-atlas-dark/10 py-12">
      <div className="container mx-auto max-w-7xl px-6 md:px-12">
        {/* Top section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-12">
          {/* Logo and subtitle */}
          <div>
            <a href="/" className="text-xl tracking-[0.3em] font-light mb text-atlas-dark hover:text-atlas-gold transition-colors duration-300">
              ATLAS
            </a>
            <div className="text-xs tracking-wide text-atlas-dark/60">
              Private Wealth & Legacy Office
            </div>
          </div>

          {/* Navigation links */}
          <nav className="flex flex-wrap gap-8">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs tracking-widest hover:text-atlas-gold transition-colors duration-300 text-atlas-dark/70"
              >
                {link.name}
              </a>
            ))}
          </nav>
        </div>

        {/* Bottom section */}
        <div className="border-t border-atlas-dark/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-atlas-dark/50">
            <p>© {currentYear} ATLAS. All rights reserved.</p>
            <p>Miami</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
