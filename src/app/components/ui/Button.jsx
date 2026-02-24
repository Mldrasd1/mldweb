"use client";

const variants = {
  primary:
    "bg-primary text-primary-fg hover:bg-primary-hover shadow-md",
  secondary:
    "bg-surface text-foreground border border-border-custom hover:bg-primary/10",
  ghost:
    "bg-transparent text-foreground hover:bg-primary/10",
  destructive:
    "bg-danger text-white hover:bg-danger-hover shadow-md",
};

export default function Button({
  children,
  variant = "primary",
  loading = false,
  className = "",
  ...props
}) {
  return (
    <button
      disabled={loading || props.disabled}
      className={`inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl font-semibold text-sm transition-all duration-200 btn-press focus-ring disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer ${variants[variant] || variants.primary} ${className}`}
      {...props}
    >
      {loading && (
        <svg
          className="animate-spin h-4 w-4"
          viewBox="0 0 24 24"
          fill="none"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
          />
        </svg>
      )}
      {children}
    </button>
  );
}
