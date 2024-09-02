"use client";
import Image from "next/image";
import { Github, Twitter, MessageCircle } from "lucide-react";
import { Typography } from "@/components/ui/typography";
import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function Home() {
  const [glitchText, setGlitchText] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      setGlitchText(Math.random() < 0.1 ? 'glitch' : '');
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
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
          <Typography variant="h1" className={`mb-8 text-red-500 border-b border-red-500 pb-2 text-4xl ${glitchText}`} data-text="Startup Security Handbook">
            Startup Security Handbook
          </Typography>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Section title="Mission" content="Simplify meaningful communication between companies and their customers." />
            <Section title="Vision" content="Build a community-driven open-source set of tools for developers to improve product-to-customer communication." />
            <Section title="Values" content={[
              "1. Empathy",
              "2. Transparency",
              "3. Passion",
              "4. Ownership",
              "5. Action Oriented"
            ]} />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <LinkSection title="Company" links={[
              "Communication manifest",
              "History",
              "The Team",
              "Organizational Map",
              "Company messaging",
              "Logos & Assets",
              "FAQ's"
            ]} />
            <LinkSection title="{How we work}" links={[
              "All remote",
              "All a-sync",
              "Open-source startup",
              "Company terminology",
              "Support handbook",
              "Company ideas",
              "Slack Guidelines",
              "How we communicate"
            ]} />
            <LinkSection title="</Employment>" links={[
              "Benefits plan",
              "Home office",
              "Co-Working spaces",
              "Company equipment",
              "Vacation & Sick-days",
              "Compensation",
              "Travel Policy",
              "Reimbursements"
            ]} />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <LinkSection title="Join the party" links={[
              "Write in our blog",
              "Careers page",
              "Recruitment process",
              "How to send us invoices",
              "Hacksquad"
            ]} />
            <LinkSection title="</Engineering>" links={[
              "Getting started",
              "Development workflow"
            ]} />
          </div>
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
    </>
  );
}

function Section({ title, content }: { title: string; content: string | string[] }) {
  return (
    <div className="border border-red-500 p-4 relative pixel-corners">
      <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-red-500"></div>
      <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-red-500"></div>
      <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-red-500"></div>
      <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-red-500"></div>
      <Typography variant="h2" className="mb-4 text-red-500 border-b border-red-500 pb-1 text-2xl">{title}</Typography>
      {Array.isArray(content) ? (
        <ul className="list-none">
          {content.map((item, index) => (
            <Typography key={index} variant="body" as="li" className="mb-2 text-lg">{item}</Typography>
          ))}
        </ul>
      ) : (
        <Typography variant="body" className="text-lg">{content}</Typography>
      )}
    </div>
  );
}

function LinkSection({ title, links }: { title: string; links: string[] }) {
  return (
    <div className="border border-red-500 p-4 relative pixel-corners">
      <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-red-500"></div>
      <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-red-500"></div>
      <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-red-500"></div>
      <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-red-500"></div>
      <Typography variant="h2" className="mb-4 text-red-500 border-b border-red-500 pb-1 text-2xl">{title}</Typography>
      <ul className="list-none">
        {links.map((link, index) => (
          <Typography key={index} variant="body" as="li" className="mb-2 text-lg">
            <Link href={`/${link.toLowerCase().replace(/\s+/g, '-')}`} className="text-red-300 hover:text-red-100 relative pl-4 group">
              <span className="absolute left-0 top-1/2 -translate-y-1/2 w-2 h-px bg-red-500 group-hover:w-3 transition-all"></span>
              {link}
            </Link>
          </Typography>
        ))}
      </ul>
    </div>
  );
}
