"use client";

import { Button } from "@/components/ui/button";
import {
    ArrowRight,
    Check,
    Zap,
    Lock,
} from "lucide-react";
import { cn } from "@/lib/utils";

export function HeroSection() {

    return (
        <section className="relative overflow-hidden bg-background">
            {/* ── Subtle grid overlay ─────────────────────────────── */}
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

            {/* ── Top radial glow ─────────────────────────────────── */}
            <div
                aria-hidden
                className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[500px] rounded-full blur-3xl"
                style={{
                    background:
                        "radial-gradient(ellipse at center, oklch(0.48 0.15 162 / 0.12) 0%, transparent 70%)",
                }}
            />

            {/* ── Animated stream lines ────────────────────────────── */}
            <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
                <div className="absolute top-[18%] left-0 w-full h-px">
                    <div className="animate-stream-1 w-40 h-full bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
                </div>
                <div className="absolute top-[38%] left-0 w-full h-px">
                    <div className="animate-stream-2 w-56 h-full bg-gradient-to-r from-transparent via-accent/20 to-transparent" />
                </div>
                <div className="absolute top-[62%] left-0 w-full h-px">
                    <div className="animate-stream-3 w-48 h-full bg-gradient-to-r from-transparent via-accent/15 to-transparent" />
                </div>
                <div className="absolute top-[80%] left-0 w-full h-px">
                    <div className="animate-stream-4 w-36 h-full bg-gradient-to-r from-transparent via-primary/15 to-transparent" />
                </div>
                <div className="absolute top-0 left-[8%] w-px h-full hidden md:block">
                    <div className="animate-stream-vertical-1 w-full h-28 bg-gradient-to-b from-transparent via-accent/15 to-transparent" />
                </div>
                <div className="absolute top-0 left-[92%] w-px h-full hidden md:block">
                    <div className="animate-stream-vertical-2 w-full h-36 bg-gradient-to-b from-transparent via-accent/12 to-transparent" />
                </div>
            </div>

            <div className="relative mx-auto max-w-7xl px-6 pt-28 pb-0 md:pt-36">

                {/* ── Headline area ────────────────────────────────── */}
                <div className="flex flex-col items-center text-center">
                    {/* Badge */}
                    <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-accent/25 bg-accent/8 px-4 py-1.5 text-xs font-medium text-accent">
                        <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
                        Built on Stripe Connect · PCI-compliant
                    </div>

                    <h1 className="max-w-4xl text-balance text-5xl font-semibold tracking-tight text-foreground md:text-6xl lg:text-[4.5rem] leading-[1.05]">
                        The modern way to move{" "}
                        <span className="text-accent">money</span> on your platform
                    </h1>

                    <p className="mt-6 max-w-2xl text-balance text-lg text-muted-foreground md:text-xl leading-relaxed">
                        Collect payments, hold funds in escrow, and automatically disburse
                        to recipients. Launch in days, not months.
                    </p>

                    <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row">
                        <Button
                            size="lg"
                            className="h-12 w-full px-8 text-base shadow-lg shadow-primary/15 group sm:w-auto"
                            asChild
                        >
                            <a href="https://app.vestpay.co/signup">
                                Start Building
                                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                            </a>
                        </Button>
                        <Button
                            variant="outline"
                            size="lg"
                            className="h-12 w-full px-8 text-base sm:w-auto"
                            asChild
                        >
                            <a
                                href="https://calendly.com/anthony-vestpay"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Request a Demo
                            </a>
                        </Button>
                    </div>

                    {/* Trust row */}
                    <div className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1.5">
                            <Check className="h-3.5 w-3.5 text-accent" />
                            No credit card required
                        </span>
                        <span className="hidden h-3.5 w-px bg-border sm:block" />
                        <span className="flex items-center gap-1.5">
                            <Check className="h-3.5 w-3.5 text-accent" />
                            First $50k processed free
                        </span>
                        <span className="hidden h-3.5 w-px bg-border sm:block" />
                        <span className="flex items-center gap-1.5">
                            <Check className="h-3.5 w-3.5 text-accent" />
                            99.99% uptime SLA
                        </span>
                    </div>
                </div>


            </div>

            {/* Section bottom spacer */}
            <div className="h-20 md:h-28" />
        </section>
    );
}

