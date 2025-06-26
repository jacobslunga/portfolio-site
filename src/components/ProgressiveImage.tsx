import { useState } from "react";

export function ProgressiveImage({
  src,
  alt,
  className = "",
  style = {},
  aspect = false,
}: {
  src: string;
  alt: string;
  className?: string;
  style?: React.CSSProperties;
  aspect?: boolean;
}) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div
      className={`relative overflow-hidden ${aspect ? "aspect-[4/3]" : ""} ${
        !loaded ? "bg-muted" : ""
      }`}
      style={style}
    >
      {!loaded && (
        <div className="absolute inset-0 z-10 animate-shimmer rounded-xl" />
      )}
      <img
        src={src}
        alt={alt}
        className={`w-full h-full object-cover transition-opacity duration-500 ${
          loaded ? "opacity-100" : "opacity-0"
        } ${className}`}
        onLoad={() => setLoaded(true)}
        draggable={false}
      />
    </div>
  );
}

export default ProgressiveImage;
