import { ArrowUpRightIcon, GithubIcon } from "./icons";

const projects = [
  {
    title: "[Nome do Projeto 1]",
    description:
      "[Descreva o problema que o projeto resolve, seu papel nele e o resultado alcançado em 2-3 linhas.]",
    tags: ["Next.js", "TypeScript", "[Tag X]"],
    liveHref: "#",
    codeHref: "#",
  },
  {
    title: "[Nome do Projeto 2]",
    description:
      "[Descreva o problema que o projeto resolve, seu papel nele e o resultado alcançado em 2-3 linhas.]",
    tags: ["React", "Node.js", "[Tag X]"],
    liveHref: "#",
    codeHref: "#",
  },
  {
    title: "[Nome do Projeto 3]",
    description:
      "[Descreva o problema que o projeto resolve, seu papel nele e o resultado alcançado em 2-3 linhas.]",
    tags: ["[Stack X]", "[Stack Y]"],
    liveHref: "#",
    codeHref: "#",
  },
  {
    title: "[Nome do Projeto 4]",
    description:
      "[Descreva o problema que o projeto resolve, seu papel nele e o resultado alcançado em 2-3 linhas.]",
    tags: ["[Stack X]", "[Stack Y]"],
    liveHref: "#",
    codeHref: "#",
  },
];

export function Projects() {
  return (
    <section id="projetos" className="mx-auto max-w-5xl px-6 py-16">
      <p className="font-mono text-sm text-accent">03. projetos</p>
      <h2 className="mt-2 text-2xl font-bold sm:text-3xl">
        Alguns projetos que já construí
      </h2>

      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        {projects.map((project) => (
          <article
            key={project.title}
            className="card-hover flex flex-col rounded-lg border border-border bg-surface p-6"
          >
            <div className="flex items-start justify-between">
              <h3 className="text-lg font-semibold text-foreground">
                {project.title}
              </h3>
              <div className="flex items-center gap-3 text-muted">
                <a
                  href={project.codeHref}
                  aria-label="Código no GitHub"
                  className="transition-colors hover:text-accent"
                >
                  <GithubIcon className="h-4.5 w-4.5" />
                </a>
                <a
                  href={project.liveHref}
                  aria-label="Ver projeto"
                  className="transition-colors hover:text-accent"
                >
                  <ArrowUpRightIcon className="h-4.5 w-4.5" />
                </a>
              </div>
            </div>
            <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
              {project.description}
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-surface-2 px-2.5 py-1 font-mono text-xs text-accent-2"
                >
                  {tag}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
