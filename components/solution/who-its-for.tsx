import { ShoppingBag, Users, Home, Truck } from "lucide-react";

const segments = [
    {
        icon: ShoppingBag,
        title: "Marketplaces",
        description:
            "Buyer protection, seller onboarding, and automatic escrow release for product delivery confirmation.",
        tags: ["Escrow", "Seller onboarding", "Buyer protection"],
    },
    {
        icon: Users,
        title: "Service Platforms",
        description:
            "Milestone-based payments, freelancer payouts, and dispute resolution built in from the start.",
        tags: ["Milestones", "Dispute resolution", "Instant payouts"],
    },
    {
        icon: Home,
        title: "Rental Platforms",
        description:
            "Security deposit management, nightly rate collection, and host payouts that release on check-in.",
        tags: ["Deposits", "Scheduled release", "Host payouts"],
    },
    {
        icon: Truck,
        title: "Gig & On-Demand",
        description:
            "Per-job payment collection, dynamic platform fees, and instant payout to service providers.",
        tags: ["Per-job payouts", "Dynamic fees", "Sub-second payout"],
    },
];

export function WhoItsFor() {
    return (
        <section className="py-20 md:py-28 bg-secondary/20">
            <div className="mx-auto max-w-7xl px-6">
                {/* Header */}
                <div className="mb-14 max-w-2xl">
                    <p className="mb-4 text-xs font-semibold uppercase tracking-[0.1em] text-accent">
                        Who it&apos;s for
                    </p>
                    <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground leading-[1.15]">
                        Any platform that moves money between parties
                    </h2>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
                    {segments.map((seg) => (
                        <div
                            key={seg.title}
                            className="group flex flex-col rounded-xl border border-border bg-card p-6 hover:border-accent/30 hover:shadow-md transition-all duration-200"
                        >
                            <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-secondary group-hover:bg-accent/10 transition-colors">
                                <seg.icon
                                    className="h-5 w-5 text-muted-foreground group-hover:text-accent transition-colors"
                                    strokeWidth={1.5}
                                />
                            </div>
                            <h3 className="mb-2 font-semibold text-foreground">{seg.title}</h3>
                            <p className="mb-5 text-sm text-muted-foreground leading-relaxed flex-1">
                                {seg.description}
                            </p>
                            <div className="flex flex-wrap gap-2">
                                {seg.tags.map((tag) => (
                                    <span
                                        key={tag}
                                        className="rounded-full bg-secondary px-2.5 py-0.5 text-xs font-medium text-muted-foreground"
                                    >
                                        {tag}
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
