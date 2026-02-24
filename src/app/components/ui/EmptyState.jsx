import Link from "next/link";

export default function EmptyState({ icon, title, description, ctaLabel, ctaHref }) {
  return (
    <div className="glass rounded-3xl p-12 text-center shadow-xl shadow-black/5">
      {icon && (
        <div className="w-16 h-16 bg-slate-100 dark:bg-white/5 rounded-2xl flex items-center justify-center mx-auto mb-4">
          {icon}
        </div>
      )}
      <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{title}</h2>
      {description && <p className="text-slate-500 dark:text-slate-400 text-sm mb-6">{description}</p>}
      {ctaHref && ctaLabel && (
        <Link
          href={ctaHref}
          className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-500 to-violet-600 text-white font-semibold px-6 py-3 rounded-xl shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:-translate-y-0.5 transition-all duration-200"
        >
          {ctaLabel}
        </Link>
      )}
    </div>
  );
}
