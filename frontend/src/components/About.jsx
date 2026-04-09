import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const STATS = [
  { value: "15+", label: "Years of Excellence" },
  { value: "5000+", label: "Happy Brides" },
  { value: "500+", label: "Unique Designs" },
  { value: "4.6★", label: "Google Rating" },
];

const ABOUT_IMG = "https://images.unsplash.com/photo-1765009433753-c7462637d21f?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDF8MHwxfHNlYXJjaHwyfHxsdXh1cnklMjBib3V0aXF1ZSUyMGludGVyaW9yfGVufDB8fHx8MTc3NTcxMjUzNHww&ixlib=rb-4.1.0&q=85";
const DETAIL_IMG = "https://images.unsplash.com/photo-1724856604403-60304b28906c?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODB8MHwxfHNlYXJjaHwyfHxpbmRpYW4lMjBicmlkYWwlMjBsZWhlbmdhfGVufDB8fHx8MTc3NTcxMjUzNHww&ixlib=rb-4.1.0&q=85";

function FadeUp({ children, delay = 0 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

export default function About() {
  return (
    <section id="about" data-testid="about-section" className="py-24 md:py-32 bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Images */}
          <FadeUp>
            <div className="relative h-[500px] md:h-[600px]">
              <div className="absolute top-0 left-0 w-[72%] h-[80%] rounded-2xl overflow-hidden">
                <img
                  src={ABOUT_IMG}
                  alt="Modi's Boutique interior - luxury bridal shop in Ranchi"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="absolute bottom-0 right-0 w-[55%] h-[55%] rounded-2xl overflow-hidden border-4 border-[#0A0A0A]">
                <img
                  src={DETAIL_IMG}
                  alt="Bridal lehenga detail - Modi's Boutique Ranchi"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              {/* Gold accent badge */}
              <div className="absolute top-[38%] right-[28%] glass rounded-xl px-4 py-3 text-center shadow-xl">
                <p className="font-['Playfair_Display'] text-2xl text-[#D4AF37]">15+</p>
                <p className="font-['Outfit'] text-xs text-[#A39B8B] mt-1">Years of Trust</p>
              </div>
            </div>
          </FadeUp>

          {/* Right: Content */}
          <div className="flex flex-col gap-6">
            <FadeUp delay={0.1}>
              <p className="font-['Outfit'] uppercase tracking-[0.25em] text-xs text-[#D4AF37]">
                Our Story
              </p>
            </FadeUp>

            <FadeUp delay={0.2}>
              <h2 className="font-['Playfair_Display'] text-3xl md:text-4xl lg:text-5xl font-normal text-[#FDFBF7] leading-tight">
                Dressing Ranchi's Brides
                <br />
                <em className="text-[#D4AF37] not-italic">For Over 15 Years</em>
              </h2>
            </FadeUp>

            <FadeUp delay={0.3}>
              <p className="font-['Outfit'] text-base text-[#A39B8B] leading-relaxed">
                Nestled in the heart of Ranchi at Shaheed Chowk, Modi's Boutique has been the trusted destination for brides across Jharkhand. We believe every woman deserves to feel extraordinary on her special day — and that's the promise we've kept for over 15 years.
              </p>
            </FadeUp>

            <FadeUp delay={0.4}>
              <p className="font-['Outfit'] text-base text-[#A39B8B] leading-relaxed">
                Our curated collection of bridal lehengas, silk sarees, contemporary gowns, designer suits, and statement accessories is sourced from the finest artisans across India. Every piece tells a story of craftsmanship, culture, and beauty.
              </p>
            </FadeUp>

            {/* Highlights */}
            <FadeUp delay={0.5}>
              <div className="grid grid-cols-2 gap-4 mt-4">
                {[
                  "Premium Bridal Collections",
                  "Expert Style Consultation",
                  "Home Delivery Available",
                  "Trusted by 5000+ Brides",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] shrink-0" />
                    <span className="font-['Outfit'] text-sm text-[#FDFBF7]">{item}</span>
                  </div>
                ))}
              </div>
            </FadeUp>

            <FadeUp delay={0.6}>
              <a
                href="tel:09709073187"
                data-testid="about-cta-btn"
                className="btn-primary inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-['Outfit'] text-sm w-fit mt-2"
              >
                Visit Our Store
              </a>
            </FadeUp>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20 pt-16 border-t border-[#D4AF37]/10">
          {STATS.map((stat, i) => (
            <FadeUp key={stat.label} delay={i * 0.1}>
              <div className="text-center" data-testid={`stat-${i}`}>
                <p className="font-['Playfair_Display'] text-3xl md:text-4xl text-[#D4AF37] mb-2">{stat.value}</p>
                <p className="font-['Outfit'] text-sm text-[#A39B8B]">{stat.label}</p>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
