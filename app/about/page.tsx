import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from "lucide-react";

export const metadata = {
  title: "About VestPay - Our Mission",
  description: "Learn about VestPay's mission to simplify marketplace and platform payments. Built on Stripe Connect, without the complexity.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-20 md:pt-32 md:pb-28 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-gradient-to-br from-accent/15 via-accent/5 to-transparent rounded-full blur-3xl" />
        </div>
        
        <div className="relative mx-auto max-w-4xl px-6 text-center">
          <p className="text-sm font-medium text-accent mb-4">About VestPay</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-foreground leading-[1.1] mb-6 text-balance">
            Payments infrastructure should be invisible
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            We believe platform builders should focus on their product, not spend months wrestling with payment complexity.
          </p>
        </div>
      </section>

      {/* The Problem Section */}
      <section className="py-20 md:py-28 bg-card">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-sm font-medium text-accent mb-4">The problem</p>
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground leading-[1.1] mb-6">
                Building payments is harder than it should be
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Every marketplace, platform, and multi-sided business faces the same challenge: moving money between parties. What sounds simple becomes a maze of compliance, escrow logic, split payments, and edge cases.
              </p>
              <div className="space-y-4">
                {[
                  "Stripe Connect is powerful, but complex to implement correctly",
                  "Escrow and holdback logic requires custom infrastructure",
                  "Compliance and money transmission laws vary by jurisdiction",
                  "Split payments and fee calculations are error-prone",
                  "Teams spend months building what should take days",
                ].map((problem, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="h-6 w-6 rounded-full bg-destructive/10 flex items-center justify-center shrink-0 mt-0.5">
                      <span className="text-destructive text-sm font-medium">x</span>
                    </div>
                    <p className="text-muted-foreground">{problem}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-background border border-border rounded-2xl p-8 md:p-10">
                <div className="text-6xl md:text-8xl font-bold text-foreground/5 mb-4">6+</div>
                <p className="text-2xl font-semibold text-foreground mb-2">months</p>
                <p className="text-muted-foreground">
                  Average time for engineering teams to build and maintain custom payment splitting infrastructure
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Solution Section */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-3xl mb-16">
            <p className="text-sm font-medium text-accent mb-4">Our solution</p>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground leading-[1.1] mb-6">
              One API to collect, hold, and disburse
            </h2>
            <p className="text-lg text-muted-foreground">
              VestPay abstracts the complexity of Stripe Connect into a simple, declarative API. Define your payment rules once, and we handle the rest.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Collect",
                description: "Accept payments from customers through our hosted checkout or API. Funds are captured and secured instantly.",
              },
              {
                title: "Hold",
                description: "Funds are held in escrow until your conditions are met. Define release triggers based on delivery, approval, or time.",
              },
              {
                title: "Disburse",
                description: "Automatically split and distribute funds to recipients based on your ruleset. No manual calculations or transfers.",
              },
            ].map((step, i) => (
              <div key={i} className="relative p-8 bg-card border border-border rounded-2xl">
                <div className="text-5xl font-bold text-accent/20 mb-4">{i + 1}</div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why VestPay Section */}
      <section className="py-20 md:py-28 bg-primary text-primary-foreground">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight leading-[1.1] mb-6">
              Why we built VestPay
            </h2>
            <p className="text-lg text-primary-foreground/70">
              We spent years building payment systems at marketplaces and platforms. We saw the same problems repeated everywhere: talented teams burning months on payment infrastructure instead of their core product.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                title: "Built on Stripe Connect",
                description: "We leverage Stripe's battle-tested infrastructure, so you get enterprise-grade reliability without the implementation complexity.",
              },
              {
                title: "Ruleset engine",
                description: "Define your payment logic declaratively. Split percentages, escrow conditions, and payout schedules — all in one place.",
              },
              {
                title: "Compliance built-in",
                description: "We handle the regulatory complexity of money movement, so you can focus on building your platform.",
              },
              {
                title: "Launch in days",
                description: "What used to take months now takes days. Integrate once and scale to millions in transaction volume.",
              },
            ].map((item, i) => (
              <div key={i} className="flex gap-4">
                <div className="h-6 w-6 rounded-full bg-accent/20 flex items-center justify-center shrink-0 mt-1">
                  <Check className="h-3.5 w-3.5 text-accent" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-primary-foreground/70">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who It's For Section */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-3xl mb-16">
            <p className="text-sm font-medium text-accent mb-4">Who it's for</p>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground leading-[1.1] mb-6">
              Built for platforms that move money
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Marketplaces",
                description: "Connect buyers and sellers with secure escrow, automatic fee collection, and instant payouts.",
                examples: "E-commerce, P2P sales, Auctions",
              },
              {
                title: "Service platforms",
                description: "Handle milestone payments, approval workflows, and split payments between service providers.",
                examples: "Freelance, Consulting, Agencies",
              },
              {
                title: "Rental & booking",
                description: "Manage deposits, hold periods, and automated disbursements based on check-in or delivery.",
                examples: "Property, Equipment, Vehicles",
              },
            ].map((item, i) => (
              <div key={i} className="p-8 bg-card border border-border rounded-2xl">
                <h3 className="text-xl font-semibold text-foreground mb-3">{item.title}</h3>
                <p className="text-muted-foreground mb-4">{item.description}</p>
                <p className="text-sm text-muted-foreground/70">{item.examples}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 bg-card">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground leading-[1.1] mb-6">
            Ready to simplify your payments?
          </h2>
          <p className="text-lg text-muted-foreground mb-10">
            Join the platforms building on VestPay. Start moving money in days, not months.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              size="lg"
              className="w-full sm:w-auto bg-primary text-primary-foreground hover:bg-primary/90 px-8 h-13 text-base"
            >
              Start Building
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="w-full sm:w-auto px-8 h-13 text-base border-border bg-transparent hover:bg-secondary text-foreground"
            >
              Request a Demo
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
