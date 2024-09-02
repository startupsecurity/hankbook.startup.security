"use client";
import { motion } from "framer-motion";
import { Typography } from "@/components/ui/typography";
import Section from "@/components/ui/Section";
import Link from "next/link";

export default function FAQs() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="container mx-auto px-4 py-8"
        >
            <Typography variant="h1" className="mb-8 text-4xl border-b pb-2">
                Frequently Asked Questions
            </Typography>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
            >
                <Section
                    title="General Questions"
                    content={[
                        "Q: What does your company do?",
                        "A: We secure the tools, technologies, and companies that are building the future we want.",
                        "Q: How can I contact support?",
                        "A: You can reach our support team at support@example.com.",
                    ]}
                />
                <Section
                    title="Product Questions"
                    content={[
                        "Q: What products do you offer?",
                        "A: We offer a range of security solutions for startups and tech companies.",
                        "Q: How do I get started with your services?",
                        "A: Contact our sales team to schedule a demo and discuss your needs.",
                    ]}
                />
            </motion.div>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="mt-8"
            >
                <Link href="/" className="text-blue-500 hover:text-blue-700">
                    &lt; Back to Home
                </Link>
            </motion.div>
        </motion.div>
    );
}