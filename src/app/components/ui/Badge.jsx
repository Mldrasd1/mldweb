const variants = {
  default: "bg-slate-100 dark:bg-white/10 text-slate-600 dark:text-slate-300",
  primary: "bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-500/20",
  success: "bg-green-500/10 text-green-600 dark:text-green-400 border border-green-500/20",
  danger: "bg-red-500/10 text-red-600 dark:text-red-400 border border-red-500/20",
};

export default function Badge({ children, variant = "default", className = "" }) {
  return (
    <span className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium ${variants[variant]} ${className}`}>
      {children}
    </span>
  );
}
