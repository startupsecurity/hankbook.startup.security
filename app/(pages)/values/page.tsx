"use client";
import { motion } from "framer-motion";
import { Typography } from "@/components/ui/typography";
import Section from "@/components/ui/Section";
import Link from "next/link";

export default function Values() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="container mx-auto px-4 py-8"
        >
            <Typography variant="h1" className="mb-8 text-4xl border-b pb-2">
                About Our Values
            </Typography>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
            >
                <Section
                    title="Our Core Values"
                    content={[
                        "1. We are a business",
                        "2. Stronger together",
                        "3. Action beats reaction",
                        "4. Ship fast or die young",
                        "5. All we can do is better",
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