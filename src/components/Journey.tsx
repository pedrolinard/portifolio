import { SectionHeading } from "./SectionHeading";

type Milestone = {
  period: string;
  title: string;
  description: string;
  current?: boolean;
};

const milestones: Milestone[] = [
  {
    period: "2021",
    title: "Curso SENAC — Introdução à Informática",
    description: "Primeiro contato formal com computação, antes da faculdade.",
  },
  {
    period: "2022",
    title: "Curso SENAC — Aplicações Web com Python",
    description: "Primeiros passos em desenvolvimento web com Python.",
  },
  {
    period: "set/2024 – mai/2026",
    title: "Estágio em T.I. — Teresina Shopping",
    description: "Suporte técnico e desenvolvimento no setor de T.I.",
  },
  {
    period: "meados de 2025",
    title: "Início da graduação em ADS",
    description:
      "Análise e Desenvolvimento de Sistemas — primeiro contato com programação na faculdade.",
  },
  {
    period: "jun/2026 – atual",
    title: "Grupo CZ — Setor de T.I.",
    description: "Posição atual, atuando no setor de T.I. da empresa.",
    current: true,
  },
];

export function Journey() {
  return (
    <section id="jornada" className="mx-auto max-w-5xl scroll-mt-24 px-6 py-16">
      <SectionHeading index="02" label="jornada" title="Minha trajetória" />

      <ol className="mt-10 space-y-8 border-l border-border pl-8 sm:pl-10">
        {milestones.map((milestone) => (
          <li key={milestone.title} className="relative">
            <span
              aria-hidden
              className="absolute top-1 -left-[calc(2rem+5px)] h-2.5 w-2.5 rounded-full sm:-left-[calc(2.5rem+5px)]"
              style={{
                background: milestone.current ? "var(--accent)" : "var(--border)",
                boxShadow: milestone.current
                  ? "0 0 0 4px var(--accent-soft)"
                  : "none",
              }}
            />
            <p className="font-mono text-xs uppercase tracking-[0.08em] text-accent">
              {milestone.period}
              {milestone.current && (
                <span
                  className="ml-2 rounded-full px-2 py-0.5 text-accent"
                  style={{ background: "var(--accent-soft)" }}
                >
                  atual
                </span>
              )}
            </p>
            <h3 className="mt-1.5 font-heading text-base font-bold text-foreground">
              {milestone.title}
            </h3>
            <p className="mt-1 max-w-xl text-sm leading-relaxed text-muted">
              {milestone.description}
            </p>
          </li>
        ))}
      </ol>
    </section>
  );
}
