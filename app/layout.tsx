import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
const sans = Geist({ subsets: ["latin"], variable: "--font-sans" });
const mono = Geist_Mono({ subsets: ["latin"], variable: "--font-mono" });
export const metadata: Metadata = {
  metadataBase: new URL("https://projectrankup.com"),
  title: "Project Rankup | Turn visibility into growth.",
  description:
    "Find opportunities, plan and create content, measure search performance, and improve what comes next. One connected organic-growth workflow.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Project Rankup | Turn visibility into growth.",
    description: "One connected organic-growth workflow.",
    type: "website",
  },
};
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${sans.variable} ${mono.variable}`}>
      <body>
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
