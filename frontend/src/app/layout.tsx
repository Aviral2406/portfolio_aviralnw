import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import LenisProvider from "@/components/LenisProvider";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Aviral Singhai | Portfolio",
  description: "Sophomore Computer Science student passionate about Artificial Intelligence, Machine Learning, Software Engineering, and Quantitative Finance. Aspiring Quantitative Developer / Researcher.",
  keywords: [
    "Aviral Singhai",
    "Portfolio",
    "Computer Science",
    "Quantitative Developer",
    "Quantitative Researcher",
    "Machine Learning Engineer",
    "AI Enthusiast",
    "Software Engineer"
  ],
  authors: [{ name: "Aviral Singhai" }],
  openGraph: {
    title: "Aviral Singhai | Portfolio",
    description: "Sophomore Computer Science student and Aspiring Quantitative Developer / Researcher.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aviral Singhai | Portfolio",
    description: "Sophomore Computer Science student and Aspiring Quantitative Developer / Researcher.",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans bg-[#080d0a] text-zinc-100 overflow-x-hidden selection:bg-emerald-900 selection:text-emerald-100">
        <LenisProvider>
          {children}
        </LenisProvider>
      </body>
    </html>
  );
}
