import { motion } from "framer-motion";
import { Star, Phone, MessageCircle, ChevronDown } from "lucide-react";

const HERO_IMG = "https://images.unsplash.com/photo-1610173826014-d131b02d69ca?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2ODh8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBicmlkZSUyMHBvcnRyYWl0fGVufDB8fHx8MTc3NTcxMjU0NXww&ixlib=rb-4.1.0&q=85";

export default function Hero() {
  const scrollToSection = (id) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" data-testid="hero-section" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={HERO_IMG}
          alt="Elegant Indian bridal portrait - Modi's Boutique Ranchi"
          className="w-full h-full object-cover object-center"
          loading="eager"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/55 to-[#0A0A0A]/15" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A]/70 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 pt-24 pb-20 flex flex-col md:flex-row items-center md:items-end justify-between w-full min-h-screen">
        <div className="flex flex-col justify-center flex-1 py-20">
          {/* Google Rating Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            data-testid="google-rating-badge"
            className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full glass w-fit"
          >
            <div className="flex items-center gap-0.5">
              {[1, 2, 3, 4].map((i) => (
                <Star key={i} size={13} className="fill-[#D4AF37] text-[#D4AF37]" />
              ))}
              <Star size={13} className="text-[#D4AF37]" style={{ fill: "url(#half)" }} />
              <svg width="0" height="0">
                <defs>
                  <linearGradient id="half" x1="0" x2="1" y1="0" y2="0">
                    <stop offset="60%" stopColor="#D4AF37" />
                    <stop offset="60%" stopColor="transparent" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <span className="font-['Outfit'] text-xs text-[#D4AF37] font-medium">4.6</span>
            <span className="font-['Outfit'] text-xs text-[#A39B8B]">on Google</span>
            <span className="font-['Outfit'] text-xs text-[#A39B8B]">(991 reviews)</span>
          </motion.div>

          {/* Overline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="font-['Outfit'] uppercase tracking-[0.25em] text-xs text-[#D4AF37] mb-4"
          >
            Ranchi's Premier Bridal Destination
          </motion.p>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45 }}
            className="font-['Playfair_Display'] text-5xl md:text-6xl lg:text-7xl font-normal text-[#FDFBF7] leading-[1.15] mb-4 max-w-2xl"
          >
            Where Every Bride
            <br />
            <span className="gold-shimmer">Finds Her Dream</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="font-['Outfit'] text-base md:text-lg text-[#A39B8B] max-w-lg mb-10 leading-relaxed"
          >
            Exquisite bridal lehengas, sarees, gowns, suits & accessories — crafted for your most precious moments. Visit us in Ranchi, Jharkhand.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.75 }}
            className="flex flex-wrap gap-4"
          >
            <a
              href="tel:09709073187"
              data-testid="hero-call-btn"
              className="btn-primary flex items-center gap-2 px-7 py-3.5 rounded-full font-['Outfit'] text-sm"
            >
              <Phone size={15} />
              Call Now
            </a>
            <a
              href="https://wa.me/919709073187?text=Hi%20Modi's%20Boutique%2C%20I'd%20like%20to%20book%20a%20bridal%20appointment."
              target="_blank"
              rel="noopener noreferrer"
              data-testid="hero-whatsapp-btn"
              className="flex items-center gap-2 px-7 py-3.5 rounded-full font-['Outfit'] text-sm border border-[#25D366] text-[#25D366] hover:bg-[#25D366]/10 transition-all duration-300"
            >
              <MessageCircle size={15} />
              WhatsApp Us
            </a>
            <button
              onClick={() => scrollToSection("#contact")}
              data-testid="hero-book-btn"
              className="btn-outline flex items-center gap-2 px-7 py-3.5 rounded-full font-['Outfit'] text-sm"
            >
              Book Appointment
            </button>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.button
        onClick={() => scrollToSection("#about")}
        data-testid="scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{ opacity: { delay: 1.2, duration: 0.5 }, y: { repeat: Infinity, duration: 2, ease: "easeInOut" } }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1 text-[#A39B8B] hover:text-[#D4AF37] transition-colors"
      >
        <span className="font-['Outfit'] text-xs tracking-widest uppercase">Explore</span>
        <ChevronDown size={18} />
      </motion.button>
    </section>
  );
}
