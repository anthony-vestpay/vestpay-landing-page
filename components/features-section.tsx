import { RotateCcw, CreditCard, Users, Split, FileSearch, Zap } from "lucide-react";

const features = [
    {
        icon: RotateCcw,
        title: "Refunds & Disputes",
        description:
            "Handle refunds and chargebacks automatically with proportional reversals across all recipients.",
    },
    {
        icon: CreditCard,
        title: "Hosted Payments",
        description:
            "A beautiful, PCI-compliant payment page that integrates in minutes — fully branded to your platform.",
    },
    {
        icon: Users,
        title: "Managed Onboarding",
        description:
            "We handle recipient KYC verification and Stripe account management so you don't have to.",
    },
    {
        icon: Split,
        title: "Multi-Recipient Splits",
        description:
            "Split payments between any number of recipients with custom percentage or fixed-amount rules.",
    },
    {
        icon: Zap,
        title: "Instant Payouts",
        description:
            "Disburse funds instantly or on a schedule that matches your platform's business logic.",
    },
    {
        icon: FileSearch,
        title: "Full Audit Trail",
        description:
            "Complete visibility into every payment, rule execution, and payout with immutable event logs.",
    },
];

export function FeaturesSection() {
    return (
        <section id="features" className="py-24 md:py-32 bg-secondary/20">
            <div className="mx-auto max-w-7xl px-6">
                {/* Header */}
                <div className="mb-16 max-w-3xl">
                    <p className="mb-4 text-xs font-semibold tracking-[0.1em] uppercase text-accent">
                        The Solution
                    </p>
                    <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-foreground leading-[1.12]">
                        Everything you need for platform payments
                    </h2>
                    <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
                        VestPay gives you the building blocks to handle any payment flow — from
                        collection through to complex multi-party disbursements.
                    </p>
                </div>

                {/* Feature grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="group relative flex flex-col p-6 md:p-7 rounded-xl bg-card border border-border hover:border-accent/30 hover:shadow-md transition-all duration-200"
                        >
                            {/* Icon */}
                            <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-secondary group-hover:bg-accent/10 transition-colors duration-200">
                                <feature.icon
                                    className="h-5 w-5 text-muted-foreground group-hover:text-accent transition-colors duration-200"
                                    strokeWidth={1.5}
                                />
                            </div>

                            <h3 className="mb-2 text-[0.9375rem] font-semibold text-foreground">
                                {feature.title}
                            </h3>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                                {feature.description}
                            </p>

                            {/* Subtle corner accent */}
                            <div className="absolute bottom-0 right-0 h-16 w-16 rounded-xl bg-gradient-to-tl from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
