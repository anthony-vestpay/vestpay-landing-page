import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from "lucide-react";

export function SolutionCTA() {
    return (
        <section className="py-20 md:py-28 bg-primary text-primary-foreground relative overflow-hidden">
            {/* Glow */}
            <div
                aria-hidden
                className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 h-[500px] w-[700px] rounded-full blur-3xl opacity-20"
                style={{ background: "radial-gradient(ellipse, oklch(0.48 0.15 162) 0%, transparent 70%)" }}
            />

            <div className="relative mx-auto max-w-7xl px-6">
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="mb-5 text-4xl md:text-5xl font-semibold tracking-tight leading-[1.1] text-balance">
                        Ready to launch faster?
                    </h2>
                    <p className="mb-10 text-lg text-primary-foreground/65 leading-relaxed">
                        Start integrating VestPay today. Your first $50k is on us.
                    </p>

                    <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
                        <Button
                            size="lg"
                            className="h-12 w-full px-8 text-base bg-primary-foreground text-primary hover:bg-primary-foreground/92 shadow-lg sm:w-auto group"
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
                            className="h-12 w-full px-8 text-base border-primary-foreground/30 text-primary-foreground bg-transparent hover:bg-primary-foreground/10 sm:w-auto"
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

                    <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-primary-foreground/50">
                        <span className="flex items-center gap-1.5">
                            <Check className="h-3.5 w-3.5 text-accent" />
                            No credit card
                        </span>
                        <span className="flex items-center gap-1.5">
                            <Check className="h-3.5 w-3.5 text-accent" />
                            First $50k free
                        </span>
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
