import Link from "next/link";
import { Typography } from "./typography";

interface LinkItem {
    text: string;
    url: string;
    isExternal?: boolean;
}

export default function LinkSection({ title, links }: { title: string; links: LinkItem[] }) {
    return (
        <div className="border border-red-500 p-4 relative pixel-corners">
            <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-red-500"></div>
            <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-red-500"></div>
            <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-red-500"></div>
            <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-red-500"></div>
            <Typography variant="h2" className="mb-4 text-red-500 border-b border-red-500 pb-1 text-2xl">{title}</Typography>
            <ul className="list-none">
                {links.map((link, index) => (
                    <Typography key={index} variant="body" as="li" className="mb-2 text-lg">
                        {link.isExternal ? (
                            <a href={link.url} target="_blank" rel="noopener noreferrer" className="text-red-300 hover:text-red-100 relative pl-4 group">
                                <span className="absolute left-0 top-1/2 -translate-y-1/2 w-2 h-px bg-red-500 group-hover:w-3 transition-all"></span>
                                {link.text}
                            </a>
                        ) : (
                            <Link href={link.url} className="text-red-300 hover:text-red-100 relative pl-4 group">
                                <span className="absolute left-0 top-1/2 -translate-y-1/2 w-2 h-px bg-red-500 group-hover:w-3 transition-all"></span>
                                {link.text}
                            </Link>
                        )}
                    </Typography>
                ))}
            </ul>
        </div>
    );
}
