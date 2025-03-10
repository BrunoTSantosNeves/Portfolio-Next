"use client";

import { useMounted } from "@/hooks/useMounted";

export default function Home() {
  const isMounted = useMounted();

  if (!isMounted) {
    return null; 
  }

  return (
    <main>
      <h1>Bem-vindo ao Meu Portfólio</h1>
      <p>Aqui você encontrará meus projetos, habilidades e formas de contato.</p>
      <footer>© 2025 Bruno Tonetti. Todos os direitos reservados.</footer>
    </main>
  );
}