import { SectionHeading } from "./SectionHeading";
import { COMPANY_NAME } from "@/lib/site";

export function About() {
  return (
    <section id="sobre" className="mx-auto max-w-5xl scroll-mt-24 px-6 py-16">
      <SectionHeading index="01" label="sobre" title="Quem vai construir com você" />

      <div className="mt-6 grid gap-10 sm:grid-cols-[1.3fr_1fr]">
        <div className="space-y-4 leading-relaxed text-muted">
          <p>
            Olá, eu sou Pedro. Criei a {COMPANY_NAME} para aproximar os desafios
            reais de um negócio da tecnologia que pode resolvê-los.
          </p>
          <p>
            Antes de falar em Java, Python ou APIs, quero entender onde o seu
            processo trava, o que toma tempo da equipe e qual resultado faria
            diferença de verdade. A tecnologia entra depois, como ferramenta.
          </p>
          <p>
            Você acompanha as decisões e conversa diretamente comigo durante
            todo o projeto. Assim, dúvidas são resolvidas rápido e o sistema
            continua alinhado à rotina de quem vai usá-lo.
          </p>
        </div>

        <div className="h-fit rounded-lg border border-border bg-surface p-5 font-mono text-sm">
          <p className="text-muted">{"// como é trabalhar comigo"}</p>
          <ul className="mt-3 space-y-2 text-foreground">
            <li>
              <span className="text-accent">primeiro:</span> entender o problema
            </li>
            <li>
              <span className="text-accent">durante:</span> comunicação clara e frequente
            </li>
            <li>
              <span className="text-accent">sempre:</span> contato direto, sem intermediários
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
