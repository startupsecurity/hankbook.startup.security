"use client";
import { motion } from "framer-motion";
import { Typography } from "@/components/ui/typography";
import Section from "@/components/ui/Section";
import Link from "next/link";

export default function DistributedNative() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="container mx-auto px-4 py-8"
        >
            <Typography variant="h1" className="mb-8 text-4xl border-b pb-2">
                Distributed Native
            </Typography>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
            >
                <Section
                    title="Our Approach"
                    content={[
                        "Embracing remote work culture",
                        "Global talent pool",
                        "Flexible working hours",
                    ]}
                />
                <Section
                    title="Benefits"
                    content={[
                        "Increased productivity",
                        "Better work-life balance",
                        "Diverse perspectives",
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