import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const tiers = [
    {
        name: "Starter",
        description: "Perfect for getting started with platform payments",
        price: "$99",
        period: "monthly",
        gmv: "0.5% per transaction",
        highlight: false,
        features: [
            "Up to $100k processed monthly",
            "Basic split rules",
            "Hosted checkout",
            "Email support",
            "Standard payouts",
        ],
        cta: "Start Building",
        ctaHref: "https://app.vestpay.co/signup",
    },
    {
        name: "Growth",
        description: "For scaling platforms with advanced payout needs",
        price: "$199",
        period: "monthly",
        gmv: "0.3% per transaction",
        highlight: true,
        features: [
            "Everything in Starter",
            "Advanced split rules",
            "Webhooks & API access",
            "Priority support",
            "Faster payouts",
            "Custom branding",
        ],
        cta: "Start Building",
        ctaHref: "https://app.vestpay.co/signup",
    },
    {
        name: "Scale",
        description: "For high-volume platforms requiring custom solutions",
        price: "Custom",
        period: null,
        gmv: "Volume pricing",
        highlight: false,
        features: [
            "Everything in Growth",
            "Volume discounts",
            "Dedicated account manager",
            "Custom SLA",
            "Custom workflows",
            "White-label options",
        ],
        cta: "Contact Sales",
        ctaHref: "https://calendly.com/anthony-vestpay",
    },
];

export function PricingSection() {
    return (
        <section id="pricing" className="py-24 md:py-32 bg-background">
            <div className="mx-auto max-w-7xl px-6">
                {/* Header */}
                <div className="mb-16 text-center">
                    <p className="mb-3 text-xs font-semibold tracking-[0.1em] uppercase text-accent">
                        Pricing
                    </p>
                    <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-foreground leading-tight mb-4">
                        Simple, transparent pricing
                    </h2>
                    <p className="mx-auto max-w-xl text-lg text-muted-foreground">
                        Scales with you. No hidden fees, no surprises.
                    </p>
                </div>

                {/* Pricing cards */}
                <div className="grid md:grid-cols-3 gap-5 lg:gap-7">
                    {tiers.map((tier) => (
                        <div
                            key={tier.name}
                            className={`relative flex flex-col rounded-2xl p-7 border transition-shadow ${tier.highlight
                                    ? "border-accent bg-accent/[0.04] shadow-xl shadow-accent/10"
                                    : "border-border bg-card hover:shadow-md"
                                }`}
                        >
                            {/* Popular badge */}
                            {tier.highlight && (
                                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                                    <span className="inline-flex items-center rounded-full bg-accent px-3 py-1 text-xs font-semibold text-accent-foreground shadow-sm">
                                        Most Popular
                                    </span>
                                </div>
                            )}

                            {/* Tier info */}
                            <div className="mb-6">
                                <h3 className="mb-1.5 text-xl font-semibold text-foreground">
                                    {tier.name}
                                </h3>
                                <p className="text-sm text-muted-foreground">{tier.description}</p>
                            </div>

                            {/* Price */}
                            <div className="mb-6">
                                <div className="flex items-baseline gap-1">
                                    <span className="text-4xl font-bold text-foreground">
                                        {tier.price}
                                    </span>
                                    {tier.period && (
                                        <span className="text-muted-foreground text-sm">
                                            /{tier.period}
                                        </span>
                                    )}
                                </div>
                                <p className="mt-1.5 text-sm font-medium text-accent">
                                    + {tier.gmv}
                                </p>
                            </div>

                            {/* Features */}
                            <ul className="mb-8 flex-1 space-y-3">
                                {tier.features.map((feature) => (
                                    <li key={feature} className="flex items-start gap-3">
                                        <div className="mt-0.5 flex h-4.5 w-4.5 flex-shrink-0 items-center justify-center rounded-full bg-accent/12">
                                            <Check className="h-2.5 w-2.5 text-accent" />
                                        </div>
                                        <span className="text-sm text-foreground">{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            {/* CTA */}
                            <Button
                                className={`w-full h-11 text-sm font-medium ${tier.highlight
                                        ? "bg-accent text-accent-foreground hover:bg-accent/90 shadow-sm shadow-accent/20"
                                        : "bg-primary text-primary-foreground hover:bg-primary/90"
                                    }`}
                                asChild
                            >
                                <a href={tier.ctaHref} target="_blank" rel="noopener noreferrer">
                                    {tier.cta}
                                </a>
                            </Button>
                        </div>
                    ))}
                </div>

                {/* Footer note */}
                <p className="mt-10 text-center text-sm text-muted-foreground">
                    All plans include API access, documentation, and community support.{" "}
                    <a href="#" className="text-accent underline-offset-4 hover:underline">
                        Compare all features →
                    </a>
                </p>
            </div>
        </section>
    );
}
