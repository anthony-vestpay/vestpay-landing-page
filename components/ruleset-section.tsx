"use client";

import { useState, useEffect } from "react";
import { Check, ArrowRight, Plus, Sparkles, DollarSign, Users, Clock, Shield, Zap } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const ruleExamples = [
  {
    id: "marketplace",
    label: "Marketplace",
    emoji: "🛒",
    description: "E-commerce & product sales",
    totalAmount: "$1,250.00",
    rules: [
      { recipient: "Seller", percentage: 85, amount: "$1,062.50", color: "bg-accent" },
      { recipient: "Platform", percentage: 15, amount: "$187.50", color: "bg-primary" },
    ],
    conditions: [
      { icon: Clock, text: "Release after delivery confirmed" },
      { icon: Shield, text: "24h dispute window" },
    ],
  },
  {
    id: "saas",
    label: "SaaS",
    emoji: "💻",
    description: "Subscriptions & revenue share",
    totalAmount: "$499.00",
    rules: [
      { recipient: "Partner", percentage: 70, amount: "$349.30", color: "bg-accent" },
      { recipient: "Affiliate", percentage: 10, amount: "$49.90", color: "bg-chart-2" },
      { recipient: "Platform", percentage: 20, amount: "$99.80", color: "bg-primary" },
    ],
    conditions: [
      { icon: Clock, text: "Monthly payout cycle" },
      { icon: DollarSign, text: "Min $100 threshold" },
    ],
  },
  {
    id: "services",
    label: "Services",
    emoji: "🔧",
    description: "Freelance & project work",
    totalAmount: "$3,000.00",
    rules: [
      { recipient: "Freelancer", percentage: 90, amount: "$2,700.00", color: "bg-accent" },
      { recipient: "Platform", percentage: 10, amount: "$300.00", color: "bg-primary" },
    ],
    conditions: [
      { icon: Check, text: "Release on milestone approval" },
      { icon: Shield, text: "Escrow until sign-off" },
    ],
  },
];

