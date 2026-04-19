import {
    Lock,
    Split,
    Zap,
    Users,
    RotateCcw,
    FileSearch,
    Webhook,
    LayoutDashboard,
} from "lucide-react";

const capabilities = [
    {
        icon: Lock,
        title: "Escrow Engine",
        description:
            "Hold funds securely in regulated accounts until configurable conditions are met. Works with custom rules, webhooks, and manual release.",
    },
    {
        icon: Split,
        title: "Multi-Party Splits",
        description:
            "Distribute payments to any number of recipients with percentage or fixed-amount rules. Fees, royalties, and referrals in one pass.",
    },
    {
        icon: Zap,
        title: "Instant Disbursements",
        description:
            "Release funds in real time or on a schedule — daily, weekly, or triggered by business events in your platform.",
    },
    {
        icon: Users,
        title: "Recipient Onboarding",
        description:
            "KYC verification, Stripe account creation, and bank connection handled for you. Branded to your platform, zero compliance burden.",
    },
    {
        icon: RotateCcw,
        title: "Refunds & Reversals",
        description:
            "Automate proportional refunds across all split recipients when a buyer disputes or returns. No manual reconciliation needed.",
    },
    {
        icon: FileSearch,
        title: "Audit & Reporting",
        description:
            "Immutable event logs for every transaction, rule execution, and payout. Exportable for finance, legal, and compliance teams.",
    },
    {
        icon: Webhook,
        title: "Webhooks & Events",
        description:
            "Rich event stream for every payment state change. Build real-time notifications, triggers, and automations on top of VestPay.",
    },
    {
        icon: LayoutDashboard,
        title: "No-Code Dashboard",
        description:
            "Create and manage rulesets, view transactions, and configure payouts from a visual dashboard — no engineering required.",
    },
];

export function CoreCapabilities() {
    return (
        <section className="py-20 md:py-28 bg-background">
            <div className="mx-auto max-w-7xl px-6">
                {/* Header */}
                <div className="mb-14 max-w-2xl">
                    <p className="mb-4 text-xs font-semibold uppercase tracking-[0.1em] text-accent">
                        Core capabilities
                    </p>
                    <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground leading-[1.15]">
                        Everything built in, nothing bolted on
                    </h2>
                    <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                        VestPay replaces months of bespoke Stripe engineering with a
                        battle-tested layer you can integrate in a weekend.
                    </p>
                </div>

                {/* Grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {capabilities.map((cap) => (
                        <div
                            key={cap.title}
                            className="group flex flex-col rounded-xl border border-border bg-card p-6 hover:border-accent/30 hover:shadow-md transition-all duration-200"
                        >
                            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-secondary group-hover:bg-accent/10 transition-colors">
                                <cap.icon
                                    className="h-4.5 w-4.5 text-muted-foreground group-hover:text-accent transition-colors"
                                    strokeWidth={1.5}
                                />
                            </div>
                            <h3 className="mb-1.5 text-sm font-semibold text-foreground">
                                {cap.title}
                            </h3>
                            <p className="text-xs text-muted-foreground leading-relaxed">
                                {cap.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
