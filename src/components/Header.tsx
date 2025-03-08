"use client";

import { useEffect, useState } from "react";
import styled from "styled-components";
import { PrimaryInput } from "./primary-input";
import { useFilter } from "@/hooks/useFilter";
import { Ubuntu } from "next/font/google";

// Importando a fonte Ubuntu
const ubuntu = Ubuntu({ subsets: ["latin"], weight: ["400", "700"] });

// Exemplo de configuração das variáveis de tema via CSS custom properties (você pode definir isso globalmente)
const headerBgLight = "#f5f5f5";
const headerBgDark = "#1e1e1e";
const logoColor = "#3b82f6";

// Container do Header
const TagHeader = styled.header<{ isDark: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 35px;
  height: 80px;
  background-color: ${({ isDark }) => (isDark ? headerBgDark : headerBgLight)};
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 50;
`;

// Logo com fonte Ubuntu
const Logo = styled.a`
  font-family: ${ubuntu.style.fontFamily};
  color: ${logoColor};
  font-weight: 700;
  font-size: 40px;
  line-height: 150%;
  text-decoration: none;
`;

// Botão de alternância de tema
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
  const [isDark, setIsDark] = useState(false);

  // Verifica a preferência armazenada no localStorage ao montar o componente
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      setIsDark(storedTheme === "dark");
      if (storedTheme === "dark") {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    }
  }, []);

  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
    setIsDark(!isDark);
  };

  return (
    <TagHeader isDark={isDark}>
      {/* Logo */}
      <Logo href="/">BrunotDev</Logo>

      {/* Área de busca e controle do carrinho */}
      <div style={{ display: "flex", alignItems: "center", gap: "65px" }}>
        <PrimaryInput
          value={search}
          handlechange={setSearch}
          placeholder="Pesquisar projeto"
        />
      </div>

      {/* Botão de alternância de tema */}
      <ThemeToggleButton onClick={toggleTheme}>
        {isDark ? "Light" : "Dark"}
      </ThemeToggleButton>
    </TagHeader>
  );
}
