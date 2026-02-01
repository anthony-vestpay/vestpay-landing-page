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
  },
  {
    name: "Growth",
    description: "For scaling platforms with advanced needs",
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
  },
];

export function PricingSection() {
  return (
    <section id="pricing" className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-medium text-accent mb-3">Pricing</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-foreground leading-tight mb-4">
            Simple, transparent pricing
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Transparent pricing that scales with you. No hidden fees, no surprises.
          </p>
        </div>

        {/* Pricing cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`relative flex flex-col p-8 rounded-2xl border ${
                tier.highlight
                  ? "border-accent bg-accent/[0.03] shadow-xl shadow-accent/10"
                  : "border-border bg-card"
              }`}
            >
              {tier.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center px-3 py-1 text-xs font-medium bg-accent text-accent-foreground">
                    Most Popular
                  </span>
                </div>
              )}

              {/* Tier header */}
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {tier.name}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {tier.description}
                </p>
              </div>

              {/* Pricing */}
              <div className="mb-6">
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold text-foreground">
                    {tier.price}
                  </span>
                  {tier.period && (
                    <span className="text-muted-foreground">/{tier.period}</span>
                  )}
                </div>
                <p className="text-sm text-accent font-medium mt-2">
                  + {tier.gmv}
                </p>
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8 flex-1">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <div className="h-5 w-5 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="h-3 w-3 text-accent" />
                    </div>
                    <span className="text-sm text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Button
                className={`w-full h-12 ${
                  tier.highlight
                    ? "bg-accent text-accent-foreground hover:bg-accent/90"
                    : "bg-primary text-primary-foreground hover:bg-primary/90"
                }`}
              >
                {tier.cta}
              </Button>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground">
            All plans include access to our API, documentation, and community support.{" "}
            <a href="#" className="text-accent hover:underline">
              Compare all features
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
