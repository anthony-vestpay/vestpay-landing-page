"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Users, Building2 } from "lucide-react";
import { cn } from "@/lib/utils";

const workflows = [
  {
    id: "marketplace",
    label: "Marketplace",
    icon: Building2,
    scenario: "A customer buys a vintage camera on your marketplace. Payment is held until the seller ships and delivery is confirmed.",
    payment: { label: "Customer pays", amount: "$150.00" },
    escrow: { label: "Held securely", duration: "Until delivery" },
    disbursement: [
      { name: "Seller", amount: "$127.50", color: "bg-accent" },
      { name: "Platform", amount: "$22.50", color: "bg-primary" },
    ],
  },
  {
    id: "services",
    label: "Services",
    icon: Users,
    scenario: "A client hires a freelance designer for a logo project. Funds are held until the client approves the final deliverables.",
    payment: { label: "Client pays", amount: "$900.00" },
    escrow: { label: "Held securely", duration: "Until approved" },
    disbursement: [
      { name: "Freelancer", amount: "$765.00", color: "bg-accent" },
      { name: "Platform", amount: "$135.00", color: "bg-primary" },
    ],
  },
  {
    id: "rental",
    label: "Rentals",
    icon: Shield,
    scenario: "A guest books a weekend stay at a vacation rental. Payment is secured until check-in, then released to the host.",
    payment: { label: "Guest pays", amount: "$850.00" },
    escrow: { label: "Held securely", duration: "Until check-in" },
    disbursement: [
      { name: "Host", amount: "$765.00", color: "bg-accent" },
      { name: "Platform", amount: "$85.00", color: "bg-primary" },
    ],
  },
];

