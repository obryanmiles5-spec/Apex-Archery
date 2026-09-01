import type { Metadata } from "next";

import "./globals.css";

import { CartProvider } from "@/components/CartContext";

import { SchemaMarkup } from "@/components/SchemaMarkup";

import { Header } from "@/components/Header";

import { Footer } from "@/components/Footer";

import { CartDrawer } from "@/components/CartDrawer";

export const metadata: Metadata = {
  title: "Apex Archery",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <SchemaMarkup />
      </head>
      <body
        className="bg-[#0A0A0A] text-slate-50 antialiased"
        suppressHydrationWarning
      >
        <CartProvider>
          <Header />
          <CartDrawer />
          <div className="min-h-screen">{children}</div>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
