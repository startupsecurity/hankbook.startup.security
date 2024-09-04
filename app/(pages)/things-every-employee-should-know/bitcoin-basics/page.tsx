"use client";
import { motion } from "framer-motion";
import { Typography } from "@/components/ui/typography";
import Link from "next/link";

export default function GitBasics() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="container mx-auto px-4 py-8"
        >
            <Typography variant="h1" className="mb-8 text-4xl border-b border-red-500 pb-2">
                Bitcoin Basics
            </Typography>
            <Typography variant="body" className="mb-4">
                Bitcoin is kind of a strange thing for people to grasp, mostly because you can’t physically grasp it, but it can still be used to purchase goods and services.

                Bitcoin is called a cryptocurrency but for the purposes of how it exists and is used in the world, I’d say it’s probably easier to view it as a commodity or a stock. It’s a thing you invest in that fluctuates in value based on it’s valuation across the planet. Because it’s not bound to any country or precious metal, it’s value is based purely on what people are willing to pay for it.

                This is the short answer so please look to other places on the site if you want a better, more technical answer but the best way I can come up with to think of Bitcoin is having a debit card where the contents are tied to a pretty volatile stock. You can spend those contents whenever you like but the value of what’s inside will be in flux all the time.
            </Typography>
            <Link href="/things-every-employee-should-know" className="text-red-300 hover:text-red-100">
                &lt; Back to Things Every Employee Should Know
            </Link>
        </motion.div>
    );
}