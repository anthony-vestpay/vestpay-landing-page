const testimonials = [
  {
    quote: "VestPay reduced our payment integration time from months to days. The API is exactly what we needed.",
    author: "Sarah Chen",
    role: "CTO",
    company: "Marketplace Co",
    initials: "SC",
  },
  {
    quote: "Finally, a solution that handles the complexity of multi-party payments without the engineering overhead.",
    author: "Michael Torres",
    role: "Head of Engineering",
    company: "Platform Inc",
    initials: "MT",
  },
  {
    quote: "Our recipients love the onboarding experience. Support tickets dropped 80% after switching to VestPay.",
    author: "Emily Rodriguez",
    role: "Product Lead",
    company: "ServiceHub",
    initials: "ER",
  },
];

export function TestimonialsSection() {
  return (
    <section className="py-24 md:py-32 bg-card border-y border-border">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-sm font-medium text-accent mb-4">Testimonials</p>
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-foreground leading-[1.15]">
            Loved by platforms everywhere
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="relative p-8 rounded-2xl bg-background border border-border transition-all duration-300 hover:shadow-lg hover:shadow-foreground/5"
            >
              {/* Quote */}
              <p className="text-foreground leading-relaxed mb-8">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              
              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-secondary flex items-center justify-center">
                  <span className="text-sm font-semibold text-muted-foreground">
                    {testimonial.initials}
                  </span>
                </div>
                <div>
                  <p className="font-medium text-foreground">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role}, {testimonial.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
