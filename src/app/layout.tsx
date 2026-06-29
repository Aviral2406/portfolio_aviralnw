import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#030014] text-zinc-100">{children}</body>
    </html>
  );
}
