import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { VT323 } from "next/font/google";
import { Providers } from "./providers";
import Image from "next/image";
import { Github, Twitter, MessageCircle } from "lucide-react";
import "./globals.css";
import { Typography } from "@/components/ui/typography";
import GlitchHeading from "@/components/ui/GlitchHeading";

const inter = Inter({ subsets: ["latin"] });
const vt323 = VT323({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Startup.Security's Handbook",
  description: "A guide to folks in startup.security",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={vt323.className}>
        <Providers>

          <div id="grid-overlay"></div>
          <main className="flex min-h-screen flex-col items-center justify-between p-8 text-red-500 scanline">
            <div className="w-full max-w-5xl border-2 border-red-500 p-8 relative pixel-corners">
              {/* Add corner markers */}
              <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-red-500"></div>
              <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-red-500"></div>
              <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-red-500"></div>
              <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-red-500"></div>

              <Image
                src="/images/logo.svg"
                alt="Startup Security Logo"
                width={150}
                height={150}
                className="mb-8"
              />
              <GlitchHeading />
              {children}

            </div>

            <footer className="mt-16 flex justify-center items-center space-x-4 border-t border-red-500 pt-4">
              <a href="https://github.com/your-github" target="_blank" rel="noopener noreferrer" className="text-red-500 hover:text-red-300 blink">
                <Github size={24} />
              </a>
              <a href="https://twitter.com/your-twitter" target="_blank" rel="noopener noreferrer" className="text-red-500 hover:text-red-300 blink">
                <Twitter size={24} />
              </a>
              <a href="https://discord.gg/your-discord" target="_blank" rel="noopener noreferrer" className="text-red-500 hover:text-red-300 blink">
                <MessageCircle size={24} />
              </a>
            </footer>
          </main>


        </Providers>
      </body>
    </html>
  );
}
