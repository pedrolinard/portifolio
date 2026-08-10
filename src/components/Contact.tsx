import { GithubIcon, LinkedinIcon, MailIcon } from "./icons";

export function Contact() {
  return (
    <section id="contato" className="mx-auto max-w-5xl px-6 py-20">
      <div className="border-glow rounded-2xl border border-border bg-surface px-8 py-14 text-center">
        <p className="font-mono text-sm text-accent">04. contato</p>
        <h2 className="mt-3 text-2xl font-bold sm:text-4xl">
          Vamos conversar?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-muted">
          Estou aberto a oportunidades de estágio e projetos em desenvolvimento
          back-end. Se quiser trocar uma ideia sobre tecnologia, é só chamar.
        </p>
        <a
          href="mailto:pedrolin4rd@gmail.com"
          className="mt-8 inline-block rounded-[10px] bg-accent px-6 py-3 font-heading text-sm font-bold transition-[filter,transform] hover:-translate-y-0.5 hover:brightness-110"
          style={{ color: "var(--fixed-white)" }}
        >
          pedrolin4rd@gmail.com
        </a>

        <div className="mt-8 flex items-center justify-center gap-6 text-muted">
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
      </div>
    </section>
  );
}
