import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQS = [
  {
    q: "Where is Modi's Boutique located in Ranchi?",
    a: "Modi's Boutique is located at Shaheed Chowk, opposite Ranchi University, Ranchi, Jharkhand 834001. We are conveniently located in the heart of Ranchi, easily accessible from all areas of the city.",
  },
  {
    q: "What is your timing / working hours?",
    a: "We are open 7 days a week from 10:00 AM to 8:00 PM. We recommend booking a prior appointment for personalized bridal consultations to ensure dedicated time with our styling experts.",
  },
  {
    q: "Do you offer home delivery for bridal outfits?",
    a: "Yes! We offer home delivery across Ranchi and nearby areas in Jharkhand. For outfits ordered online or by phone, we ensure safe and beautiful packaging. Please call us at 09709073187 or WhatsApp us to discuss delivery options.",
  },
  {
    q: "Can I book a private bridal consultation?",
    a: "Absolutely! We encourage brides to book a private styling session to explore our collections at leisure with dedicated personal attention. Call us on 09709073187 or send us a WhatsApp message to schedule your appointment.",
  },
  {
    q: "What bridal collections do you offer at Modi's Boutique?",
    a: "We offer a comprehensive range of bridal wear including: Bridal Lehengas (designer, handcrafted), Silk & Banarasi Sarees, Indo-Western Gowns, Designer Suits (anarkali, sharara, salwar suits), and Bridal Accessories (jewellery, dupatta, potli bags). We are Ranchi's most complete bridal destination.",
  },
  {
    q: "Do you provide alteration or customization services?",
    a: "Yes, we offer alteration services on all purchased outfits to ensure a perfect fit for your special day. Limited customization options are also available for select pieces. Please discuss your requirements with our team at the time of purchase.",
  },
  {
    q: "Do you do on-site visits or styling at the venue?",
    a: "Yes, we offer on-site bridal styling services where our team can visit your home, venue, or function hall. This premium service is available on request. Please contact us in advance to schedule an on-site consultation.",
  },
  {
    q: "What is your return/exchange policy?",
    a: "We accept exchanges on outfits within 7 days of purchase, provided they are unused, unworn and in original condition with all tags intact. No cash refunds are provided. Please contact us to initiate an exchange request.",
  },
  {
    q: "How can I check your latest collection?",
    a: "You are welcome to visit our store at Shaheed Chowk, Ranchi during working hours to browse our full collection. You can also call us at 09709073187 or WhatsApp us to get images of our latest arrivals shared directly on your phone.",
  },
  {
    q: "Is Modi's Boutique the best bridal shop in Ranchi?",
    a: "With a Google rating of 4.6 stars from 991 customers and over 15 years of serving brides across Jharkhand, we are proud to be one of the most trusted and highly rated bridal boutiques in Ranchi. Our commitment is to make every bride feel extraordinary.",
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

export default function FAQSection() {
  return (
    <section id="faq" data-testid="faq-section" className="py-24 md:py-32 bg-[#0A0A0A]">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        {/* Heading */}
        <div className="text-center mb-14">
          <FadeUp>
            <p className="font-['Outfit'] uppercase tracking-[0.25em] text-xs text-[#D4AF37] mb-3">
              Common Questions
            </p>
          </FadeUp>
          <FadeUp delay={0.1}>
            <h2 className="font-['Playfair_Display'] text-3xl md:text-4xl lg:text-5xl font-normal text-[#FDFBF7]">
              Frequently Asked
              <br />
              <em className="text-[#D4AF37] not-italic">Questions</em>
            </h2>
          </FadeUp>
          <FadeUp delay={0.2}>
            <p className="font-['Outfit'] text-base text-[#A39B8B] mt-4 max-w-lg mx-auto">
              Can't find what you're looking for? Call us directly at{" "}
              <a href="tel:09709073187" className="text-[#D4AF37] hover:underline">09709073187</a>
            </p>
          </FadeUp>
        </div>

        {/* FAQ Accordion */}
        <FadeUp delay={0.3}>
          <Accordion
            type="single"
            collapsible
            className="w-full"
            data-testid="faq-accordion"
          >
            {FAQS.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                data-testid={`faq-item-${i}`}
                className="border-b border-[#D4AF37]/15 py-1"
              >
                <AccordionTrigger
                  className="font-['Outfit'] text-sm md:text-base text-[#FDFBF7] hover:text-[#D4AF37] hover:no-underline text-left transition-colors duration-300 py-5"
                  data-testid={`faq-trigger-${i}`}
                >
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent
                  className="font-['Outfit'] text-sm text-[#A39B8B] leading-relaxed pb-5"
                  data-testid={`faq-answer-${i}`}
                >
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </FadeUp>
      </div>
    </section>
  );
}
