import { Sparkles, Zap, Users, Clock, Shield } from "lucide-react";

export function RulesetSection() {
  return (
    <section className="py-24 md:py-32 bg-secondary/30 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 border border-accent/20 text-sm text-accent font-medium mb-6">
            <Sparkles className="h-4 w-4" />
            No-code rules engine
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-foreground leading-[1.1] mb-6">
            Rules that just work
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Define how money flows once. VestPay handles every payment automatically.
          </p>
        </div>

        {/* Dashboard Screenshot */}
        <div className="relative">
          {/* Glow effect */}
          <div className="absolute -inset-4 bg-gradient-to-br from-accent/10 via-transparent to-primary/10 rounded-3xl blur-3xl opacity-50" />
          
          <div className="relative rounded-2xl border border-border shadow-2xl overflow-hidden">
            {/* Browser chrome */}
            <div className="flex items-center gap-2 px-4 py-3 bg-secondary/80 border-b border-border">
              <div className="flex items-center gap-1.5">
                <div className="h-3 w-3 rounded-full bg-red-400" />
                <div className="h-3 w-3 rounded-full bg-yellow-400" />
                <div className="h-3 w-3 rounded-full bg-green-400" />
              </div>
              <div className="flex-1 flex justify-center">
                <div className="px-4 py-1 bg-background/50 rounded-md text-xs text-muted-foreground">
                  dashboard.vestpay.com/rulesets
                </div>
              </div>
            </div>
            
            {/* Screenshot */}
            <img
              src="/images/screenshot-202026-01-27-20at-2003.png"
              alt="VestPay Dashboard showing Rulesets configuration with Standard Split, Premium Sellers, and New Sellers Promo rules"
              className="w-full h-auto"
            />
          </div>
        </div>

        {/* Bottom features */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { icon: Zap, title: "Instant updates", desc: "Changes apply immediately" },
            { icon: Users, title: "Unlimited splits", desc: "As many recipients as needed" },
            { icon: Clock, title: "Scheduled payouts", desc: "Daily, weekly, or monthly" },
            { icon: Shield, title: "Built-in compliance", desc: "KYC/AML handled" },
          ].map((feature, i) => (
            <div key={i} className="text-center p-6">
              <div className="h-12 w-12 rounded-xl bg-accent/10 flex items-center justify-center mx-auto mb-4">
                <feature.icon className="h-6 w-6 text-accent" />
              </div>
              <h4 className="font-semibold text-foreground mb-1">{feature.title}</h4>
              <p className="text-sm text-muted-foreground">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
