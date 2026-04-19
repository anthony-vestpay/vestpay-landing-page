"use client";

import { Copy } from "lucide-react";

const sdks = [
    {
        name: "Node.js",
        language: "TypeScript / JavaScript",
        status: "GA",
        installCmd: "npm install vestpay",
        description: "Full-featured SDK with TypeScript types. Works with Node, Next.js, Remix, and any JS runtime.",
        icon: (
            <svg viewBox="0 0 24 24" className="h-8 w-8" fill="currentColor">
                <path d="M12 1.85c-.27 0-.55.07-.78.2L3.78 6.35C3.3 6.6 3 7.1 3 7.63v8.74c0 .52.3 1.02.78 1.27l7.44 4.3c.46.26 1.05.26 1.51 0l7.44-4.3c.48-.25.78-.75.78-1.27V7.63c0-.53-.3-1.03-.78-1.28L12.78 2.05c-.23-.13-.51-.2-.78-.2zm0 2.1l6.5 3.74-2.38 1.37-4.12-2.37-4.12 2.37-2.38-1.37L12 3.95zM5 9.64l4.5 2.6v5.17L5 14.78V9.64zm14 0v5.14l-4.5 2.63V12.24l4.5-2.6z" />
            </svg>
        ),
        color: "text-yellow-400",
        bg: "bg-yellow-400/10",
    },
    {
        name: "Python",
        language: "Python 3.8+",
        status: "GA",
        installCmd: "pip install vestpay",
        description: "Pythonic SDK with type hints. Compatible with Django, FastAPI, Flask, and standard Python scripts.",
        icon: (
            <svg viewBox="0 0 24 24" className="h-8 w-8" fill="currentColor">
                <path d="M14.25 2.09c-3.81-.42-7.25.95-7.25 3.22v1.69h7.25v.56H4.81C2.39 7.56.79 9.36.37 12c-.5 3.13.9 5.94 4.44 6.62V16.5c0-.76.65-1.37 1.44-1.37h7.25c.76 0 1.37-.62 1.37-1.37V8.5c0-.73-.61-1.37-1.37-1.37s-1.37.64-1.37 1.37v.56H6.88v-.56c0-1.32 1.5-2.06 3.5-2.06V7.5h3.87c1.82 0 3.5 1.32 3.5 2.81v5.44c0 1.5-1.68 2.81-3.5 2.81H6.88c-1.82 0-3.5-1.31-3.5-2.81V14.25" />
            </svg>
        ),
        color: "text-blue-400",
        bg: "bg-blue-400/10",
    },
    {
        name: "Go",
        language: "Go 1.18+",
        status: "Coming soon",
        installCmd: "go get github.com/vestpay/vestpay-go",
        description: "Idiomatic Go client with context support, automatic retries, and full API coverage.",
        icon: (
            <svg viewBox="0 0 24 24" className="h-8 w-8" fill="currentColor">
                <path d="M1.816 15.956c-.293 1.58.068 2.813.988 3.667.93.86 2.298 1.21 4.068 1.042 1.478-.14 2.69-.71 3.61-1.7.91-1 1.37-2.28 1.37-3.83 0-.94-.19-1.74-.57-2.41-.38-.67-.95-1.19-1.71-1.55-.75-.36-1.67-.54-2.74-.54-.95 0-1.83.18-2.63.54-.8.36-1.45.87-1.93 1.55-.49.67-.76 1.47-.8 2.41zm8.378-2.5c.22.42.33.94.33 1.56 0 .94-.28 1.72-.83 2.32-.56.6-1.28.9-2.17.9-.83 0-1.47-.24-1.93-.72-.47-.48-.66-1.13-.56-1.95.1-.79.43-1.45.98-2 .56-.54 1.27-.82 2.13-.82.63 0 1.13.15 1.5.44.36.29.57.7.55 1.27z" />
            </svg>
        ),
        color: "text-cyan-400",
        bg: "bg-cyan-400/10",
    },
    {
        name: "Ruby",
        language: "Ruby 3.0+",
        status: "Coming soon",
        installCmd: "gem install vestpay",
        description: "Clean Ruby gem following idiomatic patterns. First-class support for Rails applications.",
        icon: (
            <svg viewBox="0 0 24 24" className="h-8 w-8" fill="currentColor">
                <path d="M20.156 18.11L5.516 22.4l9.22-16.168zm-14.64 3.956l.715-8.932 7.686 3.143zm13.386-14.81L16 1.603 9.89 4.268l6.022 2.452zm-7.496.34L5.39 9.87l3.97-7.025zM4.8 19.872l.693-9.174-3.817 4.27zm.222-9.894l6.12-1.636-5.864-2.372zm15.134 2.19l-4.886-8.164 4.198 2.562z" />
            </svg>
        ),
        color: "text-red-400",
        bg: "bg-red-400/10",
    },
];

