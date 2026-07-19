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
  metadataBase: new URL("https://avafrohna.github.io"),
  title: "Ava Frohna — Technical Lead & Security Researcher",
  description:
    "Portfolio of Ava Frohna: technical leadership, cybersecurity research, AI systems, health tech, and startup development.",
  openGraph: {
    title: "Ava Frohna — Technical Lead & Security Researcher",
    description:
      "Secure systems, AI security, health tech, and startup development.",
    url: "https://avafrohna.github.io",
    siteName: "Ava Frohna",
    images: [
      {
        url: "https://avafrohna.github.io/og.png",
        width: 1200,
        height: 630,
        alt: "Ava Frohna — Secure systems, AI security, health tech",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ava Frohna — Technical Lead & Security Researcher",
    description:
      "Secure systems, AI security, health tech, and startup development.",
    images: ["https://avafrohna.github.io/og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
