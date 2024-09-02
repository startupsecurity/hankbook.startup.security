import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { VT323 } from "next/font/google";
import { Providers } from "./providers";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const vt323 = VT323({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Startup Security Handbook",
  description: "A guide to security for startups",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={vt323.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
