"use client";
import { motion } from "framer-motion";
import { Typography } from "@/components/ui/typography";
import Section from "@/components/ui/Section";
import LinkSection from "@/components/ui/LinkSection";
import Link from "next/link";

export default function ReadingList() {
	return (
		<motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="container mx-auto px-4 py-8"
        >
            <Typography variant="h1" className="mb-8 text-4xl border-b pb-2">
                Reading List
            </Typography>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="flex flex-col space-y-4"
            >                
                <LinkSection
                    title="App Security"
                    links={[
                        { text: "Secure by Design by Deogun, Johnsson, & Sawano", url: "https://www.simonandschuster.com/books/Secure-by-Design/Daniel-Sawano/9781638352310", isExternal: true },
                        { text: "Designing Secure Software: A Guide for Developers by Kohnfelder", url: "https://designingsecuresoftware.com/", isExternal: true },
                    ]}
                />
                <LinkSection
                    title="Container Security"
                    links={[                        
                        { text: "Container Security: Fundamental Technology Concepts that Protect Containerized Applications by Rice", url: "https://www.oreilly.com/library/view/container-security/9781492056690/", isExternal: true },
                    ]}
                />
                <LinkSection
                    title="Threat Modeling"
                    links={[
                    { text: "Threat Modeling: Designing for Security by Shostack", url: "https://shostack.org/books/threat-modeling-book", isExternal: true },
                    { text: "Threat Modeling: A Practical Guide for Development Teams by Tarandach & Coles", url: "https://www.oreilly.com/library/view/threat-modeling/9781492056546/", isExternal: true  },
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
	)
}