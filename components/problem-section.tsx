import { ArrowDown } from "lucide-react";

const problems = [
    {
        title: "Stripe Connect is complex",
        description:
            "Managing connected accounts, capabilities, and compliance takes months of engineering just to stand up — before you write a single line of product code.",
    },
    {
        title: "Custom payout logic is costly",
        description:
            "Building disbursement rules, percentage splits, and conditional payouts from scratch drains engineering bandwidth and delays your launch by quarters.",
    },
    {
        title: "Recipients hate the onboarding",
        description:
            "Lengthy KYC flows and confusing dashboards create friction and drop-off before the first payout, generating support tickets you can't afford.",
    },
];

export function ProblemSection() {
    return (
        <section className="py-24 md:py-32 bg-background">
            <div className="mx-auto max-w-7xl px-6">
                <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">

                    {/* Left — sticky heading */}
                    <div className="lg:sticky lg:top-28">
                        <p className="mb-4 text-xs font-semibold tracking-[0.1em] uppercase text-accent">
                            The Problem
                        </p>
                        <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-foreground leading-[1.12]">
                            Platform payments<br />
                            <span className="text-muted-foreground">shouldn&apos;t be this hard</span>
                        </h2>
                        <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-sm">
                            Every marketplace faces the same challenges when trying to handle
                            payments, escrow, and disbursements at scale.
                        </p>
                        <a
                            href="#features"
                            className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-accent hover:gap-3 transition-all"
                        >
                            See how we solve this
                            <ArrowDown className="h-4 w-4" />
                        </a>
                    </div>

                    {/* Right — problem cards */}
                    <div className="space-y-3">
                        {problems.map((problem, index) => (
                            <div
                                key={index}
                                className="group flex items-start gap-5 rounded-xl bg-secondary/50 p-6 md:p-8 hover:bg-secondary transition-colors duration-200"
                            >
                                <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-card text-xs font-bold text-muted-foreground shadow-sm group-hover:text-foreground transition-colors">
                                    {String(index + 1).padStart(2, "0")}
                                </span>
                                <div>
                                    <h3 className="mb-2 text-base font-semibold text-foreground">
                                        {problem.title}
                                    </h3>
                                    <p className="text-sm text-muted-foreground leading-relaxed">
                                        {problem.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
