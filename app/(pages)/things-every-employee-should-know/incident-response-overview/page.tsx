import { MDXRemote } from 'next-mdx-remote/rsc'
import { Typography } from "@/components/ui/typography";
import Link from "next/link";

const content = `
# Incident Response Overview

Incident response is a structured approach for handling security incidents, data breaches, and cyber attacks. It involves a set of procedures that an organization follows to detect, respond to, and limit the consequences of a security breach or cyber attack.

Key components of incident response typically include:

- Preparation: Developing incident response plans and policies
- Identification: Detecting and determining whether an event is indeed a security incident
- Containment: Limiting the damage of the incident and isolating affected systems
- Eradication: Removing the root cause of the incident
- Recovery: Restoring systems to normal operation
- Lessons Learned: Analyzing the incident to improve future response

Effective incident response is crucial for minimizing damage, reducing recovery time and costs, and maintaining trust with customers and stakeholders.
`

export default function IncidentResponseOverview() {
    return (
        <div className="container mx-auto px-4 py-8">
            <div className="prose prose-red">
                <MDXRemote source={content} />
            </div>
            <Link href="/things-every-employee-should-know" className="text-red-300 hover:text-red-100">
                &lt; Back to Things Every Employee Should Know
            </Link>
        </div>
    );
}