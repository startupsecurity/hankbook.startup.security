"use client";
import { motion } from "framer-motion";
import { Typography } from "@/components/ui/typography";
import Link from "next/link";

export default function SecureCodingIntro() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="container mx-auto px-4 py-8"
        >
            <Typography variant="h1" className="mb-8 text-4xl border-b border-red-500 pb-2">
                Introduction to Secure Coding
            </Typography>
            <Typography variant="body" className="mb-4">
                Secure coding is the practice of developing computer software in a way that guards against the accidental introduction of security vulnerabilities. It is a crucial aspect of software development that helps protect systems and data from potential threats and attacks.
            </Typography>
            <Typography variant="body" className="mb-4">
                Key principles of secure coding include:
            </Typography>
            <ul className="list-disc pl-5 mb-4">
                <li>Input validation and sanitization</li>
                <li>Proper authentication and authorization</li>
                <li>Secure data storage and transmission</li>
                <li>Error handling and logging</li>
                <li>Use of secure APIs and libraries</li>
                <li>Regular security testing and code reviews</li>
            </ul>
            <Typography variant="body" className="mb-4">
                By following secure coding practices, developers can significantly reduce the risk of vulnerabilities in their applications, protecting both the organization and its users from potential security breaches.
            </Typography>
            <Link href="/things-every-employee-should-know" className="text-red-300 hover:text-red-100">
                &lt; Back to Things Every Employee Should Know
            </Link>
        </motion.div>
    );
}