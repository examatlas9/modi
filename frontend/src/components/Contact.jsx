import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { MapPin, Phone, MessageCircle, Clock, Send, CheckCircle } from "lucide-react";

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

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", message: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.name && form.phone) {
      const msg = `Hi Modi's Boutique! My name is ${form.name}. Phone: ${form.phone}. ${form.message}`;
      window.open(`https://wa.me/919709073187?text=${encodeURIComponent(msg)}`, "_blank");
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 4000);
      setForm({ name: "", phone: "", message: "" });
    }
  };

  return (
    <section id="contact" data-testid="contact-section" className="py-24 md:py-32 bg-[#1A0A0E]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Heading */}
        <div className="text-center mb-16">
          <FadeUp>
            <p className="font-['Outfit'] uppercase tracking-[0.25em] text-xs text-[#D4AF37] mb-3">
              Get In Touch
            </p>
          </FadeUp>
          <FadeUp delay={0.1}>
            <h2 className="font-['Playfair_Display'] text-3xl md:text-4xl lg:text-5xl font-normal text-[#FDFBF7]">
              Visit Us or
              <br />
              <em className="text-[#D4AF37] not-italic">Send a Message</em>
            </h2>
          </FadeUp>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left: Contact Info + Map */}
          <div className="flex flex-col gap-8">
            <FadeUp>
              <div className="flex flex-col gap-5">
                {/* Address */}
                <div className="flex gap-4 items-start p-5 rounded-2xl border border-[#D4AF37]/10 bg-[#0A0A0A]/50" data-testid="contact-address">
                  <div className="w-10 h-10 rounded-xl bg-[#D4AF37]/10 flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin size={18} className="text-[#D4AF37]" />
                  </div>
                  <div>
                    <p className="font-['Outfit'] text-xs uppercase tracking-widest text-[#D4AF37] mb-1">Address</p>
                    <p className="font-['Outfit'] text-sm text-[#FDFBF7] leading-relaxed">
                      Shaheed Chowk, opposite Ranchi University,<br />
                      Ranchi, Jharkhand 834001
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex gap-4 items-start p-5 rounded-2xl border border-[#D4AF37]/10 bg-[#0A0A0A]/50" data-testid="contact-phone">
                  <div className="w-10 h-10 rounded-xl bg-[#D4AF37]/10 flex items-center justify-center shrink-0">
                    <Phone size={18} className="text-[#D4AF37]" />
                  </div>
                  <div>
                    <p className="font-['Outfit'] text-xs uppercase tracking-widest text-[#D4AF37] mb-1">Call / WhatsApp</p>
                    <a
                      href="tel:09709073187"
                      data-testid="contact-phone-link"
                      className="font-['Outfit'] text-sm text-[#FDFBF7] hover:text-[#D4AF37] transition-colors block"
                    >
                      097 0907 3187
                    </a>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex gap-4 items-start p-5 rounded-2xl border border-[#D4AF37]/10 bg-[#0A0A0A]/50" data-testid="contact-hours">
                  <div className="w-10 h-10 rounded-xl bg-[#D4AF37]/10 flex items-center justify-center shrink-0">
                    <Clock size={18} className="text-[#D4AF37]" />
                  </div>
                  <div>
                    <p className="font-['Outfit'] text-xs uppercase tracking-widest text-[#D4AF37] mb-1">Working Hours</p>
                    <p className="font-['Outfit'] text-sm text-[#FDFBF7]">Mon – Sun: 10:00 AM – 8:00 PM</p>
                    <p className="font-['Outfit'] text-xs text-[#A39B8B] mt-1">Open all 7 days</p>
                  </div>
                </div>
              </div>
            </FadeUp>

            {/* Map */}
            <FadeUp delay={0.2}>
              <div className="rounded-2xl overflow-hidden border border-[#D4AF37]/10 h-64" data-testid="contact-map">
                <iframe
                  title="Modi's Boutique location on Google Maps"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3661.5284399397866!2d85.32374!3d23.34826!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f4e104a27f0957%3A0xef0882773990bbba!2sShaheed%20Chowk%2C%20Ranchi%2C%20Jharkhand!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </FadeUp>

            {/* CTA Buttons */}
            <FadeUp delay={0.3}>
              <div className="flex gap-4 flex-wrap">
                <a
                  href="tel:09709073187"
                  data-testid="contact-call-btn"
                  className="btn-primary flex items-center gap-2 px-6 py-3 rounded-full font-['Outfit'] text-sm flex-1 justify-center"
                >
                  <Phone size={15} />
                  Call Now
                </a>
                <a
                  href="https://wa.me/919709073187?text=Hi%20Modi's%20Boutique%2C%20I'd%20like%20to%20know%20more%20about%20your%20bridal%20collections."
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid="contact-whatsapp-btn"
                  className="flex items-center gap-2 px-6 py-3 rounded-full font-['Outfit'] text-sm border border-[#25D366] text-[#25D366] hover:bg-[#25D366]/10 transition-all duration-300 flex-1 justify-center"
                >
                  <MessageCircle size={15} />
                  WhatsApp
                </a>
              </div>
            </FadeUp>
          </div>

          {/* Right: Contact Form */}
          <FadeUp delay={0.15}>
            <div className="p-8 md:p-10 rounded-3xl border border-[#D4AF37]/15 bg-[#0A0A0A]/70">
              <h3 className="font-['Playfair_Display'] text-2xl text-[#FDFBF7] mb-2">Book an Appointment</h3>
              <p className="font-['Outfit'] text-sm text-[#A39B8B] mb-8">
                Fill out the form and we'll reach out via WhatsApp to confirm your appointment.
              </p>

              {submitted ? (
                <div className="flex flex-col items-center gap-4 py-12" data-testid="form-success">
                  <CheckCircle size={48} className="text-[#D4AF37]" />
                  <p className="font-['Playfair_Display'] text-xl text-[#FDFBF7]">Message Sent!</p>
                  <p className="font-['Outfit'] text-sm text-[#A39B8B] text-center">
                    We've opened WhatsApp for you. We'll confirm your appointment shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5" data-testid="contact-form">
                  <div>
                    <label className="font-['Outfit'] text-xs text-[#D4AF37] uppercase tracking-widest mb-2 block">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      data-testid="form-name-input"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="e.g. Priya Sharma"
                      className="w-full bg-[#1A0A0E] border border-[#D4AF37]/20 rounded-xl px-4 py-3.5 font-['Outfit'] text-sm text-[#FDFBF7] placeholder-[#A39B8B]/50 focus:outline-none focus:border-[#D4AF37]/50 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="font-['Outfit'] text-xs text-[#D4AF37] uppercase tracking-widest mb-2 block">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      data-testid="form-phone-input"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      placeholder="e.g. 9876543210"
                      className="w-full bg-[#1A0A0E] border border-[#D4AF37]/20 rounded-xl px-4 py-3.5 font-['Outfit'] text-sm text-[#FDFBF7] placeholder-[#A39B8B]/50 focus:outline-none focus:border-[#D4AF37]/50 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="font-['Outfit'] text-xs text-[#D4AF37] uppercase tracking-widest mb-2 block">
                      Message / Occasion
                    </label>
                    <textarea
                      rows={4}
                      data-testid="form-message-input"
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder="Tell us about your occasion, preferred outfit type, date, budget..."
                      className="w-full bg-[#1A0A0E] border border-[#D4AF37]/20 rounded-xl px-4 py-3.5 font-['Outfit'] text-sm text-[#FDFBF7] placeholder-[#A39B8B]/50 focus:outline-none focus:border-[#D4AF37]/50 transition-colors resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    data-testid="form-submit-btn"
                    className="btn-primary flex items-center justify-center gap-2 px-6 py-4 rounded-xl font-['Outfit'] text-sm mt-2"
                  >
                    <Send size={15} />
                    Send via WhatsApp
                  </button>
                  <p className="font-['Outfit'] text-xs text-[#A39B8B] text-center">
                    This will open WhatsApp with your message pre-filled.
                  </p>
                </form>
              )}
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
