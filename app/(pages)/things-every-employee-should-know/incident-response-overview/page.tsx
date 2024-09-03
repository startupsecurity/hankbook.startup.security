"use client";
import { motion } from "framer-motion";
import { Typography } from "@/components/ui/typography";
import Link from "next/link";

export default function IncidentResponseOverview() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="container mx-auto px-4 py-8"
        >
            <Typography variant="h1" className="mb-8 text-4xl border-b border-red-500 pb-2">
                Incident Response Overview
            </Typography>
            <Typography variant="body" className="mb-4">
                Incident response is a structured approach for handling security incidents, data breaches, and cyber attacks. It involves a set of procedures that an organization follows to detect, respond to, and limit the consequences of a security breach or cyber attack.
            </Typography>
            <Typography variant="body" className="mb-4">
                Key components of incident response typically include:
            </Typography>
            <ul className="list-disc pl-5 mb-4">
                <li>Preparation: Developing incident response plans and policies</li>
                <li>Identification: Detecting and determining whether an event is indeed a security incident</li>
                <li>Containment: Limiting the damage of the incident and isolating affected systems</li>
                <li>Eradication: Removing the root cause of the incident</li>
                <li>Recovery: Restoring systems to normal operation</li>
                <li>Lessons Learned: Analyzing the incident to improve future response</li>
            </ul>
            <Typography variant="body" className="mb-4">
                Effective incident response is crucial for minimizing damage, reducing recovery time and costs, and maintaining trust with customers and stakeholders.
            </Typography>
            <Link href="/things-every-employee-should-know" className="text-red-300 hover:text-red-100">
                &lt; Back to Things Every Employee Should Know
            </Link>
        </motion.div>
    );
}
