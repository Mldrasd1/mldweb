import Link from "next/link";
import Button from "./Button";

export default function EmptyState({
  icon,
  title = "Nothing here yet",
  description = "",
  actionLabel,
  actionHref,
}) {
  return (
    <div className="flex flex-col items-center justify-center py-20 px-4 text-center page-enter">
      {icon && <div className="text-5xl mb-4 text-primary">{icon}</div>}
      <h3 className="text-2xl font-bold text-foreground mb-2">{title}</h3>
      {description && (
        <p className="text-muted max-w-md mb-6">{description}</p>
      )}
      {actionLabel && actionHref && (
        <Link href={actionHref}>
          <Button>{actionLabel}</Button>
        </Link>
      )}
    </div>
  );
}
