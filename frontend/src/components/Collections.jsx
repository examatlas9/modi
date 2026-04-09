import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";

const COLLECTIONS = [
  {
    id: "lehengas",
    title: "Bridal Lehengas",
    subtitle: "Signature Collection",
    desc: "Handcrafted lehengas with intricate embroidery, zari work & premium fabrics for your D-day.",
    img: "https://images.unsplash.com/photo-1711130388758-2ccf44bb735c?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODB8MHwxfHNlYXJjaHw0fHxpbmRpYW4lMjBicmlkYWwlMjBsZWhlbmdhfGVufDB8fHx8MTc3NTcxMjUzNHww&ixlib=rb-4.1.0&q=85",
    span: "md:col-span-7",
    height: "h-[480px]",
  },
  {
    id: "sarees",
    title: "Bridal Sarees",
    subtitle: "Heritage Collection",
    desc: "Silk Banarasi, Kanjeevaram & designer sarees for the modern bride.",
    img: "https://images.unsplash.com/photo-1727430228383-aa1fb59db8bf?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1NTN8MHwxfHNlYXJjaHwzfHx3ZWRkaW5nJTIwc2FyZWV8ZW58MHx8fHwxNzc1NzEyNTQ1fDA&ixlib=rb-4.1.0&q=85",
    span: "md:col-span-5",
    height: "h-[480px]",
  },
  {
    id: "gowns",
    title: "Bridal Gowns",
    subtitle: "Contemporary Collection",
    desc: "Elegant Indo-western gowns for the fashion-forward bride.",
    img: "https://images.unsplash.com/photo-1722952908681-944d47e45853?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2ODh8MHwxfHNlYXJjaHwzfHxpbmRpYW4lMjBicmlkZSUyMHBvcnRyYWl0fGVufDB8fHx8MTc3NTcxMjU0NXww&ixlib=rb-4.1.0&q=85",
    span: "md:col-span-4",
    height: "h-[380px]",
  },
  {
    id: "suits",
    title: "Designer Suits",
    subtitle: "Festive Collection",
    desc: "Sharara, anarkali & salwar suits for ceremonies, mehendi & sangeet.",
    img: "https://images.unsplash.com/photo-1610173826014-d131b02d69ca?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2ODh8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBicmlkZSUyMHBvcnRyYWl0fGVufDB8fHx8MTc3NTcxMjU0NXww&ixlib=rb-4.1.0&q=85",
    span: "md:col-span-4",
    height: "h-[380px]",
  },
  {
    id: "accessories",
    title: "Bridal Accessories",
    subtitle: "Finishing Touches",
    desc: "Statement jewellery, dupatta, potli bags & more to complete your bridal look.",
    img: "https://images.unsplash.com/flagged/photo-1570055349452-29232699cc63?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2ODh8MHwxfHNlYXJjaHwzfHxpbmRpYW4lMjBqZXdlbHJ5fGVufDB8fHx8MTc3NTcxMjU0NHww&ixlib=rb-4.1.0&q=85",
    span: "md:col-span-4",
    height: "h-[380px]",
  },
];

function FadeUp({ children, delay = 0, className = "" }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

export default function Collections() {
  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="collections" data-testid="collections-section" className="py-24 md:py-32 bg-[#1A0A0E]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Heading */}
        <div className="text-center mb-16">
          <FadeUp>
            <p className="font-['Outfit'] uppercase tracking-[0.25em] text-xs text-[#D4AF37] mb-3">
              Our Collections
            </p>
          </FadeUp>
          <FadeUp delay={0.1}>
            <h2 className="font-['Playfair_Display'] text-3xl md:text-4xl lg:text-5xl font-normal text-[#FDFBF7]">
              Crafted for Every Celebration
            </h2>
          </FadeUp>
          <FadeUp delay={0.2}>
            <p className="font-['Outfit'] text-base text-[#A39B8B] mt-4 max-w-xl mx-auto">
              From intimate mehendi ceremonies to grand wedding receptions — we have the perfect ensemble for every moment of your bridal journey.
            </p>
          </FadeUp>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-5">
          {/* Row 1 */}
          {COLLECTIONS.slice(0, 2).map((col, i) => (
            <FadeUp key={col.id} delay={i * 0.1} className={col.span}>
              <div
                data-testid={`collection-card-${col.id}`}
                className={`collection-card relative rounded-2xl overflow-hidden cursor-pointer group ${col.height} w-full`}
              >
                <img
                  src={col.img}
                  alt={`${col.title} - Modi's Boutique Ranchi`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                {/* Default gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/90 via-[#0A0A0A]/20 to-transparent" />
                {/* Hover overlay */}
                <div className="overlay absolute inset-0 bg-[#0A0A0A]/70 opacity-0 flex items-center justify-center">
                  <button
                    onClick={scrollToContact}
                    className="btn-primary px-6 py-3 rounded-full font-['Outfit'] text-sm flex items-center gap-2"
                  >
                    Explore Collection <ArrowRight size={14} />
                  </button>
                </div>
                {/* Text */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="font-['Outfit'] text-xs text-[#D4AF37] uppercase tracking-widest mb-1">{col.subtitle}</p>
                  <h3 className="font-['Playfair_Display'] text-xl md:text-2xl text-[#FDFBF7]">{col.title}</h3>
                  <p className="font-['Outfit'] text-sm text-[#A39B8B] mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500">{col.desc}</p>
                </div>
              </div>
            </FadeUp>
          ))}

          {/* Row 2 */}
          {COLLECTIONS.slice(2).map((col, i) => (
            <FadeUp key={col.id} delay={i * 0.1 + 0.2} className={col.span}>
              <div
                data-testid={`collection-card-${col.id}`}
                className={`collection-card relative rounded-2xl overflow-hidden cursor-pointer group ${col.height} w-full`}
              >
                <img
                  src={col.img}
                  alt={`${col.title} - Modi's Boutique Ranchi`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/90 via-[#0A0A0A]/20 to-transparent" />
                <div className="overlay absolute inset-0 bg-[#0A0A0A]/70 opacity-0 flex items-center justify-center">
                  <button
                    onClick={scrollToContact}
                    className="btn-primary px-6 py-3 rounded-full font-['Outfit'] text-sm flex items-center gap-2"
                  >
                    Explore <ArrowRight size={14} />
                  </button>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <p className="font-['Outfit'] text-xs text-[#D4AF37] uppercase tracking-widest mb-1">{col.subtitle}</p>
                  <h3 className="font-['Playfair_Display'] text-lg md:text-xl text-[#FDFBF7]">{col.title}</h3>
                  <p className="font-['Outfit'] text-xs text-[#A39B8B] mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500">{col.desc}</p>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>

        {/* CTA */}
        <FadeUp delay={0.4}>
          <div className="text-center mt-12">
            <button
              onClick={scrollToContact}
              data-testid="collections-cta-btn"
              className="btn-outline inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-['Outfit'] text-sm"
            >
              Book a Private Viewing <ArrowRight size={14} />
            </button>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