export function HeroSection() {
  const [activeWorkflow, setActiveWorkflow] = useState(workflows[0]);

  return (
    <section className="relative pt-24 pb-20 md:pt-32 md:pb-28 overflow-hidden">
      {/* Animated stream lines background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Gradient glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-gradient-to-br from-accent/15 via-accent/5 to-transparent rounded-full blur-3xl" />
        
        {/* Horizontal stream lines */}
        <div className="absolute top-[15%] left-0 w-full h-px">
          <div className="animate-stream-1 w-32 h-full bg-gradient-to-r from-transparent via-accent/40 to-transparent" />
        </div>
        <div className="absolute top-[25%] left-0 w-full h-px">
          <div className="animate-stream-2 w-48 h-full bg-gradient-to-r from-transparent via-accent/25 to-transparent" />
        </div>
        <div className="absolute top-[40%] left-0 w-full h-px">
          <div className="animate-stream-3 w-40 h-full bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
        </div>
        <div className="absolute top-[55%] left-0 w-full h-px">
          <div className="animate-stream-4 w-36 h-full bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
        </div>
        <div className="absolute top-[70%] left-0 w-full h-px">
          <div className="animate-stream-5 w-52 h-full bg-gradient-to-r from-transparent via-accent/20 to-transparent" />
        </div>
        <div className="absolute top-[85%] left-0 w-full h-px">
          <div className="animate-stream-1 w-44 h-full bg-gradient-to-r from-transparent via-primary/15 to-transparent" style={{ animationDelay: '5s' }} />
        </div>
        
        {/* Vertical stream lines */}
        <div className="absolute top-0 left-[10%] w-px h-full hidden md:block">
          <div className="animate-stream-vertical-1 w-full h-24 bg-gradient-to-b from-transparent via-accent/20 to-transparent" />
        </div>
        <div className="absolute top-0 left-[90%] w-px h-full hidden md:block">
          <div className="animate-stream-vertical-2 w-full h-32 bg-gradient-to-b from-transparent via-accent/15 to-transparent" />
        </div>
        
        {/* Floating dots */}
        <div className="absolute top-[20%] left-[15%] w-1 h-1 rounded-full bg-accent/40 animate-float" />
        <div className="absolute top-[60%] left-[85%] w-1.5 h-1.5 rounded-full bg-accent/30 animate-float-delayed" />
        <div className="absolute top-[75%] left-[25%] w-1 h-1 rounded-full bg-primary/30 animate-float" style={{ animationDelay: '3s' }} />
        <div className="absolute top-[35%] left-[75%] w-1 h-1 rounded-full bg-accent/25 animate-float-delayed" style={{ animationDelay: '1s' }} />
      </div>
      
      <div className="mx-auto max-w-7xl px-6 relative">
        <div className="flex flex-col items-center text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-foreground max-w-5xl leading-[1.1] text-balance">
            The modern way to move money on your platform
          </h1>

          <p className="mt-8 text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed text-balance">
            Collect payments, hold funds in escrow, and automatically disburse to recipients. Built on Stripe Connect, without the complexity.
          </p>

          <div className="mt-12 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <Button
              size="lg"
              className="w-full sm:w-auto bg-primary text-primary-foreground hover:bg-primary/90 px-8 h-13 text-base shadow-lg shadow-primary/20 group"
            >
              Start Building
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="w-full sm:w-auto px-8 h-13 text-base border-border bg-secondary/50 hover:bg-secondary hover:border-foreground/20 text-foreground hover:text-foreground transition-all"
            >
              Request a Demo
            </Button>
          </div>
        </div>

        {/* Payment flow visualization */}
        <div className="mt-20 relative">
          <div className="relative mx-auto max-w-4xl">
            {/* Glow */}
            <div className="absolute -inset-4 bg-gradient-to-r from-accent/10 via-accent/5 to-accent/10 rounded-3xl blur-2xl" />
            
            <div className="relative bg-card border border-border rounded-2xl shadow-xl overflow-hidden">
              {/* Header with workflow selector */}
              <div className="flex items-center justify-center px-6 py-4 border-b border-border bg-secondary/20">
                <div className="flex items-center gap-1 bg-secondary rounded-lg p-1">
                  {workflows.map((workflow) => (
                    <button
                      key={workflow.id}
                      onClick={() => setActiveWorkflow(workflow)}
                      className={cn(
                        "flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-md transition-all",
                        activeWorkflow.id === workflow.id
                          ? "bg-card text-foreground shadow-sm"
                          : "text-muted-foreground hover:text-foreground"
                      )}
                    >
                      <workflow.icon className="h-3.5 w-3.5" />
                      {workflow.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Flow diagram */}
              <div className="p-8 md:p-12">
                <div className="flex flex-col md:flex-row items-center gap-6 md:gap-0">
                  
                  {/* Step 1: Payment */}
                  <div className="flex-1 w-full md:w-auto">
                    <div className="p-6 rounded-xl bg-gradient-to-br from-accent/10 to-accent/5 border border-accent/20">
                      <div className="flex items-center gap-2 mb-4">
                        <div className="h-8 w-8 rounded-full bg-accent/20 flex items-center justify-center">
                          <span className="text-sm font-bold text-accent">1</span>
                        </div>
                        <span className="text-sm font-medium text-foreground">Collect</span>
                      </div>
                      <p className="text-xs text-muted-foreground mb-2">{activeWorkflow.payment.label}</p>
                      <p className="text-3xl font-bold text-foreground">{activeWorkflow.payment.amount}</p>
                    </div>
                  </div>

                  {/* Connector 1 */}
                  <div className="flex items-center justify-center py-2 md:py-0 md:px-6">
                    <div className="flex flex-col md:flex-row items-center gap-1">
                      <div className="h-8 md:h-px w-px md:w-8 bg-gradient-to-b md:bg-gradient-to-r from-accent/50 to-accent/20" />
                      <ArrowRight className="h-4 w-4 text-accent rotate-90 md:rotate-0" />
                    </div>
                  </div>

                  {/* Step 2: Escrow */}
                  <div className="flex-1 w-full md:w-auto">
                    <div className="p-6 rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20">
                      <div className="flex items-center gap-2 mb-4">
                        <div className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center">
                          <span className="text-sm font-bold text-primary">2</span>
                        </div>
                        <span className="text-sm font-medium text-foreground">Hold</span>
                      </div>
                      <div className="flex items-center gap-2 mb-2">
                        <Shield className="h-4 w-4 text-primary" />
                        <p className="text-xs text-muted-foreground">{activeWorkflow.escrow.label}</p>
                      </div>
                      <p className="text-sm font-medium text-foreground">{activeWorkflow.escrow.duration}</p>
                    </div>
                  </div>

                  {/* Connector 2 */}
                  <div className="flex items-center justify-center py-2 md:py-0 md:px-6">
                    <div className="flex flex-col md:flex-row items-center gap-1">
                      <div className="h-8 md:h-px w-px md:w-8 bg-gradient-to-b md:bg-gradient-to-r from-primary/50 to-accent/20" />
                      <ArrowRight className="h-4 w-4 text-accent rotate-90 md:rotate-0" />
                    </div>
                  </div>

                  {/* Step 3: Disburse */}
                  <div className="flex-1 w-full md:w-auto">
                    <div className="p-6 rounded-xl bg-gradient-to-br from-accent/10 to-accent/5 border border-accent/20">
                      <div className="flex items-center gap-2 mb-4">
                        <div className="h-8 w-8 rounded-full bg-accent/20 flex items-center justify-center">
                          <span className="text-sm font-bold text-accent">3</span>
                        </div>
                        <span className="text-sm font-medium text-foreground">Disburse</span>
                      </div>
                      <p className="text-xs text-muted-foreground mb-2">Payout</p>
                      <div className="space-y-2">
                        {activeWorkflow.disbursement.map((recipient, i) => (
                          <div key={i} className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <div className={cn("h-2 w-2 rounded-full", recipient.color)} />
                              <span className="text-xs text-muted-foreground">{recipient.name}</span>
                            </div>
                            <span className="text-sm font-semibold text-foreground">{recipient.amount}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bottom info */}
                <div className="mt-8 pt-6 border-t border-border flex flex-wrap items-center justify-center gap-6 text-xs text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-accent" />
                    <span>Instant capture</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                    <span>Secure escrow</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-accent" />
                    <span>Automatic splits</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
