import { CodeIcon, DatabaseIcon, LockIcon, ServerIcon } from "./icons";
import { SectionHeading } from "./SectionHeading";

type Service = {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
};

const services: Service[] = [
  {
    icon: ServerIcon,
    title: "Uma operação mais simples",
    description:
      "Transformo processos manuais e repetitivos em sistemas que economizam tempo e reduzem erros no dia a dia.",
  },
  {
    icon: LockIcon,
    title: "Dados protegidos",
    description:
      "Login, permissões e boas práticas de segurança para que cada pessoa acesse apenas o que precisa.",
  },
  {
    icon: CodeIcon,
    title: "Um sistema com a sua cara",
    description:
      "Nada de forçar sua rotina em uma ferramenta genérica: a solução acompanha as regras reais do seu negócio.",
  },
  {
    icon: DatabaseIcon,
    title: "Ferramentas que conversam",
    description:
      "Conecto serviços e organizo informações para evitar retrabalho, duplicidade e dados espalhados.",
  },
];

export function Services() {
  return (
    <section id="servicos" className="mx-auto max-w-5xl scroll-mt-24 px-6 py-16">
      <SectionHeading index="02" label="soluções" title="Como posso ajudar seu negócio" />

      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        {services.map((service) => {
          const Icon = service.icon;
          return (
            <div
              key={service.title}
              className="card-hover rounded-2xl border border-border bg-surface p-6"
            >
              <span
                className="grid h-11 w-11 place-items-center rounded-full text-accent"
                style={{ background: "var(--surface-2)" }}
              >
                <Icon className="h-5 w-5" />
              </span>
              <h3 className="mt-4 font-heading text-base font-bold text-foreground">
                {service.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {service.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
