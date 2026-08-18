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
    title: "Desenvolvimento back-end",
    description:
      "APIs REST e arquitetura de sistemas com Java (Spring Boot) e Python (Django), do zero ou evoluindo o que já existe.",
  },
  {
    icon: LockIcon,
    title: "Autenticação & segurança",
    description:
      "Sistemas de login, controle de acesso por papéis, tokens JWT e boas práticas de segurança de API.",
  },
  {
    icon: CodeIcon,
    title: "Sistemas sob medida",
    description:
      "Sistemas web completos, desenhados para as regras de negócio e o fluxo real do seu negócio.",
  },
  {
    icon: DatabaseIcon,
    title: "Dados & integrações",
    description:
      "Modelagem de banco de dados e integração entre serviços, com foco em consistência e desempenho.",
  },
];

export function Services() {
  return (
    <section id="servicos" className="mx-auto max-w-5xl scroll-mt-24 px-6 py-16">
      <SectionHeading index="02" label="serviços" title="O que fazemos" />

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
