"use client";

import { useState } from "react";
import { Check, Zap, Split, Clock, Shield } from "lucide-react";
import { cn } from "@/lib/utils";

const ruleExamples = [
  {
    id: "marketplace",
    label: "Marketplace",
    description: "Split payments between sellers and your platform",
    config: {
      name: "Marketplace Standard",
      rules: [
        { type: "percentage", recipient: "Seller", value: "85%", color: "bg-accent" },
        { type: "percentage", recipient: "Platform Fee", value: "15%", color: "bg-primary" },
      ],
      conditions: ["Release on delivery confirmation", "Hold for 24h dispute window"],
    },
  },
  {
    id: "saas",
    label: "SaaS",
    description: "Revenue share with partners and affiliates",
    config: {
      name: "Partner Revenue Share",
      rules: [
        { type: "percentage", recipient: "Partner", value: "70%", color: "bg-accent" },
        { type: "percentage", recipient: "Affiliate", value: "10%", color: "bg-chart-2" },
        { type: "percentage", recipient: "Platform", value: "20%", color: "bg-primary" },
      ],
      conditions: ["Monthly payout cycle", "Minimum $100 threshold"],
    },
  },
  {
    id: "services",
    label: "Services",
    description: "Milestone-based payments for projects",
    config: {
      name: "Project Milestones",
      rules: [
        { type: "fixed", recipient: "Freelancer", value: "$500", color: "bg-accent" },
        { type: "percentage", recipient: "Platform Fee", value: "10%", color: "bg-primary" },
      ],
      conditions: ["Release on milestone approval", "Escrow until client sign-off"],
    },
  },
];

const benefits = [
  { icon: Zap, text: "No code required" },
  { icon: Split, text: "Unlimited recipients" },
  { icon: Clock, text: "Schedule payouts" },
  { icon: Shield, text: "Built-in compliance" },
];

export function RulesetSection() {
  const [activeRule, setActiveRule] = useState(ruleExamples[0]);

  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <p className="text-sm font-medium text-accent mb-4">Ruleset Engine</p>
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-foreground leading-[1.15]">
              Configure once, automate forever
            </h2>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              Create powerful payment rules in minutes. No engineering resources needed.
            </p>
          </div>
          
          {/* Benefits pills */}
          <div className="flex flex-wrap gap-3">
            {benefits.map((benefit, i) => (
              <div key={i} className="flex items-center gap-2 px-4 py-2 bg-secondary rounded-lg border border-border">
                <benefit.icon className="h-4 w-4 text-accent" />
                <span className="text-sm text-foreground">{benefit.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Main content */}
        <div className="grid lg:grid-cols-5 gap-8">
          {/* Rule selector */}
          <div className="lg:col-span-2 space-y-3">
            {ruleExamples.map((rule) => (
              <button
                key={rule.id}
                onClick={() => setActiveRule(rule)}
                className={cn(
                  "w-full text-left p-5 rounded-xl border transition-all duration-200",
                  activeRule.id === rule.id
                    ? "bg-card border-accent/30 shadow-lg shadow-accent/5"
                    : "bg-card/50 border-border hover:border-border/80 hover:bg-card"
                )}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="font-semibold text-foreground">{rule.label}</span>
                  {activeRule.id === rule.id && (
                    <div className="h-2 w-2 rounded-full bg-accent" />
                  )}
                </div>
                <p className="text-sm text-muted-foreground">{rule.description}</p>
              </button>
            ))}
          </div>

          {/* Rule visualization */}
          <div className="lg:col-span-3">
            <div className="bg-card rounded-2xl border border-border overflow-hidden shadow-xl">
              {/* Header */}
              <div className="flex items-center justify-between px-6 py-4 bg-secondary/30 border-b border-border">
                <div className="flex items-center gap-3">
                  <div className="h-8 w-8 rounded-lg bg-accent/20 flex items-center justify-center">
                    <Split className="h-4 w-4 text-accent" />
                  </div>
                  <span className="font-medium text-foreground">{activeRule.config.name}</span>
                </div>
                <span className="text-xs text-muted-foreground px-2 py-1 bg-secondary rounded">Active</span>
              </div>

              {/* Rules */}
              <div className="p-6">
                <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-4">Payment Split</p>
                <div className="space-y-3 mb-8">
                  {activeRule.config.rules.map((rule, i) => (
                    <div key={i} className="flex items-center justify-between p-4 bg-secondary/50 rounded-xl">
                      <div className="flex items-center gap-3">
                        <div className={cn("h-3 w-3 rounded-full", rule.color)} />
                        <span className="text-foreground font-medium">{rule.recipient}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs text-muted-foreground">{rule.type === "percentage" ? "Percentage" : "Fixed"}</span>
                        <span className="text-lg font-semibold text-foreground">{rule.value}</span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Visual bar */}
                <div className="h-3 rounded-full overflow-hidden flex mb-8">
                  {activeRule.config.rules.map((rule, i) => (
                    <div
                      key={i}
                      className={cn("h-full transition-all duration-500", rule.color)}
                      style={{ width: rule.type === "percentage" ? rule.value : "auto", flex: rule.type === "fixed" ? 1 : undefined }}
                    />
                  ))}
                </div>

                {/* Conditions */}
                <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-4">Conditions</p>
                <div className="space-y-2">
                  {activeRule.config.conditions.map((condition, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <Check className="h-4 w-4 text-accent" />
                      <span className="text-sm text-muted-foreground">{condition}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
