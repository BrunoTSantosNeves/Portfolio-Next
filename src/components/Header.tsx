"use client";

import styled from "styled-components";
import { useFilter } from "@/hooks/useFilter";
import { Ubuntu } from "next/font/google";
import { useTheme } from "@/context/ThemeContext";

const ubuntu = Ubuntu({ subsets: ["latin"], weight: ["400", "700"] });

const headerBgLight = "#f5f5f5";
const headerBgDark = "#1e1e1e";
const logoColor = "#3b82f6";

const TagHeader = styled.header<{ $isDark: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 35px;
  height: 80px;
  background-color: ${({ $isDark }) => ($isDark ? headerBgDark : headerBgLight)};
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 50;
`;

const Logo = styled.a`
  font-family: ${ubuntu.style.fontFamily};
  color: ${logoColor};
  font-weight: 700;
  font-size: 40px;
  line-height: 150%;
  text-decoration: none;
`;

const ThemeToggleButton = styled.button`
  padding: 8px 12px;
  border-radius: 4px;
  border: none;
  background-color: ${logoColor};
  color: white;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    opacity: 0.9;
  }
`;

export function Header() {
  const { setSearch, search } = useFilter();
  const { isDark, toggleTheme } = useTheme();

  return (
    <TagHeader $isDark={isDark}>
      <Logo href="/">Bruno.t Dev</Logo>
      <ThemeToggleButton onClick={toggleTheme}>
        {isDark ? "Light" : "Dark"}
      </ThemeToggleButton>
    </TagHeader>
  );
}
