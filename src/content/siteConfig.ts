/**
 * SITE CONFIGURATION
 * ==================
 * Edit this file to update your website content.
 * No coding knowledge required - just update the text and URLs.
 * 
 * After editing, commit and push to redeploy on Vercel.
 */

export const siteConfig = {
  // Basic site info
  name: "Kevin D. Franklin",
  title: "Kevin D. Franklin | Entrepreneur, Author & AI Innovator",
  description: "Entrepreneur, author, and AI innovator helping businesses harness the power of artificial intelligence. Author of 'The Agential Gold Rush' and founder of GrieveHub Labs.",
  url: "https://kevindfranklin.com",
  
  // Social links (leave empty string to hide)
  social: {
    twitter: "",
    linkedin: "",
    github: "https://github.com/kev7n11f",
    instagram: "",
    amazon: "https://www.amazon.com/stores/Kevin-D.-Franklin/author/B0FTT5L58J",
    email: "kevin@kevindfranklin.com",
  },

  // Hero section
  hero: {
    greeting: "Hey, I'm",
    name: "Kevin D. Franklin",
    tagline: "Entrepreneur. Author. AI Innovator.",
    description: "I build businesses at the intersection of artificial intelligence and human ambition. From writing books on AI wealth-building to founding tech companies, I'm passionate about helping others harness the transformative power of AI.",
    cta: {
      primary: { text: "View My Work", href: "#projects" },
      secondary: { text: "Get My Book", href: "#books" },
    },
  },

  // About section
  about: {
    title: "About Me",
    paragraphs: [
      "I'm an entrepreneur and author based in Alexandria, Louisiana, driven by a singular mission: democratizing access to the opportunities that artificial intelligence creates.",
      "As the CTO and co-founder of GrieveHub Labs, I'm building AI-powered tools that help workplace organization members understand their contracts and file grievances effectively. Technology should empower everyone, not just those with technical expertise.",
      "My book, 'The Agential Gold Rush: Building Wealth in the Age of Artificial Intelligence,' distills years of research and hands-on experience into actionable strategies for anyone looking to capitalize on the AI revolution.",
      "When I'm not coding or writing, you'll find me exploring new business ideas, consulting with companies on their digital transformation, and constantly learning about the latest developments in AI.",
    ],
    stats: [
      { value: "421", label: "Pages in my book" },
      { value: "100+", label: "AI business ideas" },
      { value: "3+", label: "Active ventures" },
    ],
  },
};

/**
 * PROJECTS
 * ========
 * Add, remove, or edit projects below.
 * Images should be placed in /public/images/
 */
export const projects = [
  {
    id: "talkbreaks",
    title: "TalkBreaks",
    description: "AI-powered platform helping workplace organization members understand contracts and file grievances. Making legal processes accessible to everyone.",
    tags: ["AI", "Legal Tech", "SaaS"],
    link: "https://talkbreaks.com",
    image: "/images/talkbreaks-logo.png",
    featured: true,
  },
  {
    id: "agential-gold-rush",
    title: "The Agential Gold Rush",
    description: "A comprehensive 421-page guide covering 100+ AI business opportunities, from beginner content creation to advanced investment strategies.",
    tags: ["Book", "AI Business", "Entrepreneurship"],
    link: "https://a.co/d/7ta79rp",
    image: "/images/agential-gold-rush-cover.jpg",
    featured: true,
  },
  {
    id: "too-humble-couture",
    title: "Too Humble Couture",
    description: "Premium streetwear brand with tongue-in-cheek messaging. E-commerce platform with subscription functionality and original designs.",
    tags: ["Fashion", "E-commerce", "Brand"],
    link: "https://toohumblecouture.com",
    image: "/images/too-humble-couture.png",
    featured: true,
  },
  {
    id: "autodevelop",
    title: "AutoDevelop.ai",
    description: "A resource built for new founders and developers to use AI to develop their ideas. Turning concepts into reality with AI-assisted development.",
    tags: ["AI", "Developer Tools", "Founders"],
    link: "https://autodevelop.ai",
    image: "",
    featured: true,
  },
  {
    id: "themebot-park",
    title: "ThemeBotPark",
    description: "Platform for AI agent personas where anyone can be a creator and offer their persona creations as subscriptions.",
    tags: ["AI", "Platform", "Creators"],
    link: "https://themebotpark.com",
    image: "",
    featured: false,
  },
  {
    id: "mythological-thinker",
    title: "The Mythological Thinker",
    description: "Upcoming book exploring the intersection of classical wisdom and modern thinking. Pre-order now, releasing March 10th, 2026.",
    tags: ["Book", "Philosophy", "Coming Soon"],
    link: "https://a.co/d/ihhD8vY",
    image: "/images/mythological-thinker-cover.jpg",
    featured: false,
  },
];

