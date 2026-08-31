import { SocialLinks } from "./SocialLinks";
import { EMAIL, EMAIL_HREF } from "@/lib/site";
import { ProjectConversation } from "./ProjectConversation";

export function Contact() {
  return (
    <section id="contato" className="mx-auto max-w-5xl scroll-mt-24 px-6 py-20">
      <div className="border-glow rounded-2xl border border-border bg-surface px-6 py-10 text-center sm:px-10 sm:py-12">
        <p className="font-mono text-sm text-accent">05. contato</p>
        <h2 className="mt-3 text-2xl font-bold sm:text-4xl">
          Toda boa solução começa com uma conversa
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-muted">
          Não precisa chegar com tudo definido. Conte o que está incomodando
          hoje e eu ajudo a pensar no próximo passo — sem compromisso e sem
          linguagem complicada.
        </p>
        <ProjectConversation />
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3 border-t border-border pt-8">
          <a
            href={EMAIL_HREF}
            className="inline-flex items-center gap-2 rounded-[10px] border border-border px-6 py-3 font-heading text-sm font-bold text-foreground transition-colors hover:border-accent hover:text-accent"
          >
            {EMAIL}
          </a>
        </div>

        <div className="mt-6 flex items-center justify-center gap-6 text-muted">
          <SocialLinks variant="plain" />
        </div>
      </div>
    </section>
  );
}
