import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-6 border-b border-[#2a2a2a] w-full px-6 sm:px-10 lg:px-24 py-3 sm:py-4 lg:py-5 bg-background/90 backdrop-blur">
      <Image
        src="/base_icon.png"
        alt="Stephanto"
        width={60}
        height={60}
        className="rounded-xl object-cover object-center w-12 h-12 sm:w-14 sm:h-14"
      />
      <nav className="w-full sm:w-auto">
        <div className="flex flex-wrap items-center justify-center sm:justify-end gap-4 sm:gap-8 lg:gap-16 text-base sm:text-lg lg:text-xl font-medium text-slate-300">
          <Link
            href="/"
            className="hover:text-primary transition-all duration-300 hover:scale-105"
          >
            Início
          </Link>
          <Link
            href="https://dev.to/stephanto"
            className="hover:text-primary transition-all duration-300 hover:scale-105"
          >
            Blog
          </Link>
          <Link
            href="/contato"
            className="hover:text-primary transition-all duration-300 hover:scale-105"
          >
            Contato
          </Link>
        </div>
      </nav>
    </header>
  );
}
