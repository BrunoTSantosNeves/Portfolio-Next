"use client";

import { useTheme } from "@/context/ThemeContext";

export default function LayoutContent({ children }: { children: React.ReactNode }) {
  const { isDark } = useTheme(); // Obtém o tema do contexto

  return (
    <html lang="pt-br" className={isDark ? "dark" : ""}>
      <body>
        {children}
      </body>
    </html>
  );
}