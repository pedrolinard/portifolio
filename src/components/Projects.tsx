import { ArrowUpRightIcon, GithubIcon } from "./icons";

const project = {
  title: "Auth System",
  description:
    "Gateway de autenticação em Next.js que centraliza cadastro, login e emissão de tokens JWT (par de chaves RS256) para outras aplicações consumirem como camada de identidade — incluindo um serviço em Django que valida os tokens sem ter login próprio.",
  highlights: [
    "MFA via TOTP com QR code, 10 códigos de backup de uso único e rotação de chave de criptografia",
    "Refresh token com rotação e revogação de sessão em caso de reuso",
    "CSRF (double-submit cookie), rate limiting e CAPTCHA (Cloudflare Turnstile) contra força bruta",
    "Sessões ativas com tipo de dispositivo e localização aproximada, via headers de geo-IP nativos da Vercel",
    "89 testes automatizados rodando contra um servidor Next.js real",
  ],
  tags: ["Next.js", "TypeScript", "Django", "Prisma", "JWT / MFA", "PostgreSQL"],
  liveHref: "https://auth-gateway-kappa.vercel.app",
  codeHref: "https://github.com/pedrolinard/Auth-System",
};

export function Projects() {
  return (
    <section id="projetos" className="mx-auto max-w-5xl px-6 py-16">
      <p className="font-mono text-sm text-accent">03. projetos</p>
      <h2 className="mt-2 text-2xl font-bold sm:text-3xl">
        Um projeto que já construí
      </h2>

      <article className="card-hover mt-8 rounded-lg border border-border bg-surface p-6 sm:p-8">
        <h3 className="text-xl font-semibold text-foreground">
          {project.title}
        </h3>

        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted">
          {project.description}
        </p>

        <ul className="mt-5 grid gap-2.5 sm:grid-cols-2">
          {project.highlights.map((highlight) => (
            <li
              key={highlight}
              className="flex items-start gap-2 text-sm leading-relaxed text-muted"
            >
              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
              {highlight}
            </li>
          ))}
        </ul>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-surface-2 px-2.5 py-1 font-mono text-xs text-accent"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href={project.liveHref}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 rounded-[10px] bg-accent px-4 py-2.5 font-heading text-sm font-bold transition-[filter,transform] hover:-translate-y-0.5 hover:brightness-110"
            style={{ color: "var(--fixed-white)" }}
          >
            Ver demo <ArrowUpRightIcon className="h-4 w-4" />
          </a>
          <a
            href={project.codeHref}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 rounded-[10px] border border-border px-4 py-2.5 font-heading text-sm font-bold text-foreground transition-colors hover:border-accent hover:text-accent"
          >
            <GithubIcon className="h-4 w-4" /> Ver código
          </a>
        </div>
      </article>
    </section>
  );
}
