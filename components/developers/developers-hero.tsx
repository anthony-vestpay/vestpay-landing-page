"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Copy, Check } from "lucide-react";
import { useState } from "react";

const heroCode = `import Vestpay from 'vestpay';

const vestpay = new Vestpay({
  apiKey: process.env.VESTPAY_SECRET_KEY,
});

const session = await vestpay.sessions.create({
  amount: 2000,
  currency: 'GBP',
  ruleset_id: 'ruleset_xxx',
  recipient_id: 'rec_xxx',
  customer: { email: 'user@example.com' },
});

// Redirect customer to hosted checkout
redirect(session.checkout_url);`;

export function DevelopersHero() {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(heroCode);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <section className="relative overflow-hidden bg-background pt-32 pb-20 md:pt-40 md:pb-28">
            {/* Grid */}
            <div
                aria-hidden
                className="pointer-events-none absolute inset-0"
                style={{
                    backgroundImage:
                        "linear-gradient(to right,rgba(0,0,0,0.04) 1px,transparent 1px)," +
                        "linear-gradient(to bottom,rgba(0,0,0,0.04) 1px,transparent 1px)",
                    backgroundSize: "64px 64px",
                }}
            />
            {/* Glow */}
            <div
                aria-hidden
                className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 h-[600px] w-[1000px] rounded-full blur-3xl"
                style={{ background: "radial-gradient(ellipse, oklch(0.48 0.15 162 / 0.08) 0%, transparent 70%)" }}
            />

            <div className="relative mx-auto max-w-7xl px-6">
                <div className="grid lg:grid-cols-2 gap-12 xl:gap-20 items-center">
                    {/* Left */}
                    <div>
                        <p className="mb-5 text-xs font-semibold uppercase tracking-[0.1em] text-accent">
                            Developer Documentation
                        </p>
                        <h1 className="text-4xl md:text-5xl lg:text-[3.25rem] font-semibold tracking-tight text-foreground leading-[1.08]">
                            Build payments in{" "}
                            <span className="text-accent">minutes</span>,
                            <br className="hidden sm:block" />
                            {" "}not months
                        </h1>
                        <p className="mt-6 text-xl text-muted-foreground leading-relaxed max-w-lg">
                            A clean REST API, official SDKs, real-time webhooks, and a full sandbox — everything you need to go from first request to production.
                        </p>

                        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                            <Button size="lg" className="h-12 px-8 text-base shadow-md shadow-primary/10 group" asChild>
                                <a href="https://app.vestpay.co/signup">
                                    Get API Keys
                                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                                </a>
                            </Button>
                            <Button size="lg" variant="outline" className="h-12 px-8 text-base" asChild>
                                <a href="#api-reference">View Reference</a>
                            </Button>
                        </div>

                        <div className="mt-12 flex flex-wrap gap-8 border-t border-border pt-8">
                            {[
                                { value: "99.99%", label: "uptime SLA" },
                                { value: "< 100ms", label: "avg response" },
                                { value: "REST + Webhooks", label: "architecture" },
                            ].map((s) => (
                                <div key={s.label}>
                                    <p className="text-2xl font-semibold text-foreground">{s.value}</p>
                                    <p className="text-sm text-muted-foreground">{s.label}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right: code block */}
                    <div className="bg-[#0a0a0a] rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                        <div className="flex items-center justify-between border-b border-white/10 px-4 py-3 bg-white/5">
                            <div className="flex items-center gap-3">
                                <div className="flex gap-1.5">
                                    <span className="h-3 w-3 rounded-full bg-red-500/60" />
                                    <span className="h-3 w-3 rounded-full bg-yellow-500/60" />
                                    <span className="h-3 w-3 rounded-full bg-green-500/60" />
                                </div>
                                <span className="text-xs text-white/40 font-mono">collect-payment.ts</span>
                            </div>
                            <button
                                onClick={handleCopy}
                                className="flex items-center gap-1.5 text-xs text-white/40 hover:text-white/70 transition-colors"
                            >
                                {copied ? (
                                    <><Check className="h-3.5 w-3.5" /><span>Copied</span></>
                                ) : (
                                    <><Copy className="h-3.5 w-3.5" /><span>Copy</span></>
                                )}
                            </button>
                        </div>
                        <div className="p-5 overflow-x-auto">
                            <pre className="text-xs sm:text-sm leading-relaxed">
                                <code className="font-mono">
                                    {heroCode.split("\n").map((line, i) => (
                                        <div key={i} className="flex hover:bg-white/5 -mx-5 px-5">
                                            <span className="w-7 text-white/20 text-right mr-4 select-none text-xs shrink-0">
                                                {i + 1}
                                            </span>
                                            <span className="text-white/90 whitespace-pre">
                                                {highlightCode(line)}
                                            </span>
                                        </div>
                                    ))}
                                </code>
                            </pre>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

function highlightCode(line: string) {
    return line
        .split(/(".*?"|'.*?'|`.*?`|\b(?:import|from|const|await|async|return|true|false|new|process|redirect)\b|\/\/.*$)/g)
        .map((part, i) => {
            if (/^["'`]/.test(part)) return <span key={i} className="text-emerald-400">{part}</span>;
            if (/^(import|from|const|await|async|return|new|process)$/.test(part))
                return <span key={i} className="text-purple-400">{part}</span>;
            if (/^(true|false)$/.test(part)) return <span key={i} className="text-amber-400">{part}</span>;
            if (/^\/\//.test(part)) return <span key={i} className="text-white/30">{part}</span>;
            return <span key={i}>{part}</span>;
        });
}
