"use client";

import { Button } from "@/components/ui/button";
import { Logo } from "@/components/logo";
import { ArrowRight, Menu, X } from "lucide-react";
import { useState } from "react";

const navLinks = [
    { label: "Solutions", href: "#features" },
    { label: "Use Cases", href: "#features" },
    { label: "Developers", href: "#api" },
    { label: "Pricing", href: "#pricing" },
];

export function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur-md border-b border-border">
            <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
                <div className="flex items-center gap-8">
                    <Logo />

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center gap-1">
                        {navLinks.map((link) => (
                            <a
                                key={link.label}
                                href={link.href}
                                className="px-3 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors rounded-md hover:bg-accent/5"
                            >
                                {link.label}
                            </a>
                        ))}
                    </nav>
                </div>

                {/* Desktop CTAs */}
                <div className="hidden md:flex items-center gap-3">
                    <Button variant="ghost" size="sm" asChild>
                        <a href="https://app.vestpay.co/login">
                            Sign In
                        </a>
                    </Button>
                    <Button size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90" asChild>
                        <a href="https://app.vestpay.co/signup">
                            Start Building
                            <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
                        </a>
                    </Button>
                </div>

                {/* Mobile Hamburger Menu Button */}
                <button
                    className="md:hidden p-2 hover:bg-accent rounded-md transition-colors"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    aria-label="Toggle menu"
                >
                    {mobileMenuOpen ? (
                        <X className="h-6 w-6" />
                    ) : (
                        <Menu className="h-6 w-6" />
                    )}
                </button>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-md">
                    <div className="mx-auto max-w-7xl px-6 py-4 flex flex-col gap-1">
                        {navLinks.map((link) => (
                            <a
                                key={link.label}
                                href={link.href}
                                onClick={() => setMobileMenuOpen(false)}
                                className="px-3 py-2.5 text-sm text-muted-foreground hover:text-foreground hover:bg-accent/5 rounded-md transition-colors"
                            >
                                {link.label}
                            </a>
                        ))}
                        <div className="border-t border-border mt-2 pt-3 flex flex-col gap-2">
                            <Button variant="ghost" size="sm" className="w-full justify-center" asChild>
                                <a href="https://app.vestpay.co/login" onClick={() => setMobileMenuOpen(false)}>
                                    Sign In
                                </a>
                            </Button>
                            <Button size="sm" className="w-full justify-center bg-primary text-primary-foreground hover:bg-primary/90" asChild>
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
