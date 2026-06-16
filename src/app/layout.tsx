import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/layout/header";
import Footer from "./components/layout/footer";
import React from "react";

export const metadata: Metadata = {
  title: "Lylian Guerra--Rago - Portfolio",
  description: "Lylian Guerra--Rago - Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
