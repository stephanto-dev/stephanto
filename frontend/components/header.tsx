import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed flex justify-between items-center border-b border-[#2a2a2a] w-full px-24 py-8">
      <Image
        src="/base_icon.png"
        alt="Stephanto"
        width={60}
        height={60}
        className="rounded-xl object-cover object-center"
      />
      <nav className="">
        <div className="flex items-center gap-16 text-xl font-medium mx-auto text-slate-300">
          <Link
            href="/"
            className="hover:text-primary transition-all duration-300 hover:scale-105"
          >
            Início
          </Link>
          <Link
            href="/blog"
            className="hover:text-primary transition-all duration-300 hover:scale-105"
          >
            Blog
          </Link>
          <Link
            href="/contact"
            className="hover:text-primary transition-all duration-300 hover:scale-105"
          >
            Contato
          </Link>
        </div>
      </nav>
    </header>
  );
}
