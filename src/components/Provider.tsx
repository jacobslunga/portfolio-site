import { ThemeProvider } from "@/context/ThemeContext";

export default function Provider({ children }: { children: React.ReactNode }) {
  return <ThemeProvider>{children}</ThemeProvider>;
}
