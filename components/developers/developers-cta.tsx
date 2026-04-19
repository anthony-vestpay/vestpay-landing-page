import { Button } from "@/components/ui/button";
import { ArrowRight, Terminal } from "lucide-react";

export function DevelopersCta() {
    return (
        <section className="py-24 md:py-32 bg-background border-t border-border">
            <div className="mx-auto max-w-7xl px-6">
                <div className="relative overflow-hidden rounded-3xl bg-primary text-primary-foreground p-12 md:p-16 text-center">
                    {/* Background grid */}
                    <div
                        aria-hidden
                        className="pointer-events-none absolute inset-0"
                        style={{
                            backgroundImage:
                                "linear-gradient(to right,rgba(255,255,255,0.04) 1px,transparent 1px)," +
                                "linear-gradient(to bottom,rgba(255,255,255,0.04) 1px,transparent 1px)",
                            backgroundSize: "48px 48px",
                        }}
                    />
                    {/* Glow */}
                    <div
                        aria-hidden
                        className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 h-[400px] w-[600px] rounded-full blur-3xl"
                        style={{ background: "radial-gradient(ellipse, oklch(0.48 0.15 162 / 0.15) 0%, transparent 70%)" }}
                    />

                    <div className="relative">
                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-primary-foreground/10 border border-primary-foreground/20 text-sm font-medium text-primary-foreground/80 mb-8 rounded-full">
                            <Terminal className="h-4 w-4" />
                            Ready to build?
                        </div>

                        <h2 className="text-3xl md:text-5xl font-semibold tracking-tight leading-[1.1] mb-6">
                            Start collecting payments
                            <br className="hidden md:block" />
                            {" "}in minutes
                        </h2>

                        <p className="text-lg text-primary-foreground/70 leading-relaxed max-w-2xl mx-auto mb-10">
                            Create your free account, grab your API keys, and make your first test payment today.
                            No contracts, no setup fees.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Button
                                size="lg"
                                className="w-full sm:w-auto bg-primary-foreground text-primary hover:bg-primary-foreground/90 h-12 px-8 text-base shadow-lg"
                                asChild
                            >
                                <a href="https://app.vestpay.co/signup">
                                    Get API Keys — it&apos;s free
                                    <ArrowRight className="ml-2 h-4 w-4" />
                                </a>
                            </Button>
                            <Button
                                size="lg"
                                variant="outline"
                                className="w-full sm:w-auto border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 bg-transparent h-12 px-8 text-base"
                                asChild
                            >
                                <a href="https://calendly.com/anthony-vestpay" target="_blank" rel="noopener noreferrer">
                                    Talk to our team
                                </a>
                            </Button>
                        </div>

                        {/* Trust line */}
                        <p className="mt-8 text-sm text-primary-foreground/40">
                            No credit card required &middot; Full sandbox access &middot; 99.99% uptime SLA
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
