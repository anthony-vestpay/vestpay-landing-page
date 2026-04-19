"use client";

import { useState } from "react";
import { Copy, Check, Play, Loader2 } from "lucide-react";

type Endpoint = {
    method: "GET" | "POST" | "DELETE";
    path: string;
    label: string;
    description: string;
    request: string;
    response: string;
};

const endpoints: Endpoint[] = [
    {
        method: "POST",
        path: "/v1/session",
        label: "Create Session",
        description: "Create a hosted checkout session. Returns a checkout_url to redirect your customer to.",
        request: `POST https://api.vestpay.io/v1/session
Authorization: Bearer vestpay_sk_xxx
Content-Type: application/json

{
  "amount": 2000,
  "currency": "GBP",
  "ruleset_id": "ruleset_abc",
  "recipient_id": "rec_xyz789",
  "customer": {
    "email": "customer@example.com"
  },
  "metadata": {
    "order_id": "order_001"
  }
}`,
        response: `{
  "session_id": "ses_abc123def456",
  "event_id": "evt_789xyz012abc",
  "checkout_url": "https://checkout.vestpay.io/ses_abc123def456",
  "amount": 2000,
  "currency": "GBP",
  "status": "pending",
  "ruleset_id": "ruleset_abc",
  "recipient_id": "rec_xyz789",
  "metadata": {
    "order_id": "order_001"
  },
  "created_at": "2026-01-31T02:30:00.000Z",
  "expires_at": "2026-01-31T03:30:00.000Z"
}`,
    },
    {
        method: "POST",
        path: "/v1/recipient",
        label: "Create Recipient",
        description: "Register a bank account as a payout recipient. Required before creating sessions.",
        request: `POST https://api.vestpay.io/v1/recipient
Authorization: Bearer vestpay_sk_xxx
Content-Type: application/json

{
  "name": "Jane Smith",
  "email": "jane@example.com",
  "type": "individual",
  "bank_account": {
    "sort_code": "20-00-00",
    "account_number": "12345678",
    "account_name": "Jane Smith"
  }
}`,
        response: `{
  "recipient_id": "rec_xyz789",
  "name": "Jane Smith",
  "email": "jane@example.com",
  "type": "individual",
  "status": "active",
  "bank_account": {
    "sort_code": "20-00-00",
    "account_number": "****5678",
    "account_name": "Jane Smith"
  },
  "created_at": "2026-01-30T14:00:00.000Z"
}`,
    },
    {
        method: "POST",
        path: "/v1/ruleset",
        label: "Create Ruleset",
        description: "Define payment rules: platform fee, hold period, and auto-payout behaviour.",
        request: `POST https://api.vestpay.io/v1/ruleset
Authorization: Bearer vestpay_sk_xxx
Content-Type: application/json

{
  "name": "Standard Marketplace",
  "platform_fee_percent": 5,
  "hold_days": 0,
  "auto_payout": true,
  "currency": "GBP",
  "description": "5% fee, instant release"
}`,
        response: `{
  "ruleset_id": "ruleset_abc",
  "name": "Standard Marketplace",
  "platform_fee_percent": 5,
  "hold_days": 0,
  "auto_payout": true,
  "currency": "GBP",
  "description": "5% fee, instant release",
  "status": "active",
  "created_at": "2026-01-29T10:00:00.000Z"
}`,
    },
    {
        method: "POST",
        path: "/v1/payout",
        label: "Initiate Payout",
        description: "Manually trigger a payout to a recipient from a completed session.",
        request: `POST https://api.vestpay.io/v1/payout
Authorization: Bearer vestpay_sk_xxx
Content-Type: application/json

{
  "session_id": "ses_abc123def456",
  "recipient_id": "rec_xyz789",
  "amount": 1900,
  "reference": "Order 001 payout"
}`,
        response: `{
  "payout_id": "pay_def456ghi789",
  "session_id": "ses_abc123def456",
  "recipient_id": "rec_xyz789",
  "amount": 1900,
  "currency": "GBP",
  "reference": "Order 001 payout",
  "status": "initiated",
  "estimated_arrival": "2026-02-01T00:00:00.000Z",
  "created_at": "2026-01-31T04:00:00.000Z"
}`,
    },
    {
        method: "GET",
        path: "/v1/events",
        label: "List Events",
        description: "Retrieve a list of webhook events for auditing, debugging, or replay.",
        request: `GET https://api.vestpay.io/v1/events?limit=10&type=session.completed
Authorization: Bearer vestpay_sk_xxx`,
        response: `{
  "events": [
    {
      "event_id": "evt_001",
      "type": "session.completed",
      "data": {
        "session_id": "ses_abc123def456",
        "amount": 2000,
        "currency": "GBP"
      },
      "created_at": "2026-01-31T03:00:00.000Z"
    },
    {
      "event_id": "evt_002",
      "type": "payout.completed",
      "data": {
        "payout_id": "pay_def456ghi789",
        "amount": 1900
      },
      "created_at": "2026-01-31T03:05:00.000Z"
    }
  ],
  "has_more": false,
  "total": 2
}`,
    },
];

