import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Stephanto | Founder & Developer",
  description: "Portfólio de Vinícius Stephanto",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${inter.variable} antialiased font-sans bg-background text-foreground`}
      >
        <main className="min-h-screen p-4">{children}</main>
      </body>
    </html>
  );
}
