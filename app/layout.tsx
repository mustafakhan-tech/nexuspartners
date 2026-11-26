import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";

const display = localFont({ src: "./fonts/Unbounded.woff2", variable: "--font-display", weight: "200 900", display: "swap" });
const sans = localFont({ src: "./fonts/InstrumentSans.woff2", variable: "--font-sans", weight: "400 700", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL("https://www.nexuspartnersagency.com"),
  title: "Nexus Partners: creator talent management and brand deals",
  description:
    "Nexus Partners connects creators with brands that fit, then handles the pitch, negotiation, contract and delivery. $800K+ in brand deals for 100+ creators since 2025.",
  icons: { icon: "/img/nexus-mark.png" },
};
export const viewport: Viewport = { themeColor: "#0C0B09" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
