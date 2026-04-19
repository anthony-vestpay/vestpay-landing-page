"use client";

import { useState } from "react";
import { Copy, Check, Terminal } from "lucide-react";

const LANGUAGES = ["Node.js", "Python", "cURL"] as const;
type Language = (typeof LANGUAGES)[number];

const steps: {
    number: string;
    title: string;
    description: string;
    code: Record<Language, string>;
    filename: Record<Language, string>;
}[] = [
        {
            number: "01",
            title: "Install the SDK",
            description: "Add the VestPay SDK to your project using your preferred package manager.",
            filename: { "Node.js": "terminal", Python: "terminal", cURL: "terminal" },
            code: {
                "Node.js": `npm install vestpay
# or
pnpm add vestpay
# or
yarn add vestpay`,
                Python: `pip install vestpay`,
                cURL: `# No installation needed — use cURL directly.
# Verify cURL is available:
curl --version`,
            },
        },
        {
            number: "02",
            title: "Initialise the client",
            description:
                "Import VestPay and configure your secret API key. Store it in an environment variable — never expose it client-side.",
            filename: {
                "Node.js": "vestpay.ts",
                Python: "vestpay.py",
                cURL: "terminal",
            },
            code: {
                "Node.js": `import Vestpay from 'vestpay';

const vestpay = new Vestpay({
  apiKey: process.env.VESTPAY_SECRET_KEY,
});`,
                Python: `import vestpay
import os

client = vestpay.Client(
    api_key=os.environ["VESTPAY_SECRET_KEY"]
)`,
                cURL: `# Export your secret key once
export VESTPAY_KEY=vestpay_sk_live_xxx

# All subsequent requests use $VESTPAY_KEY`,
            },
        },
        {
            number: "03",
            title: "Create a payment session",
            description:
                "A session holds the payment details and generates a hosted checkout URL. Redirect your customer there to complete the payment.",
            filename: {
                "Node.js": "checkout.ts",
                Python: "checkout.py",
                cURL: "terminal",
            },
            code: {
                "Node.js": `const session = await vestpay.sessions.create({
  amount: 2000,        // £20.00 in pence
  currency: 'GBP',
  ruleset_id: 'ruleset_xxx',
  recipient_id: 'rec_xxx',
  customer: {
    email: 'customer@example.com',
  },
});

// Redirect customer to complete payment
redirect(session.checkout_url);

// Response includes:
// session.session_id  → "ses_abc123"
// session.checkout_url → "https://checkout.vestpay.io/ses_abc123"
// session.status      → "pending"`,
                Python: `session = client.sessions.create(
    amount=2000,
    currency="GBP",
    ruleset_id="ruleset_xxx",
    recipient_id="rec_xxx",
    customer={"email": "customer@example.com"},
)

# Redirect the customer
redirect(session.checkout_url)`,
                cURL: `curl https://api.vestpay.io/v1/session \\
  -H "Authorization: Bearer $VESTPAY_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "amount": 2000,
    "currency": "GBP",
    "ruleset_id": "ruleset_xxx",
    "recipient_id": "rec_xxx",
    "customer": {
      "email": "customer@example.com"
    }
  }'`,
            },
        },
        {
            number: "04",
            title: "Handle webhook events",
            description:
                "Register a webhook endpoint in your dashboard. When a payment completes, VestPay sends a signed event — verify it and trigger your business logic.",
            filename: {
                "Node.js": "webhook.ts",
                Python: "webhook.py",
                cURL: "terminal",
            },
            code: {
                "Node.js": `app.post('/webhook',
  express.raw({ type: 'application/json' }),
  async (req, res) => {
    const sig = req.headers['vestpay-signature'];

    const event = vestpay.webhooks.constructEvent(
      req.body,
      sig,
      process.env.VESTPAY_WEBHOOK_SECRET,
    );

    if (event.type === 'session.completed') {
      const { session_id } = event.data;

      // Trigger payout to recipient
      await vestpay.payouts.create({ session_id });
    }

    res.sendStatus(200);
  }
);`,
                Python: `@app.route("/webhook", methods=["POST"])
def webhook():
    sig = request.headers.get("vestpay-signature")

    event = client.webhooks.construct_event(
        request.data,
        sig,
        os.environ["VESTPAY_WEBHOOK_SECRET"],
    )

    if event["type"] == "session.completed":
        session_id = event["data"]["session_id"]
        client.payouts.create(session_id=session_id)

    return "", 200`,
                cURL: `# Test locally with the VestPay CLI
npm install -g vestpay-cli

# Login
vestpay login

# Forward live events to your local server
vestpay listen --forward-to localhost:3000/webhook

# Trigger a test event
vestpay trigger session.completed`,
            },
        },
    ];

