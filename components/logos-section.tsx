export function LogosSection() {
  return (
    <section className="py-12 md:py-16 border-y border-border bg-card/50">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
          <div className="flex items-center gap-2">
            <p className="text-sm text-muted-foreground">Built on</p>
            <a 
              href="https://stripe.com/connect" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group flex items-center gap-1.5 px-3 py-1.5 bg-background border border-border transition-all hover:border-accent/50"
            >
              <svg className="h-4 w-4 transition-colors group-hover:text-accent" viewBox="0 0 24 24" fill="currentColor">
                <path d="M13.976 9.15c-2.172-.806-3.356-1.426-3.356-2.409 0-.831.683-1.305 1.901-1.305 2.227 0 4.515.858 6.09 1.631l.89-5.494C18.252.975 15.697 0 12.165 0 9.667 0 7.589.654 6.104 1.872 4.56 3.147 3.757 4.992 3.757 7.218c0 4.039 2.467 5.76 6.476 7.219 2.585.92 3.445 1.574 3.445 2.583 0 .98-.84 1.545-2.354 1.545-1.875 0-4.965-.921-6.99-2.109l-.9 5.555C5.175 22.99 8.385 24 11.714 24c2.641 0 4.843-.624 6.328-1.813 1.664-1.305 2.525-3.236 2.525-5.732 0-4.128-2.524-5.851-6.591-7.305z" />
              </svg>
              <span className="text-sm font-semibold text-foreground transition-colors group-hover:text-accent">Stripe Connect</span>
            </a>
          </div>
          <div className="hidden md:block h-4 w-px bg-border" />
          <p className="text-sm text-muted-foreground text-center">
            Enterprise-grade infrastructure, simplified
          </p>
        </div>
      </div>
    </section>
  );
}
