import GradientText from "@/components/GradientText";
import ChatBot from "@/components/ChatBot";
import { useState } from "react";

export default function ChatPage() {
  const [isConversationStarted, setIsConversationStarted] = useState(false);

  return (
    <div
      className={
        isConversationStarted
          ? "py-20"
          : "min-h-screen flex flex-col items-center justify-center"
      }
    >
      {/* Header - disappears when conversation starts */}
      {!isConversationStarted && (
        <div className="text-center space-y-4 mb-8">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold">
            <GradientText>Ask AI</GradientText>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Ask me anything about my work, projects, and experience. Get instant
            answers about my skills, background, and achievements.
          </p>
        </div>
      )}

      {/* Chatbot */}
      <div className="flex justify-center w-full">
        <ChatBot onConversationStart={() => setIsConversationStarted(true)} />
      </div>
    </div>
  );
}
