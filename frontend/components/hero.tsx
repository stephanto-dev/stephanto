import Image from "next/image";
import HeroBadge from "./hero-badge";
import Button from "./button";

export default function Hero() {
  return (
    <section className="flex flex-col-reverse lg:flex-row justify-between items-start lg:items-center gap-8 lg:gap-12 px-6 sm:px-10 lg:px-24 py-8 sm:py-10 lg:py-10">
      <div className="flex flex-col gap-5 sm:gap-6 w-full lg:w-1/2 animate-fade-in-left">
        <p className="text-sm sm:text-base lg:text-lg text-slate-500 tracking-wide">
          FOUNDER & FULL-STACK SOFTWARE ENGINEER
        </p>
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-bold bg-linear-to-br from-white to-slate-400 bg-clip-text text-transparent leading-tight">
          Vinícius Stephanto
        </h1>
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-slate-400 leading-relaxed">
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
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
          <HeroBadge icon="⚡" text="Sistemas de alta performance" />
          <HeroBadge icon="🏗️" text="Arquiteturas escaláveis" />
          <HeroBadge icon="🤖" text="Desenvolvimento de IA" />
          <HeroBadge icon="🚀" text="Empreendedorismo" />
        </div>
        <Button
          variant="primary"
          href="/contato"
          className="w-full sm:w-fit justify-center"
        >
          Entre em contato
        </Button>
      </div>
      <div className="w-full lg:w-auto flex justify-center lg:justify-end animate-fade-in-right-delay-100">
        <Image
          src="/Vinicius_Stephanto.jpg"
          alt="Stephanto"
          width={500}
          height={500}
          sizes="(max-width: 640px) 70vw, (max-width: 1024px) 45vw, 420px"
          className="rounded-3xl sm:rounded-4xl object-cover object-center aspect-square hover:scale-105 transition-all duration-300 w-full max-w-[280px] sm:max-w-[320px] md:max-w-[360px] lg:max-w-[420px] xl:max-w-[480px] 2xl:max-w-[520px]"
        />
      </div>
    </section>
  );
}
