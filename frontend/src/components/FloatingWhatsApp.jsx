import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Phone } from "lucide-react";

export default function FloatingWhatsApp() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3" data-testid="floating-whatsapp-container">
      {/* Popup */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="glass rounded-2xl p-5 w-72 shadow-2xl border border-[#25D366]/20"
            data-testid="whatsapp-popup"
          >
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#25D366]/10 flex items-center justify-center">
                  <MessageCircle size={18} className="text-[#25D366]" />
                </div>
                <div>
                  <p className="font-['Outfit'] text-sm font-medium text-[#FDFBF7]">Modi's Boutique</p>
                  <p className="font-['Outfit'] text-xs text-[#A39B8B]">Usually replies in minutes</p>
                </div>
              </div>
              <button
                onClick={() => setOpen(false)}
                data-testid="whatsapp-popup-close"
                className="text-[#A39B8B] hover:text-[#FDFBF7] transition-colors"
              >
                <X size={16} />
              </button>
            </div>

            <p className="font-['Outfit'] text-sm text-[#A39B8B] mb-4 leading-relaxed">
              Namaste! How can we help you find your perfect bridal look? Chat with us on WhatsApp!
            </p>

            <div className="flex flex-col gap-2">
              <a
                href="https://wa.me/919709073187?text=Hi%20Modi's%20Boutique%2C%20I'd%20like%20to%20explore%20your%20bridal%20collections."
                target="_blank"
                rel="noopener noreferrer"
                data-testid="whatsapp-chat-btn"
                className="flex items-center justify-center gap-2 bg-[#25D366] text-white font-['Outfit'] text-sm px-4 py-3 rounded-xl hover:bg-[#20BA5C] transition-colors"
              >
                <MessageCircle size={15} />
                Chat on WhatsApp
              </a>
              <a
                href="tel:09709073187"
                data-testid="whatsapp-popup-call-btn"
                className="flex items-center justify-center gap-2 border border-[#D4AF37]/30 text-[#D4AF37] font-['Outfit'] text-sm px-4 py-3 rounded-xl hover:bg-[#D4AF37]/10 transition-colors"
              >
                <Phone size={15} />
                Call 097 0907 3187
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Button */}
      <div className="relative">
        {/* Pulse rings */}
        {!open && (
          <>
            <span className="absolute inset-0 rounded-full bg-[#25D366]/30 animate-ping" />
            <span className="absolute inset-0 rounded-full bg-[#25D366]/15 animate-ping" style={{ animationDelay: "0.4s" }} />
          </>
        )}
        <motion.button
          onClick={() => setOpen(!open)}
          data-testid="floating-whatsapp-btn"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="relative w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center shadow-lg shadow-[#25D366]/30"
        >
          {open ? (
            <X size={22} className="text-white" />
          ) : (
            <MessageCircle size={22} className="text-white" />
          )}
        </motion.button>
      </div>
    </div>
  );
}
