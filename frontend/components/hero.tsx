import Image from "next/image";
import HeroBadge from "./hero-badge";
import Button from "./button";

export default function Hero() {
  return (
    <section className="flex flex-row justify-between items-center px-24 py-16">
      <div className="flex flex-col gap-7 w-1/2">
        <p className="text-lg text-slate-500">
          FOUNDER & FULL-STACK SOFTWARE ENGINEER
        </p>
        <h1 className="text-9xl font-bold bg-linear-to-br from-white to-slate-400 bg-clip-text text-transparent">
          Vinícius Stephanto
        </h1>
        <p className="text-3xl text-slate-400 leading-normal">
          Engenheiro Fullstack e fundador da{" "}
          <a
            href="https://steffer.com.br"
            className="text-primary hover:text-slate-300 transition-all duration-300"
          >
            Steffer
          </a>
          . Especialista em criar experiências digitais práticas e intuitivas
          com React, Node.js, Django e Python.
        </p>
        <div className="grid grid-cols-2 gap-4">
          <HeroBadge icon="⚡" text="Sistemas de alta performance" />
          <HeroBadge icon="🏗️" text="Arquiteturas escaláveis" />
          <HeroBadge icon="🤖" text="Desenvolvimento de IA" />
          <HeroBadge icon="🚀" text="Empreendedorismo" />
        </div>
        <Button variant="primary" href="/contato">
          Entre em contato
        </Button>
      </div>
      <div>
        <Image
          src="/Vinicius_Stephanto.jpg"
          alt="Stephanto"
          width={500}
          height={500}
          className="rounded-4xl object-cover object-center aspect-square hover:scale-105 transition-all duration-300"
        />
      </div>
    </section>
  );
}