function highlightCode(line: string) {
    return line
        .split(
            /(".*?"|'.*?'|`.*?`|\b(?:import|from|const|await|async|return|true|false|new|process|if|app|redirect|curl|export|pip|npm|pnpm|yarn)\b|#.*$|\/\/.*$)/g
        )
        .map((part, i) => {
            if (/^["'`]/.test(part)) return <span key={i} className="text-emerald-400">{part}</span>;
            if (/^(import|from|const|await|async|return|new|process|if|app)$/.test(part))
                return <span key={i} className="text-purple-400">{part}</span>;
            if (/^(true|false)$/.test(part)) return <span key={i} className="text-amber-400">{part}</span>;
            if (/^(\/\/|#)/.test(part)) return <span key={i} className="text-white/30">{part}</span>;
            if (/^(curl|export|pip|npm|pnpm|yarn|vestpay)/.test(part))
                return <span key={i} className="text-sky-400">{part}</span>;
            return <span key={i}>{part}</span>;
        });
}

function CodeBlock({ code, filename }: { code: string; filename: string }) {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(code);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="bg-[#0a0a0a] rounded-xl overflow-hidden border border-white/10">
            <div className="flex items-center justify-between border-b border-white/10 px-4 py-2.5 bg-white/5">
                <div className="flex items-center gap-2">
                    <Terminal className="h-3.5 w-3.5 text-white/30" />
                    <span className="text-xs text-white/40 font-mono">{filename}</span>
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
            <div className="p-4 overflow-x-auto">
                <pre className="text-xs sm:text-sm leading-relaxed">
                    <code className="font-mono">
                        {code.split("\n").map((line, i) => (
                            <div key={i} className="flex hover:bg-white/5 -mx-4 px-4">
                                <span className="w-7 text-white/20 text-right mr-4 select-none text-xs shrink-0">
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

export function DevelopersQuickstart() {
    const [language, setLanguage] = useState<Language>("Node.js");
    const [activeStep, setActiveStep] = useState(0);

    return (
        <section id="quickstart" className="py-24 md:py-32 bg-background border-t border-border">
            <div className="mx-auto max-w-7xl px-6">
                {/* Header */}
                <div className="mb-12">
                    <p className="mb-4 text-xs font-semibold uppercase tracking-[0.1em] text-accent">
                        Quickstart
                    </p>
                    <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
                        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground leading-[1.15]">
                            From zero to first payment in 4 steps
                        </h2>
                        {/* Language tabs */}
                        <div className="flex items-center gap-1 bg-secondary rounded-lg p-1 self-start md:self-auto">
                            {LANGUAGES.map((lang) => (
                                <button
                                    key={lang}
                                    onClick={() => setLanguage(lang)}
                                    className={`px-3 py-1.5 text-sm font-medium rounded-md transition-all ${language === lang
                                            ? "bg-background text-foreground shadow-sm"
                                            : "text-muted-foreground hover:text-foreground"
                                        }`}
                                >
                                    {lang}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Steps */}
                <div className="grid lg:grid-cols-[380px_1fr] gap-8 items-start">
                    {/* Step nav */}
                    <div className="flex flex-col gap-2">
                        {steps.map((step, i) => (
                            <button
                                key={step.number}
                                onClick={() => setActiveStep(i)}
                                className={`group text-left p-5 rounded-xl border transition-all ${activeStep === i
                                        ? "bg-primary text-primary-foreground border-primary shadow-lg shadow-primary/10"
                                        : "bg-background border-border hover:border-accent/30 hover:bg-secondary/50"
                                    }`}
                            >
                                <div className="flex items-start gap-4">
                                    <span
                                        className={`text-xs font-mono font-bold shrink-0 mt-0.5 ${activeStep === i ? "text-accent" : "text-muted-foreground"
                                            }`}
                                    >
                                        {step.number}
                                    </span>
                                    <div>
                                        <p
                                            className={`font-semibold text-sm ${activeStep === i ? "text-primary-foreground" : "text-foreground"
                                                }`}
                                        >
                                            {step.title}
                                        </p>
                                        <p
                                            className={`text-xs mt-1 leading-relaxed ${activeStep === i ? "text-primary-foreground/70" : "text-muted-foreground"
                                                }`}
                                        >
                                            {step.description}
                                        </p>
                                    </div>
                                </div>
                            </button>
                        ))}
                    </div>

                    {/* Code panel */}
                    <div className="lg:sticky lg:top-24">
                        <CodeBlock
                            code={steps[activeStep].code[language]}
                            filename={steps[activeStep].filename[language]}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
