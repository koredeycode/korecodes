import type { Metadata } from "next";
import "./globals.css";

import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import StairTransition from "@/components/StairTransition";
import { ThemeProvider } from "next-themes";
import { Fira_Code, Poppins } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins",
});

const fira_code = Fira_Code({
  variable: "--font-fira-code",
});

export const metadata: Metadata = {
  title: "Yusuf Akorede — AI & Full-Stack Engineer",
  description:
    "I build and evaluate. Production LLM agent systems, evaluation harnesses, and the web/backend infrastructure underneath them — TypeScript, Python, Solidity.",
  keywords: [
    "Yusuf Akorede",
    "AI engineer",
    "full-stack engineer",
    "LangGraph",
    "evaluation harness",
    "Next.js",
    "Solidity",
  ],
  openGraph: {
    title: "Yusuf Akorede — AI & Full-Stack Engineer",
    description:
      "I build and evaluate: production LLM agent systems, evaluation harnesses, and on-chain agent platforms.",
    url: "https://korecodes.is-a.dev",
    siteName: "Yusuf Akorede",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${poppins.variable} ${fira_code.variable} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Header />
          <StairTransition />
          <PageTransition>{children}</PageTransition>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
