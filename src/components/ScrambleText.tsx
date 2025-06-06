// components/ScrambleText.tsx
import { useState, useEffect } from "react";

interface ScrambleTextProps {
  text: string;
  delay?: number;
  className?: string;
}

export const ScrambleText = ({
  text,
  delay = 0,
  className = "",
}: ScrambleTextProps) => {
  const [displayText, setDisplayText] = useState(text);
  const [, setIsScrambling] = useState(false);

  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*";

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsScrambling(true);
      let iterations = 0;
      const maxIterations = 10;

      const interval = setInterval(() => {
        setDisplayText(() => {
          return text
            .split("")
            .map((char) => {
              if (char === " ") return " ";

              if (Math.random() < iterations / maxIterations) {
                return char;
              }

              return characters[Math.floor(Math.random() * characters.length)];
            })
            .join("");
        });

        iterations++;

        if (iterations >= maxIterations) {
          clearInterval(interval);
          setDisplayText(text);
          setIsScrambling(false);
        }
      }, 50);

      return () => clearInterval(interval);
    }, delay);

    return () => clearTimeout(timer);
  }, [text, delay]);

  return <span className={className}>{displayText}</span>;
};
