import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Zap, GitBranch } from "lucide-react";

const highlights = [
    {
        icon: Shield,
        title: "Secure by default",
        description:
            "PCI-compliant infrastructure with funds held in regulated, ring-fenced accounts.",
    },
    {
        icon: Zap,
        title: "Launch in days",
        description:
            "Simple REST API instead of months of Stripe Connect setup and compliance work.",
    },
    {
        icon: GitBranch,
        title: "Flexible splits",
        description:
            "Configure complex disbursement rules visually or via API — no code changes needed.",
    },
];

export function SolutionHero() {
    return (
        <section className="relative overflow-hidden bg-background pt-32 pb-20 md:pt-40 md:pb-28">
            {/* Grid overlay */}
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
            {/* Radial glow */}
            <div
                aria-hidden
                className="pointer-events-none absolute -top-32 left-0 h-[500px] w-[700px] rounded-full blur-3xl"
                style={{ background: "radial-gradient(ellipse at 30% 50%, oklch(0.48 0.15 162 / 0.10) 0%, transparent 70%)" }}
            />

            <div className="relative mx-auto max-w-7xl px-6">
                <div className="max-w-3xl">
                    <p className="mb-5 text-xs font-semibold uppercase tracking-[0.1em] text-accent">
                        How VestPay Works
                    </p>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-foreground leading-[1.08]">
                        The easiest way to handle platform payments
                    </h1>
                    <p className="mt-7 text-xl text-muted-foreground leading-relaxed max-w-2xl">
                        VestPay is a payment orchestration layer built on Stripe Connect. We
                        handle the complexity of multi-party payments so you can focus on
                        building your platform.
                    </p>

                    <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                        <Button
                            size="lg"
                            className="h-12 px-8 text-base shadow-md shadow-primary/10 group"
                            asChild
                        >
                            <a
                                href="https://calendly.com/anthony-vestpay"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Request a Demo
                                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                            </a>
                        </Button>
                        <Button
                            size="lg"
                            variant="outline"
                            className="h-12 px-8 text-base"
                        >
                            View Documentation
                        </Button>
                    </div>
                </div>

                {/* Key highlights */}
                <div className="mt-20 grid md:grid-cols-3 gap-8 border-t border-border pt-14">
                    {highlights.map((h) => (
                        <div key={h.title} className="flex items-start gap-4">
                            <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-secondary">
                                <h.icon className="h-6 w-6 text-accent" strokeWidth={1.5} />
                            </div>
                            <div>
                                <h3 className="mb-1.5 font-semibold text-foreground">{h.title}</h3>
                                <p className="text-sm text-muted-foreground leading-relaxed">
                                    {h.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
