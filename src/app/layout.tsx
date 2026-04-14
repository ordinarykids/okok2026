import type { Metadata } from "next";
import localFont from "next/font/local";
import { Agentation } from "agentation";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { GrainOverlay } from "@/components/grain-overlay";
import "./globals.css";

const geistBlack = localFont({
  src: "../fonts/Geist-Black.woff2",
  variable: "--font-geist-black",
  display: "swap",
  weight: "900",
});

const geistVariable = localFont({
  src: "../fonts/GeistVariableVF.woff2",
  variable: "--font-geist-variable",
  display: "swap",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Jason Herring \u2014 Creative Director & Engineering Leader",
  description:
    "Portfolio of Jason Herring. Creative Director, Engineering Leader, and Javascript Enthusiast based in San Francisco.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistBlack.variable} ${geistVariable.variable}`}
    >
      <body className="relative min-h-screen">
        <GrainOverlay />
        <Header />
        {children}
        <Footer />
        {process.env.NODE_ENV === "development" && <Agentation />}
      </body>
    </html>
  );
}
