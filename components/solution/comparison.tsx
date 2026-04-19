import { Check, X } from "lucide-react";

const rows = [
    {
        feature: "Time to first payment",
        vestpay: "Days",
        diy: "3–6 months",
        stripe: "Weeks (with expertise)",
    },
    {
        feature: "Escrow / fund holding",
        vestpay: true,
        diy: false,
        stripe: false,
    },
    {
        feature: "Multi-party splits",
        vestpay: true,
        diy: "Custom build",
        stripe: "Partial",
    },
    {
        feature: "KYC / recipient onboarding",
        vestpay: true,
        diy: false,
        stripe: "Partial",
    },
    {
        feature: "No-code rule configuration",
        vestpay: true,
        diy: false,
        stripe: false,
    },
    {
        feature: "Instant disbursements",
        vestpay: true,
        diy: "Custom build",
        stripe: true,
    },
    {
        feature: "Refund automation",
        vestpay: true,
        diy: false,
        stripe: "Manual",
    },
    {
        feature: "Immutable audit trail",
        vestpay: true,
        diy: false,
        stripe: "Partial",
    },
    {
        feature: "PCI compliance",
        vestpay: true,
        diy: "Expensive",
        stripe: true,
    },
];

function Cell({ value }: { value: boolean | string }) {
    if (value === true) {
        return (
            <div className="flex justify-center">
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-accent/15">
                    <Check className="h-3.5 w-3.5 text-accent" />
                </div>
            </div>
        );
    }
    if (value === false) {
        return (
            <div className="flex justify-center">
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-destructive/10">
                    <X className="h-3.5 w-3.5 text-destructive" />
                </div>
            </div>
        );
    }
    return (
        <span className="text-xs text-muted-foreground font-medium">{value}</span>
    );
}

export function Comparison() {
    return (
        <section className="py-20 md:py-28 bg-secondary/20">
            <div className="mx-auto max-w-7xl px-6">
                <div className="mb-14 max-w-2xl">
                    <p className="mb-4 text-xs font-semibold uppercase tracking-[0.1em] text-accent">
                        Why VestPay
                    </p>
                    <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground leading-[1.15]">
                        Don&apos;t build it yourself
                    </h2>
                    <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                        Implementing multi-party payments from scratch is one of the most
                        complex fintech engineering challenges. Here&apos;s how VestPay compares.
                    </p>
                </div>

                {/* Table */}
                <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
                    {/* Table header */}
                    <div className="grid grid-cols-4 border-b border-border bg-secondary/50 px-6 py-4">
                        <div className="text-sm font-medium text-foreground">Feature</div>
                        <div className="text-center text-sm font-semibold text-accent">
                            VestPay
                        </div>
                        <div className="text-center text-sm font-medium text-muted-foreground">
                            DIY Stripe Connect
                        </div>
                        <div className="text-center text-sm font-medium text-muted-foreground">
                            Stripe Connect only
                        </div>
                    </div>

                    {/* Rows */}
                    {rows.map((row, i) => (
                        <div
                            key={i}
                            className={`grid grid-cols-4 items-center px-6 py-4 text-sm ${i < rows.length - 1 ? "border-b border-border" : ""
                                } hover:bg-secondary/30 transition-colors`}
                        >
                            <div className="text-foreground text-sm">{row.feature}</div>
                            <div className="flex justify-center">
                                <Cell value={row.vestpay} />
                            </div>
                            <div className="flex justify-center">
                                <Cell value={row.diy} />
                            </div>
                            <div className="flex justify-center">
                                <Cell value={row.stripe} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
