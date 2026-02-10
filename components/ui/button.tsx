interface ButtonProps {
  variant?: "primary" | "secondary";
  className?: string;
  children?: React.ReactNode;
  onClick?: () => void;
}

export const Button = ({
  variant = "primary",
  className,
  children,
  onClick,
}: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`rounded-full font-medium cursor-pointer ${variant === "primary" ? "bg-black/5 dark:bg-white/10 hover:bg-black/10 dark:hover:bg-white/20" : "bg-white/10 dark:bg-black/10 hover:bg-white/20 dark:hover:bg-black/20"} transition ease-in-out duration-300 px-5 py-1 ${className}`}
    >
      {children}
    </button>
  );
};
