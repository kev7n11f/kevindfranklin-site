# Content Configuration

This folder contains all the editable content for your website. No coding knowledge required!

## 📝 siteConfig.ts

This is the ONLY file you need to edit to update your website content.

### Quick Reference

| Section | What it controls |
|---------|------------------|
| `siteConfig` | Basic info, hero section, about section |
| `projects` | Your projects/ventures list |
| `books` | Your published books |
| `aiAssistant` | AI assistant personality & knowledge |
| `contact` | Contact form & services |

### How to Update

1. Open `siteConfig.ts` in any text editor
2. Find the section you want to update
3. Edit the text between the quotes
4. Save the file
5. If running locally, changes appear instantly
6. Push to GitHub to update live site

### Adding a New Project

Copy this template and add to the `projects` array:

\`\`\`typescript
{
  id: "unique-project-id",        // Lowercase, no spaces
  title: "Project Name",
  description: "A brief description of your project.",
  tags: ["Tag1", "Tag2", "Tag3"], // 2-4 tags recommended
  link: "https://yourproject.com", // Leave empty "" if not live
  image: "/images/project-name.png",
  featured: true,                  // true = large card, false = small
},
\`\`\`

### Adding a New Book

Copy this template and add to the `books` array:

\`\`\`typescript
{
  id: "book-id",
  title: "Your Book Title",
  subtitle: "The Subtitle",
  description: "A paragraph describing what readers will learn...",
  coverImage: "/images/book-cover.png",
  purchaseLinks: [
    { platform: "Amazon", url: "https://amazon.com/...", icon: "amazon" },
    { platform: "Kindle", url: "https://...", icon: "kindle" },
    { platform: "Audiobook", url: "https://...", icon: "headphones" },
  ],
  highlights: [
    "Key benefit 1",
    "Key benefit 2",
    "Key benefit 3",
    "Key benefit 4",
  ],
  testimonials: [
    { quote: "This book changed my life!", author: "Reader Name", title: "Their Title" },
  ],
},
\`\`\`

### Updating Social Links

In the `siteConfig.social` object, add your URLs:

\`\`\`typescript
social: {
  twitter: "https://twitter.com/yourhandle",
  linkedin: "https://linkedin.com/in/yourprofile",
  github: "https://github.com/yourusername",
  instagram: "https://instagram.com/yourhandle",
  email: "your@email.com",
},
\`\`\`

Leave any empty ("") to hide that social icon.

### Customizing the AI Assistant

Edit the `aiAssistant` object:

\`\`\`typescript
export const aiAssistant = {
  name: "KIRA",                    // Short name shown in chat
  fullName: "Kevin's Intelligent Resource Assistant",  // Full name
  greeting: "Hey there! I'm KIRA...",  // First message visitors see
  
  // Update these to reflect your actual expertise
  knowledgeBase: {
    owner: "Your Name",
    location: "Your City, State",
    expertise: ["Skill 1", "Skill 2", "Skill 3"],
    // ... etc
  },
  
  // Suggested questions for visitors
  suggestions: [
    "Tell me about your book",
    "What services do you offer?",
    // Add more...
  ],
};
\`\`\`

## 🖼️ Images

Place your images in `/public/images/` and reference them as `/images/filename.png`

### Recommended Image Sizes

- **Project thumbnails**: 800 x 600 pixels
- **Book cover**: 600 x 800 pixels  
- **Open Graph (social sharing)**: 1200 x 630 pixels

### Image Naming Convention

Use lowercase with hyphens:
- ✅ `my-project-name.png`
- ❌ `My Project Name.PNG`

## 🔄 After Making Changes

### If running locally:
Changes appear automatically when you save the file.

### To update the live site:
1. Save your changes
2. Commit to git: `git add . && git commit -m "Updated content"`
3. Push to GitHub: `git push`
4. Vercel will automatically redeploy (takes ~1 minute)

## ❓ Need Help?

The configuration file has comments explaining each field. If you get stuck, the site will still work - just some content might be missing.
