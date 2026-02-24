"use client";
export default function Modal({ title, description, onConfirm, onCancel, confirmLabel = "Confirm", cancelLabel = "Cancel", danger = false }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onCancel} />
      <div className="relative glass rounded-2xl p-6 shadow-2xl max-w-sm w-full border border-white/20 dark:border-white/10">
        <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">{title}</h3>
        {description && <p className="text-sm text-slate-500 dark:text-slate-400 mb-6">{description}</p>}
        <div className="flex gap-3">
          <button
            onClick={onCancel}
            className="flex-1 px-4 py-2.5 rounded-xl text-sm font-medium border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-white/5 transition-all duration-200"
          >
            {cancelLabel}
          </button>
          <button
            onClick={onConfirm}
            className={`flex-1 px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 ${
              danger
                ? "bg-red-500 text-white hover:bg-red-600 shadow-lg shadow-red-500/25"
                : "bg-gradient-to-r from-indigo-500 to-violet-600 text-white shadow-lg shadow-indigo-500/25"
            }`}
          >
            {confirmLabel}
          </button>
        </div>
      </div>
    </div>
  );
}
