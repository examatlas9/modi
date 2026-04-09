import { motion } from "framer-motion";
import { Phone, MessageCircle, MapPin, Heart } from "lucide-react";

const LINKS = {
  Navigate: [
    { label: "Home", href: "#home" },
    { label: "About Us", href: "#about" },
    { label: "Collections", href: "#collections" },
    { label: "Services", href: "#services" },
    { label: "FAQ", href: "#faq" },
    { label: "Contact", href: "#contact" },
  ],
  Collections: [
    { label: "Bridal Lehengas", href: "#collections" },
    { label: "Bridal Sarees", href: "#collections" },
    { label: "Bridal Gowns", href: "#collections" },
    { label: "Designer Suits", href: "#collections" },
    { label: "Accessories", href: "#collections" },
  ],
};

export default function Footer() {
  const scrollTo = (href) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-[#050505] border-t border-[#D4AF37]/10" data-testid="footer">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="mb-5">
              <p className="font-['Playfair_Display'] text-2xl font-semibold text-[#D4AF37]">Modi's Boutique</p>
              <p className="font-['Outfit'] text-xs tracking-[0.35em] text-[#A39B8B] uppercase mt-1">
                Ranchi's Premier Bridal Destination
              </p>
            </div>
            <p className="font-['Outfit'] text-sm text-[#A39B8B] leading-relaxed max-w-xs mb-6">
              Over 15 years of making Ranchi's brides look extraordinary. Exquisite lehengas, sarees, gowns, suits & accessories — all under one roof.
            </p>
            {/* Contact Quick Links */}
            <div className="flex flex-col gap-2.5">
              <a href="tel:09709073187" data-testid="footer-phone-link" className="flex items-center gap-2 font-['Outfit'] text-sm text-[#A39B8B] hover:text-[#D4AF37] transition-colors">
                <Phone size={14} className="text-[#D4AF37]" />
                097 0907 3187
              </a>
              <a
                href="https://wa.me/919709073187"
                target="_blank"
                rel="noopener noreferrer"
                data-testid="footer-whatsapp-link"
                className="flex items-center gap-2 font-['Outfit'] text-sm text-[#A39B8B] hover:text-[#25D366] transition-colors"
              >
                <MessageCircle size={14} className="text-[#25D366]" />
                WhatsApp Us
              </a>
              <div className="flex items-start gap-2">
                <MapPin size={14} className="text-[#D4AF37] mt-0.5 shrink-0" />
                <p className="font-['Outfit'] text-sm text-[#A39B8B]">
                  Shaheed Chowk, opp. Ranchi University,<br />Ranchi, Jharkhand 834001
                </p>
              </div>
            </div>
          </div>

          {/* Navigate Links */}
          <div>
            <p className="font-['Outfit'] uppercase tracking-widest text-xs text-[#D4AF37] mb-5">Navigate</p>
            <ul className="flex flex-col gap-2.5">
              {LINKS.Navigate.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    data-testid={`footer-nav-${link.label.toLowerCase().replace(/ /g, "-")}`}
                    onClick={(e) => { e.preventDefault(); scrollTo(link.href); }}
                    className="font-['Outfit'] text-sm text-[#A39B8B] hover:text-[#D4AF37] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Collections Links */}
          <div>
            <p className="font-['Outfit'] uppercase tracking-widest text-xs text-[#D4AF37] mb-5">Collections</p>
            <ul className="flex flex-col gap-2.5">
              {LINKS.Collections.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); scrollTo(link.href); }}
                    className="font-['Outfit'] text-sm text-[#A39B8B] hover:text-[#D4AF37] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="gold-divider w-full mb-8 opacity-40" />

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-['Outfit'] text-xs text-[#A39B8B]">
            © {new Date().getFullYear()} Modi's Boutique. All rights reserved. Ranchi, Jharkhand.
          </p>
          <p className="font-['Outfit'] text-xs text-[#A39B8B] flex items-center gap-1">
            Made with <Heart size={11} className="text-[#B76E79] fill-[#B76E79]" /> for Ranchi's Brides
          </p>
          <div className="flex gap-5">
            {["Privacy Policy", "Terms of Service"].map((item) => (
              <a key={item} href="#" className="font-['Outfit'] text-xs text-[#A39B8B] hover:text-[#D4AF37] transition-colors">
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
