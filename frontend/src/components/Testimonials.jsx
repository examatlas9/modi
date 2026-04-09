import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";

const TESTIMONIALS = [
  {
    name: "Priya Sharma",
    occasion: "Bride, December 2024",
    rating: 5,
    review: "I was completely overwhelmed with bridal choices until I walked into Modi's Boutique. The staff was incredibly patient and helped me find the most breathtaking red and gold lehenga. I received so many compliments on my wedding day. Highly recommend to every bride in Ranchi!",
    initials: "PS",
  },
  {
    name: "Ritu Agarwal",
    occasion: "Bride, November 2024",
    rating: 5,
    review: "Modi's Boutique truly is Ranchi's best bridal shop. Their Banarasi silk sarees are absolutely stunning. The quality is unmatched and the price is very reasonable. I bought my reception saree and mehendi suit here — both were perfect. The team goes above and beyond!",
    initials: "RA",
  },
  {
    name: "Kavya Singh",
    occasion: "Bride, October 2024",
    rating: 5,
    review: "I live in Dhanbad but specifically drove to Ranchi to shop at Modi's Boutique after seeing reviews. It was 100% worth it! The collection is massive and the staff helped me pick the ideal Indo-western gown for my reception. They also arranged home delivery for the accessories. 5 stars!",
    initials: "KS",
  },
  {
    name: "Anita Verma",
    occasion: "Mother of Bride, September 2024",
    rating: 5,
    review: "We've been customers for 10 years — my daughter and I both shopped here for her wedding. The trust we have in Modi's Boutique is unparalleled. The staff remembers you personally. The collection is consistently updated with fresh designs. A truly premium experience in Ranchi.",
    initials: "AV",
  },
  {
    name: "Meenakshi Jha",
    occasion: "Bride, August 2024",
    rating: 4,
    review: "Great experience from start to finish. The in-store styling consultation was so helpful — I never would have chosen the dusty rose lehenga on my own, but it was perfect! The home delivery service was prompt and packaging was beautiful. Definitely the go-to bridal boutique in Jharkhand.",
    initials: "MJ",
  },
  {
    name: "Sunita Pandey",
    occasion: "Bride, July 2024",
    rating: 5,
    review: "Words cannot express how beautiful my bridal look was, all thanks to Modi's Boutique! They understood my vision perfectly and curated outfits for all 5 functions of my wedding. Shaheed Chowk's gem — everyone in Ranchi should know about this place. Thank you so much!",
    initials: "SP",
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

function StarRating({ rating }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((i) => (
        <Star
          key={i}
          size={13}
          className={i <= rating ? "fill-[#D4AF37] text-[#D4AF37]" : "text-[#A39B8B]"}
        />
      ))}
    </div>
  );
}

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const visibleCount = 3;
  const total = TESTIMONIALS.length;

  const prev = () => setCurrent((c) => (c === 0 ? total - visibleCount : c - 1));
  const next = () => setCurrent((c) => (c + visibleCount >= total ? 0 : c + 1));

  const visible = TESTIMONIALS.slice(current, current + visibleCount);

  return (
    <section id="testimonials" data-testid="testimonials-section" className="py-24 md:py-32 bg-[#1A0A0E]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Heading */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-14 gap-6">
          <div>
            <FadeUp>
              <p className="font-['Outfit'] uppercase tracking-[0.25em] text-xs text-[#D4AF37] mb-3">
                What Brides Say
              </p>
            </FadeUp>
            <FadeUp delay={0.1}>
              <h2 className="font-['Playfair_Display'] text-3xl md:text-4xl lg:text-5xl font-normal text-[#FDFBF7]">
                5000+ Happy Brides
                <br />
                <em className="text-[#D4AF37] not-italic">Can't Be Wrong</em>
              </h2>
            </FadeUp>
          </div>

          {/* Google Rating Summary */}
          <FadeUp delay={0.2}>
            <div className="glass rounded-2xl px-6 py-5 flex flex-col items-center gap-2" data-testid="testimonials-google-badge">
              <p className="font-['Playfair_Display'] text-4xl text-[#D4AF37]">4.6</p>
              <StarRating rating={5} />
              <p className="font-['Outfit'] text-xs text-[#A39B8B] text-center">
                Based on <strong className="text-[#FDFBF7]">991 reviews</strong>
                <br />on Google
              </p>
            </div>
          </FadeUp>
        </div>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {visible.map((t, i) => (
            <FadeUp key={`${t.name}-${current}`} delay={i * 0.1}>
              <div
                data-testid={`testimonial-card-${i}`}
                className="p-7 rounded-2xl border border-[#D4AF37]/10 bg-[#0A0A0A]/70 flex flex-col gap-4 h-full"
              >
                <Quote size={28} className="text-[#D4AF37]/30" />
                <p className="font-['Outfit'] text-sm text-[#A39B8B] leading-relaxed flex-1 italic">
                  "{t.review}"
                </p>
                <div className="flex items-center gap-4 pt-4 border-t border-[#D4AF37]/10">
                  <div className="w-10 h-10 rounded-full bg-[#D4AF37]/20 flex items-center justify-center shrink-0">
                    <span className="font-['Playfair_Display'] text-sm text-[#D4AF37]">{t.initials}</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-['Outfit'] text-sm font-medium text-[#FDFBF7] truncate">{t.name}</p>
                    <p className="font-['Outfit'] text-xs text-[#A39B8B]">{t.occasion}</p>
                  </div>
                  <StarRating rating={t.rating} />
                </div>
              </div>
            </FadeUp>
          ))}
        </div>

        {/* Navigation */}
        <FadeUp delay={0.3}>
          <div className="flex items-center justify-center gap-4 mt-10">
            <button
              onClick={prev}
              data-testid="testimonials-prev-btn"
              className="w-10 h-10 rounded-full border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37] hover:bg-[#D4AF37]/10 transition-colors"
            >
              <ChevronLeft size={18} />
            </button>
            <div className="flex gap-2">
              {Array.from({ length: Math.ceil(total / visibleCount) }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i * visibleCount)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    Math.floor(current / visibleCount) === i
                      ? "bg-[#D4AF37] w-5"
                      : "bg-[#D4AF37]/30"
                  }`}
                />
              ))}
            </div>
            <button
              onClick={next}
              data-testid="testimonials-next-btn"
              className="w-10 h-10 rounded-full border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37] hover:bg-[#D4AF37]/10 transition-colors"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
