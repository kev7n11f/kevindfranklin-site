"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { BookOpen, Headphones, ShoppingCart, Star, Check } from "lucide-react";
import { books } from "@/content/siteConfig";

const iconMap: { [key: string]: React.ReactNode } = {
  amazon: <ShoppingCart className="w-4 h-4" />,
  kindle: <BookOpen className="w-4 h-4" />,
  headphones: <Headphones className="w-4 h-4" />,
};

export default function Books() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="books" className="section relative overflow-hidden" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none" />

      <div className="container-custom relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-block text-primary text-sm uppercase tracking-widest mb-4"
          >
            Published Work
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-display-md font-display mb-4"
          >
            My <span className="text-primary">Books</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-foreground/60 max-w-2xl mx-auto"
          >
            Comprehensive guides for navigating and capitalizing on the AI revolution.
          </motion.p>
        </div>

        {/* Books */}
        {books.map((book, index) => (
          <BookShowcase key={book.id} book={book} index={index} isInView={isInView} />
        ))}
      </div>
    </section>
  );
}

interface Book {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  coverImage: string;
  purchaseLinks: Array<{ platform: string; url: string; icon: string }>;
  highlights: string[];
  testimonials: Array<{ quote: string; author: string; title: string }>;
}

function BookShowcase({
  book,
  index,
  isInView,
}: {
  book: Book;
  index: number;
  isInView: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: 0.3 + index * 0.2 }}
      className="relative"
    >
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Book Visual */}
        <div className="relative order-2 lg:order-1">
          <div className="relative max-w-sm mx-auto">
            {/* Glow effect */}
            <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full scale-75" />

            {/* Book cover mock */}
            <motion.div
              initial={{ rotateY: 15, rotateX: -5 }}
              whileHover={{ rotateY: 0, rotateX: 0 }}
              transition={{ duration: 0.5 }}
              className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl"
              style={{
                transformStyle: "preserve-3d",
                perspective: "1000px",
              }}
            >
              {/* Book cover image */}
              {book.coverImage ? (
                <img 
                  src={book.coverImage} 
                  alt={`${book.title} cover`}
                  className="absolute inset-0 w-full h-full object-cover rounded-2xl"
                />
              ) : (
                <div className="absolute inset-0 bg-gradient-to-br from-secondary via-secondary-light to-secondary border border-primary/20 rounded-2xl">
                  {/* Spine shadow */}
                  <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-black/30 to-transparent" />

                  {/* Content */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
                    {/* Decorative top element */}
                    <div className="w-16 h-1 bg-primary mb-8" />

                    {/* Title */}
                    <h3 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-2 leading-tight">
                      {book.title}
                    </h3>

                    {/* Subtitle */}
                    <p className="text-sm text-primary mb-8">
                      {book.subtitle}
                    </p>

                    {/* Author */}
                    <p className="text-sm text-foreground/60">Kevin D. Franklin</p>

                    {/* Decorative bottom element */}
                    <div className="w-16 h-1 bg-primary mt-8" />
                  </div>
                </div>
              )}

              {/* Shine effect */}
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent pointer-events-none" />
            </motion.div>

            {/* Floating elements */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -top-4 -right-4 px-4 py-2 glass rounded-full text-sm"
            >
              <span className="flex items-center gap-1 text-primary">
                <Star className="w-4 h-4 fill-primary" />
                421 Pages
              </span>
            </motion.div>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity }}
              className="absolute -bottom-4 -left-4 px-4 py-2 glass rounded-full text-sm"
            >
              <span className="text-accent">100+ AI Ideas</span>
            </motion.div>
          </div>
        </div>

        {/* Book Info */}
        <div className="order-1 lg:order-2">
          <motion.h3
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-display-sm font-display mb-2"
          >
            {book.title}
          </motion.h3>

          <motion.p
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-xl text-primary mb-6"
          >
            {book.subtitle}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-foreground/70 mb-8 leading-relaxed"
          >
            {book.description}
          </motion.p>

          {/* Highlights */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="mb-8"
          >
            <h4 className="text-sm uppercase tracking-wider text-foreground/50 mb-4">
              What You&apos;ll Learn
            </h4>
            <ul className="space-y-3">
              {book.highlights.map((highlight, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-1 w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                    <Check className="w-3 h-3 text-primary" />
                  </span>
                  <span className="text-foreground/80">{highlight}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Purchase Links */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-wrap gap-4"
          >
            {book.purchaseLinks.map((link) =>
              link.url ? (
                <a
                  key={link.platform}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary"
                >
                  {iconMap[link.icon]}
                  {link.platform}
                </a>
              ) : (
                <span
                  key={link.platform}
                  className="btn border border-foreground/20 text-foreground/40 cursor-not-allowed"
                >
                  {iconMap[link.icon]}
                  {link.platform} (Coming Soon)
                </span>
              )
            )}
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
