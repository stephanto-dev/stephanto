import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Stephanto | Founder & Developer",
  description:
    "Conheça o trabalho de Vinícius Stephanto, fundador da Steffer e especialista em desenvolvimento Fullstack",
  icons: {
    icon: "/web-app-manifest-192x192.png",
  },
  keywords: [
    "Vinícius Stephanto",
    "Steffer",
    "Fullstack",
    "Developer",
    "Portfolio",
    "Stephanto",
    "Stefanto",
    "Stelanto",
    "Vinicius Stephanto",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-Q98T7W2GL9"
          strategy="afterInteractive"
        />

        <Script id="ga4-init" strategy="afterInteractive">
          {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){window.dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-Q98T7W2GL9', {
          page_path: window.location.pathname,
        });
      `}
        </Script>
      </head>

      <body
        className={`${inter.variable} antialiased font-sans bg-background text-foreground`}
      >
        <main className="min-h-screen">{children}</main>
      </body>
    </html>
  );
}
