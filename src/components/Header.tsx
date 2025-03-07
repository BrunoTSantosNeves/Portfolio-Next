"use client"

import { useState, useEffect } from "react";
import { Orbitron as OrbitronStencilOneFont } from "next/font/google";
import { PrimaryInputWSearchIcon} from "./primary-input";
import { CartControl } from "./cart-control";
import { useFilter } from "@/hooks/useFilter";

const OrbitronStencilOne = OrbitronStencilOneFont({
    subsets: ["latin"],
    weight: [ "400"],
});

export function Header() {
    const { setSearch, search } = useFilter();
    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        const storedTheme = localStorage.getItem("theme");
        if (storedTheme) {
            setIsDark(storedTheme === "dark");
            if (storedTheme === "dark") {
              document.documentElement.classList.add("dark");
            } else {
              document.documentElement.classList.remove("dark");
            }
          } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
            setIsDark(true);
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
          }
        }, []);

    const toggleTheme = () => {
        if (isDark) {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("theme", "light");
        }
        else {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
        }
        setIsDark(!isDark);
};

return (
    <header className="fixed top-0 left-0 right-0 flex items-center justify-between p-[20px] px-[35px] h-[80px] bg-header shadow-md z-50">
      {/* Logo */}
      <a
        className={`${OrbitronStencilOne.className} text-[40px] font-normal leading-[150%] text-[var(--logo--color)]`}
        href="/"
      >
        BrunotDev
      </a>

      {/* Área de busca e controle do carrinho */}
      <div className="flex items-center justify-center gap-[65px]">
        <PrimaryInputWSearchIcon
          value={search}
          handlechange={setSearch}
          placeholder="Procurando algo específico"
        />
        <CartControl />
      </div>

      {/* Botão de alternância de tema */}
      <button
        onClick={toggleTheme}
        className="p-2 rounded bg-accent text-white transition-colors"
      >
        {isDark ? "Light" : "Dark"}
      </button>
    </header>
  );
}


