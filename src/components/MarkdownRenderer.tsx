import { type ReactNode } from "react";

interface MarkdownRendererProps {
  content: string;
  className?: string;
}

export default function MarkdownRenderer({
  content,
  className = "",
}: MarkdownRendererProps) {
  const renderContent = (text: string): ReactNode[] => {
    const lines = text.split("\n");
    const elements: ReactNode[] = [];
    let key = 0;

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];

      // Skip empty lines
      if (line.trim() === "") {
        elements.push(<br key={key++} />);
        continue;
      }

      // Headers
      if (line.startsWith("## ")) {
        elements.push(
          <h2
            key={key++}
            className="text-2xl font-bold text-foreground mt-8 mb-4"
          >
            {processInlineFormatting(line.substring(3))}
          </h2>
        );
        continue;
      }

      if (line.startsWith("# ")) {
        elements.push(
          <h1
            key={key++}
            className="text-3xl font-bold text-foreground mt-8 mb-4"
          >
            {processInlineFormatting(line.substring(2))}
          </h1>
        );
        continue;
      }

      // List items
      if (line.startsWith("- ")) {
        // Check if we're starting a new list
        const isFirstListItem = i === 0 || !lines[i - 1]?.startsWith("- ");

        if (isFirstListItem) {
          // Start of list - collect all list items
          const listItems: ReactNode[] = [];
          let j = i;
          while (j < lines.length && lines[j].startsWith("- ")) {
            listItems.push(
              <li
                key={key++}
                className="text-lg text-muted-foreground leading-relaxed"
              >
                {processInlineFormatting(lines[j].substring(2))}
              </li>
            );
            j++;
          }

          elements.push(
            <ul
              key={key++}
              className="list-disc list-inside space-y-2 mb-6 ml-4"
            >
              {listItems}
            </ul>
          );

          // Skip the processed list items
          i = j - 1;
        }
        continue;
      }

      // Regular paragraphs
      elements.push(
        <p
          key={key++}
          className="text-lg text-muted-foreground leading-relaxed mb-6"
        >
          {processInlineFormatting(line)}
        </p>
      );
    }

    return elements;
  };

  const processInlineFormatting = (text: string): ReactNode[] => {
    const parts: ReactNode[] = [];
    let key = 0;

    // Process bold text first (**text**)
    const boldRegex = /\*\*(.*?)\*\*/g;
    let match;
    const processedBold: Array<{
      start: number;
      end: number;
      content: string;
    }> = [];

    while ((match = boldRegex.exec(text)) !== null) {
      processedBold.push({
        start: match.index,
        end: match.index + match[0].length,
        content: match[1],
      });
    }

    // Process italic text (*text*)
    const italicRegex = /(?<!\*)\*(?!\*)([^*]+?)\*(?!\*)/g;
    const processedItalic: Array<{
      start: number;
      end: number;
      content: string;
    }> = [];

    while ((match = italicRegex.exec(text)) !== null) {
      // Make sure this italic doesn't overlap with any bold
      const overlapsWithBold = processedBold.some(
        (bold) =>
          (match!.index >= bold.start && match!.index < bold.end) ||
          (match!.index + match![0].length > bold.start &&
            match!.index + match![0].length <= bold.end)
      );

      if (!overlapsWithBold) {
        processedItalic.push({
          start: match.index,
          end: match.index + match[0].length,
          content: match[1],
        });
      }
    }

    // Combine and sort all formatting
    const allFormatting = [
      ...processedBold.map((b) => ({ ...b, type: "bold" as const })),
      ...processedItalic.map((i) => ({ ...i, type: "italic" as const })),
    ].sort((a, b) => a.start - b.start);

    // Build the final output
    let lastIndex = 0;

    for (const format of allFormatting) {
      // Add text before this formatting
      if (format.start > lastIndex) {
        parts.push(text.substring(lastIndex, format.start));
      }

      // Add the formatted text
      if (format.type === "bold") {
        parts.push(
          <strong key={key++} className="text-foreground font-semibold">
            {format.content}
          </strong>
        );
      } else if (format.type === "italic") {
        parts.push(
          <em key={key++} className="italic">
            {format.content}
          </em>
        );
      }

      lastIndex = format.end;
    }

    // Add remaining text
    if (lastIndex < text.length) {
      parts.push(text.substring(lastIndex));
    }

    return parts.length > 0 ? parts : [text];
  };

  return (
    <div className={`prose prose-lg max-w-none ${className}`}>
      {renderContent(content)}
    </div>
  );
}
