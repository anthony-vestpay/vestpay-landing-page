import {
    ShoppingBag,
    Users,
    Home,
    Briefcase,
    Truck,
    GraduationCap,
    ArrowRight,
    Check,
} from "lucide-react";

const usecases = [
    {
        icon: ShoppingBag,
        category: "Marketplace",
        title: "E-commerce & Artisan Marketplaces",
        description:
            "Enable buyers to transact confidently with sellers they've never met. Funds are held until delivery is confirmed, then automatically split between seller and platform.",
        flow: ["Buyer places order", "Funds held in escrow", "Seller ships & confirms", "Automatic payout"],
        metrics: [
            { label: "Avg. setup time", value: "2 days" },
            { label: "Dispute resolution", value: "Automated" },
        ],
        color: "accent",
        examples: ["Handmade goods", "Vintage items", "B2B wholesale"],
    },
    {
        icon: Briefcase,
        category: "Services",
        title: "Freelance & Consulting Platforms",
        description:
            "Protect both clients and freelancers. Milestone-based escrow ensures work is completed before funds are released, reducing disputes and chargebacks.",
        flow: ["Client funds milestone", "Work completed", "Client approves", "Freelancer paid instantly"],
        metrics: [
            { label: "Chargeback rate", value: "Near zero" },
            { label: "Payout speed", value: "< 1 min" },
        ],
        color: "primary",
        examples: ["Design", "Development", "Consulting"],
    },
    {
        icon: Home,
        category: "Rentals",
        title: "Short-Term Rental Platforms",
        description:
            "Handle security deposits, nightly rates, and host payouts with confidence. Funds release automatically at check-in, protecting both guests and hosts.",
        flow: ["Guest books & pays", "Deposit secured", "Check-in triggers release", "Host paid within 24h"],
        metrics: [
            { label: "Host satisfaction", value: "98%" },
            { label: "Payout timing", value: "24h post check-in" },
        ],
        color: "accent",
        examples: ["Holiday lets", "Room rentals", "Equipment"],
    },
    {
        icon: Truck,
        category: "Gig Economy",
        title: "Delivery & On-Demand Services",
        description:
            "Pay drivers and service providers instantly after job completion. Set platform fees, handle tips, and manage multi-leg payouts all from one API.",
        flow: ["Customer pays upfront", "Job assigned & completed", "Rating confirmed", "Driver paid instantly"],
        metrics: [
            { label: "Payout latency", value: "< 30 sec" },
            { label: "Platform fee", value: "Configurable" },
        ],
        color: "primary",
        examples: ["Food delivery", "Courier", "Home services"],
    },
    {
        icon: Users,
        category: "Community",
        title: "Community & Membership Platforms",
        description:
            "Monetise your community with subscriptions, events, and creator tips. Split revenue between creators and platform automatically every billing cycle.",
        flow: ["Member subscribes", "Revenue collected", "Split configured", "Creator receives share"],
        metrics: [
            { label: "Revenue split", value: "Fully custom" },
            { label: "Billing cadence", value: "Any schedule" },
        ],
        color: "accent",
        examples: ["Creator platforms", "Course sites", "Clubs"],
    },
    {
        icon: GraduationCap,
        category: "Education",
        title: "EdTech & Course Marketplaces",
        description:
            "Enrol students, hold tuition fees, and pay instructors after course milestones. Full audit trail for every transaction keeps compliance simple.",
        flow: ["Student enrols & pays", "Course in progress", "Module completed", "Instructor paid"],
        metrics: [
            { label: "Compliance", value: "Built-in" },
            { label: "Audit trail", value: "Immutable" },
        ],
        color: "primary",
        examples: ["Online courses", "Tutoring", "Bootcamps"],
    },
];

export function UsecasesGrid() {
    return (
        <section className="py-16 md:py-24 bg-background">
            <div className="mx-auto max-w-7xl px-6">
                <div className="grid gap-6 md:grid-cols-2">
                    {usecases.map((uc, i) => (
                        <div
                            key={i}
                            className="group relative flex flex-col rounded-2xl border border-border bg-card p-7 hover:border-accent/30 hover:shadow-lg transition-all duration-300"
                        >
                            {/* Header */}
                            <div className="mb-5 flex items-start gap-4">
                                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-secondary group-hover:bg-accent/10 transition-colors">
                                    <uc.icon className="h-6 w-6 text-muted-foreground group-hover:text-accent transition-colors" strokeWidth={1.5} />
                                </div>
                                <div>
                                    <span className="text-xs font-semibold uppercase tracking-wide text-accent">
                                        {uc.category}
                                    </span>
                                    <h3 className="mt-0.5 text-lg font-semibold text-foreground leading-snug">
                                        {uc.title}
                                    </h3>
                                </div>
                            </div>

                            {/* Description */}
                            <p className="mb-6 text-sm text-muted-foreground leading-relaxed">
                                {uc.description}
                            </p>

                            {/* Flow steps */}
                            <div className="mb-6">
                                <p className="mb-3 text-xs font-medium text-muted-foreground uppercase tracking-wide">
                                    Payment flow
                                </p>
                                <div className="flex flex-wrap items-center gap-1.5">
                                    {uc.flow.map((step, j) => (
                                        <div key={j} className="flex items-center gap-1.5">
                                            <span className="rounded-full bg-secondary px-2.5 py-1 text-xs font-medium text-foreground">
                                                {step}
                                            </span>
                                            {j < uc.flow.length - 1 && (
                                                <ArrowRight className="h-3 w-3 text-muted-foreground flex-shrink-0" />
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Metrics */}
                            <div className="mb-5 grid grid-cols-2 gap-3">
                                {uc.metrics.map((m, j) => (
                                    <div key={j} className="rounded-xl bg-secondary/50 px-4 py-3">
                                        <p className="text-xs text-muted-foreground mb-0.5">{m.label}</p>
                                        <p className="text-sm font-semibold text-foreground">{m.value}</p>
                                    </div>
                                ))}
                            </div>

                            {/* Examples */}
                            <div className="flex flex-wrap gap-2 mt-auto">
                                {uc.examples.map((ex) => (
                                    <span
                                        key={ex}
                                        className="flex items-center gap-1 text-xs text-muted-foreground"
                                    >
                                        <Check className="h-3 w-3 text-accent flex-shrink-0" />
                                        {ex}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
