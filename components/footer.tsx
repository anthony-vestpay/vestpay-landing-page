export function Footer() {
  return (
    <footer className="py-20 md:py-32 bg-primary text-primary-foreground overflow-hidden">
      <div className="mx-auto max-w-7xl px-6">
        {/* Big logo */}
        <div className="mb-16 md:mb-24">
          <span className="text-[4rem] md:text-[8rem] lg:text-[10rem] font-bold tracking-[-0.04em] font-display leading-none text-primary-foreground/10">
            VestPay
          </span>
        </div>

        {/* Content grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mb-16">
          {/* Product */}
          <div className="flex flex-col gap-4">
            <p className="text-xs font-medium text-primary-foreground/40 uppercase tracking-wider">Product</p>
            <nav className="flex flex-col gap-3">
              <a href="#features" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                Features
              </a>
              <a href="#pricing" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                Pricing
              </a>
              <a href="#" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                API Reference
              </a>
            </nav>
          </div>

          {/* Company */}
          <div className="flex flex-col gap-4">
            <p className="text-xs font-medium text-primary-foreground/40 uppercase tracking-wider">Company</p>
            <nav className="flex flex-col gap-3">
              <a href="/about" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                About
              </a>
              <a href="#" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                Blog
              </a>
              <a href="#" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                Careers
              </a>
            </nav>
          </div>

          {/* Legal */}
          <div className="flex flex-col gap-4">
            <p className="text-xs font-medium text-primary-foreground/40 uppercase tracking-wider">Legal</p>
            <nav className="flex flex-col gap-3">
              <a href="#" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                Terms of Service
              </a>
            </nav>
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-4">
            <p className="text-xs font-medium text-primary-foreground/40 uppercase tracking-wider">Contact</p>
            <nav className="flex flex-col gap-3">
              <a href="mailto:hello@vestpay.co" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                hello@vestpay.co
              </a>
              <a href="https://twitter.com/vestpay" target="_blank" rel="noopener noreferrer" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                Twitter / X
              </a>
            </nav>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-primary-foreground/10 mb-8" />

        {/* Bottom section */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
            <p className="text-sm text-primary-foreground/50">
              &copy; {new Date().getFullYear()} VestPay Finance Ltd.
            </p>
            <a 
              href="https://stripe.com/connect" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group flex items-center gap-2 text-sm text-primary-foreground/50 hover:text-primary-foreground transition-colors"
            >
              <span>Built on</span>
              <svg className="h-3.5 w-3.5 text-primary-foreground/50 group-hover:text-primary-foreground transition-colors" viewBox="0 0 24 24" fill="currentColor">
                <path d="M13.976 9.15c-2.172-.806-3.356-1.426-3.356-2.409 0-.831.683-1.305 1.901-1.305 2.227 0 4.515.858 6.09 1.631l.89-5.494C18.252.975 15.697 0 12.165 0 9.667 0 7.589.654 6.104 1.872 4.56 3.147 3.757 4.992 3.757 7.218c0 4.039 2.467 5.76 6.476 7.219 2.585.92 3.445 1.574 3.445 2.583 0 .98-.84 1.545-2.354 1.545-1.875 0-4.965-.921-6.99-2.109l-.9 5.555C5.175 22.99 8.385 24 11.714 24c2.641 0 4.843-.624 6.328-1.813 1.664-1.305 2.525-3.236 2.525-5.732 0-4.128-2.524-5.851-6.591-7.305z" />
              </svg>
              <span>Stripe Connect</span>
            </a>
          </div>

          <div className="flex items-center gap-4">
            {/* Twitter/X */}
            <a 
              href="https://twitter.com/vestpay" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 text-primary-foreground/50 hover:text-primary-foreground transition-colors"
              aria-label="Twitter"
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            {/* LinkedIn */}
            <a 
              href="https://linkedin.com/company/vestpay" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 text-primary-foreground/50 hover:text-primary-foreground transition-colors"
              aria-label="LinkedIn"
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
            {/* GitHub */}
            <a 
              href="https://github.com/vestpay" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 text-primary-foreground/50 hover:text-primary-foreground transition-colors"
              aria-label="GitHub"
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
