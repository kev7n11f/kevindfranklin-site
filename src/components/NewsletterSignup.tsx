"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle, Loader2, AlertCircle } from "lucide-react";

interface NewsletterSignupProps {
  source?: string;
  variant?: "inline" | "card";
  className?: string;
}

export default function NewsletterSignup({ 
  source = "website", 
  variant = "card",
  className = "" 
}: NewsletterSignupProps) {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      setStatus("error");
      setMessage("Please enter your email address");
      return;
    }

    setStatus("loading");
    setMessage("");

    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, name, source }),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus("success");
        setMessage(data.message || "Thanks for subscribing!");
        setEmail("");
        setName("");
      } else {
        setStatus("error");
        setMessage(data.error || "Something went wrong");
      }
    } catch {
      setStatus("error");
      setMessage("Network error. Please try again.");
    }
  };

  if (variant === "inline") {
    return (
      <form onSubmit={handleSubmit} className={`flex flex-col sm:flex-row gap-3 ${className}`}>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={status === "loading" || status === "success"}
          className="flex-1 px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-foreground placeholder:text-foreground/50 focus:outline-none focus:border-primary/50 transition-colors disabled:opacity-50"
        />
        <button
          type="submit"
          disabled={status === "loading" || status === "success"}
          className="px-6 py-3 bg-primary text-secondary-dark font-semibold rounded-lg hover:bg-primary-light transition-colors disabled:opacity-50 flex items-center justify-center gap-2"
        >
          {status === "loading" ? (
            <Loader2 className="w-5 h-5 animate-spin" />
          ) : status === "success" ? (
            <>
              <CheckCircle className="w-5 h-5" />
              Subscribed!
            </>
          ) : (
            <>
              <Send className="w-5 h-5" />
              Subscribe
            </>
          )}
        </button>
        <AnimatePresence>
          {message && (
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className={`text-sm ${status === "error" ? "text-red-400" : "text-green-400"}`}
            >
              {message}
            </motion.p>
          )}
        </AnimatePresence>
      </form>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`relative overflow-hidden rounded-2xl ${className}`}
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-secondary via-secondary-light to-secondary" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(201,162,39,0.15),transparent_50%)]" />
      
      {/* Content */}
      <div className="relative p-8 md:p-12">
        <div className="max-w-xl mx-auto text-center">
          {/* Icon */}
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", delay: 0.2 }}
            className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary/20 flex items-center justify-center"
          >
            <Send className="w-8 h-8 text-primary" />
          </motion.div>

          {/* Text */}
          <h3 className="text-2xl md:text-3xl font-display font-bold mb-3">
            Stay in the Loop
          </h3>
          <p className="text-foreground/70 mb-8">
            Get insights on AI, entrepreneurship, and building wealth. 
            No spam, just value. Unsubscribe anytime.
          </p>

          {/* Form */}
          <AnimatePresence mode="wait">
            {status === "success" ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center gap-4 py-8"
              >
                <div className="w-20 h-20 rounded-full bg-green-500/20 flex items-center justify-center">
                  <CheckCircle className="w-10 h-10 text-green-400" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-green-400">You&apos;re in!</h4>
                  <p className="text-foreground/70 mt-1">{message}</p>
                </div>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                onSubmit={handleSubmit}
                className="space-y-4"
              >
                <div className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="text"
                    placeholder="First name (optional)"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    disabled={status === "loading"}
                    className="sm:w-1/3 px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-foreground placeholder:text-foreground/50 focus:outline-none focus:border-primary/50 transition-colors disabled:opacity-50"
                  />
                  <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    disabled={status === "loading"}
                    required
                    className="flex-1 px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-foreground placeholder:text-foreground/50 focus:outline-none focus:border-primary/50 transition-colors disabled:opacity-50"
                  />
                </div>
                
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full sm:w-auto px-8 py-3 bg-primary text-secondary-dark font-semibold rounded-lg hover:bg-primary-light transition-all hover:shadow-lg hover:shadow-primary/25 disabled:opacity-50 flex items-center justify-center gap-2 mx-auto"
                >
                  {status === "loading" ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Subscribing...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Subscribe
                    </>
                  )}
                </button>

                {/* Error message */}
                <AnimatePresence>
                  {status === "error" && message && (
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="flex items-center justify-center gap-2 text-red-400 text-sm"
                    >
                      <AlertCircle className="w-4 h-4" />
                      {message}
                    </motion.p>
                  )}
                </AnimatePresence>

                {/* Privacy note */}
                <p className="text-xs text-foreground/50 mt-4">
                  By subscribing, you agree to our{" "}
                  <a href="/privacy" className="text-primary hover:underline">
                    Privacy Policy
                  </a>
                  . We respect your privacy.
                </p>
              </motion.form>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
}
