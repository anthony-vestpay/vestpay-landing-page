export function CoreCapabilities() {
    return (
        <section className="py-24 bg-muted/50">
            <div className="container mx-auto px-4">
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Core Capabilities
                    </h2>
                    <p className="text-xl text-muted-foreground">
                        Everything you need to manage complex payment flows
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
                    <div>
                        <div className="mb-8">
                            <h3 className="text-2xl font-semibold mb-3">Smart Escrow</h3>
                            <p className="text-muted-foreground mb-4">
                                Hold funds securely until conditions are met. Release payments based
                                on delivery confirmation, milestone completion, or time-based triggers.
                            </p>
                            <ul className="space-y-2 text-muted-foreground">
                                <li className="flex items-start">
                                    <span className="mr-2">•</span>
                                    <span>Conditional release rules</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="mr-2">•</span>
                                    <span>Multi-party approvals</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="mr-2">•</span>
                                    <span>Automated refunds</span>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-2xl font-semibold mb-3">Payment Splits</h3>
                            <p className="text-muted-foreground mb-4">
                                Automatically distribute funds to multiple recipients with customizable
                                split percentages and fee structures.
                            </p>
                            <ul className="space-y-2 text-muted-foreground">
                                <li className="flex items-start">
                                    <span className="mr-2">•</span>
                                    <span>Percentage-based splits</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="mr-2">•</span>
                                    <span>Fixed amount distributions</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="mr-2">•</span>
                                    <span>Platform fee automation</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div>
                        <div className="mb-8">
                            <h3 className="text-2xl font-semibold mb-3">Instant Disbursements</h3>
                            <p className="text-muted-foreground mb-4">
                                Pay out to recipients in real-time or on a schedule. Support for bank
                                transfers, cards, and digital wallets.
                            </p>
                            <ul className="space-y-2 text-muted-foreground">
                                <li className="flex items-start">
                                    <span className="mr-2">•</span>
                                    <span>Real-time payouts</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="mr-2">•</span>
                                    <span>Scheduled disbursements</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="mr-2">•</span>
                                    <span>Multi-currency support</span>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-2xl font-semibold mb-3">Compliance & Reporting</h3>
                            <p className="text-muted-foreground mb-4">
                                Stay compliant with built-in KYC/AML checks, tax reporting, and
                                detailed transaction audits.
                            </p>
                            <ul className="space-y-2 text-muted-foreground">
                                <li className="flex items-start">
                                    <span className="mr-2">•</span>
                                    <span>Automated KYC/AML</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="mr-2">•</span>
                                    <span>Tax documentation (1099s)</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="mr-2">•</span>
                                    <span>Complete audit trails</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
