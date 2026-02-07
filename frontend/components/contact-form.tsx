"use client";

import { useActionState } from "react";
import { contactFormAction } from "@/app/actions";

export default function ContactForm() {
  const [state, formAction] = useActionState(contactFormAction, null);

  return (
    <>
      <form
        className="flex flex-1 flex-col gap-5 sm:gap-6 min-h-0"
        action={formAction}
      >
        <div className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center">
          <div className="flex flex-1 flex-col gap-2 min-w-0 w-full">
            <label
              htmlFor="nome"
              className="text-sm font-medium text-slate-400"
            >
              Nome
            </label>
            <input
              type="text"
              name="nome"
              placeholder="Seu nome"
              required
              className="bg-background border border-[#2a2a2a] rounded-xl p-3 w-full text-sm sm:text-base"
            />
          </div>
          <div className="flex flex-1 flex-col gap-2 min-w-0 w-full">
            <label
              htmlFor="email"
              className="text-sm font-medium text-slate-400"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="seu@email.com"
              required
              className="bg-background border border-[#2a2a2a] rounded-xl p-3 w-full text-sm sm:text-base"
            />
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <label
            htmlFor="assunto"
            className="text-sm font-medium text-slate-400"
          >
            Assunto
          </label>
          <input
            type="text"
            name="assunto"
            placeholder="Assunto da mensagem"
            required
            className="bg-background border border-[#2a2a2a] rounded-xl p-3 text-sm sm:text-base"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label
            htmlFor="mensagem"
            className="text-sm font-medium text-slate-400"
          >
            Mensagem
          </label>
          <textarea
            name="mensagem"
            placeholder="Escreva sua mensagem aqui..."
            required
            className="bg-background border border-[#2a2a2a] rounded-xl p-3 resize-none flex-1 min-h-40 sm:min-h-56 text-sm sm:text-base"
          />
        </div>
        {state?.error && <p className="text-sm text-red-400">{state.error}</p>}
        {state?.success && (
          <p className="text-sm text-green-400">
            Mensagem enviada com sucesso! Em breve entrarei em contato.
          </p>
        )}
        <button
          type="submit"
          className="bg-primary text-black font-bold px-4 py-3 rounded-xl w-full hover:cursor-pointer hover:bg-primary/80 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
        >
          Enviar mensagem
        </button>
      </form>
    </>
  );
}
