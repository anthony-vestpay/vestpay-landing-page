import { ArrowDown } from "lucide-react";

const problems = [
    {
        title: "Stripe Connect is complex",
        description:
            "Managing connected accounts, capabilities, and compliance takes months of engineering effort just to stand up.",
    },
    {
        title: "Custom payout logic is costly",
        description:
            "Building disbursement rules, percentage splits, and conditional payouts from scratch drains engineering bandwidth.",
    },
    {
        title: "Recipients hate the onboarding",
        description:
            "Lengthy KYC flows and confusing dashboards create friction, support tickets, and drop-off before first payout.",
    },
];

export function ProblemSection() {
    return (
        <section className="py-24 md:py-32 bg-background">
            <div className="mx-auto max-w-7xl px-6">
                <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
                    {/* Left — sticky heading */}
                    <div className="lg:sticky lg:top-32">
                        <p className="text-xs font-semibold tracking-[0.08em] uppercase text-accent mb-4">
                            The Problem
                        </p>
                        <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-foreground leading-[1.15]">
                            Platform payments<br />shouldn&apos;t be this hard
                        </h2>
                        <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                            Every marketplace faces the same challenges when trying to handle
                            payments, escrow, and disbursements at scale.
                        </p>
                        <a
                            href="#features"
                            className="inline-flex items-center gap-2 mt-8 text-sm font-medium text-accent hover:gap-3 transition-all"
                        >
                            See how we solve this
                            <ArrowDown className="h-4 w-4" />
                        </a>
                    </div>

                    {/* Right — tonal cards (no borders per DESIGN.md) */}
                    <div className="space-y-4">
                        {problems.map((problem, index) => (
                            <div
                                key={index}
                                className="group p-6 md:p-8 rounded-[6px] bg-secondary/60 hover:bg-secondary transition-colors duration-200"
                            >
                                <div className="flex items-start gap-5">
                                    <span className="flex-shrink-0 flex items-center justify-center h-9 w-9 rounded-[6px] bg-background text-xs font-bold text-muted-foreground shadow-sm">
                                        {String(index + 1).padStart(2, "0")}
                                    </span>
                                    <div>
                                        <h3 className="text-base font-semibold text-foreground mb-2">
                                            {problem.title}
                                        </h3>
                                        <p className="text-sm text-muted-foreground leading-relaxed">
                                            {problem.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
