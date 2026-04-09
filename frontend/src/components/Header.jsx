import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Collections", href: "#collections" },
  { label: "Services", href: "#services" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.header
      data-testid="site-header"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "backdrop-blur-xl bg-[#0A0A0A]/90 border-b border-[#D4AF37]/10 shadow-lg shadow-black/50"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a
            href="#home"
            data-testid="logo-link"
            onClick={(e) => { e.preventDefault(); handleNavClick("#home"); }}
            className="flex flex-col leading-tight"
          >
            <span className="font-['Playfair_Display'] text-xl md:text-2xl font-semibold text-[#D4AF37] tracking-wide">
              Modi's
            </span>
            <span className="font-['Outfit'] text-xs tracking-[0.35em] text-[#A39B8B] uppercase">
              Boutique
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8" data-testid="desktop-nav">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                data-testid={`nav-${link.label.toLowerCase()}`}
                onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                className="font-['Outfit'] text-sm text-[#A39B8B] hover:text-[#D4AF37] transition-colors duration-300 tracking-wide"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA + Mobile Menu */}
          <div className="flex items-center gap-4">
            <a
              href="tel:09709073187"
              data-testid="header-call-btn"
              className="hidden md:flex items-center gap-2 btn-primary px-5 py-2 rounded-full text-sm font-['Outfit']"
            >
              <Phone size={14} />
              Book Appointment
            </a>
            <button
              data-testid="mobile-menu-toggle"
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden text-[#D4AF37] p-2"
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden backdrop-blur-xl bg-[#0A0A0A]/95 border-t border-[#D4AF37]/10"
            data-testid="mobile-menu"
          >
            <nav className="flex flex-col px-6 py-6 gap-4">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  data-testid={`mobile-nav-${link.label.toLowerCase()}`}
                  onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                  className="font-['Outfit'] text-base text-[#FDFBF7] hover:text-[#D4AF37] transition-colors py-2 border-b border-[#D4AF37]/10"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="tel:09709073187"
                data-testid="mobile-book-btn"
                className="btn-primary px-6 py-3 rounded-full text-sm font-['Outfit'] text-center mt-2"
              >
                Book Appointment
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
