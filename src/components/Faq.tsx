"use client";

import { useState } from "react";
import { Icon } from "./Icon";

export function Faq({ items }: { items: { q: string; a: string }[] }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="mx-auto max-w-3xl divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-white">
      {items.map((item, i) => (
        <div key={i}>
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
            aria-expanded={open === i}
          >
            <span className="font-semibold text-navy">{item.q}</span>
            <span
              className={`shrink-0 text-brand transition-transform duration-200 ${
                open === i ? "rotate-45" : ""
              }`}
            >
              <Icon name="plus" size={18} />
            </span>
          </button>
          <div
            className={`grid overflow-hidden px-6 transition-all duration-300 ${
              open === i ? "grid-rows-[1fr] pb-5" : "grid-rows-[0fr]"
            }`}
          >
            <div className="overflow-hidden text-slate-600">{item.a}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
