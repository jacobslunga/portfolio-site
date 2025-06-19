import React, { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Send, Loader2, ExternalLink } from "lucide-react";

interface Message {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

interface ChatBotProps {
  onConversationStart?: () => void;
}

export default function ChatBot({ onConversationStart }: ChatBotProps) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [questionsRemaining, setQuestionsRemaining] = useState(10);
  const [error, setError] = useState<string | null>(null);
  const [isConversationStarted, setIsConversationStarted] = useState(false);
  const scrollAreaRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    if (scrollAreaRef.current) {
      const scrollElement = scrollAreaRef.current.querySelector(
        "[data-radix-scroll-area-viewport]"
      );
      if (scrollElement) {
        scrollElement.scrollTop = scrollElement.scrollHeight;
      }
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Mock responses for development
  const getMockResponse = (message: string): string => {
    const lowerMessage = message.toLowerCase();

    if (
      lowerMessage.includes("liu tentor") ||
      lowerMessage.includes("project")
    ) {
      return "LiU Tentor is my most successful project with over 4,300+ users! I built it solo using React, Vite, Tailwind CSS, shadcn/ui, PDF.js, and Supabase. The platform features exam statistics, customizable viewing modes, exam uploading, searching, and filtering. My biggest technical challenge was building a custom PDF renderer on top of PDF.js to meet the specific requirements.";
    }

    if (lowerMessage.includes("mejra") || lowerMessage.includes("saab")) {
      return "MEJRA was my thesis project for SAAB where I served as the technical architect. I created a great balance between efficiency and quality, leading technical decisions that contributed to the project's success. My work was highly appreciated by all team members, and I developed excellent communication and collaboration skills.";
    }

    if (
      lowerMessage.includes("gotstyle") ||
      lowerMessage.includes("react native")
    ) {
      return "GotStyle was my React Native learning project focused on outfit coordination. I used it to explore authentication, notifications, and bucket storage - taking a project from start to finish to understand the entire mobile development infrastructure. It was tested by several people on TestFlight but I didn't publish it to the App Store.";
    }

    if (
      lowerMessage.includes("typescript") ||
      lowerMessage.includes("favorite language")
    ) {
      return "TypeScript is my favorite programming language - I call it my 'native language in programming'! However, I have a strong interest in Go because of its simplicity and would love to learn more about it.";
    }

    if (
      lowerMessage.includes("teaching") ||
      lowerMessage.includes("liu") ||
      lowerMessage.includes("coach")
    ) {
      return "I have extensive teaching experience! At LiU, I taught TDDE18 (Introduction to C++ Programming for Master's students) while still in my bachelor's program. I assisted in labs, held lessons, and live-corrected exams. At Skill, I was a highly appreciated programming coach teaching web development, Scratch, and Python to children.";
    }

    if (lowerMessage.includes("dyno") || lowerMessage.includes("tractor")) {
      return "At Dyno Robotics, I developed a self-driving tractor system with camera integration and WebRTC live feeds to the dashboard. I was involved in the entire development process and learned extensively about customer relations and requirements management in agricultural technology.";
    }

    if (
      lowerMessage.includes("skills") ||
      lowerMessage.includes("technologies")
    ) {
      return "My tech stack includes React, TypeScript, Vite, Tailwind CSS, shadcn/ui, Supabase, React Native, C++, Python, Java, WebRTC, PDF.js, and web scraping techniques. I'm experienced in full-stack development, mobile development, software architecture, and have strong interests in open source and autonomous systems.";
    }

    if (
      lowerMessage.includes("challenge") ||
      lowerMessage.includes("difficult")
    ) {
      return "My most challenging technical problem was building a custom PDF renderer on top of PDF.js for LiU Tentor. This required deep understanding of PDF specifications and careful optimization to handle the scale of 4,300+ users while maintaining performance.";
    }

    return "I'm Jacob! I can tell you about my projects like LiU Tentor (4,300+ users), my work at companies like Dyno Robotics and my teaching experience, my favorite technologies like TypeScript, or any other aspects of my background and skills. What would you like to know?";
  };

  const sendMessage = async () => {
    if (!input.trim() || isLoading || questionsRemaining <= 0) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: input.trim(),
      isUser: true,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    const currentInput = input.trim();
    setInput("");
    setIsLoading(true);
    setError(null);

    // Mark conversation as started after first user message
    if (!isConversationStarted) {
      setIsConversationStarted(true);
      onConversationStart?.();
    }

    // Check if we're in development (localhost)
    const isDevelopment =
      window.location.hostname === "localhost" ||
      window.location.hostname === "127.0.0.1";

    if (isDevelopment) {
      // Mock response for development
      setTimeout(() => {
        const aiMessage: Message = {
          id: (Date.now() + 1).toString(),
          text: getMockResponse(currentInput),
          isUser: false,
          timestamp: new Date(),
        };

        setMessages((prev) => [...prev, aiMessage]);
        setQuestionsRemaining((prev) => prev - 1);
        setIsLoading(false);
        inputRef.current?.focus();
      }, 1000 + Math.random() * 1500); // Random delay between 1-2.5 seconds for realism
      return;
    }

    // Production Netlify function call
    try {
      const response = await fetch("/.netlify/functions/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: currentInput }),
      });

      if (!response.ok) {
        if (response.status === 404) {
          throw new Error(
            "Chat service is not available. Please make sure the Netlify function is deployed."
          );
        }
        const data = await response
          .json()
          .catch(() => ({ error: "Unknown error" }));
        throw new Error(data.error || `Server error: ${response.status}`);
      }

      const data = await response.json();

      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: data.response,
        isUser: false,
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, aiMessage]);
      setQuestionsRemaining(data.remaining);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong");
    } finally {
      setIsLoading(false);
      inputRef.current?.focus();
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <div
      className={`w-full mx-auto flex flex-col pb-32 ${
        isConversationStarted ? "max-w-3xl" : "max-w-2xl"
      }`}
    >
      {/* Messages */}
      <ScrollArea ref={scrollAreaRef} className="flex-1 mb-4">
        <div className="space-y-4 px-4 pb-20">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex gap-3 ${
                message.isUser ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`rounded-2xl px-4 py-3 transition-all duration-300 ${
                  message.isUser
                    ? "bg-background border ml-auto max-w-[80%]"
                    : isConversationStarted
                    ? "bg-muted max-w-[85%]"
                    : "bg-muted max-w-[80%]"
                }`}
              >
                <p className="text-sm whitespace-pre-wrap">{message.text}</p>
                <p className="text-xs opacity-70 mt-1">
                  {message.timestamp.toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </p>
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start">
              <div className="bg-muted rounded-lg px-3 py-2 flex items-center gap-2">
                <Loader2 className="w-4 h-4 animate-spin" />
                <span className="text-sm text-muted-foreground">
                  Thinking...
                </span>
              </div>
            </div>
          )}
        </div>
      </ScrollArea>

      {/* Error */}
      {error && (
        <div className="mb-4">
          <Alert variant="destructive">
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        </div>
      )}

      {/* Input */}
      <div className="flex-shrink-0 fixed bottom-5 left-5 right-5 z-50 flex justify-center">
        <div
          className={`w-full ${
            isConversationStarted ? "max-w-3xl" : "max-w-2xl"
          }`}
        >
          {/* Badges - only show when conversation started */}
          {isConversationStarted && (
            <div className="flex items-center justify-center gap-2 mb-3">
              <Badge variant="secondary" className="text-xs">
                {questionsRemaining} questions remaining
              </Badge>
              <a
                href="https://gemini.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block"
              >
                <Badge
                  variant="outline"
                  className="text-xs hover:bg-muted/50 transition-colors cursor-pointer flex items-center gap-1"
                >
                  Powered by Gemini
                  <ExternalLink className="w-3 h-3" />
                </Badge>
              </a>
            </div>
          )}

          {/* Input container with blur */}
          <div className="flex gap-3 px-4 py-3 rounded-full border border-border/50 bg-secondary/60 backdrop-blur-md shadow-lg">
            <input
              ref={inputRef}
              value={input}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setInput(e.target.value)
              }
              onKeyPress={handleKeyPress}
              placeholder={
                questionsRemaining > 0
                  ? "Ask me about my projects, skills, or experience..."
                  : "Question limit reached"
              }
              disabled={isLoading || questionsRemaining <= 0}
              className="flex-1 p-2 bg-transparent border-0 outline-none text-foreground placeholder:text-muted-foreground max-w-[calc(100%-3rem)]"
            />
            <Button
              onClick={sendMessage}
              disabled={!input.trim() || isLoading || questionsRemaining <= 0}
              size="icon"
              className="rounded-full bg-gradient-to-r from-purple-400/20 to-pink-400/20 dark:from-purple-400/30 dark:to-pink-400/30 border border-purple-200/30 dark:border-purple-400/20 backdrop-blur-sm hover:from-purple-400/30 hover:to-pink-400/30 flex-shrink-0"
            >
              {isLoading ? (
                <Loader2 className="w-4 h-4 animate-spin" />
              ) : (
                <Send className="w-4 h-4" />
              )}
            </Button>
          </div>
          {questionsRemaining <= 0 && (
            <p className="text-xs text-muted-foreground mt-2 text-center">
              You've reached the maximum number of questions. Refresh to reset.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
