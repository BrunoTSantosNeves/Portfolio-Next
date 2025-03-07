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
}