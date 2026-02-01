import { Button } from "@/components/ui/button";

export function SolutionCTA() {
    return (
        <section className="py-24 bg-primary text-primary-foreground">
            <div className="container mx-auto px-4">
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                        Ready to Simplify Your Platform Payments?
                    </h2>
                    <p className="text-xl mb-8 opacity-90">
                        Join hundreds of platforms using VestPay to handle complex payment flows
                        with confidence. Get started in minutes.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button
                            size="lg"
                            variant="secondary"
                            className="text-lg px-8"
                            asChild
                        >
                            <a href="https://app.vestpay.co/signup">
                                Start Free Trial
                            </a>
                        </Button>
                        <Button
                            size="lg"
                            variant="outline"
                            className="text-lg px-8 bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
                        >
                            Schedule a Demo
                        </Button>
                    </div>
                    <p className="mt-6 text-sm opacity-75">
                        No credit card required • Full API access • Cancel anytime
                    </p>
                </div>
            </div>
        </section>
    );
}
