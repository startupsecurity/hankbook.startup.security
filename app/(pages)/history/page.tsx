"use client";
import { motion } from "framer-motion";
import { Typography } from "@/components/ui/typography";
import Link from "next/link";

const historyEvents = [
    { year: 2020, event: "Company founded" },
    { year: 2021, event: "First product launch" },
    { year: 2022, event: "Expanded to international markets" },
    { year: 2023, event: "Reached 1 million users" },
];

export default function History() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="  text-red-500 p-8"
        >
            <div className="max-w-3xl mx-auto">
                <Typography variant="h1" className="mb-8 text-4xl border-b border-red-500 pb-2">
                    Company History
                </Typography>
                <motion.ul className="space-y-4">
                    {historyEvents.map((event, index) => (
                        <motion.li
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.2 }}
                            className="flex items-center space-x-4"
                        >
                            <span className="text-2xl">{event.year}</span>
                            <span className="text-xl">{event.event}</span>
                        </motion.li>
                    ))}
                </motion.ul>
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
            </div>
        </motion.div>
    );
}