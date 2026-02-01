export function WhoItsFor() {
    return (
        <section className="py-24 bg-background">
            <div className="container mx-auto px-4">
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Who is VestPay for?
                    </h2>
                    <p className="text-xl text-muted-foreground">
                        Built for platforms that need to move money between multiple parties
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    <div className="p-6 rounded-lg border bg-card">
                        <h3 className="text-xl font-semibold mb-3">Marketplaces</h3>
                        <p className="text-muted-foreground">
                            E-commerce platforms connecting buyers and sellers with automated
                            payment splits and escrow protection.
                        </p>
                    </div>

                    <div className="p-6 rounded-lg border bg-card">
                        <h3 className="text-xl font-semibold mb-3">Gig Platforms</h3>
                        <p className="text-muted-foreground">
                            Service marketplaces managing payments between clients, freelancers,
                            and your platform with instant disbursements.
                        </p>
                    </div>

                    <div className="p-6 rounded-lg border bg-card">
                        <h3 className="text-xl font-semibold mb-3">B2B Platforms</h3>
                        <p className="text-muted-foreground">
                            Business platforms requiring complex payment routing, multi-party
                            splits, and compliance management.
                        </p>
                    </div>

                    <div className="p-6 rounded-lg border bg-card">
                        <h3 className="text-xl font-semibold mb-3">SaaS Platforms</h3>
                        <p className="text-muted-foreground">
                            Software platforms with resellers, affiliates, or revenue sharing
                            partnerships requiring automated payouts.
                        </p>
                    </div>

                    <div className="p-6 rounded-lg border bg-card">
                        <h3 className="text-xl font-semibold mb-3">Crowdfunding</h3>
                        <p className="text-muted-foreground">
                            Campaign platforms managing funds collection, goal-based releases,
                            and contributor refunds.
                        </p>
                    </div>

                    <div className="p-6 rounded-lg border bg-card">
                        <h3 className="text-xl font-semibold mb-3">Rental Platforms</h3>
                        <p className="text-muted-foreground">
                            Property and equipment rental platforms handling deposits, damages,
                            and automated refunds.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
