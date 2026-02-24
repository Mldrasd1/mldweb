export default function Skeleton({ className = "" }) {
  return (
    <div className={`bg-slate-200 dark:bg-white/10 rounded-xl animate-pulse ${className}`} />
  );
}
