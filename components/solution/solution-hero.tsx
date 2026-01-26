import { ArrowRight, Shield, Zap, GitBranch } from "lucide-react";
import { Button } from "@/components/ui/button";

export function SolutionHero() {
  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-4xl">
          <p className="text-sm font-medium text-accent mb-6">How VestPay Works</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-foreground leading-[1.1]">
            The easiest way to handle platform payments
          </h1>
          <p className="mt-8 text-xl text-muted-foreground leading-relaxed max-w-2xl">
            VestPay is a payment orchestration layer built on Stripe Connect. We handle the complexity of multi-party payments so you can focus on building your platform.
          </p>
          
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="h-13 px-8 text-base shadow-lg shadow-primary/20">
              Request a Demo
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="h-13 px-8 text-base bg-transparent">
              View Documentation
            </Button>
          </div>
        </div>

        {/* Key value props */}
        <div className="mt-20 grid md:grid-cols-3 gap-8 pt-12 border-t border-border">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 h-12 w-12 rounded-xl bg-accent/10 flex items-center justify-center">
              <Shield className="h-6 w-6 text-accent" />
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-1">Secure by default</h3>
              <p className="text-sm text-muted-foreground">
                PCI-compliant infrastructure with funds held in regulated accounts
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 h-12 w-12 rounded-xl bg-accent/10 flex items-center justify-center">
              <Zap className="h-6 w-6 text-accent" />
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-1">Launch in days</h3>
              <p className="text-sm text-muted-foreground">
                Simple API integration instead of months of Stripe Connect setup
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 h-12 w-12 rounded-xl bg-accent/10 flex items-center justify-center">
              <GitBranch className="h-6 w-6 text-accent" />
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-1">Flexible splits</h3>
              <p className="text-sm text-muted-foreground">
                Configure complex disbursement rules with our visual editor or API
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
