"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { siteConfig } from "@/content/siteConfig";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section relative" ref={ref}>
      {/* Background accent */}
      <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-primary/5 to-transparent pointer-events-none" />

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left column - Text content */}
          <div>
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="inline-block text-primary text-sm uppercase tracking-widest mb-4"
            >
              About Me
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-display-md font-display mb-8"
            >
              Building at the{" "}
              <span className="text-primary">Intersection</span> of AI & Ambition
            </motion.h2>

            <div className="space-y-6">
              {siteConfig.about.paragraphs.map((paragraph, index) => (
                <motion.p
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                  className="text-foreground/70 leading-relaxed"
                >
                  {paragraph}
                </motion.p>
              ))}
            </div>
          </div>

          {/* Right column - Stats and visual */}
          <div className="relative">
            {/* Decorative frame */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative"
            >
              {/* Headshot with styling */}
              <div className="aspect-square rounded-3xl glass overflow-hidden relative max-w-md mx-auto">
                {/* Animated gradient background */}
                <div 
                  className="absolute inset-0 bg-gradient-to-br from-primary/20 via-accent/10 to-secondary animate-gradient-shift"
                  style={{ backgroundSize: "200% 200%" }}
                />
                
                {/* Headshot image */}
                <div className="absolute inset-0 flex items-center justify-center p-8">
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={isInView ? { scale: 1, opacity: 1 } : {}}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="relative w-full h-full"
                  >
                    <img
                      src="/images/kevin-headshot.png"
                      alt="Kevin D. Franklin"
                      className="w-full h-full object-contain object-center drop-shadow-2xl"
                    />
                  </motion.div>
                </div>
                
                {/* Decorative ring */}
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  animate={isInView ? { scale: 1, opacity: 1 } : {}}
                  transition={{ duration: 1, delay: 0.6 }}
                  className="absolute inset-4 border-2 border-primary/30 rounded-full pointer-events-none"
                />
                
                {/* Corner accents */}
                <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-primary/50" />
                <div className="absolute top-4 right-4 w-8 h-8 border-r-2 border-t-2 border-primary/50" />
                <div className="absolute bottom-4 left-4 w-8 h-8 border-l-2 border-b-2 border-primary/50" />
                <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-primary/50" />
              </div>

              {/* Corner accents */}
              <div className="absolute -top-4 -left-4 w-8 h-8 border-l-2 border-t-2 border-primary" />
              <div className="absolute -bottom-4 -right-4 w-8 h-8 border-r-2 border-b-2 border-primary" />
            </motion.div>

            {/* Stats overlay */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="absolute -bottom-8 left-8 right-8 glass-dark rounded-2xl p-6"
            >
              <div className="grid grid-cols-3 gap-4">
                {siteConfig.about.stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <motion.span
                      initial={{ opacity: 0 }}
                      animate={isInView ? { opacity: 1 } : {}}
                      transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                      className="block text-2xl md:text-3xl font-display font-semibold text-primary"
                    >
                      {stat.value}
                    </motion.span>
                    <span className="text-xs text-foreground/50 uppercase tracking-wider">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
