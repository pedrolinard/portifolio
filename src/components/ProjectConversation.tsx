"use client";

import { useMemo, useState } from "react";
import { WhatsappIcon } from "./icons";
import { WHATSAPP_NUMBER } from "@/lib/site";

const needs = ["Criar um sistema do zero", "Melhorar um sistema existente", "Integrar sistemas e dados", "Ainda estou entendendo"];
const stages = ["É só uma ideia", "Já tenho os requisitos", "Preciso resolver logo"];

export function ProjectConversation() {
  const [need, setNeed] = useState("");
  const [stage, setStage] = useState("");
  const [name, setName] = useState("");
  const href = useMemo(() => {
    const greeting = name.trim() ? `Olá! Meu nome é ${name.trim()}.` : "Olá!";
    const message = [greeting, "Conheci a ByteStorm pelo portfólio e quero conversar sobre um projeto.", need && `O que preciso: ${need}.`, stage && `Momento atual: ${stage}.`].filter(Boolean).join("\n");
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  }, [name, need, stage]);

  return (
    <div className="mt-8 text-left" aria-labelledby="conversa-title">
      <div className="mb-6 flex items-center gap-3">
        <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-accent font-heading text-sm font-bold text-white">P</span>
        <div><p id="conversa-title" className="font-heading text-sm font-bold text-foreground">Pedro, da ByteStorm</p><p className="text-xs text-muted">Respondo pessoalmente — sem robôs ou atendentes.</p></div>
      </div>
      <div className="space-y-6">
        <fieldset><legend className="mb-3 text-sm font-semibold text-foreground">O que você precisa tirar do papel?</legend><div className="flex flex-wrap gap-2">{needs.map((item) => <button key={item} type="button" aria-pressed={need === item} onClick={() => setNeed(item)} className={`conversation-chip ${need === item ? "conversation-chip-active" : ""}`}>{item}</button>)}</div></fieldset>
        <fieldset><legend className="mb-3 text-sm font-semibold text-foreground">Em que momento o projeto está?</legend><div className="flex flex-wrap gap-2">{stages.map((item) => <button key={item} type="button" aria-pressed={stage === item} onClick={() => setStage(item)} className={`conversation-chip ${stage === item ? "conversation-chip-active" : ""}`}>{item}</button>)}</div></fieldset>
        <label className="block text-sm font-semibold text-foreground">Como posso chamar você? <span className="font-normal text-muted">(opcional)</span><input value={name} onChange={(event) => setName(event.target.value)} placeholder="Seu primeiro nome" className="mt-2 w-full rounded-[10px] border border-border bg-background px-4 py-3 font-normal text-foreground placeholder:text-muted focus:border-accent focus:outline-none" /></label>
        <a href={href} target="_blank" rel="noreferrer" className="inline-flex w-full items-center justify-center gap-2 rounded-[10px] bg-accent px-6 py-3.5 font-heading text-sm font-bold text-white transition-[filter,transform] hover:-translate-y-0.5 hover:brightness-110 sm:w-auto"><WhatsappIcon className="h-[18px] w-[18px]" /> Continuar conversa no WhatsApp</a>
      </div>
    </div>
  );
}
