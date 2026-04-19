import { Metadata } from "next";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { DevelopersHero } from "@/components/developers/developers-hero";
import { DevelopersQuickstart } from "@/components/developers/developers-quickstart";
import { DevelopersApiExplorer } from "@/components/developers/developers-api-explorer";
import { DevelopersSdks } from "@/components/developers/developers-sdks";
import { DevelopersWebhooks } from "@/components/developers/developers-webhooks";
import { DevelopersResources } from "@/components/developers/developers-resources";
import { DevelopersCta } from "@/components/developers/developers-cta";

export const metadata: Metadata = {
    title: "Developers – VestPay",
    description:
        "Build with the VestPay API. Clean REST endpoints, official Node.js and Python SDKs, real-time webhooks, and a full sandbox — everything you need to go from first request to production.",
};

export default function DevelopersPage() {
    return (
        <main className="min-h-screen bg-background">
            <Header />
            <DevelopersHero />
            <DevelopersQuickstart />
            <DevelopersApiExplorer />
            <DevelopersSdks />
            <DevelopersWebhooks />
            <DevelopersResources />
            <DevelopersCta />
            <Footer />
        </main>
    );
}
