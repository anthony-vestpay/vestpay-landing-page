"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Copy, Check, Terminal, Zap, Shield, Globe, Code2, Play, Loader2 } from "lucide-react";
import { useState } from "react";


const codeExample = {
  id: "session",
  label: "Collect Payment",
  filename: "POST /session",
  isInteractive: true,
  code: `POST /session
Content-Type: application/json
Authorization: Bearer vestpay_sk_xxx

{
  "amount": 2000,
  "currency": "GBP",
  "ruleset_id": "ruleset_xxx",
  "recipient_id": "rec_xxx",
  "customer": {
    "email": "customer@example.com"
  }
}`,
  response: `{
  "session_id": "ses_abc123def456",
  "checkout_url": "https://checkout.vestpay.io/ses_abc123def456",
  "amount": 2000,
  "currency": "GBP",
  "status": "pending",
  "created_at": "2026-01-31T02:30:00.000Z"
}`,
};

const apiFeatures = [
  {
    icon: Zap,
    title: "Blazing fast",
    description: "Average response time under 100ms globally",
  },
  {
    icon: Shield,
    title: "Enterprise security",
    description: "SOC 2 Type II certified with end-to-end encryption",
  },
  {
    icon: Globe,
    title: "Global coverage",
    description: "Edge infrastructure in 30+ regions worldwide",
  },
  {
    icon: Code2,
    title: "Developer tools",
    description: "CLI, webhooks, test mode, and detailed logs",
  },
];

export function ApiSection() {
  const [copied, setCopied] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [showResponse, setShowResponse] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(codeExample.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSendRequest = () => {
    setIsLoading(true);
    setShowResponse(false);
    setTimeout(() => {
      setIsLoading(false);
      setShowResponse(true);
    }, 1200);
  };

  return (
    <section className="py-24 md:py-32 bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-primary-foreground/10 border border-primary-foreground/20 text-sm font-medium text-primary-foreground/80 mb-6">
            <Terminal className="h-4 w-4" />
            Developer-first API
          </div>
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight leading-[1.15] mb-6">
            Build with confidence
          </h2>
          <p className="text-lg text-primary-foreground/70 leading-relaxed">
            A clean, intuitive API that does exactly what you expect. Create payment sessions, handle webhooks, and manage payouts with just a few lines of code.
          </p>
        </div>

        {/* Code Examples */}
        <div className="mb-20">
          <div className="bg-[#0a0a0a] rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
            {/* Header */}
            <div className="flex items-center justify-between border-b border-white/10 px-4 py-3 bg-white/5">
              <div className="flex items-center gap-2">
                <span className="px-3 py-1.5 text-sm font-medium bg-accent/20 text-accent rounded-md">
                  {codeExample.label}
                </span>
                <span className="text-xs text-white/40 font-mono hidden sm:block">
                  {codeExample.filename}
                </span>
              </div>
              <button
                onClick={handleCopy}
                className="flex items-center gap-1.5 text-xs text-white/40 hover:text-white/70 transition-colors"
              >
                {copied ? (
                  <>
                    <Check className="h-3.5 w-3.5" />
                    <span className="hidden sm:inline">Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="h-3.5 w-3.5" />
                    <span className="hidden sm:inline">Copy</span>
                  </>
                )}
              </button>
            </div>

            {/* Code content */}
            <div className="flex flex-col lg:flex-row">
              {/* Request */}
              <div className="p-4 md:p-6 overflow-x-auto flex-1 lg:border-r lg:border-white/10">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-medium text-white/40 uppercase tracking-wider">Request</span>
                  <button
                    onClick={handleSendRequest}
                    disabled={isLoading}
                    className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium bg-accent text-accent-foreground rounded-md hover:bg-accent/90 transition-colors disabled:opacity-50"
                  >
                    {isLoading ? (
                      <>
                        <Loader2 className="h-3 w-3 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Play className="h-3 w-3" />
                        Send Request
                      </>
                    )}
                  </button>
                </div>
                <pre className="text-xs md:text-sm leading-relaxed">
                  <code className="font-mono">
                    {codeExample.code.split("\n").map((line, i) => (
                      <div key={i} className="flex hover:bg-white/5 -mx-4 md:-mx-6 px-4 md:px-6">
                        <span className="w-6 md:w-8 text-white/20 text-right mr-4 md:mr-6 select-none text-xs shrink-0">
                          {i + 1}
                        </span>
                        <span className="text-white/90 whitespace-pre">
                          {highlightSyntax(line)}
                        </span>
                      </div>
                    ))}
                  </code>
                </pre>
              </div>

              {/* Response */}
              <div className="p-4 md:p-6 overflow-x-auto flex-1 border-t lg:border-t-0 border-white/10 bg-white/[0.02]">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-medium text-white/40 uppercase tracking-wider">Response</span>
                  {showResponse && (
                    <span className="flex items-center gap-1.5 text-xs text-emerald-400">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                      200 OK
                    </span>
                  )}
                </div>
                {!showResponse && !isLoading && (
                  <div className="flex items-center justify-center h-32 text-white/30 text-sm">
                    Click "Send Request" to see the response
                  </div>
                )}
                {isLoading && (
                  <div className="flex items-center justify-center h-32 text-white/30 text-sm">
                    <Loader2 className="h-5 w-5 animate-spin mr-2" />
                    Processing request...
                  </div>
                )}
                {showResponse && (
                  <pre className="text-xs md:text-sm leading-relaxed">
                    <code className="font-mono">
                      {codeExample.response.split("\n").map((line, i) => (
                        <div key={i} className="flex hover:bg-white/5 -mx-4 md:-mx-6 px-4 md:px-6">
                          <span className="w-6 md:w-8 text-white/20 text-right mr-4 md:mr-6 select-none text-xs shrink-0">
                            {i + 1}
                          </span>
                          <span className="text-white/90 whitespace-pre">
                            {highlightSyntax(line)}
                          </span>
                        </div>
                      ))}
                    </code>
                  </pre>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {apiFeatures.map((feature, index) => (
            <div
              key={index}
              className="p-6 rounded-xl bg-primary-foreground/5 border border-primary-foreground/10"
            >
              <div className="h-10 w-10 rounded-lg bg-accent/20 flex items-center justify-center mb-4">
                <feature.icon className="h-5 w-5 text-accent" />
              </div>
              <h3 className="font-semibold text-primary-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-primary-foreground/60">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8 border-t border-primary-foreground/10">
          <Button
            size="lg"
            className="w-full sm:w-auto bg-primary-foreground text-primary hover:bg-primary-foreground/90 px-8 h-12"
          >
            Read the docs
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="w-full sm:w-auto border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 px-8 h-12 bg-transparent"
          >
            API reference
          </Button>
        </div>
      </div>
    </section>
  );
}

function highlightSyntax(line: string) {
  return line
    .split(/(".*?"|'.*?'|`.*?`|\b(?:const|await|async|return|true|false|if|app)\b|\/\/.*$)/g)
    .map((part, i) => {
      if (/^["'`]/.test(part)) {
        return (
          <span key={i} className="text-emerald-400">
            {part}
          </span>
        );
      }
      if (/^(const|await|async|return|if|app)$/.test(part)) {
        return (
          <span key={i} className="text-purple-400">
            {part}
          </span>
        );
      }
      if (/^(true|false)$/.test(part)) {
        return (
          <span key={i} className="text-amber-400">
            {part}
          </span>
        );
      }
      if (/^\/\//.test(part)) {
        return (
          <span key={i} className="text-white/30">
            {part}
          </span>
        );
      }
      return <span key={i}>{part}</span>;
    });
}
