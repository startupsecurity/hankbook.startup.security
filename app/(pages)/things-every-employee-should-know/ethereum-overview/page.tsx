"use client";
import { motion } from "framer-motion";
import { Typography } from "@/components/ui/typography";
import Link from "next/link";

export default function EthereumOverview() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="container mx-auto px-4 py-8"
        >
            <Typography variant="h1" className="mb-8 text-4xl border-b border-red-500 pb-2">
                Ethereum Overview
            </Typography>
            <Typography variant="body" className="mb-4">
                General Ethereum stuff to come, just putting in placeholders. 
            </Typography>
            <Link href="/things-every-employee-should-know" className="text-red-300 hover:text-red-100">
                &lt; Back to Things Every Employee Should Know
            </Link>
        </motion.div>
    );
}