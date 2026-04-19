import { Button } from "@/components/ui/button";
import { ArrowRight, MessageSquare } from "lucide-react";

export function UsecasesCTA() {
    return (
        <section className="py-20 md:py-28 bg-secondary/30 border-t border-border">
            <div className="mx-auto max-w-7xl px-6">
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="mb-4 text-3xl md:text-4xl font-semibold tracking-tight text-foreground">
                        Don&apos;t see your use case?
                    </h2>
                    <p className="mb-10 text-lg text-muted-foreground leading-relaxed">
                        VestPay is flexible by design. If you move money between multiple
                        parties, we can almost certainly help. Let&apos;s talk.
                    </p>

                    <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
                        <Button size="lg" className="h-12 px-8 text-base group" asChild>
                            <a href="https://app.vestpay.co/signup">
                                Start Building Free
                                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                            </a>
                        </Button>
                        <Button size="lg" variant="outline" className="h-12 px-8 text-base gap-2" asChild>
                            <a href="https://calendly.com/anthony-vestpay" target="_blank" rel="noopener noreferrer">
                                <MessageSquare className="h-4 w-4" />
                                Talk to an expert
                            </a>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}
