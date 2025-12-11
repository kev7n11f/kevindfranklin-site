"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  MessageCircle,
  X,
  Send,
  Loader2,
  Sparkles,
  ChevronDown,
  User,
  Bot,
} from "lucide-react";
import { aiAssistant, siteConfig, projects, books, contact } from "@/content/siteConfig";

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
}

export default function AIAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showGreeting, setShowGreeting] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Add initial greeting when chat opens for the first time
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setMessages([
        {
          id: "greeting",
          role: "assistant",
          content: aiAssistant.greeting,
          timestamp: new Date(),
        },
      ]);
    }
  }, [isOpen, messages.length]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: input.trim(),
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      // Generate AI response using local knowledge
      const response = await generateLocalResponse(input.trim());
      
      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: response,
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, assistantMessage]);
    } catch (error) {
      console.error("Error generating response:", error);
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: "I apologize, but I encountered an issue. Please try asking your question again, or feel free to reach out directly via email!",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleSuggestionClick = (suggestion: string) => {
    setInput(suggestion);
  };

  return (
    <>
      {/* Floating Avatar Button */}
      <motion.div
        className="ai-assistant-bubble"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1.5, type: "spring", stiffness: 200 }}
      >
        <motion.button
          onClick={() => {
            setIsOpen(!isOpen);
            setShowGreeting(false);
          }}
          className={`relative w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300 ${
            isOpen
              ? "bg-secondary border border-primary/30"
              : "bg-gradient-to-br from-primary to-primary-dark glow-strong"
          }`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          aria-label={isOpen ? "Close assistant" : "Open assistant"}
        >
          <AnimatePresence mode="wait">
            {isOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <X className="w-6 h-6 text-foreground" />
              </motion.div>
            ) : (
              <motion.div
                key="avatar"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0 }}
                className="relative"
              >
                {/* Avatar face */}
                <div className="w-10 h-10 rounded-full bg-secondary-dark flex items-center justify-center">
                  <span className="text-lg font-display font-bold text-primary">K</span>
                </div>
                {/* Animated rings */}
                <motion.div
                  className="absolute inset-0 rounded-full border-2 border-primary/50"
                  animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </motion.div>
            )}
          </AnimatePresence>

          {/* Notification dot */}
          {!isOpen && showGreeting && (
            <motion.span
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="absolute -top-1 -right-1 w-4 h-4 bg-accent rounded-full flex items-center justify-center"
            >
              <span className="text-[10px] text-white">1</span>
            </motion.span>
          )}
        </motion.button>

        {/* Greeting tooltip */}
        <AnimatePresence>
          {!isOpen && showGreeting && (
            <motion.div
              initial={{ opacity: 0, x: 20, scale: 0.9 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 20, scale: 0.9 }}
              className="absolute bottom-full right-0 mb-4 w-64 p-4 glass-dark rounded-2xl rounded-br-none"
            >
              <div className="flex items-start gap-3">
                <Sparkles className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-medium text-foreground mb-1">
                    Hi! I&apos;m {aiAssistant.name}
                  </p>
                  <p className="text-xs text-foreground/60">
                    Click to chat with me about Kevin&apos;s work!
                  </p>
                </div>
              </div>
              <button
                onClick={() => setShowGreeting(false)}
                className="absolute top-2 right-2 p-1 hover:bg-white/10 rounded-full transition-colors"
              >
                <X className="w-3 h-3 text-foreground/50" />
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="ai-chat-container"
          >
            <div className="glass-dark rounded-3xl overflow-hidden flex flex-col h-[500px] max-h-[70vh] shadow-2xl">
              {/* Header */}
              <div className="px-6 py-4 border-b border-white/10 flex items-center gap-3">
                <div className="relative">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center">
                    <span className="text-sm font-display font-bold text-secondary-dark">K</span>
                  </div>
                  <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-green-500 rounded-full border-2 border-secondary" />
                </div>
                <div className="flex-1">
                  <h3 className="font-display font-semibold text-sm">{aiAssistant.name}</h3>
                  <p className="text-xs text-foreground/50">{aiAssistant.fullName}</p>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 hover:bg-white/10 rounded-lg transition-colors"
                >
                  <ChevronDown className="w-5 h-5 text-foreground/50" />
                </button>
              </div>

              {/* Messages */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-hide">
                {messages.map((message) => (
                  <motion.div
                    key={message.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`flex gap-3 ${
                      message.role === "user" ? "flex-row-reverse" : ""
                    }`}
                  >
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${
                        message.role === "user"
                          ? "bg-accent/20"
                          : "bg-primary/20"
                      }`}
                    >
                      {message.role === "user" ? (
                        <User className="w-4 h-4 text-accent" />
                      ) : (
                        <Bot className="w-4 h-4 text-primary" />
                      )}
                    </div>
                    <div
                      className={`max-w-[80%] px-4 py-3 rounded-2xl ${
                        message.role === "user"
                          ? "bg-accent/20 text-foreground rounded-tr-none"
                          : "bg-white/5 text-foreground/90 rounded-tl-none"
                      }`}
                    >
                      <p className="text-sm leading-relaxed whitespace-pre-wrap">
                        {message.content}
                      </p>
                    </div>
                  </motion.div>
                ))}

                {isLoading && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex gap-3"
                  >
                    <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                      <Bot className="w-4 h-4 text-primary" />
                    </div>
                    <div className="px-4 py-3 rounded-2xl rounded-tl-none bg-white/5">
                      <div className="flex gap-1">
                        <motion.span
                          className="w-2 h-2 bg-primary/50 rounded-full"
                          animate={{ y: [0, -5, 0] }}
                          transition={{ duration: 0.6, repeat: Infinity }}
                        />
                        <motion.span
                          className="w-2 h-2 bg-primary/50 rounded-full"
                          animate={{ y: [0, -5, 0] }}
                          transition={{ duration: 0.6, repeat: Infinity, delay: 0.1 }}
                        />
                        <motion.span
                          className="w-2 h-2 bg-primary/50 rounded-full"
                          animate={{ y: [0, -5, 0] }}
                          transition={{ duration: 0.6, repeat: Infinity, delay: 0.2 }}
                        />
                      </div>
                    </div>
                  </motion.div>
                )}

                <div ref={messagesEndRef} />
              </div>

              {/* Suggestions */}
              {messages.length === 1 && (
                <div className="px-4 pb-2">
                  <div className="flex flex-wrap gap-2">
                    {aiAssistant.suggestions.map((suggestion) => (
                      <button
                        key={suggestion}
                        onClick={() => handleSuggestionClick(suggestion)}
                        className="px-3 py-1.5 text-xs bg-white/5 hover:bg-primary/20 hover:text-primary border border-white/10 rounded-full transition-all duration-200"
                      >
                        {suggestion}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Input */}
              <div className="p-4 border-t border-white/10">
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Ask me anything..."
                    className="flex-1 px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all duration-300 text-sm text-foreground placeholder:text-foreground/30"
                    disabled={isLoading}
                  />
                  <button
                    onClick={handleSend}
                    disabled={!input.trim() || isLoading}
                    className="px-4 py-3 bg-primary hover:bg-primary-light disabled:opacity-50 disabled:cursor-not-allowed rounded-xl transition-all duration-300"
                  >
                    {isLoading ? (
                      <Loader2 className="w-5 h-5 text-secondary-dark animate-spin" />
                    ) : (
                      <Send className="w-5 h-5 text-secondary-dark" />
                    )}
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

// Local response generation based on site content
async function generateLocalResponse(query: string): Promise<string> {
  const q = query.toLowerCase();
  
  // Small delay to feel more natural
  await new Promise(resolve => setTimeout(resolve, 500 + Math.random() * 500));

  // Book-related queries
  if (q.includes("book") || q.includes("agential") || q.includes("gold rush") || q.includes("read") || q.includes("buy")) {
    const book = books[0];
    return `Kevin's book "${book.title}: ${book.subtitle}" is a comprehensive ${aiAssistant.knowledgeBase.book.pages}-page guide to building wealth in the AI era.\n\n${book.description}\n\nKey highlights include:\n${book.highlights.map(h => `• ${h}`).join('\n')}\n\nWould you like me to tell you more about specific topics covered in the book, or help you find where to purchase it?`;
  }

  // GrieveHub queries
  if (q.includes("grievehub") || q.includes("grieve") || q.includes("union") || q.includes("workplace") || q.includes("contract")) {
    const grievehub = projects.find(p => p.id === "grievehub");
    return `GrieveHub Labs is Kevin's latest venture as CTO and co-founder. ${grievehub?.description}\n\nThe platform uses AI to help workplace organization members navigate complex legal documents and processes that would typically require expensive legal consultation.\n\nWould you like to know more about the technology behind GrieveHub, or Kevin's role as CTO?`;
  }

  // Too Humble Couture queries
  if (q.includes("humble") || q.includes("couture") || q.includes("clothing") || q.includes("fashion") || q.includes("streetwear")) {
    const humble = projects.find(p => p.id === "too-humble-couture");
    return `Too Humble Couture is Kevin's fashion brand! ${humble?.description}\n\nIt's a creative outlet that combines Kevin's entrepreneurial spirit with unique, playful designs. The brand features premium streetwear with a tongue-in-cheek attitude.\n\nWant to know more about the brand or where to shop?`;
  }

  // Projects general queries
  if (q.includes("project") || q.includes("work") || q.includes("build") || q.includes("venture") || q.includes("company")) {
    const projectList = projects.map(p => `• ${p.title}: ${p.description.split('.')[0]}`).join('\n');
    return `Kevin is currently working on several exciting ventures:\n\n${projectList}\n\nHis main focus right now is GrieveHub Labs, where he serves as CTO. Which project would you like to learn more about?`;
  }

  // AI services/consulting queries
  if (q.includes("service") || q.includes("help") || q.includes("consult") || q.includes("hire") || q.includes("work with")) {
    return `Kevin offers several services:\n\n${contact.services.map(s => `• ${s}`).join('\n')}\n\nWith his expertise in AI, web development, and business automation, Kevin can help businesses leverage technology for growth and efficiency.\n\nWould you like me to help you get in touch with Kevin about a specific service?`;
  }

  // About Kevin queries
  if (q.includes("who") || q.includes("about") || q.includes("kevin") || q.includes("background") || q.includes("bio")) {
    return `${siteConfig.hero.name} is an ${siteConfig.hero.tagline.toLowerCase()} based in ${aiAssistant.knowledgeBase.location}.\n\nHis areas of expertise include:\n${aiAssistant.knowledgeBase.expertise.map(e => `• ${e}`).join('\n')}\n\nCurrently, he's involved in:\n${aiAssistant.knowledgeBase.currentVentures.map(v => `• ${v}`).join('\n')}\n\nWhat aspect of Kevin's work interests you most?`;
  }

  // Contact queries
  if (q.includes("contact") || q.includes("email") || q.includes("reach") || q.includes("talk") || q.includes("connect")) {
    return `You can reach Kevin through:\n\n• Email: ${contact.email}\n• The contact form on this website\n${contact.calendlyLink ? `• Schedule a call via Calendly\n` : ''}\nHe typically responds within 24-48 hours for business inquiries.\n\nWould you like me to help you draft a message, or is there something specific you'd like to discuss with Kevin?`;
  }

  // Location queries
  if (q.includes("where") || q.includes("location") || q.includes("based") || q.includes("live") || q.includes("louisiana")) {
    return `Kevin is based in ${aiAssistant.knowledgeBase.location}. While he operates primarily from Louisiana, he works with clients and collaborators across the globe remotely.\n\nIs there something specific you'd like to know about Kevin's work or availability?`;
  }

  // AI-related queries
  if (q.includes("ai") || q.includes("artificial intelligence") || q.includes("machine learning") || q.includes("automation")) {
    return `AI is Kevin's primary focus! He's deeply passionate about helping others understand and capitalize on the AI revolution.\n\nHis expertise includes:\n• Building AI-powered business solutions\n• Consulting on AI strategy and implementation\n• Teaching AI monetization through his book\n• Developing practical AI tools like GrieveHub\n\nHis book "The Agential Gold Rush" covers 100+ ways to build wealth using AI. Would you like to know more about specific AI topics or how Kevin can help with your AI needs?`;
  }

  // Greeting responses
  if (q.includes("hello") || q.includes("hi") || q.includes("hey") || q === "yo" || q.includes("sup")) {
    return `Hey there! Great to chat with you! 👋\n\nI'm ${aiAssistant.name}, Kevin's AI assistant. I can help you learn about:\n• Kevin's book "The Agential Gold Rush"\n• His ventures like GrieveHub Labs and Too Humble Couture\n• His consulting services\n• How to get in touch\n\nWhat would you like to know?`;
  }

  // Thank you responses
  if (q.includes("thank") || q.includes("thanks") || q.includes("appreciate")) {
    return `You're very welcome! 😊 It's my pleasure to help.\n\nIs there anything else you'd like to know about Kevin's work, projects, or services? I'm here to help!`;
  }

  // Default response
  return `That's a great question! While I have extensive knowledge about Kevin's work, I want to make sure I give you the most accurate answer.\n\nHere are some things I can definitely help you with:\n${aiAssistant.suggestions.map(s => `• ${s}`).join('\n')}\n\nOr if you'd prefer, I can help you get in touch with Kevin directly at ${contact.email}.\n\nWhat would you like to explore?`;
}