export function DevelopersSdks() {
    return (
        <section id="sdks" className="py-24 md:py-32 bg-background border-t border-border">
            <div className="mx-auto max-w-7xl px-6">
                {/* Header */}
                <div className="mb-12">
                    <p className="mb-4 text-xs font-semibold uppercase tracking-[0.1em] text-accent">
                        SDKs & Libraries
                    </p>
                    <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground leading-[1.15]">
                        Official SDKs for your stack
                    </h2>
                    <p className="mt-4 text-lg text-muted-foreground max-w-2xl">
                        Drop-in libraries that handle authentication, retries, error parsing, and type safety — so you can focus on your product logic.
                    </p>
                </div>

                {/* SDK cards */}
                <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-5">
                    {sdks.map((sdk) => (
                        <div
                            key={sdk.name}
                            className={`relative rounded-xl border p-6 flex flex-col gap-4 transition-all ${sdk.status === "GA"
                                ? "bg-background border-border hover:border-accent/40 hover:shadow-sm"
                                : "bg-secondary/30 border-border/50 opacity-75"
                                }`}
                        >
                            {/* Status badge */}
                            <div className="absolute top-4 right-4">
                                <span
                                    className={`text-xs font-medium px-2 py-0.5 rounded-full ${sdk.status === "GA"
                                        ? "bg-accent/10 text-accent"
                                        : "bg-secondary text-muted-foreground"
                                        }`}
                                >
                                    {sdk.status}
                                </span>
                            </div>

                            {/* Icon */}
                            <div className={`h-14 w-14 rounded-xl ${sdk.bg} flex items-center justify-center ${sdk.color}`}>
                                {sdk.icon}
                            </div>

                            {/* Info */}
                            <div>
                                <p className="font-semibold text-foreground">{sdk.name}</p>
                                <p className="text-xs text-muted-foreground mt-0.5">{sdk.language}</p>
                            </div>

                            <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                                {sdk.description}
                            </p>

                            {/* Install command */}
                            {sdk.status === "GA" ? (
                                <div className="flex items-center justify-between gap-2 bg-secondary rounded-lg px-3 py-2">
                                    <code className="text-xs font-mono text-foreground/80 truncate">
                                        {sdk.installCmd}
                                    </code>
                                    <button
                                        onClick={() => navigator.clipboard.writeText(sdk.installCmd)}
                                        className="text-muted-foreground hover:text-foreground transition-colors shrink-0"
                                        title="Copy"
                                    >
                                        <Copy className="h-3.5 w-3.5" />
                                    </button>
                                </div>
                            ) : (
                                <div className="flex items-center gap-2 bg-secondary/50 rounded-lg px-3 py-2">
                                    <code className="text-xs font-mono text-muted-foreground/60 truncate">
                                        {sdk.installCmd}
                                    </code>
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                {/* REST fallback note */}
                <p className="mt-8 text-sm text-muted-foreground text-center">
                    Don&apos;t see your language?{" "}
                    <span className="text-foreground font-medium">
                        All endpoints are standard REST — any HTTP client works.
                    </span>
                </p>
            </div>
        </section>
    );
}
