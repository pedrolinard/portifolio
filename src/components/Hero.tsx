import { GithubIcon, LinkedinIcon, MailIcon } from "./icons";

export function Hero() {
  return (
    <section id="top" className="mx-auto max-w-5xl px-6 pb-20 pt-16 sm:pt-24">
      <p className="font-mono text-sm text-accent">
        <span className="cursor-blink">▍</span> olá, meu nome é
      </p>
      <h1 className="mt-4 text-4xl font-bold tracking-tight text-glow sm:text-6xl">
        Pedro Linard
      </h1>
      <h2 className="mt-2 text-2xl font-semibold text-muted sm:text-4xl">
        Desenvolvedor Back-End
      </h2>
      <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
        Estudante de ADS com foco em back-end, construindo APIs REST e
        aplicações web com Java (Spring Boot) e Python (Django) — sempre
        buscando arquitetura limpa, boas práticas e código organizado.
      </p>

      <div className="mt-10 flex flex-wrap items-center gap-4">
        <a
          href="#projetos"
          className="rounded-md bg-accent px-5 py-2.5 font-mono text-sm font-medium text-background transition-opacity hover:opacity-90"
        >
          Ver projetos
        </a>
        <a
          href="#contato"
          className="rounded-md border border-border px-5 py-2.5 font-mono text-sm text-foreground transition-colors hover:border-accent hover:text-accent"
        >
          Entrar em contato
        </a>
      </div>

      <div className="mt-10 flex items-center gap-5 text-muted">
        <a
          href="https://github.com/pedrolinard"
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub"
          className="transition-colors hover:text-accent"
        >
          <GithubIcon className="h-5 w-5" />
        </a>
        <a
          href="https://www.linkedin.com/in/pedrolinard/"
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn"
          className="transition-colors hover:text-accent"
        >
          <LinkedinIcon className="h-5 w-5" />
        </a>
        <a
          href="mailto:pedrolin4rd@gmail.com"
          aria-label="Email"
          className="transition-colors hover:text-accent"
        >
          <MailIcon className="h-5 w-5" />
        </a>
      </div>
    </section>
  );
}
