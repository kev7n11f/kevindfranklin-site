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

// Build context about Kevin for the AI
function buildKnowledgeContext(): string {
  const projectsInfo = projects.map(p => `- ${p.title}: ${p.description} (Tags: ${p.tags.join(', ')})`).join('\n');
  const booksInfo = books.map(b => `- "${b.title}: ${b.subtitle}" - ${b.description} Highlights: ${b.highlights.join(', ')}`).join('\n');

  return `You are KIRA (${aiAssistant.fullName}), Kevin D. Franklin's AI assistant on his personal website.

ABOUT KEVIN:
- Name: ${siteConfig.hero.name}
- Role: ${siteConfig.hero.tagline}
- Location: ${aiAssistant.knowledgeBase.location}
- Bio: ${siteConfig.hero.description}
- Expertise: ${aiAssistant.knowledgeBase.expertise.join(', ')}
- Current Ventures: ${aiAssistant.knowledgeBase.currentVentures.join(', ')}

KEVIN'S PROJECTS:
${projectsInfo}

KEVIN'S BOOKS:
${booksInfo}

SERVICES OFFERED:
${contact.services.join(', ')}

CONTACT INFO:
- Email: ${contact.email}
${contact.calendlyLink ? `- Calendly: ${contact.calendlyLink}` : ''}

YOUR PERSONALITY:
- Be ${aiAssistant.personality}
- Keep responses concise but helpful (2-4 paragraphs max)
- Use a conversational, warm tone
- When appropriate, guide visitors toward contacting Kevin or exploring his work
- You can help with lead qualification by understanding visitor needs
- If someone seems like a potential client or collaborator, encourage them to reach out

IMPORTANT:
- Only discuss topics related to Kevin and his work
- If asked about unrelated topics, politely redirect to Kevin's expertise
- Never make up information - if unsure, suggest they contact Kevin directly`;
}

// Generate response using Claude API
async function generateLocalResponse(query: string): Promise<string> {
  try {
    const response = await fetch('/api/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        message: query,
        context: buildKnowledgeContext(),
      }),
    });

    if (!response.ok) {
      throw new Error('API request failed');
    }

    const data = await response.json();
    return data.response;
  } catch (error) {
    console.error('Error calling AI API:', error);
    // Fallback to a helpful default response
    return `I apologize, but I'm having a brief technical moment! 😅

In the meantime, here's what I can tell you about Kevin:

• He's the author of "The Agential Gold Rush" - a comprehensive guide to AI wealth-building
• He's the CTO of GrieveHub Labs, building AI tools for workplace advocacy
• He offers consulting services in AI strategy, web development, and more

Feel free to reach out directly at ${contact.email}, or try asking me again in a moment!`;
  }
}
