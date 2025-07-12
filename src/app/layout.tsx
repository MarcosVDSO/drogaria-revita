// src/app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Drogaria Revita",
  description: "A farmácia de confiança do Jardim América. Atendimento carismático, entrega rápida e os melhores preços de São Luís.",
  icons: {
    icon: "/icone.jpg", // This path refers to the /public directory
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <Head>
        <link rel="icon" href="/icone.jpg" />
      </Head>

      <body className={inter.className}>{children}</body>
    </html>
  );
}