const METHOD_COLORS: Record<string, string> = {
    GET: "text-sky-400 bg-sky-400/10",
    POST: "text-emerald-400 bg-emerald-400/10",
    DELETE: "text-red-400 bg-red-400/10",
};

function highlightCode(line: string) {
    return line
        .split(/(".*?"|'.*?'|`.*?`|\b(?:true|false|null)\b|\b\d+\b|\/\/.*$)/g)
        .map((part, i) => {
            if (/^["'`]/.test(part)) return <span key={i} className="text-emerald-400">{part}</span>;
            if (/^(true|false)$/.test(part)) return <span key={i} className="text-amber-400">{part}</span>;
            if (/^null$/.test(part)) return <span key={i} className="text-red-400">{part}</span>;
            if (/^\d+$/.test(part)) return <span key={i} className="text-sky-300">{part}</span>;
            if (/^\/\//.test(part)) return <span key={i} className="text-white/30">{part}</span>;
            if (/^(GET|POST|DELETE|PATCH) /.test(part))
                return <span key={i} className="text-purple-400 font-semibold">{part}</span>;
            return <span key={i}>{part}</span>;
        });
}

function CodePane({ label, content, showStatus }: { label: string; content: string; showStatus?: boolean }) {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(content);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="flex flex-col h-full">
            <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-medium text-white/40 uppercase tracking-wider">{label}</span>
                <div className="flex items-center gap-3">
                    {showStatus && (
                        <span className="flex items-center gap-1.5 text-xs text-emerald-400">
                            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                            200 OK
                        </span>
                    )}
                    <button
                        onClick={handleCopy}
                        className="flex items-center gap-1 text-xs text-white/40 hover:text-white/70 transition-colors"
                    >
                        {copied ? <><Check className="h-3 w-3" /><span>Copied</span></> : <><Copy className="h-3 w-3" /><span>Copy</span></>}
                    </button>
                </div>
            </div>
            <div className="overflow-x-auto flex-1">
                <pre className="text-xs sm:text-sm leading-relaxed">
                    <code className="font-mono">
                        {content.split("\n").map((line, i) => (
                            <div key={i} className="flex hover:bg-white/5 -mx-4 md:-mx-6 px-4 md:px-6">
                                <span className="w-6 md:w-8 text-white/20 text-right mr-4 select-none text-xs shrink-0">
                                    {i + 1}
                                </span>
                                <span className="text-white/90 whitespace-pre">
                                    {highlightCode(line)}
                                </span>
                            </div>
                        ))}
                    </code>
                </pre>
            </div>
        </div>
    );
}

export function DevelopersApiExplorer() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isLoading, setIsLoading] = useState(false);
    const [showResponse, setShowResponse] = useState(false);

    const active = endpoints[activeIndex];

    const handleRun = () => {
        setIsLoading(true);
        setShowResponse(false);
        setTimeout(() => {
            setIsLoading(false);
            setShowResponse(true);
        }, 1000);
    };

    const handleTabChange = (i: number) => {
        setActiveIndex(i);
        setShowResponse(false);
        setIsLoading(false);
    };

    return (
        <section id="api-reference" className="py-24 md:py-32 bg-secondary/30 border-t border-border">
            <div className="mx-auto max-w-7xl px-6">
                {/* Header */}
                <div className="mb-12">
                    <p className="mb-4 text-xs font-semibold uppercase tracking-[0.1em] text-accent">
                        API Reference
                    </p>
                    <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground leading-[1.15]">
                                Explore the endpoints
                            </h2>
                            <p className="mt-3 text-lg text-muted-foreground max-w-xl">
                                A concise REST API. Every endpoint returns predictable JSON with consistent error shapes.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Endpoint tab bar */}
                <div className="flex flex-wrap gap-2 mb-6">
                    {endpoints.map((ep, i) => (
                        <button
                            key={ep.path}
                            onClick={() => handleTabChange(i)}
                            className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium border transition-all ${activeIndex === i
                                    ? "bg-primary text-primary-foreground border-primary shadow-sm"
                                    : "bg-background border-border text-muted-foreground hover:text-foreground hover:border-accent/30"
                                }`}
                        >
                            <span
                                className={`text-xs font-mono font-bold px-1.5 py-0.5 rounded ${activeIndex === i ? "bg-primary-foreground/10 text-accent" : METHOD_COLORS[ep.method]
                                    }`}
                            >
                                {ep.method}
                            </span>
                            <span className="font-mono text-xs hidden sm:inline">{ep.path}</span>
                            <span className="sm:hidden">{ep.label}</span>
                        </button>
                    ))}
                </div>

                {/* Endpoint info */}
                <div className="mb-4 p-4 rounded-xl bg-background border border-border flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                    <div>
                        <p className="font-semibold text-foreground">{active.label}</p>
                        <p className="text-sm text-muted-foreground mt-0.5">{active.description}</p>
                    </div>
                    <button
                        onClick={handleRun}
                        disabled={isLoading}
                        className="flex items-center gap-2 px-4 py-2 bg-accent text-accent-foreground rounded-lg text-sm font-medium hover:bg-accent/90 transition-colors disabled:opacity-50 shrink-0"
                    >
                        {isLoading ? (
                            <><Loader2 className="h-4 w-4 animate-spin" />Running...</>
                        ) : (
                            <><Play className="h-4 w-4" />Run Request</>
                        )}
                    </button>
                </div>

                {/* Code window */}
                <div className="bg-[#0a0a0a] rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                    <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3 bg-white/5">
                        <div className="flex gap-1.5">
                            <span className="h-3 w-3 rounded-full bg-red-500/60" />
                            <span className="h-3 w-3 rounded-full bg-yellow-500/60" />
                            <span className="h-3 w-3 rounded-full bg-green-500/60" />
                        </div>
                        <span className="text-xs text-white/40 font-mono ml-2">
                            {active.method} {active.path}
                        </span>
                    </div>

                    <div className="flex flex-col lg:flex-row">
                        {/* Request */}
                        <div className="p-4 md:p-6 flex-1 lg:border-r lg:border-white/10">
                            <CodePane label="Request" content={active.request} />
                        </div>

                        {/* Response */}
                        <div className="p-4 md:p-6 flex-1 bg-white/[0.02] border-t border-white/10 lg:border-t-0">
                            {!showResponse && !isLoading && (
                                <div className="flex flex-col items-center justify-center h-40 gap-3">
                                    <p className="text-white/30 text-sm">Click &ldquo;Run Request&rdquo; to see the response</p>
                                </div>
                            )}
                            {isLoading && (
                                <div className="flex items-center justify-center h-40 text-white/30 text-sm gap-2">
                                    <Loader2 className="h-5 w-5 animate-spin" />
                                    Processing...
                                </div>
                            )}
                            {showResponse && (
                                <CodePane label="Response" content={active.response} showStatus />
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
