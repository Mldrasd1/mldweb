"use client";

export default function Input({
  label,
  error,
  helper,
  className = "",
  ...props
}) {
  const isTextarea = props.as === "textarea";
  const Component = isTextarea ? "textarea" : "input";
  const { as, ...rest } = props;

  return (
    <div className="flex flex-col gap-1.5 w-full">
      {label && (
        <label className="text-sm font-medium text-foreground">
          {label}
        </label>
      )}
      <Component
        className={`w-full px-4 py-2.5 rounded-xl bg-surface border transition-all duration-200 text-foreground placeholder:text-muted focus-ring ${
          error
            ? "border-danger"
            : "border-border-custom"
        } ${isTextarea ? "min-h-[100px] resize-none" : ""} ${className}`}
        {...rest}
      />
      {error && <p className="text-xs text-danger">{error}</p>}
      {helper && !error && (
        <p className="text-xs text-muted">{helper}</p>
      )}
    </div>
  );
}
