import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contato | Stephanto",
  description: "Entre em contato com o Stephanto",
};

export default function ContatoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="min-h-screen">{children}</div>;
}
