import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from "lucide-react";

export function CTASection() {
    return (
        <section id="contact" className="py-24 md:py-32 bg-primary text-primary-foreground relative overflow-hidden">
            {/* Background decoration */}
            <div
                aria-hidden
                className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 h-[600px] w-[800px] rounded-full blur-3xl opacity-20"
                style={{ background: "radial-gradient(ellipse, oklch(0.48 0.15 162) 0%, transparent 70%)" }}
            />
            <div
                aria-hidden
                className="pointer-events-none absolute bottom-0 left-0 right-0 h-px"
                style={{ background: "linear-gradient(to right, transparent, oklch(0.48 0.15 162 / 0.3), transparent)" }}
            />

            <div className="relative mx-auto max-w-7xl px-6">
                <div className="mx-auto max-w-2xl text-center">
                    {/* Badge */}
                    <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-primary-foreground/20 bg-primary-foreground/10 px-4 py-1.5 text-xs font-medium text-primary-foreground/80">
                        <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
                        Launch in days, not weeks
                    </div>

                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.08] mb-6 text-balance">
                        Ship payments faster
                    </h2>
                    <p className="text-lg md:text-xl text-primary-foreground/65 leading-relaxed mb-10">
                        See how leading platforms use VestPay to collect, hold, and disburse
                        funds without the infrastructure headaches.
                    </p>

                    {/* CTA buttons */}
                    <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
                        <Button
                            size="lg"
                            className="h-13 w-full px-9 text-base bg-primary-foreground text-primary hover:bg-primary-foreground/92 shadow-lg sm:w-auto group"
                            asChild
                        >
                            <a href="https://app.vestpay.co/signup">
                                Start Building
                                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                            </a>
                        </Button>
                        <Button
                            size="lg"
                            variant="outline"
                            className="h-13 w-full px-9 text-base border-primary-foreground/30 text-primary-foreground bg-transparent hover:bg-primary-foreground/10 sm:w-auto"
                            asChild
                        >
                            <a
                                href="https://calendly.com/anthony-vestpay"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Request a Demo
                            </a>
                        </Button>
                    </div>

                    {/* Trust indicators */}
                    <div className="mt-10 flex flex-wrap items-center justify-center gap-x-7 gap-y-3 text-sm text-primary-foreground/55">
                        <span className="flex items-center gap-1.5">
                            <Check className="h-3.5 w-3.5 text-accent" />
                            No credit card required
                        </span>
                        <span className="hidden h-3.5 w-px bg-primary-foreground/20 sm:block" />
                        <span className="flex items-center gap-1.5">
                            <Check className="h-3.5 w-3.5 text-accent" />
                            First $50k processed free
                        </span>
                        <span className="hidden h-3.5 w-px bg-primary-foreground/20 sm:block" />
                        <span className="flex items-center gap-1.5">
                            <Check className="h-3.5 w-3.5 text-accent" />
                            99.99% uptime SLA
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
}
