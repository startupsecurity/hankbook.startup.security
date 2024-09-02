"use client";
import { motion } from "framer-motion";
import { Typography } from "@/components/ui/typography";
import Link from "next/link";
import LinkSection from "@/components/ui/LinkSection";

export default function ThingsEveryEmployeeShouldKnow() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="container mx-auto px-4 py-8"
        >
            <Typography variant="h1" className="mb-8 text-4xl border-b border-red-500 pb-2">
                Things Every Employee Should Know
            </Typography>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12"
            >
                <LinkSection
                    title="Working with Clients"
                    links={[
                        { text: "How we bill", url: "/things-every-employee-should-know/how-we-bill" },
                        { text: "Talking with clients", url: "/things-every-employee-should-know/talking-with-clients" },
                        { text: "Setting proactive boundaries", url: "/things-every-employee-should-know/setting-proactive-boundaries" },
                    ]}
                />
                <LinkSection
                    title="Git, GitHub, and Version Control"
                    links={[
                        { text: "Basics of Git", url: "/things-every-employee-should-know/git-basics" },
                        { text: "GitHub Workflow", url: "/things-every-employee-should-know/github-workflow" },
                        { text: "Branching Strategies", url: "/things-every-employee-should-know/branching-strategies" },
                    ]}
                />
                <LinkSection
                    title="SSO, OAuth, and Modern IAM"
                    links={[
                        { text: "SSO Explained", url: "/things-every-employee-should-know/sso-explained" },
                        { text: "OAuth 2.0 Overview", url: "/things-every-employee-should-know/oauth-overview" },
                        { text: "IAM Best Practices", url: "/things-every-employee-should-know/iam-best-practices" },
                    ]}
                />
                <LinkSection
                    title="OWASP Top 10 & Modern Vuln Lingo"
                    links={[
                        { text: "OWASP Top 10 Overview", url: "/things-every-employee-should-know/owasp-top-10" },
                        { text: "Common Vulnerabilities", url: "/things-every-employee-should-know/common-vulnerabilities" },
                        { text: "Security Terminology", url: "/things-every-employee-should-know/security-terminology" },
                    ]}
                />
                <LinkSection
                    title="Secure Coding Practices"
                    links={[
                        { text: "Introduction to Secure Coding", url: "/things-every-employee-should-know/secure-coding-intro" },
                        { text: "Common Coding Vulnerabilities", url: "/things-every-employee-should-know/coding-vulnerabilities" },
                        { text: "Best Practices", url: "/things-every-employee-should-know/secure-coding-best-practices" },
                    ]}
                />
                <LinkSection
                    title="Incident Response"
                    links={[
                        { text: "Incident Response Overview", url: "/things-every-employee-should-know/incident-response-overview" },
                        { text: "Steps in Incident Response", url: "/things-every-employee-should-know/incident-response-steps" },
                        { text: "Tools and Techniques", url: "/things-every-employee-should-know/incident-response-tools" },
                    ]}
                />
                <LinkSection
                    title="Data Privacy"
                    links={[
                        { text: "Data Privacy Basics", url: "/things-every-employee-should-know/data-privacy-basics" },
                        { text: "GDPR Overview", url: "/things-every-employee-should-know/gdpr-overview" },
                        { text: "Data Protection Strategies", url: "/things-every-employee-should-know/data-protection-strategies" },
                    ]}
                />
                <LinkSection
                    title="Common Tools"
                    links={[
                        { text: "Nmap ", url: "/things-every-employee-should-know/nmap-basics" },
                        { text: "Nuclei ", url: "/things-every-employee-should-know/nuclei-overview" },
                        { text: "Wireshark ", url: "/things-every-employee-should-know/wireshark-overview" },
                        { text: "Burp Suite", url: "/things-every-employee-should-know/burp-suite-basics" },
                    ]}
                />
                <LinkSection
                    title="Just Enough Crypto"
                    links={[
                        { text: "Introduction to Cryptocurrency", url: "/things-every-employee-should-know/crypto-intro" },
                        { text: "Bitcoin Basics", url: "/things-every-employee-should-know/bitcoin-basics" },
                        { text: "Ethereum Overview", url: "/things-every-employee-should-know/ethereum-overview" },
                        { text: "Cryptocurrency Wallets", url: "/things-every-employee-should-know/crypto-wallets" },
                    ]}
                />
            </motion.div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="mt-8"
            >
                <Link href="/" className="text-red-300 hover:text-red-100">
                    &lt; Back to Home
                </Link>
            </motion.div>
        </motion.div>
    );
}
