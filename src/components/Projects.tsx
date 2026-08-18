import { ArrowUpRightIcon, LockIcon, PawIcon } from "./icons";
import { SectionHeading } from "./SectionHeading";

type Project = {
  title: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  description: string;
  highlights: string[];
  tags: string[];
  liveHref?: string;
};

const projects: Project[] = [
  {
    title: "Auth System",
    icon: LockIcon,
    description:
      "Gateway de autenticação em Next.js que centraliza cadastro, login e emissão de tokens JWT (par de chaves RS256) para outras aplicações consumirem como camada de identidade — incluindo um serviço em Django que valida os tokens sem ter login próprio.",
    highlights: [
      "MFA via TOTP com QR code, 10 códigos de backup de uso único e \"lembrar este dispositivo\" por 30 dias",
      "Refresh token com rotação e revogação de sessão em caso de reuso",
      "Detecção de senha vazada (Have I Been Pwned) e de \"viagem impossível\" entre sessões, com alerta por e-mail",
      "Sessões com tipo de dispositivo e localização aproximada, painel de auditoria e suspensão/exclusão de conta por admins",
      "CSRF (double-submit cookie), rate limiting e CAPTCHA (Cloudflare Turnstile) contra força bruta",
      "112 testes automatizados com Vitest (servidor Next.js real) + testes E2E com Playwright",
    ],
    tags: ["Next.js", "TypeScript", "Django", "Prisma", "JWT / MFA", "PostgreSQL"],
    liveHref: "https://auth-gateway-kappa.vercel.app",
  },
  {
    title: "Clínica Veterinária API",
    icon: PawIcon,
    description:
      "API REST em Spring Boot para gestão de clínica veterinária, com autenticação JWT baseada em papéis, agendamento de consultas com detecção de conflito de horário e prontuários médicos vinculados a consultas — com landing page e painel administrativo consumindo a API.",
    highlights: [
      "Autenticação JWT com controle de acesso por papel (admin, veterinário, recepcionista)",
      "Agendamento de consultas com detecção de conflito de horário do veterinário",
      "Prontuários médicos vinculados a consultas finalizadas",
      "Landing page e SPA administrativa (HTML/CSS/JS) consumindo a API, publicada separadamente na Vercel",
      "Documentação interativa da API via Swagger/OpenAPI",
      "Seed automático de dados e testes de integração com JUnit 5 e MockMvc",
    ],
    tags: ["Java 21", "Spring Boot", "JWT", "PostgreSQL", "JPA", "Docker", "Swagger"],
    liveHref: "https://vet-clinic-frontend.vercel.app",
  },
];

export function Projects() {
  return (
    <section id="projetos" className="mx-auto max-w-5xl scroll-mt-24 px-6 py-16">
      <SectionHeading
        index="04"
        label="projetos"
        title={
          projects.length > 1
            ? "Projetos que já construímos"
            : "Um projeto que já construímos"
        }
      />

      <div className="mt-8 grid gap-6">
        {projects.map((project) => {
          const Icon = project.icon;
          return (
            <article
              key={project.title}
              className="card-hover overflow-hidden rounded-lg border border-border bg-surface"
            >
              <div
                className="relative flex h-32 items-center justify-center overflow-hidden border-b border-border sm:h-36"
                style={{ background: "var(--surface-2)" }}
              >
                <span
                  aria-hidden
                  className="absolute inset-0"
                  style={{
                    backgroundImage:
                      "linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)",
                    backgroundSize: "28px 28px",
                    opacity: 0.35,
                  }}
                />
                <span
                  aria-hidden
                  className="absolute inset-0"
                  style={{
                    background:
                      "radial-gradient(circle at 30% 20%, var(--accent-soft), transparent 60%)",
                  }}
                />
                <span
                  className="relative grid h-16 w-16 place-items-center rounded-2xl border text-accent sm:h-[72px] sm:w-[72px]"
                  style={{
                    background: "var(--surface)",
                    borderColor: "var(--surface-2)",
                    boxShadow: "0 0 0 4px var(--accent-soft)",
                  }}
                >
                  <Icon className="h-7 w-7 sm:h-8 sm:w-8" />
                </span>
              </div>

              <div className="p-6 sm:p-8">
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
                  {project.liveHref && (
                    <a
                      href={project.liveHref}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-[10px] bg-accent px-4 py-2.5 font-heading text-sm font-bold transition-[filter,transform] hover:-translate-y-0.5 hover:brightness-110"
                      style={{ color: "var(--fixed-white)" }}
                    >
                      Ver demo <ArrowUpRightIcon className="h-4 w-4" />
                    </a>
                  )}
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
