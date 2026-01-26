import { ArrowDown, ArrowRight } from "lucide-react";

const problems = [
  {
    title: "Stripe Connect is complex",
    description: "Managing connected accounts, capabilities, and compliance takes months of engineering.",
  },
  {
    title: "Custom payout logic is costly",
    description: "Building disbursement rules, percentage splits, and conditional payouts from scratch.",
  },
  {
    title: "Recipients hate the onboarding",
    description: "Lengthy KYC flows and confusing dashboards create friction and support tickets.",
  },
];

export function ProblemSection() {
  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left side - Heading */}
          <div className="lg:sticky lg:top-32">
            <p className="text-sm font-medium text-accent mb-4">The problem</p>
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-foreground leading-[1.15]">
              Platform payments shouldn&apos;t be this hard
            </h2>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              Every marketplace faces the same challenges when trying to handle payments, escrow, and disbursements at scale.
            </p>
            <a href="#features" className="inline-flex items-center gap-2 mt-8 text-accent font-medium hover:gap-3 transition-all">
              See how we solve this
              <ArrowDown className="h-4 w-4" />
            </a>
          </div>

          {/* Right side - Problems list */}
          <div className="space-y-6">
            {problems.map((problem, index) => (
              <div
                key={index}
                className="group relative p-6 md:p-8 rounded-2xl bg-card border border-border transition-all duration-300 hover:shadow-lg hover:shadow-foreground/5 hover:border-border/80"
              >
                <div className="flex items-start gap-5">
                  <span className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-xl bg-secondary text-sm font-semibold text-muted-foreground">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      {problem.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {problem.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
