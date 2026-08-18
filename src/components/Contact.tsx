import { WhatsappIcon } from "./icons";
import { SocialLinks } from "./SocialLinks";
import { EMAIL, EMAIL_HREF, WHATSAPP_HREF } from "@/lib/site";

export function Contact() {
  return (
    <section id="contato" className="mx-auto max-w-5xl scroll-mt-24 px-6 py-20">
      <div className="border-glow rounded-2xl border border-border bg-surface px-8 py-14 text-center">
        <p className="font-mono text-sm text-accent">04. contato</p>
        <h2 className="mt-3 text-2xl font-bold sm:text-4xl">
          Vamos conversar?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-muted">
          Estou aberto a projetos e oportunidades em desenvolvimento back-end.
          Se quiser trocar uma ideia sobre tecnologia ou pedir um orçamento,
          é só chamar.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a
            href={WHATSAPP_HREF}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-[10px] bg-accent px-6 py-3 font-heading text-sm font-bold transition-[filter,transform] hover:-translate-y-0.5 hover:brightness-110"
            style={{ color: "var(--fixed-white)" }}
          >
            <WhatsappIcon className="h-[18px] w-[18px]" /> Solicitar orçamento
          </a>
          <a
            href={EMAIL_HREF}
            className="inline-flex items-center gap-2 rounded-[10px] border border-border px-6 py-3 font-heading text-sm font-bold text-foreground transition-colors hover:border-accent hover:text-accent"
          >
            {EMAIL}
          </a>
        </div>

        <div className="mt-8 flex items-center justify-center gap-6 text-muted">
          <SocialLinks variant="plain" />
        </div>
      </div>
    </section>
  );
}
