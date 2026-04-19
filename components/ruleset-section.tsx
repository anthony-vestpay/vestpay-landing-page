import { Sparkles, Zap, Users, Clock, Shield } from "lucide-react";

const featurePoints = [
    { icon: Zap, title: "Instant updates", desc: "Changes apply immediately to all future transactions" },
    { icon: Users, title: "Unlimited splits", desc: "As many recipients as your platform needs" },
    { icon: Clock, title: "Scheduled payouts", desc: "Daily, weekly, or on any custom cadence" },
    { icon: Shield, title: "Built-in compliance", desc: "KYC/AML handled so you stay compliant by default" },
];

export function RulesetSection() {
    return (
        <section className="py-24 md:py-32 bg-background overflow-hidden">
            <div className="mx-auto max-w-7xl px-6">
                {/* Header */}
                <div className="mb-14 text-center">
                    <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-accent/25 bg-accent/8 px-4 py-1.5 text-xs font-medium text-accent">
                        <Sparkles className="h-3.5 w-3.5" />
                        No-code rules engine
                    </div>
                    <h2 className="text-4xl md:text-5xl lg:text-[3.25rem] font-semibold tracking-tight text-foreground leading-[1.1] mb-5">
                        Rules that just work
                    </h2>
                    <p className="mx-auto max-w-xl text-lg text-muted-foreground leading-relaxed">
                        Define how money flows once. VestPay handles every payment
                        automatically — no code changes required.
                    </p>
                </div>

                {/* Dashboard screenshot */}
                <div className="relative">
                    {/* Glow */}
                    <div
                        aria-hidden
                        className="pointer-events-none absolute -inset-8 rounded-3xl blur-3xl"
                        style={{
                            background:
                                "radial-gradient(ellipse at 50% 60%, oklch(0.48 0.15 162 / 0.08) 0%, transparent 65%)",
                        }}
                    />

                    <div className="relative rounded-2xl border border-border shadow-2xl shadow-black/8 overflow-hidden">
                        {/* Browser chrome */}
                        <div className="flex items-center gap-2 border-b border-border bg-secondary/70 px-4 py-3">
                            <div className="flex items-center gap-1.5">
                                <div className="h-3 w-3 rounded-full bg-red-400" />
                                <div className="h-3 w-3 rounded-full bg-yellow-400" />
                                <div className="h-3 w-3 rounded-full bg-green-400" />
                            </div>
                            <div className="flex flex-1 justify-center">
                                <div className="flex items-center gap-2 rounded-md bg-background/50 px-4 py-1 text-xs text-muted-foreground">
                                    <span className="h-3 w-3 rounded-full border border-border" />
                                    app.vestpay.co/rulesets
                                </div>
                            </div>
                        </div>

                        <img
                            src="/images/ruleset-dashboard.png"
                            alt="VestPay Dashboard showing Rulesets configuration with Standard Split, Premium Sellers, and New Sellers Promo rules"
                            className="w-full h-auto"
                        />
                    </div>
                </div>

                {/* Feature points below screenshot */}
                <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
                    {featurePoints.map((f, i) => (
                        <div key={i} className="group text-center p-5 rounded-xl hover:bg-secondary/50 transition-colors">
                            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-secondary group-hover:bg-accent/10 transition-colors">
                                <f.icon className="h-5 w-5 text-muted-foreground group-hover:text-accent transition-colors" />
                            </div>
                            <h4 className="mb-1.5 font-semibold text-foreground text-sm">
                                {f.title}
                            </h4>
                            <p className="text-xs text-muted-foreground leading-relaxed">
                                {f.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
