import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ShoppingBag, Package, Store, Truck, Sparkles, Heart } from "lucide-react";

const SERVICES = [
  {
    icon: Store,
    title: "In-Store Shopping",
    desc: "Walk into our elegant showroom at Shaheed Chowk and explore our complete bridal collection with personalized assistance from our expert stylists.",
    tags: ["Try-on available", "Private styling room", "Expert consultation"],
  },
  {
    icon: Package,
    title: "In-Store Pick-Up",
    desc: "Order your dream outfit and pick it up at your convenience. We ensure every piece is beautifully packaged and ready for your special day.",
    tags: ["Same-day ready", "Gift wrapping", "Alterations available"],
  },
  {
    icon: Truck,
    title: "Home Delivery",
    desc: "Can't visit us? No problem. We deliver your chosen bridal ensemble safely to your doorstep across Ranchi and nearby areas in Jharkhand.",
    tags: ["Ranchi-wide delivery", "Secure packaging", "Express delivery available"],
  },
  {
    icon: Heart,
    title: "On-Site Services",
    desc: "Our team visits you for bridal styling and consultation at your home, venue, or function hall — making your bridal experience truly luxurious.",
    tags: ["Home visits", "Venue assistance", "Pre-wedding styling"],
  },
  {
    icon: Sparkles,
    title: "Bridal Consultation",
    desc: "Book a one-on-one consultation with our bridal experts to plan your complete look — from ceremony to reception — across all functions.",
    tags: ["Function-wise planning", "Mix & match", "Budget guidance"],
  },
  {
    icon: ShoppingBag,
    title: "Trousseau Planning",
    desc: "We help brides plan their complete trousseau — bridal wear, reception outfit, mehendi look, sangeet attire — all under one roof.",
    tags: ["Complete collection", "Personalized", "All occasions"],
  },
];

function FadeUp({ children, delay = 0 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
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

export default function Services() {
  return (
    <section id="services" data-testid="services-section" className="py-24 md:py-32 bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Heading */}
        <div className="text-center mb-16">
          <FadeUp>
            <p className="font-['Outfit'] uppercase tracking-[0.25em] text-xs text-[#D4AF37] mb-3">
              What We Offer
            </p>
          </FadeUp>
          <FadeUp delay={0.1}>
            <h2 className="font-['Playfair_Display'] text-3xl md:text-4xl lg:text-5xl font-normal text-[#FDFBF7]">
              Bridal Services Tailored
              <br />
              <em className="text-[#D4AF37] not-italic">Just for You</em>
            </h2>
          </FadeUp>
          <FadeUp delay={0.2}>
            <p className="font-['Outfit'] text-base text-[#A39B8B] mt-4 max-w-xl mx-auto">
              From the moment you step in to the day you say "I do" — we're with you every step of the way.
            </p>
          </FadeUp>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service, i) => {
            const Icon = service.icon;
            return (
              <FadeUp key={service.title} delay={i * 0.08}>
                <div
                  data-testid={`service-card-${i}`}
                  className="group p-7 rounded-2xl border border-[#D4AF37]/10 bg-[#1A0A0E]/50 hover:border-[#D4AF37]/30 hover:bg-[#1A0A0E] transition-all duration-500 h-full flex flex-col"
                >
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-xl bg-[#D4AF37]/10 flex items-center justify-center mb-5 group-hover:bg-[#D4AF37]/20 transition-colors duration-300">
                    <Icon size={22} className="text-[#D4AF37]" />
                  </div>

                  {/* Title */}
                  <h3 className="font-['Playfair_Display'] text-xl text-[#FDFBF7] mb-3">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="font-['Outfit'] text-sm text-[#A39B8B] leading-relaxed mb-5 flex-1">
                    {service.desc}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {service.tags.map((tag) => (
                      <span
                        key={tag}
                        className="font-['Outfit'] text-xs px-3 py-1 rounded-full border border-[#D4AF37]/20 text-[#D4AF37]/80"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </FadeUp>
            );
          })}
        </div>

        {/* Why Choose Us highlights */}
        <div className="mt-20 pt-16 border-t border-[#D4AF37]/10">
          <FadeUp>
            <h3 className="font-['Playfair_Display'] text-2xl md:text-3xl text-center text-[#FDFBF7] mb-10">
              Why Ranchi's Brides Choose <em className="text-[#D4AF37] not-italic">Modi's Boutique</em>
            </h3>
          </FadeUp>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { num: "01", title: "Exclusive Designs", desc: "Unique pieces you won't find anywhere else in Jharkhand" },
              { num: "02", title: "Premium Quality", desc: "Only the finest fabrics, zari & embroidery work" },
              { num: "03", title: "Honest Pricing", desc: "Transparent pricing with no hidden charges — ever" },
              { num: "04", title: "Trusted Legacy", desc: "15+ years of making Ranchi brides look their absolute best" },
            ].map((item, i) => (
              <FadeUp key={item.num} delay={i * 0.1}>
                <div className="text-center px-4" data-testid={`why-choose-${i}`}>
                  <p className="font-['Playfair_Display'] text-4xl text-[#D4AF37]/20 mb-3">{item.num}</p>
                  <h4 className="font-['Playfair_Display'] text-lg text-[#FDFBF7] mb-2">{item.title}</h4>
                  <p className="font-['Outfit'] text-sm text-[#A39B8B]">{item.desc}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
