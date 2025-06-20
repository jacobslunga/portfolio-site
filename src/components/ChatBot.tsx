import React, { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Send, Loader2, ExternalLink } from "lucide-react";
import ReactMarkdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import remarkGfm from "remark-gfm";
import remarkBreaks from "remark-breaks";
import { Link } from "react-router-dom";

interface Message {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

interface ChatBotProps {
  onConversationStart?: () => void;
}

// Markdown renderer with basic styling
const MarkdownRenderer: React.FC<{ content: string }> = ({ content }) => (
  <div className="text-base text-foreground prose prose-sm max-w-none dark:prose-invert">
    <ReactMarkdown
      remarkPlugins={[remarkGfm, remarkBreaks]}
      rehypePlugins={[rehypeHighlight]}
    >
      {content}
    </ReactMarkdown>
  </div>
);

// Simple typing dots for other use cases
const TypingAnimation = () => (
  <div className="flex space-x-1">
    <div className="w-2 h-2 bg-muted-foreground/60 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
    <div className="w-2 h-2 bg-muted-foreground/60 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
    <div className="w-2 h-2 bg-muted-foreground/60 rounded-full animate-bounce"></div>
  </div>
);

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

  // Function to refresh question count from backend
  const refreshQuestionCount = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/remaining-questions`);
      if (response.ok) {
        const data = await response.json();
        setQuestionsRemaining(data.questions_remaining);
        return data.questions_remaining;
      } else {
        // Fallback to default
        setQuestionsRemaining(10);
        return 10;
      }
    } catch (err) {
      console.warn("Could not load question count:", err);
      // Keep default of 10
      setQuestionsRemaining(10);
      return 10;
    }
  };

  // Load initial question count from backend
  useEffect(() => {
    refreshQuestionCount();
  }, []);

  // Refresh question count when component becomes visible again
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (!document.hidden) {
        refreshQuestionCount();
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  // Backend API configuration - use environment variable or fallback to localhost in dev
  const API_BASE_URL =
    import.meta.env.VITE_API_URL ||
    (import.meta.env.DEV
      ? "http://localhost:8000"
      : "https://portfolio-backend-production-6f35.up.railway.app");

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

    // Auto-scroll when sending a message
    setTimeout(() => {
      scrollToBottom();
    }, 100);

    // Mark conversation as started after first user message
    if (!isConversationStarted) {
      setIsConversationStarted(true);
      onConversationStart?.();
    }

    try {
      const response = await fetch(`${API_BASE_URL}/ask`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ question: currentInput }),
      });

      if (!response.ok) {
        if (response.status === 429) {
          throw new Error(
            "You've reached the maximum number of questions (10). Thank you for your interest in Jacob's portfolio!"
          );
        }
        throw new Error(`Server error: ${response.status}`);
      }

      // Check for remaining questions from response headers
      const remainingFromHeader = response.headers.get("X-Questions-Remaining");
      if (remainingFromHeader) {
        setQuestionsRemaining(parseInt(remainingFromHeader));
      }

      // Read the entire response (no streaming UI, just wait for complete response)
      const reader = response.body?.getReader();
      const decoder = new TextDecoder();
      let fullResponse = "";

      if (reader) {
        try {
          while (true) {
            const { done, value } = await reader.read();
            if (done) break;

            const chunk = decoder.decode(value, { stream: true });
            fullResponse += chunk;
          }
        } finally {
          reader.releaseLock();
        }
      }

      // Clean up the response by removing the remaining questions comment
      const cleanResponse = fullResponse
        .replace(/<!-- REMAINING: \d+ -->/, "")
        .trim();

      // Add the complete response as a new message
      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: cleanResponse,
        isUser: false,
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, assistantMessage]);

      // Also refresh the question count to ensure it's up to date
      await refreshQuestionCount();

      setIsLoading(false);
      inputRef.current?.focus();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong");
      setIsLoading(false);
      inputRef.current?.focus();
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
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
                    ? "bg-secondary border ml-auto max-w-[80%]"
                    : isConversationStarted
                    ? "bg-background max-w-[85%]"
                    : "bg-background max-w-[80%]"
                }`}
              >
                {message.isUser ? (
                  <p className="text-base whitespace-pre-wrap leading-relaxed">
                    {message.text}
                  </p>
                ) : (
                  <MarkdownRenderer content={message.text} />
                )}
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
              <div className="bg-background rounded-2xl px-4 py-3 flex items-center gap-3">
                <TypingAnimation />
                <span className="text-base text-muted-foreground">
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
              <Link to="https://gemini.google.com" target="_blank">
                <Badge
                  variant="default"
                  className="text-xs bg-[#5481EC] hover:bg-[#5481EC]/80 flex items-center gap-1"
                >
                  Powered by Gemini
                  <ExternalLink className="w-3 h-3" />
                </Badge>
              </Link>
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
              onKeyDown={handleKeyDown}
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

          {/* AI Disclaimer */}
          {questionsRemaining > 0 && (
            <p className="text-xs text-muted-foreground mt-2 text-center max-w-md mx-auto leading-relaxed">
              AI can make mistakes and may hallucinate information. Please
              verify important details independently.
            </p>
          )}

          {/* Rate limit message */}
          {questionsRemaining <= 0 && (
            <p className="text-xs text-muted-foreground mt-2 text-center">
              You've reached the maximum number of questions (10). The limit
              limit per visitor.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
