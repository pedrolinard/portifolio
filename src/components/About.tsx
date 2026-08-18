import { SectionHeading } from "./SectionHeading";
import { COMPANY_NAME } from "@/lib/site";

export function About() {
  return (
    <section id="sobre" className="mx-auto max-w-5xl scroll-mt-24 px-6 py-16">
      <SectionHeading index="01" label="sobre" title={`Quem é a ${COMPANY_NAME}`} />

      <div className="mt-6 grid gap-10 sm:grid-cols-[1.3fr_1fr]">
        <div className="space-y-4 leading-relaxed text-muted">
          <p>
            A {COMPANY_NAME} desenvolve sistemas sob medida para o seu
            negócio, com maior especialização em back-end: APIs REST,
            arquitetura de sistemas e integração com banco de dados.
          </p>
          <p>
            Trabalhamos com Java (Spring Boot) e Python (Django), cobrindo
            desde a implementação de regras de negócio até persistência de
            dados com JPA e modelagem de sistemas web estruturados —
            aplicando boas práticas, segurança de APIs e código organizado em
            cada projeto.
          </p>
          <p>
            Por ser uma operação enxuta, a comunicação é direta com quem
            desenvolve o seu sistema, sem intermediários — o que agiliza
            decisões e mantém o projeto alinhado ao que o seu negócio
            precisa.
          </p>
        </div>

        <div className="h-fit rounded-lg border border-border bg-surface p-5 font-mono text-sm">
          <p className="text-muted">{"// dados rápidos"}</p>
          <ul className="mt-3 space-y-2 text-foreground">
            <li>
              <span className="text-accent">foco:</span> back-end &amp;
              sistemas sob medida
            </li>
            <li>
              <span className="text-accent">atendimento:</span> remoto, para
              todo o Brasil
            </li>
            <li>
              <span className="text-accent">diferencial:</span> comunicação
              direta, sem intermediários
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