export function RulesetSection() {
  const [activeRule, setActiveRule] = useState(ruleExamples[0]);
  const [isAnimating, setIsAnimating] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleRuleChange = (rule: typeof ruleExamples[0]) => {
    if (rule.id === activeRule.id) return;
    setIsAnimating(true);
    setShowSuccess(false);
    setTimeout(() => {
      setActiveRule(rule);
      setIsAnimating(false);
    }, 150);
  };

  useEffect(() => {
    const timer = setTimeout(() => setShowSuccess(true), 800);
    return () => clearTimeout(timer);
  }, [activeRule]);

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

        {/* Interactive Demo */}
        <div className="relative">
          {/* Glow effect */}
          <div className="absolute -inset-4 bg-gradient-to-br from-accent/10 via-transparent to-primary/10 rounded-3xl blur-3xl opacity-50" />
          
          <div className="relative bg-card rounded-2xl border border-border shadow-2xl overflow-hidden">
            {/* Top bar */}
            <div className="flex items-center justify-between px-6 py-4 bg-secondary/50 border-b border-border">
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1.5">
                  <div className="h-3 w-3 rounded-full bg-red-400" />
                  <div className="h-3 w-3 rounded-full bg-yellow-400" />
                  <div className="h-3 w-3 rounded-full bg-green-400" />
                </div>
                <span className="text-sm font-medium text-foreground ml-2">Ruleset Editor</span>
              </div>
              <div className="flex items-center gap-2">
                {showSuccess && !isAnimating && (
                  <div className="flex items-center gap-1.5 px-3 py-1 bg-accent/10 rounded-full animate-in fade-in slide-in-from-right-2">
                    <Check className="h-3.5 w-3.5 text-accent" />
                    <span className="text-xs text-accent font-medium">Auto-saved</span>
                  </div>
                )}
              </div>
            </div>

            <div className="grid lg:grid-cols-12 min-h-[500px]">
              {/* Sidebar - Rule Templates */}
              <div className="lg:col-span-4 border-r border-border bg-secondary/20 p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Templates</span>
                  <button className="flex items-center gap-1 text-xs text-accent hover:text-accent/80 transition-colors">
                    <Plus className="h-3 w-3" />
                    New
                  </button>
                </div>
                <div className="space-y-2">
                  {ruleExamples.map((rule) => (
                    <button
                      key={rule.id}
                      onClick={() => handleRuleChange(rule)}
                      className={cn(
                        "w-full text-left p-4 rounded-xl border transition-all duration-200 group",
                        activeRule.id === rule.id
                          ? "bg-card border-accent shadow-lg shadow-accent/10 scale-[1.02]"
                          : "bg-card/50 border-transparent hover:bg-card hover:border-border"
                      )}
                    >
                      <div className="flex items-start gap-3">
                        <span className="text-2xl">{rule.emoji}</span>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between">
                            <span className="font-semibold text-foreground">{rule.label}</span>
                            {activeRule.id === rule.id && (
                              <div className="h-2 w-2 rounded-full bg-accent animate-pulse" />
                            )}
                          </div>
                          <p className="text-xs text-muted-foreground mt-0.5">{rule.description}</p>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>

                {/* Quick stats */}
                <div className="mt-8 p-4 bg-primary/5 rounded-xl border border-primary/10">
                  <div className="flex items-center gap-2 mb-3">
                    <Zap className="h-4 w-4 text-primary" />
                    <span className="text-sm font-medium text-foreground">Quick facts</span>
                  </div>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <div className="flex items-center justify-between">
                      <span>Setup time</span>
                      <span className="text-foreground font-medium">2 mins</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Code required</span>
                      <span className="text-accent font-medium">None</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Main content - Rule Configuration */}
              <div className="lg:col-span-8 p-8">
                <div className={cn(
                  "transition-all duration-150",
                  isAnimating ? "opacity-0 scale-95" : "opacity-100 scale-100"
                )}>
                  {/* Rule header */}
                  <div className="flex items-center justify-between mb-8">
                    <div>
                      <div className="flex items-center gap-3 mb-1">
                        <span className="text-3xl">{activeRule.emoji}</span>
                        <h3 className="text-2xl font-semibold text-foreground">{activeRule.label} Rules</h3>
                      </div>
                      <p className="text-muted-foreground">Total payment: <span className="text-foreground font-semibold">{activeRule.totalAmount}</span></p>
                    </div>
                  </div>

                  {/* Payment split visualization */}
                  <div className="mb-8">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-sm font-medium text-muted-foreground">Payment Distribution</span>
                      <span className="text-xs text-muted-foreground">{activeRule.rules.length} recipients</span>
                    </div>
                    
                    {/* Animated bar */}
                    <div className="h-4 rounded-full overflow-hidden flex bg-secondary mb-4">
                      {activeRule.rules.map((rule, i) => (
                        <div
                          key={i}
                          className={cn(
                            "h-full transition-all duration-700 ease-out",
                            rule.color,
                            i > 0 && "border-l-2 border-background"
                          )}
                          style={{ 
                            width: `${rule.percentage}%`,
                            transitionDelay: `${i * 100}ms`
                          }}
                        />
                      ))}
                    </div>

                    {/* Recipients */}
                    <div className="space-y-3">
                      {activeRule.rules.map((rule, i) => (
                        <div
                          key={i}
                          className="flex items-center justify-between p-4 bg-secondary/50 rounded-xl border border-border hover:border-border/80 transition-all group"
                          style={{ animationDelay: `${i * 100}ms` }}
                        >
                          <div className="flex items-center gap-4">
                            <div className={cn("h-10 w-10 rounded-xl flex items-center justify-center", rule.color.replace("bg-", "bg-") + "/20")}>
                              <Users className={cn("h-5 w-5", rule.color.replace("bg-", "text-"))} />
                            </div>
                            <div>
                              <p className="font-medium text-foreground">{rule.recipient}</p>
                              <p className="text-xs text-muted-foreground">{rule.percentage}% of payment</p>
                            </div>
                          </div>
                          <div className="text-right">
                            <p className="text-lg font-semibold text-foreground">{rule.amount}</p>
                            <p className="text-xs text-muted-foreground">per transaction</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Conditions */}
                  <div>
                    <span className="text-sm font-medium text-muted-foreground mb-3 block">Release Conditions</span>
                    <div className="flex flex-wrap gap-3">
                      {activeRule.conditions.map((condition, i) => (
                        <div
                          key={i}
                          className="flex items-center gap-2 px-4 py-2.5 bg-secondary/70 rounded-lg border border-border"
                        >
                          <condition.icon className="h-4 w-4 text-accent" />
                          <span className="text-sm text-foreground">{condition.text}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom bar */}
            <div className="flex items-center justify-between px-6 py-4 bg-secondary/30 border-t border-border">
              <p className="text-sm text-muted-foreground">
                Changes apply to all future payments instantly
              </p>
              <Button size="sm" className="bg-accent hover:bg-accent/90 text-white">
                Deploy ruleset
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
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
