"use client";

import { useEffect } from "react";
import { RegisterForm } from "@/components/RegisterForm";
import { Icon } from "@/components/Icon";

interface EnrollModalProps {
  open: boolean;
  courseName?: string;
  onClose: () => void;
}

export function EnrollModal({ open, courseName, onClose }: EnrollModalProps) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-navy/60 p-4 backdrop-blur-sm"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        className="max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-2xl bg-white shadow-2xl"
      >
        <div className="relative bg-navy px-8 py-7">
          <button
            onClick={onClose}
            aria-label="Yopish"
            className="absolute right-5 top-5 flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20"
          >
            <Icon name="plus" size={14} className="rotate-45" />
          </button>
          <span className="text-xs font-bold uppercase tracking-[0.14em] text-brand-bright">
            Roʻyxatdan oʻtish
          </span>
          <h3 className="mt-2 text-2xl font-bold text-white">
            {courseName ? `${courseName} uchun bepul maslahat oling` : "Bepul maslahat oling"}
          </h3>
        </div>

        <div className="p-6 sm:p-8">
          <RegisterForm courseName={courseName} compact bare />
        </div>
      </div>
    </div>
  );
}
