import { Button } from "@/components/ui/button";
import { Logo } from "@/components/logo";
import { ArrowRight } from "lucide-react";

export function Header() {
    return (
        <header className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur-md border-b border-border">
            <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
                <Logo />

                <div className="flex items-center gap-3">
                    <Button variant="ghost" size="sm" asChild>
                        <a href="https://app.vestpay.co/signin">
                            Sign In
                        </a>
                    </Button>
                    <Button size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90" asChild>
                        <a href="https://app.vestpay.co">
                            Start Building
                            <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
                        </a>
                    </Button>
                </div>
            </div>
        </header>
    );
}
