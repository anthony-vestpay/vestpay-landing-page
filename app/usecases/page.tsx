import { Metadata } from "next";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { UsecasesHero } from "@/components/usecases/usecases-hero";
import { UsecasesGrid } from "@/components/usecases/usecases-grid";
import { UsecasesCTA } from "@/components/usecases/usecases-cta";

export const metadata: Metadata = {
    title: "Use Cases – VestPay",
    description:
        "See how VestPay powers marketplace payments, freelance escrow, rental deposits, gig economy payouts, and more. One API for every platform payment scenario.",
};

export default function UsecasesPage() {
    return (
        <main className="min-h-screen bg-background">
            <Header />
            <UsecasesHero />
            <UsecasesGrid />
            <UsecasesCTA />
            <Footer />
        </main>
    );
}
