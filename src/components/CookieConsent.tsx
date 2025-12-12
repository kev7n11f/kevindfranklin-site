"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cookie, X } from "lucide-react";

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already made a choice
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      // Show banner after a short delay
      const timer = setTimeout(() => setIsVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem("cookie-consent", "declined");
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", damping: 25 }}
          className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6"
        >
          <div className="max-w-4xl mx-auto">
            <div className="glass rounded-2xl p-4 md:p-6 shadow-2xl border border-white/10">
              <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
                {/* Icon */}
                <div className="hidden md:flex w-12 h-12 rounded-full bg-primary/20 items-center justify-center flex-shrink-0">
                  <Cookie className="w-6 h-6 text-primary" />
                </div>

                {/* Text */}
                <div className="flex-1">
                  <h3 className="font-semibold text-foreground mb-1 flex items-center gap-2">
                    <Cookie className="w-5 h-5 text-primary md:hidden" />
                    Cookie Notice
                  </h3>
                  <p className="text-foreground/70 text-sm">
                    This site uses minimal, privacy-focused analytics (Vercel Analytics) to understand 
                    how visitors use the site. No personal data is collected or shared with third parties. 
                    See our{" "}
                    <a href="/privacy" className="text-primary hover:underline">
                      Privacy Policy
                    </a>{" "}
                    for details.
                  </p>
                </div>

                {/* Buttons */}
                <div className="flex items-center gap-3 w-full md:w-auto">
                  <button
                    onClick={handleDecline}
                    className="flex-1 md:flex-initial px-4 py-2 text-sm text-foreground/70 hover:text-foreground transition-colors"
                  >
                    Decline
                  </button>
                  <button
                    onClick={handleAccept}
                    className="flex-1 md:flex-initial px-6 py-2 bg-primary text-secondary-dark text-sm font-semibold rounded-lg hover:bg-primary-light transition-colors"
                  >
                    Accept
                  </button>
                </div>

                {/* Close button */}
                <button
                  onClick={handleDecline}
                  className="absolute top-2 right-2 md:hidden p-2 text-foreground/50 hover:text-foreground"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
