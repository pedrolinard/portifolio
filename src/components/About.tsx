import { SectionHeading } from "./SectionHeading";

export function About() {
  return (
    <section id="sobre" className="mx-auto max-w-5xl scroll-mt-24 px-6 py-16">
      <SectionHeading index="01" label="sobre" title="Quem sou eu" />

      <div className="mt-6 grid gap-10 sm:grid-cols-[1.3fr_1fr]">
        <div className="space-y-4 leading-relaxed text-muted">
          <p>
            Sou desenvolvedor back-end, cursando Análise e Desenvolvimento de
            Sistemas (ADS).
          </p>
          <p>
            Venho desenvolvendo projetos acadêmicos e pessoais com Java
            (Spring Boot) e Python (Django), com experiência em APIs REST,
            implementação de regras de negócio, integração com banco de dados
            e controle de versão com Git. Com Spring Boot, aprofundo
            programação orientada a objetos, arquitetura em camadas e
            persistência de dados com JPA; com Django, trabalho na construção
            de sistemas web estruturados e modelagem de dados.
          </p>
          <p>
            Tenho conhecimento em redes de computadores, o que fortalece minha
            compreensão sobre comunicação entre sistemas e ambientes
            distribuídos. Busco crescer constantemente em arquitetura de
            software, modelagem de banco de dados, segurança de APIs e cloud
            computing, transformando conhecimento em prática para construir
            uma carreira sólida em back-end.
          </p>
        </div>

        <div className="h-fit rounded-lg border border-border bg-surface p-5 font-mono text-sm">
          <p className="text-muted">{"// dados rápidos"}</p>
          <ul className="mt-3 space-y-2 text-foreground">
            <li>
              <span className="text-accent">formação:</span> ADS
            </li>
            <li>
              <span className="text-accent">foco:</span> back-end
            </li>
            <li>
              <span className="text-accent">idiomas:</span> Português
              (nativo), Inglês (B1)
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
