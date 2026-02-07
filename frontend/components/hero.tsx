"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import HeroBadge from "./hero-badge";
import Button from "./button";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const tiltRef = useRef<HTMLDivElement>(null);
  const frameRef = useRef<number | null>(null);
  const inputModeRef = useRef<"none" | "pointer" | "device">("none");
  const orientationActiveRef = useRef(false);
  const lastRef = useRef({
    tiltX: 0,
    tiltY: 0,
    translateX: 0,
    translateY: 0,
  });
  const prefersReducedMotion = useRef(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updatePreference = () => {
      prefersReducedMotion.current = mediaQuery.matches;
      if (mediaQuery.matches && tiltRef.current) {
        tiltRef.current.style.transform =
          "rotateX(0deg) rotateY(0deg) translate3d(0px, 0px, 0px) scale(1)";
      }
    };
    updatePreference();
    mediaQuery.addEventListener?.("change", updatePreference);
    return () => mediaQuery.removeEventListener?.("change", updatePreference);
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleDeviceOrientation = (event: DeviceOrientationEvent) => {
      if (prefersReducedMotion.current) return;
      if (!orientationActiveRef.current) return;
      if (!tiltRef.current) return;
      if (inputModeRef.current === "pointer") return;

      const beta = event.beta ?? 0;
      const gamma = event.gamma ?? 0;

      const maxTilt = 10;
      const maxTranslate = 8;
      const clamp = (value: number, min: number, max: number) =>
        Math.min(Math.max(value, min), max);

      const tiltX = clamp((beta / 45) * maxTilt, -maxTilt, maxTilt);
      const tiltY = clamp((gamma / 45) * maxTilt, -maxTilt, maxTilt);
      const translateX = clamp((gamma / 45) * maxTranslate, -maxTranslate, maxTranslate);
      const translateY = clamp((beta / 45) * maxTranslate, -maxTranslate, maxTranslate);

      lastRef.current = { tiltX, tiltY, translateX, translateY };

      if (frameRef.current) return;
      frameRef.current = window.requestAnimationFrame(() => {
        frameRef.current = null;
        const { tiltX, tiltY, translateX, translateY } = lastRef.current;
        if (!tiltRef.current) return;
        tiltRef.current.style.transform = `rotateX(${tiltX}deg) rotateY(${tiltY}deg) translate3d(${translateX}px, ${translateY}px, 0px) scale(1.02)`;
      });
    };

    window.addEventListener("deviceorientation", handleDeviceOrientation);
    return () => window.removeEventListener("deviceorientation", handleDeviceOrientation);
  }, []);

  const enableDeviceTilt = async () => {
    if (prefersReducedMotion.current) return;
    if (typeof window === "undefined") return;
    if (orientationActiveRef.current) return;

    const permissionRequest = (DeviceOrientationEvent as unknown as {
      requestPermission?: () => Promise<"granted" | "denied">;
    }).requestPermission;

    if (typeof permissionRequest === "function") {
      try {
        const result = await permissionRequest();
        if (result !== "granted") return;
      } catch {
        return;
      }
    }

    orientationActiveRef.current = true;
    inputModeRef.current = "device";
  };

  const resetTilt = () => {
    if (!tiltRef.current) return;
    if (inputModeRef.current !== "pointer") return;
    tiltRef.current.style.transform =
      "rotateX(0deg) rotateY(0deg) translate3d(0px, 0px, 0px) scale(1)";
    inputModeRef.current = orientationActiveRef.current ? "device" : "none";
  };

  const handlePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    if (prefersReducedMotion.current) return;
    if (!containerRef.current || !tiltRef.current) return;
    if (event.pointerType === "touch") return;

    inputModeRef.current = "pointer";

    const rect = containerRef.current.getBoundingClientRect();
    const px = (event.clientX - rect.left) / rect.width;
    const py = (event.clientY - rect.top) / rect.height;

    const maxTilt = 12;
    const maxTranslate = 10;

    lastRef.current = {
      tiltX: (0.5 - py) * 2 * maxTilt,
      tiltY: (px - 0.5) * 2 * maxTilt,
      translateX: (px - 0.5) * 2 * maxTranslate,
      translateY: (py - 0.5) * 2 * maxTranslate,
    };

    if (frameRef.current) return;
    frameRef.current = window.requestAnimationFrame(() => {
      frameRef.current = null;
      const { tiltX, tiltY, translateX, translateY } = lastRef.current;
      if (!tiltRef.current) return;
      tiltRef.current.style.transform = `rotateX(${tiltX}deg) rotateY(${tiltY}deg) translate3d(${translateX}px, ${translateY}px, 0px) scale(1.02)`;
    });
  };

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
        <div
          ref={containerRef}
          onPointerMove={handlePointerMove}
          onPointerDown={enableDeviceTilt}
          onPointerLeave={resetTilt}
          className="w-full max-w-[280px] sm:max-w-[320px] md:max-w-[360px] lg:max-w-[420px] xl:max-w-[480px] 2xl:max-w-[520px]"
          style={{ perspective: "1000px" }}
        >
          <div
            ref={tiltRef}
            className="rounded-3xl sm:rounded-4xl overflow-hidden shadow-[0_28px_60px_-40px_rgba(0,0,0,0.75)]"
            style={{
              transform:
                "rotateX(0deg) rotateY(0deg) translate3d(0px, 0px, 0px) scale(1)",
              transition: "transform 120ms ease-out",
              transformStyle: "preserve-3d",
              willChange: "transform",
            }}
          >
            <Image
              src="/Vinicius_Stephanto.jpg"
              alt="Stephanto"
              width={500}
              height={500}
              sizes="(max-width: 640px) 70vw, (max-width: 1024px) 45vw, 420px"
              className="object-cover object-center aspect-square w-full select-none pointer-events-none"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