/**
 * BOOKS
 * =====
 * Add your published books here
 */
export const books = [
  {
    id: "agential-gold-rush-book",
    title: "The Agential Gold Rush",
    subtitle: "Building Wealth in the Age of Artificial Intelligence",
    description: "This comprehensive 421-page guide walks you through everything from fundamental AI concepts to advanced wealth-building strategies. Whether you're a complete beginner or an experienced entrepreneur, discover 100+ actionable ways to monetize AI today.",
    coverImage: "/images/agential-gold-rush-cover.jpg",
    purchaseLinks: [
      { platform: "Amazon", url: "https://a.co/d/7ta79rp", icon: "amazon" },
      { platform: "Kindle", url: "https://a.co/d/7ta79rp", icon: "kindle" },
      { platform: "Audiobook", url: "", icon: "headphones" },
    ],
    highlights: [
      "100+ AI business opportunities",
      "Beginner to advanced strategies",
      "Real-world case studies",
      "Step-by-step implementation guides",
    ],
    testimonials: [],
  },
  {
    id: "mythological-thinker-book",
    title: "The Mythological Thinker",
    subtitle: "Pre-Order Now • Releasing March 10th, 2026",
    description: "An exploration of classical wisdom and modern thinking. This upcoming work bridges ancient mythology with contemporary philosophy, offering fresh perspectives on timeless questions about human nature, purpose, and potential.",
    coverImage: "/images/mythological-thinker-cover.jpg",
    purchaseLinks: [
      { platform: "Pre-Order on Amazon", url: "https://a.co/d/ihhD8vY", icon: "amazon" },
    ],
    highlights: [
      "Classical wisdom meets modern thinking",
      "Philosophical exploration",
      "Timeless insights for today",
      "Available March 2026",
    ],
    testimonials: [],
  },
];

/**
 * AI ASSISTANT CONFIGURATION
 * ==========================
 * Customize your AI assistant's personality and capabilities
 */
export const aiAssistant = {
  name: "FRANK",
  fullName: "Friendly Resource for Answers, Navigation & Knowledge",
  greeting: "Hey there! I'm FRANK, Kevin's AI assistant. I can tell you about his projects, books, or help connect you with him. What would you like to know?",
  personality: "friendly, straightforward, knowledgeable, and helpful with a touch of entrepreneurial enthusiasm",
  
  // Topics the assistant knows about
  knowledgeBase: {
    owner: "Kevin D. Franklin",
    location: "Alexandria, Louisiana",
    expertise: ["AI & Machine Learning", "Entrepreneurship", "Web Development", "Business Automation", "Writing & Publishing"],
    currentVentures: ["TalkBreaks (Co-founder)", "Too Humble Couture (Founder)", "AutoDevelop.ai (Founder)", "ThemeBotPark (Founder)"],
    book: {
      title: "The Agential Gold Rush: Building Wealth in the Age of Artificial Intelligence",
      pages: 421,
      topics: "AI business opportunities, monetization strategies, wealth building",
    },
  },
  
  // Suggested conversation starters
  suggestions: [
    "Tell me about Kevin's book",
    "What is GrieveHub Labs?",
    "How can Kevin help my business?",
    "What AI services does Kevin offer?",
  ],
};

/**
 * CONTACT/LEAD CAPTURE CONFIGURATION
 * ==================================
 */
export const contact = {
  title: "Let's Build Something Together",
  description: "Whether you're looking to explore AI opportunities, need technical consulting, or want to discuss a collaboration, I'd love to hear from you.",
  email: "kevin@kevindfranklin.com",
  calendlyLink: "", // Add Calendly link if you have one
  
  // Services offered (for lead qualification)
  services: [
    "AI Strategy Consulting",
    "Web Development",
    "Technical Architecture",
    "Speaking & Workshops",
    "Book Collaboration",
    "Other",
  ],
};
