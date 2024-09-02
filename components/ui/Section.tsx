import { Typography } from "./typography";

export default function Section({ title, content }: { title: string; content: string | string[] }) {
    return (
        <div className="border border-red-500 p-4 relative pixel-corners">
            <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-red-500"></div>
            <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-red-500"></div>
            <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-red-500"></div>
            <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-red-500"></div>
            <Typography variant="h2" className="mb-4 text-red-500 border-b border-red-500 pb-1 text-2xl">{title}</Typography>
            {Array.isArray(content) ? (
                <ul className="list-none">
                    {content.map((item, index) => (
                        <Typography key={index} variant="body" as="li" className="mb-2 text-lg">{item}</Typography>
                    ))}
                </ul>
            ) : (
                <Typography variant="body" className="text-lg">{content}</Typography>
            )}
        </div>
    );
}