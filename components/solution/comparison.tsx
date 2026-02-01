export function Comparison() {
    return (
        <section className="py-24 bg-background">
            <div className="container mx-auto px-4">
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Why Choose VestPay?
                    </h2>
                    <p className="text-xl text-muted-foreground">
                        See how we compare to building in-house or using legacy solutions
                    </p>
                </div>

                <div className="max-w-5xl mx-auto overflow-x-auto">
                    <table className="w-full border-collapse">
                        <thead>
                            <tr className="border-b">
                                <th className="text-left p-4 font-semibold">Feature</th>
                                <th className="text-center p-4 font-semibold">VestPay</th>
                                <th className="text-center p-4 font-semibold">Build In-House</th>
                                <th className="text-center p-4 font-semibold">Legacy Providers</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="border-b">
                                <td className="p-4">Setup Time</td>
                                <td className="text-center p-4">
                                    <span className="text-green-600 dark:text-green-400">Days</span>
                                </td>
                                <td className="text-center p-4">
                                    <span className="text-red-600 dark:text-red-400">6-12 months</span>
                                </td>
                                <td className="text-center p-4">
                                    <span className="text-yellow-600 dark:text-yellow-400">Weeks</span>
                                </td>
                            </tr>
                            <tr className="border-b">
                                <td className="p-4">Escrow Management</td>
                                <td className="text-center p-4">
                                    <span className="text-green-600 dark:text-green-400">✓</span>
                                </td>
                                <td className="text-center p-4">
                                    <span className="text-muted-foreground">Custom Build</span>
                                </td>
                                <td className="text-center p-4">
                                    <span className="text-red-600 dark:text-red-400">✗</span>
                                </td>
                            </tr>
                            <tr className="border-b">
                                <td className="p-4">Automated Splits</td>
                                <td className="text-center p-4">
                                    <span className="text-green-600 dark:text-green-400">✓</span>
                                </td>
                                <td className="text-center p-4">
                                    <span className="text-muted-foreground">Custom Build</span>
                                </td>
                                <td className="text-center p-4">
                                    <span className="text-yellow-600 dark:text-yellow-400">Limited</span>
                                </td>
                            </tr>
                            <tr className="border-b">
                                <td className="p-4">Built-in Compliance</td>
                                <td className="text-center p-4">
                                    <span className="text-green-600 dark:text-green-400">✓</span>
                                </td>
                                <td className="text-center p-4">
                                    <span className="text-red-600 dark:text-red-400">✗</span>
                                </td>
                                <td className="text-center p-4">
                                    <span className="text-green-600 dark:text-green-400">✓</span>
                                </td>
                            </tr>
                            <tr className="border-b">
                                <td className="p-4">Developer-First API</td>
                                <td className="text-center p-4">
                                    <span className="text-green-600 dark:text-green-400">✓</span>
                                </td>
                                <td className="text-center p-4">
                                    <span className="text-green-600 dark:text-green-400">✓</span>
                                </td>
                                <td className="text-center p-4">
                                    <span className="text-red-600 dark:text-red-400">✗</span>
                                </td>
                            </tr>
                            <tr className="border-b">
                                <td className="p-4">Maintenance Cost</td>
                                <td className="text-center p-4">
                                    <span className="text-green-600 dark:text-green-400">Low</span>
                                </td>
                                <td className="text-center p-4">
                                    <span className="text-red-600 dark:text-red-400">High</span>
                                </td>
                                <td className="text-center p-4">
                                    <span className="text-yellow-600 dark:text-yellow-400">Medium</span>
                                </td>
                            </tr>
                            <tr>
                                <td className="p-4">Customization</td>
                                <td className="text-center p-4">
                                    <span className="text-green-600 dark:text-green-400">High</span>
                                </td>
                                <td className="text-center p-4">
                                    <span className="text-green-600 dark:text-green-400">Full</span>
                                </td>
                                <td className="text-center p-4">
                                    <span className="text-red-600 dark:text-red-400">Low</span>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
}
