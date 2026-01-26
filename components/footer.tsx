import { Logo } from "@/components/logo";

export function Footer() {
  return (
    <footer className="py-16 bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col gap-12">
          {/* Top section */}
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div className="flex flex-col gap-3">
              <span className="text-[1.6rem] font-bold tracking-[-0.02em] font-display">
                VestPay
              </span>
              <p className="text-sm text-primary-foreground/60 max-w-xs">
                The modern way to move money on your platform. 
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-start gap-8 sm:gap-12">
              <div className="flex flex-col gap-3">
                <p className="text-xs font-medium text-primary-foreground/40 uppercase tracking-wider">Legal</p>
                <nav className="flex flex-col gap-2">
                  <a
                    href="#"
                    className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  >
                    Privacy Policy
                  </a>
                  <a
                    href="#"
                    className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  >
                    Terms of Service
                  </a>
                </nav>
              </div>

              <div className="flex flex-col gap-3">
                <p className="text-xs font-medium text-primary-foreground/40 uppercase tracking-wider">Contact</p>
                <a
                  href="mailto:hello@vestpay.com"
                  className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                >
                  hello@vestpay.co
                </a>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="h-px bg-primary-foreground/10" />

          {/* Bottom section */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-primary-foreground/50">
              &copy; {new Date().getFullYear()} VestPay Finance Ltd. All rights reserved.
            </p>
            <div className="flex items-center gap-2 text-sm text-primary-foreground/50">
              <span>Built on</span>
              <svg className="h-4 w-4 text-primary-foreground/70" viewBox="0 0 24 24" fill="currentColor">
                <path d="M13.976 9.15c-2.172-.806-3.356-1.426-3.356-2.409 0-.831.683-1.305 1.901-1.305 2.227 0 4.515.858 6.09 1.631l.89-5.494C18.252.975 15.697 0 12.165 0 9.667 0 7.589.654 6.104 1.872 4.56 3.147 3.757 4.992 3.757 7.218c0 4.039 2.467 5.76 6.476 7.219 2.585.92 3.445 1.574 3.445 2.583 0 .98-.84 1.545-2.354 1.545-1.875 0-4.965-.921-6.99-2.109l-.9 5.555C5.175 22.99 8.385 24 11.714 24c2.641 0 4.843-.624 6.328-1.813 1.664-1.305 2.525-3.236 2.525-5.732 0-4.128-2.524-5.851-6.591-7.305z" />
              </svg>
              <span>Stripe Connect</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
