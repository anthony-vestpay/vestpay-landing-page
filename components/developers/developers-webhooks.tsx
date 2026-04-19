"use client";

import { useState } from "react";
import { Copy, Check, Bell, Zap, ShieldCheck, RefreshCw } from "lucide-react";

const webhookPayload = `{
  "event_id": "evt_789xyz012abc",
  "type": "session.completed",
  "api_version": "2026-01-01",
  "created_at": "2026-01-31T03:00:00.000Z",
  "data": {
    "session_id": "ses_abc123def456",
    "amount": 2000,
    "currency": "GBP",
    "status": "completed",
    "recipient_id": "rec_xyz789",
    "ruleset_id": "ruleset_abc",
    "customer": {
      "email": "customer@example.com"
    },
    "metadata": {
      "order_id": "order_001"
    },
    "completed_at": "2026-01-31T03:00:00.000Z"
  }
}`;

const eventGroups = [
    {
        label: "Session",
        color: "text-emerald-500 bg-emerald-500/10",
        events: [
            { type: "session.pending", desc: "Session created, awaiting payment" },
            { type: "session.completed", desc: "Payment received and confirmed" },
            { type: "session.expired", desc: "Session window elapsed without payment" },
            { type: "session.cancelled", desc: "Session manually cancelled" },
        ],
    },
    {
        label: "Payout",
        color: "text-sky-500 bg-sky-500/10",
        events: [
            { type: "payout.initiated", desc: "Payout sent to banking rails" },
            { type: "payout.completed", desc: "Funds arrived in recipient account" },
            { type: "payout.failed", desc: "Payout rejected — requires retry" },
        ],
    },
    {
        label: "Recipient",
        color: "text-purple-500 bg-purple-500/10",
        events: [
            { type: "recipient.verified", desc: "Bank account verified and active" },
            { type: "recipient.suspended", desc: "Recipient account suspended" },
        ],
    },
];

const webhookFeatures = [
    {
        icon: ShieldCheck,
        title: "Signed payloads",
        desc: "Every webhook is signed with HMAC-SHA256. Verify the vestpay-signature header before processing.",
    },
    {
        icon: RefreshCw,
        title: "Automatic retries",
        desc: "Failed deliveries are retried up to 5 times with exponential back-off over 24 hours.",
    },
    {
        icon: Bell,
        title: "Event log",
        desc: "All events are stored for 30 days. Replay any event directly from the dashboard.",
    },
    {
        icon: Zap,
        title: "Sub-second delivery",
        desc: "Events are dispatched within milliseconds of the state change in our system.",
    },
];

function highlightPayload(line: string) {
    return line
        .split(/(".*?"|'.*?'|`.*?`|\b(?:true|false|null)\b|\b\d+\b)/g)
        .map((part, i) => {
            if (/^"[^"]*":/.test(part)) return <span key={i} className="text-sky-300">{part}</span>;
            if (/^["'`]/.test(part)) return <span key={i} className="text-emerald-400">{part}</span>;
            if (/^(true|false)$/.test(part)) return <span key={i} className="text-amber-400">{part}</span>;
            if (/^null$/.test(part)) return <span key={i} className="text-red-400">{part}</span>;
            if (/^\d+$/.test(part)) return <span key={i} className="text-sky-300">{part}</span>;
            return <span key={i}>{part}</span>;
        });
}

export function DevelopersWebhooks() {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(webhookPayload);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <section id="webhooks" className="py-24 md:py-32 bg-primary text-primary-foreground">
            <div className="mx-auto max-w-7xl px-6">
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-primary-foreground/10 border border-primary-foreground/20 text-sm font-medium text-primary-foreground/80 mb-6 rounded-full">
                        <Bell className="h-4 w-4" />
                        Webhooks & Events
                    </div>
                    <h2 className="text-3xl md:text-4xl font-semibold tracking-tight leading-[1.15] mb-5">
                        React to every payment in real time
                    </h2>
                    <p className="text-lg text-primary-foreground/70 leading-relaxed">
                        Register an HTTPS endpoint and VestPay will push signed events the moment anything changes — no polling required.
                    </p>
                </div>

                {/* Payload + event list */}
                <div className="grid lg:grid-cols-2 gap-8 mb-16">
                    {/* Payload preview */}
                    <div className="bg-[#0a0a0a] rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                        <div className="flex items-center justify-between border-b border-white/10 px-4 py-3 bg-white/5">
                            <div className="flex items-center gap-2">
                                <span className="text-xs font-medium text-emerald-400 bg-emerald-400/10 px-2 py-0.5 rounded">
                                    session.completed
                                </span>
                                <span className="text-xs text-white/40 font-mono hidden sm:block">POST /your-webhook</span>
                            </div>
                            <button
                                onClick={handleCopy}
                                className="flex items-center gap-1.5 text-xs text-white/40 hover:text-white/70 transition-colors"
                            >
                                {copied ? (
                                    <><Check className="h-3.5 w-3.5" /><span>Copied</span></>
                                ) : (
                                    <><Copy className="h-3.5 w-3.5" /><span>Copy</span></>
                                )}
                            </button>
                        </div>
                        <div className="p-5 overflow-x-auto">
                            <pre className="text-xs sm:text-sm leading-relaxed">
                                <code className="font-mono">
                                    {webhookPayload.split("\n").map((line, i) => (
                                        <div key={i} className="flex hover:bg-white/5 -mx-5 px-5">
                                            <span className="w-7 text-white/20 text-right mr-4 select-none text-xs shrink-0">
                                                {i + 1}
                                            </span>
                                            <span className="text-white/90 whitespace-pre">
                                                {highlightPayload(line)}
                                            </span>
                                        </div>
                                    ))}
                                </code>
                            </pre>
                        </div>
                    </div>

                    {/* Event list */}
                    <div className="flex flex-col gap-5">
                        {eventGroups.map((group) => (
                            <div key={group.label}>
                                <div className={`inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full mb-3 ${group.color}`}>
                                    {group.label}
                                </div>
                                <div className="flex flex-col gap-2">
                                    {group.events.map((ev) => (
                                        <div
                                            key={ev.type}
                                            className="flex items-start gap-3 p-3 rounded-lg bg-primary-foreground/5 border border-primary-foreground/10"
                                        >
                                            <code className="text-xs font-mono text-accent shrink-0 mt-0.5">
                                                {ev.type}
                                            </code>
                                            <span className="text-xs text-primary-foreground/60 leading-relaxed">
                                                {ev.desc}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Webhook features */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
                    {webhookFeatures.map((f) => (
                        <div
                            key={f.title}
                            className="p-5 rounded-xl bg-primary-foreground/5 border border-primary-foreground/10"
                        >
                            <div className="h-9 w-9 rounded-lg bg-accent/20 flex items-center justify-center mb-3">
                                <f.icon className="h-4 w-4 text-accent" />
                            </div>
                            <p className="font-semibold text-sm text-primary-foreground mb-1">{f.title}</p>
                            <p className="text-xs text-primary-foreground/60 leading-relaxed">{f.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
