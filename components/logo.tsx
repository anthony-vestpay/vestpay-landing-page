export function Logo({ className = "" }: { className?: string }) {
  return (
    <a href="#" className={`group flex items-center ${className}`}>
      <span className="text-[1.6rem] font-bold tracking-[-0.02em] text-accent font-display">
        VestPay
      </span>
    </a>
  );
}
