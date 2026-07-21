import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "./components/layout/footer";
import Header from "./components/layout/header";
import {LocaleProvider} from "@/lib/i18n/context";
import React from "react";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

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
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased`}>
        <LocaleProvider>
          {children}
          <Footer/>
        </LocaleProvider>
      </body>
    </html>
  );
}
