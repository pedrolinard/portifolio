import { WhatsappIcon } from "./icons";
import { SocialLinks } from "./SocialLinks";
import { WHATSAPP_HREF } from "@/lib/site";

export function Hero() {
  return (
    <section id="top" className="mx-auto max-w-5xl scroll-mt-24 px-6 py-16 sm:py-24">
      <div className="grid items-center gap-10 sm:grid-cols-[1.15fr_0.85fr] sm:gap-14">
        <div>
          <p className="inline-flex items-center gap-2.5 font-mono text-xs uppercase tracking-[0.14em] text-accent">
            <span className="h-0.5 w-7 rounded-full bg-accent" />
            desenvolvedor back-end
          </p>

          <h1 className="mt-4 text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
            Olá, eu sou <span className="text-accent text-glow">Pedro Linard</span>
          </h1>

          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
            Desenvolvedor back-end, construindo APIs REST e
            aplicações web com Java (Spring Boot) e Python (Django) — sempre
            buscando arquitetura limpa, boas práticas e código organizado.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href={WHATSAPP_HREF}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-[10px] bg-accent px-5 py-3 font-heading text-sm font-bold transition-[filter,transform] hover:-translate-y-0.5 hover:brightness-110"
              style={{ color: "var(--fixed-white)" }}
            >
              <WhatsappIcon className="h-[18px] w-[18px]" /> Solicitar orçamento
            </a>
            <SocialLinks />
          </div>
        </div>

        <div
          className="relative mx-auto grid aspect-square w-full max-w-[280px] place-items-center overflow-hidden rounded-full border-[3px]"
          style={{
            background: "var(--surface)",
            borderColor: "var(--surface-2)",
            boxShadow:
              "0 0 0 4px var(--accent-soft), 0 30px 60px -20px var(--accent-glow)",
          }}
        >
          <span className="font-heading text-7xl font-bold text-accent">
            PL
          </span>
          <span
            aria-hidden
            className="absolute inset-0 rounded-full"
            style={{
              background:
                "radial-gradient(circle at 30% 20%, var(--accent-soft), transparent 60%)",
            }}
          />
        </div>
      </div>
    </section>
  );
}
