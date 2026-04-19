import {
    BookOpen,
    Code2,
    TestTube2,
    GitBranch,
    Activity,
    MessageSquare,
    ArrowUpRight,
    Lock,
    RefreshCw,
} from "lucide-react";

const resources = [
    {
        icon: BookOpen,
        title: "Quick Start Guide",
        description:
            "Step-by-step walkthrough to collect your first payment — from API key to live transaction in under 10 minutes.",
        href: "#quickstart",
        label: "Read guide",
        color: "text-accent bg-accent/10",
    },
    {
        icon: Code2,
        title: "API Reference",
        description:
            "Full endpoint documentation with parameters, request/response shapes, error codes, and field descriptions.",
        href: "#api-reference",
        label: "View reference",
        color: "text-purple-500 bg-purple-500/10",
    },
    {
        icon: TestTube2,
        title: "Test Mode & Sandbox",
        description:
            "Use your vestpay_sk_test_ key to simulate payments, payouts, and webhook events — no real money moves.",
        href: "https://app.vestpay.co/signup",
        label: "Open sandbox",
        color: "text-amber-500 bg-amber-500/10",
        external: true,
    },
    {
        icon: GitBranch,
        title: "Changelog",
        description:
            "Track every API update, new field, deprecation, and breaking change. We version our API so you're never surprised.",
        href: "#",
        label: "View changelog",
        color: "text-sky-500 bg-sky-500/10",
    },
    {
        icon: Activity,
        title: "API Status",
        description:
            "Real-time uptime dashboard. Subscribe to incidents, maintenance windows, and performance alerts.",
        href: "#",
        label: "Check status",
        color: "text-emerald-500 bg-emerald-500/10",
        external: true,
    },
    {
        icon: MessageSquare,
        title: "Developer Support",
        description:
            "Stuck? Our developer team responds within 1 business day. Enterprise plans include dedicated Slack support.",
        href: "https://calendly.com/anthony-vestpay",
        label: "Get help",
        color: "text-pink-500 bg-pink-500/10",
        external: true,
    },
];

const practiceNotes = [
    {
        icon: Lock,
        title: "Authentication",
        desc: "All requests require a Bearer token in the Authorization header. Use test keys (vestpay_sk_test_) in development and live keys (vestpay_sk_live_) in production.",
    },
    {
        icon: RefreshCw,
        title: "Idempotency",
        desc: "Send an Idempotency-Key header on POST requests to safely retry without double-charging. Keys expire after 24 hours.",
    },
    {
        icon: Code2,
        title: "Error handling",
        desc: 'Errors return a consistent shape: { "error": { "code": "...", "message": "...", "param": "..." } } with standard HTTP status codes.',
    },
];

export function DevelopersResources() {
    return (
        <section id="resources" className="py-24 md:py-32 bg-background border-t border-border">
            <div className="mx-auto max-w-7xl px-6">
                {/* Header */}
                <div className="mb-12">
                    <p className="mb-4 text-xs font-semibold uppercase tracking-[0.1em] text-accent">
                        Resources
                    </p>
                    <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground leading-[1.15]">
                        Everything you need to ship
                    </h2>
                    <p className="mt-4 text-lg text-muted-foreground max-w-2xl">
                        Guides, references, and tooling — built to get you unblocked fast.
                    </p>
                </div>

                {/* Resource cards */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
                    {resources.map((r) => (
                        <a
                            key={r.title}
                            href={r.href}
                            target={r.external ? "_blank" : undefined}
                            rel={r.external ? "noopener noreferrer" : undefined}
                            className="group flex flex-col gap-4 p-6 rounded-xl border border-border bg-background hover:border-accent/40 hover:shadow-md transition-all"
                        >
                            <div className={`h-10 w-10 rounded-lg flex items-center justify-center ${r.color}`}>
                                <r.icon className="h-5 w-5" />
                            </div>
                            <div className="flex-1">
                                <p className="font-semibold text-foreground mb-1">{r.title}</p>
                                <p className="text-sm text-muted-foreground leading-relaxed">{r.description}</p>
                            </div>
                            <div className="flex items-center gap-1 text-sm font-medium text-accent group-hover:gap-2 transition-all">
                                {r.label}
                                <ArrowUpRight className="h-3.5 w-3.5" />
                            </div>
                        </a>
                    ))}
                </div>

                {/* Best practices */}
                <div className="rounded-2xl border border-border bg-secondary/30 p-8">
                    <h3 className="text-xl font-semibold text-foreground mb-6">Integration best practices</h3>
                    <div className="grid md:grid-cols-3 gap-6">
                        {practiceNotes.map((n) => (
                            <div key={n.title} className="flex flex-col gap-3">
                                <div className="flex items-center gap-2">
                                    <div className="h-7 w-7 rounded-md bg-accent/10 flex items-center justify-center">
                                        <n.icon className="h-3.5 w-3.5 text-accent" />
                                    </div>
                                    <p className="font-semibold text-sm text-foreground">{n.title}</p>
                                </div>
                                <p className="text-sm text-muted-foreground leading-relaxed">{n.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
