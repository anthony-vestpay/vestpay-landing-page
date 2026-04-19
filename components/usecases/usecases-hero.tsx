import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function UsecasesHero() {
    return (
        <section className="relative overflow-hidden bg-background pt-32 pb-20 md:pt-40 md:pb-28">
            {/* Subtle grid */}
            <div
                aria-hidden
                className="pointer-events-none absolute inset-0"
                style={{
                    backgroundImage:
                        "linear-gradient(to right,rgba(0,0,0,0.04) 1px,transparent 1px)," +
                        "linear-gradient(to bottom,rgba(0,0,0,0.04) 1px,transparent 1px)",
                    backgroundSize: "64px 64px",
                }}
            />
            {/* Radial glow */}
            <div
                aria-hidden
                className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 h-[500px] w-[700px] rounded-full blur-3xl"
                style={{ background: "radial-gradient(ellipse, oklch(0.48 0.15 162 / 0.10) 0%, transparent 70%)" }}
            />

            <div className="relative mx-auto max-w-7xl px-6">
                <div className="max-w-3xl">
                    <p className="mb-5 text-xs font-semibold uppercase tracking-[0.1em] text-accent">
                        Use Cases
                    </p>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-foreground leading-[1.08]">
                        Built for every kind of platform
                    </h1>
                    <p className="mt-6 text-xl text-muted-foreground leading-relaxed max-w-2xl">
                        Whether you run a marketplace, a service platform, or anything in between —
                        VestPay handles the money movement so you can focus on your product.
                    </p>

                    <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                        <Button size="lg" className="h-12 px-8 text-base shadow-md shadow-primary/10 group" asChild>
                            <a href="https://app.vestpay.co/signup">
                                Start Building
                                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                            </a>
                        </Button>
                        <Button size="lg" variant="outline" className="h-12 px-8 text-base" asChild>
                            <a href="https://calendly.com/anthony-vestpay" target="_blank" rel="noopener noreferrer">
                                Talk to us
                            </a>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}
