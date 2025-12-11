# Components

This folder contains all React components for the website.

## Structure

\`\`\`
components/
├── sections/          # Main page sections
│   ├── Hero.tsx       # Landing/hero section
│   ├── About.tsx      # About me section
│   ├── Projects.tsx   # Projects showcase
│   ├── Books.tsx      # Books/publications
│   └── Contact.tsx    # Contact form & info
├── AIAssistant.tsx    # Floating AI chat assistant
├── Navbar.tsx         # Navigation bar
└── Footer.tsx         # Page footer
\`\`\`

## Key Components

### AIAssistant.tsx
The floating AI avatar that:
- Shows a greeting bubble on first visit
- Opens a chat interface when clicked
- Responds to questions about your work
- Can be upgraded to use Claude API for smarter responses

### Sections
Each section component:
- Is self-contained
- Uses Framer Motion for animations
- Pulls content from `siteConfig.ts`
- Is fully responsive

## Customization

Most visual customization should be done through:
1. **Content**: Edit `src/content/siteConfig.ts`
2. **Colors**: Edit `tailwind.config.ts`
3. **Fonts**: Edit `src/app/globals.css`

Only modify component files if you need to change layout or add new features.
