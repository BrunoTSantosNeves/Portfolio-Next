"use client";

import { useTheme } from "@/context/ThemeContext";

export default function LayoutContent({ children }: { children: React.ReactNode }) {
  const { isDark } = useTheme();

  return <main className={isDark ? "dark" : ""}>{children}</main>;
}