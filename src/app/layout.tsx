import type { Metadata } from "next";
import { DM_Sans, Outfit } from "next/font/google";
import "./globals.css";

const dm = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://capitalgainer.in"),
  title: {
    default: "Capital Gainer | Premium Stock Market Research",
    template: "%s | Capital Gainer",
  },
  description:
    "Research-led stock cash, futures, options, and combo advisory from Indore. Weekly, monthly, and quarterly plans with transparent execution support.",
  keywords: [
    "stock market research",
    "equity advisory Indore",
    "BTST STBT",
    "index options",
    "stock futures",
    "Capital Gainer",
  ],
  openGraph: {
    title: "Capital Gainer | Premium Stock Market Research",
    description:
      "Actionable equity, derivative, and combo research with disciplined risk management.",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Capital Gainer",
    description: "Premium stock market research and advisory.",
  },
  icons: {
    icon: "/logo.png",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-IN" className={`${dm.variable} ${outfit.variable}`}>
      <body className="font-sans noise min-h-screen bg-ink">
        {children}
      </body>
    </html>
  );
}
