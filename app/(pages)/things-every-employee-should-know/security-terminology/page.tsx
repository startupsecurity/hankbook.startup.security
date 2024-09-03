"use client";
import { motion } from "framer-motion";
import { Typography } from "@/components/ui/typography";
import Link from "next/link";

export default function SecurityTerminology() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="container mx-auto px-4 py-8"
        >
            <Typography variant="h1" className="mb-8 text-4xl border-b border-red-500 pb-2">
                Security Terminology
            </Typography>
            <Typography variant="body" className="mb-4">
                Understanding common security terminology is crucial for effective communication in the cybersecurity field. Here are some key terms:
            </Typography>
            <ul className="list-disc pl-5 mb-4">
                <li><strong>Vulnerability:</strong> A weakness in a system that can be exploited by threats.</li>
                <li><strong>Exploit:</strong> A piece of software or technique used to take advantage of a vulnerability.</li>
                <li><strong>Malware:</strong> Malicious software designed to disrupt, damage, or gain unauthorized access to a system.</li>
                <li><strong>Phishing:</strong> A social engineering attack used to steal user data, including login credentials and credit card numbers.</li>
                <li><strong>Encryption:</strong> The process of encoding information to protect it from unauthorized access.</li>
                <li><strong>Firewall:</strong> A network security system that monitors and controls incoming and outgoing network traffic.</li>
                <li><strong>Zero-day:</strong> A previously unknown vulnerability that hackers can exploit before a patch is available.</li>
                <li><strong>DDoS:</strong> Distributed Denial of Service, an attack that attempts to make a service unavailable by overwhelming it with traffic from multiple sources.</li>
            </ul>
            <Typography variant="body" className="mb-4">
                Familiarizing yourself with these terms will help you better understand and discuss security concepts and threats.
            </Typography>
            <Link href="/things-every-employee-should-know" className="text-red-300 hover:text-red-100">
                &lt; Back to Things Every Employee Should Know
            </Link>
        </motion.div>
    );
}