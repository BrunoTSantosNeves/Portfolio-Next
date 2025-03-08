export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1 className="text-3xl font-bold">Bem-vindo ao Meu Portfólio</h1>
        <p className="text-lg text-center sm:text-left">
          Aqui você encontrará meus projetos, habilidades e formas de contato.
        </p>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <p className="text-sm">© {new Date().getFullYear()} Bruno Tonetti. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}
