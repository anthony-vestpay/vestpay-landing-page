"use client";

import { Button } from "@/components/ui/button";
import { Logo } from "@/components/logo";
import { ArrowRight, Menu, X, ChevronDown } from "lucide-react";
import { useState } from "react";

const navLinks = [
    { label: "Solutions", href: "/solution" },
    { label: "Use Cases", href: "/usecases" },
    { label: "Developers", href: "/developers" },
    { label: "Pricing", href: "#pricing" },
];

export function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 w-full border-b border-border bg-background/90 backdrop-blur-md">
            <div className="mx-auto max-w-7xl px-6 py-3.5 flex items-center justify-between">
                {/* Left: logo + nav */}
                <div className="flex items-center gap-10">
                    <Logo />

                    {/* Desktop nav */}
                    <nav className="hidden md:flex items-center gap-0.5">
                        {navLinks.map((link) => (
                            <a
                                key={link.label}
                                href={link.href}
                                className="group flex items-center gap-0.5 px-3 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-secondary"
                            >
                                {link.label}
                            </a>
                        ))}
                    </nav>
                </div>

                {/* Right: CTAs */}
                <div className="hidden md:flex items-center gap-2">
                    <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground" asChild>
                        <a href="https://app.vestpay.co/login">Sign in</a>
                    </Button>
                    <Button
                        size="sm"
                        className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-sm"
                        asChild
                    >
                        <a href="https://app.vestpay.co/signup">
                            Start Building
                            <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
                        </a>
                    </Button>
                </div>

                {/* Mobile hamburger */}
                <button
                    className="md:hidden flex items-center justify-center h-9 w-9 rounded-lg text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    aria-label="Toggle menu"
                >
                    {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                </button>
            </div>

            {/* Mobile menu */}
            {mobileMenuOpen && (
                <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-md">
                    <div className="mx-auto max-w-7xl px-6 py-4 flex flex-col gap-1">
                        {navLinks.map((link) => (
                            <a
                                key={link.label}
                                href={link.href}
                                onClick={() => setMobileMenuOpen(false)}
                                className="px-3 py-2.5 text-sm text-muted-foreground hover:text-foreground hover:bg-secondary rounded-lg transition-colors"
                            >
                                {link.label}
                            </a>
                        ))}
                        <div className="border-t border-border mt-3 pt-3 flex flex-col gap-2">
                            <Button
                                variant="ghost"
                                size="sm"
                                className="w-full justify-center text-muted-foreground"
                                asChild
                            >
                                <a href="https://app.vestpay.co/login" onClick={() => setMobileMenuOpen(false)}>
                                    Sign in
                                </a>
                            </Button>
                            <Button
                                size="sm"
                                className="w-full justify-center bg-primary text-primary-foreground"
                                asChild
                            >
                                <a href="https://app.vestpay.co/signup" onClick={() => setMobileMenuOpen(false)}>
                                    Start Building
                                    <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
                                </a>
                            </Button>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
}
