"use client";
import { motion } from "framer-motion";
import { Typography } from "@/components/ui/typography";
import Link from "next/link";

export default function CryptoIntro() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="container mx-auto px-4 py-8"
        >
            <Typography variant="h1" className="mb-8 text-4xl border-b border-red-500 pb-2">
                Crypto Intro
            </Typography>
            <Typography variant="body" className="mb-4">
                Cryptocurrency is a form of digital or virtual currency that uses cryptography for security, making it difficult to counterfeit. Unlike traditional currencies issued by governments (like the dollar or euro), cryptocurrencies operate on decentralized networks based on blockchain technology—a distributed ledger that records all transactions across a network of computers.<br/>
                Bitcoin, created in 2009, was the first cryptocurrency and remains the most well-known. Since then, thousands of alternative cryptocurrencies have been developed, including Ethereum, Litecoin, and Ripple. Cryptocurrencies can be used for various purposes, including online purchases, investment, and as a means to transfer value directly between parties without the need for intermediaries like banks.<br/>
            </Typography>
            <Link href="/things-every-employee-should-know" className="text-red-300 hover:text-red-100">
                &lt; Back to Things Every Employee Should Know
            </Link>
        </motion.div>
    );
}