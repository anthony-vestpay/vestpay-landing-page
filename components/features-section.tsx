import { RotateCcw, CreditCard, Users, Split, FileSearch, Zap } from "lucide-react";

const features = [
  {
    icon: RotateCcw,
    title: "Refunds & Disputes",
    description: "Handle refunds and chargebacks automatically with proportional reversals across all recipients.",
    highlight: true,
  },
  {
    icon: CreditCard,
    title: "Hosted Payments",
    description: "A beautiful, PCI-compliant payment page that integrates in minutes.",
    highlight: false,
  },
  {
    icon: Users,
    title: "Managed Onboarding",
    description: "We handle recipient KYC verification and account management for you.",
    highlight: false,
  },
  {
    icon: Split,
    title: "Multi-Recipient Splits",
    description: "Split payments between any number of recipients with custom rules.",
    highlight: true,
  },
  {
    icon: Zap,
    title: "Instant Payouts",
    description: "Disburse funds instantly or schedule payouts based on your rules.",
    highlight: false,
  },
  {
    icon: FileSearch,
    title: "Full Audit Trail",
    description: "Complete visibility into every payment, rule, and payout with detailed logs.",
    highlight: false,
  },
];

export function FeaturesSection() {
  return (
    <section id="features" className="py-24 md:py-32 bg-card">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-3xl mb-16">
          <p className="text-sm font-medium text-accent mb-4">The solution</p>
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-foreground leading-[1.15]">
            Everything you need for platform payments
          </h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            VestPay gives you the building blocks to handle any payment flow, from payments collection to complex multi-party disbursements.
          </p>
        </div>

        {/* Bento grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`group relative p-6 md:p-8 rounded-2xl border transition-all duration-300 hover:shadow-xl hover:shadow-foreground/5 ${
                feature.highlight 
                  ? 'bg-gradient-to-br from-accent/10 via-accent/5 to-transparent border-accent/20 hover:border-accent/30' 
                  : 'bg-background border-border hover:border-border/80'
              }`}
            >
              <div className={`h-12 w-12 rounded-xl flex items-center justify-center mb-6 ${
                feature.highlight ? 'bg-accent/20' : 'bg-secondary'
              }`}>
                <feature.icon className={`h-6 w-6 ${feature.highlight ? 'text-accent' : 'text-muted-foreground'}`} />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
