"use client";

import { useEffect } from "react";
import Button from "./Button";

export default function Modal({
  open,
  onClose,
  onConfirm,
  title = "Confirm",
  description = "Are you sure?",
  confirmText = "Confirm",
  confirmVariant = "destructive",
  loading = false,
}) {
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        onClick={onClose}
      />
      <div className="glass-card-strong p-6 w-full max-w-md relative z-10 page-enter">
        <h3 className="text-lg font-bold text-foreground mb-2">{title}</h3>
        <p className="text-muted text-sm mb-6">{description}</p>
        <div className="flex justify-end gap-3">
          <Button variant="ghost" onClick={onClose}>
            Cancel
          </Button>
          <Button
            variant={confirmVariant}
            onClick={onConfirm}
            loading={loading}
          >
            {confirmText}
          </Button>
        </div>
      </div>
    </div>
  );
}
