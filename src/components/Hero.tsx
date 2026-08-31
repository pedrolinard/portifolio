import { WhatsappIcon, ZapIcon } from "./icons";
import { SocialLinks } from "./SocialLinks";
import { COMPANY_NAME, WHATSAPP_HREF } from "@/lib/site";

export function Hero() {
  return (
    <section id="top" className="mx-auto max-w-5xl scroll-mt-24 px-6 py-16 sm:py-24">
      <div className="grid items-center gap-10 sm:grid-cols-[1.15fr_0.85fr] sm:gap-14">
        <div>
          <p className="inline-flex items-center gap-2.5 font-mono text-xs uppercase tracking-[0.14em] text-accent">
            <span className="h-0.5 w-7 rounded-full bg-accent" />
            tecnologia com conversa clara e pé no chão
          </p>

          <h1 className="mt-4 text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
            <span className="text-accent text-glow">{COMPANY_NAME}</span>
          </h1>

          <p className="mt-3 max-w-xl font-heading text-lg font-semibold text-foreground sm:text-xl">
            Seu negócio tem um jeito próprio de funcionar. Seu sistema também deveria.
          </p>

          <p className="mt-4 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
            Eu sou Pedro, desenvolvedor por trás da {COMPANY_NAME}. Escuto o seu
            desafio, entendo a rotina do negócio e transformo isso em um sistema
            seguro, organizado e simples de usar — sem complicar a conversa.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href={WHATSAPP_HREF}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-[10px] bg-accent px-5 py-3 font-heading text-sm font-bold transition-[filter,transform] hover:-translate-y-0.5 hover:brightness-110"
              style={{ color: "var(--fixed-white)" }}
            >
              <WhatsappIcon className="h-[18px] w-[18px]" /> Me conte sua ideia
            </a>
            <SocialLinks />
          </div>
          <p className="mt-4 text-sm text-muted">Você fala direto comigo, do primeiro “olá” até a entrega.</p>
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
          <span className="text-accent">
            <ZapIcon className="h-20 w-20" />
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
