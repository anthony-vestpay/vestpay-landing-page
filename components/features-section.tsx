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
            "Split payments between any number of recipients with custom percentage or fixed rules.",
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
        <section id="features" className="py-24 md:py-32 bg-secondary/30">
            <div className="mx-auto max-w-7xl px-6">
                {/* Header */}
                <div className="max-w-3xl mb-14">
                    <p className="text-xs font-semibold tracking-[0.08em] uppercase text-accent mb-4">
                        The Solution
                    </p>
                    <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-foreground leading-[1.15]">
                        Everything you need for platform payments
                    </h2>
                    <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
                        VestPay gives you the building blocks to handle any payment flow — from
                        collection through to complex multi-party disbursements.
                    </p>
                </div>

                {/* Tonal grid — no borders per DESIGN.md */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="group p-6 md:p-8 rounded-[6px] bg-background hover:bg-card transition-colors duration-200 shadow-sm hover:shadow-md"
                        >
                            <div className="h-10 w-10 rounded-[6px] bg-secondary flex items-center justify-center mb-5">
                                <feature.icon className="h-5 w-5 text-accent" strokeWidth={1.5} />
                            </div>
                            <h3 className="text-base font-semibold text-foreground mb-2">
                                {feature.title}
                            </h3>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
