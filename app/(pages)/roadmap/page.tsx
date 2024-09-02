"use client";
import { motion } from "framer-motion";
import { Typography } from "@/components/ui/typography";
import Section from "@/components/ui/Section";
import Link from "next/link";

export default function Roadmap() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="container mx-auto px-4 py-8"
        >
            <Typography variant="h1" className="mb-8 text-4xl border-b pb-2">
                Company Roadmap
            </Typography>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
            >
                <Section
                    title="Short-term Goals"
                    content={[
                        "Q1 objectives",
                        "Q2 objectives",
                    ]}
                />
                <Section
                    title="Long-term Vision"
                    content={[
                        "1-year plan",
                        "3-year plan",
                        "5-year plan",
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