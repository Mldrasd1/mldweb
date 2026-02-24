export default function Input({ label, error, helper, className = "", ...props }) {
  return (
    <div className="flex flex-col gap-1.5">
      {label && <label className="text-sm font-medium text-slate-700 dark:text-slate-300">{label}</label>}
      <input
        className={`px-4 py-3 rounded-xl border bg-white/60 dark:bg-white/5 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 transition-all duration-200 ${
          error ? "border-red-400 focus:ring-red-500/50" : "border-slate-200 dark:border-white/10"
        } ${className}`}
        {...props}
      />
      {error && <p className="text-red-400 text-xs">{error}</p>}
      {helper && !error && <p className="text-slate-400 text-xs">{helper}</p>}
    </div>
  );
}
