import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    const handleMouseMove = (e: MouseEvent) => {
      requestAnimationFrame(() => {
        cursor.style.left = e.clientX + "px";
        cursor.style.top = e.clientY + "px";
      });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;

      // Check if the element or its parent is interactive
      const isInteractive = target.closest(
        'button, a, input, textarea, select, [role="button"], .cursor-pointer, [data-cursor="pointer"]'
      );

      // Check if we're directly over text content (not just in a text container)
      const isOverText =
        target.nodeType === Node.TEXT_NODE ||
        (target.tagName &&
          ["P", "H1", "H2", "H3", "H4", "H5", "H6", "SPAN"].includes(
            target.tagName
          ) &&
          target.textContent?.trim() &&
          !isInteractive);

      // Remove all cursor classes first
      cursor.classList.remove("hover", "text");

      if (isInteractive) {
        cursor.classList.add("hover");
      } else if (isOverText) {
        cursor.classList.add("text");
      }
      // Default state: no additional classes (just the base custom-cursor)
    };

    // Add event listeners
    document.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.addEventListener("mouseover", handleMouseOver, { passive: true });

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  return <div ref={cursorRef} className="custom-cursor" />;
}
