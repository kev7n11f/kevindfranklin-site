# Kevin D. Franklin - Personal Website

A modern, sophisticated personal website showcasing your entrepreneurial portfolio, books, and projects with an integrated AI assistant.

## 🚀 Features

- **Stunning Design**: Dark, editorial aesthetic with gold accents and smooth animations
- **AI Assistant (KIRA)**: Floating AI avatar that guides visitors, answers questions, and can capture leads
- **Easy Content Updates**: All content managed through a single config file - no coding required
- **Fully Responsive**: Looks great on all devices
- **SEO Optimized**: Meta tags, Open Graph, and structured data ready
- **Performance First**: Built with Next.js 14 for optimal loading speeds
- **Accessible**: WCAG compliant with proper focus states and semantic HTML

## 📁 Project Structure

\`\`\`
kevindfranklin-site/
├── public/
│   └── images/              # Your images (project covers, book cover, etc.)
├── src/
│   ├── app/                 # Next.js app router
│   │   ├── globals.css      # Global styles
│   │   ├── layout.tsx       # Root layout
│   │   └── page.tsx         # Home page
│   ├── components/          # React components
│   │   ├── sections/        # Page sections (Hero, About, etc.)
│   │   ├── AIAssistant.tsx  # The AI avatar and chat interface
│   │   ├── Navbar.tsx       # Navigation
│   │   └── Footer.tsx       # Footer
│   ├── content/
│   │   └── siteConfig.ts    # ⭐ EDIT THIS FILE TO UPDATE YOUR CONTENT
│   └── lib/                 # Utilities
└── README.md
\`\`\`

## 🎯 Quick Start

### Local Development

\`\`\`bash
# Install dependencies
npm install

# Start development server
npm run dev

# Open http://localhost:3000
\`\`\`

### Deployment to Vercel

1. Push to your GitHub repository
2. Connect to Vercel
3. Deploy (auto-deploys on every push)

## ✏️ Updating Your Content

**All content is managed in \`src/content/siteConfig.ts\`**

### Update Personal Info

\`\`\`typescript
export const siteConfig = {
  name: "Kevin D. Franklin",
  title: "Kevin D. Franklin | Entrepreneur, Author & AI Innovator",
  description: "Your meta description...",
  // ... etc
};
\`\`\`

### Add/Edit Projects

\`\`\`typescript
export const projects = [
  {
    id: "unique-id",
    title: "Project Name",
    description: "Description...",
    tags: ["Tag1", "Tag2"],
    link: "https://...", // Leave empty if not live yet
    image: "/images/project.png",
    featured: true, // Featured projects show larger
  },
  // Add more projects...
];
\`\`\`

### Add/Edit Books

\`\`\`typescript
export const books = [
  {
    id: "book-id",
    title: "Book Title",
    subtitle: "Subtitle",
    description: "Description...",
    coverImage: "/images/cover.png",
    purchaseLinks: [
      { platform: "Amazon", url: "https://...", icon: "amazon" },
    ],
    highlights: ["Highlight 1", "Highlight 2"],
  },
];
\`\`\`

### Customize AI Assistant

\`\`\`typescript
export const aiAssistant = {
  name: "KIRA",
  fullName: "Kevin's Intelligent Resource Assistant",
  greeting: "Your greeting message...",
  suggestions: ["Question 1", "Question 2"],
  // Knowledge base for responses
  knowledgeBase: { ... },
};
\`\`\`

## 🖼️ Adding Images

1. Place images in \`public/images/\`
2. Reference them as \`/images/filename.png\` in your config
3. Recommended sizes:
   - Project images: 800x600px
   - Book cover: 600x800px
   - OG image: 1200x630px

## 🎨 Customizing Design

### Colors (in \`tailwind.config.ts\`)

\`\`\`typescript
colors: {
  primary: "#C9A227",    // Gold accent
  secondary: "#1A1A2E",  // Deep navy
  accent: "#4A90A4",     // Teal accent
}
\`\`\`

### Fonts (in \`globals.css\`)

Currently using:
- Display: Cormorant Garamond (elegant serif)
- Body: DM Sans (clean sans-serif)
- Mono: JetBrains Mono

## 🤖 AI Assistant Integration

The AI assistant currently uses local knowledge from your siteConfig. To upgrade to Claude API:

1. Add your Anthropic API key to environment variables
2. Update \`generateLocalResponse\` in \`AIAssistant.tsx\` to use the API
3. The assistant can then provide more dynamic, context-aware responses

## 📧 Contact Form

The contact form currently opens an email client. To add form submissions:

1. Set up a form endpoint (Formspree, Netlify Forms, or custom API)
2. Update the \`handleSubmit\` function in \`Contact.tsx\`

## 🔧 Environment Variables

Create a \`.env.local\` file for any sensitive data:

\`\`\`env
# Future API keys
ANTHROPIC_API_KEY=your_key_here
\`\`\`

## 📝 License

© Kevin D. Franklin. All rights reserved.

---

Built with ❤️ and AI
