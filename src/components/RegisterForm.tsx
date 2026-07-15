"use client";

import { useState } from "react";
import { allBranches } from "@/data/site";
import { courses } from "@/data/courses";
import { Icon } from "@/components/Icon";

export function RegisterForm({
  courseName,
  compact = false,
  bare = false,
}: {
  courseName?: string;
  compact?: boolean;
  bare?: boolean; // modal ichida — tashqi karta uslubisiz (rounded/shadow/padding)
}) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [course, setCourse] = useState("");
  const [branch, setBranch] = useState("");
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    if (name.trim().length < 2) {
      setError("Ismingizni toʻliq kiriting.");
      return;
    }
    const digits = phone.replace(/\D/g, "");
    if (digits.length < 9) {
      setError("Telefon raqamni toʻgʻri kiriting.");
      return;
    }
    // TODO: backend/CRM integratsiyasi (hozircha frontend)
    setSent(true);
  }

  if (sent) {
    return (
      <div className={bare ? "text-center" : "rounded-2xl bg-white p-8 text-center shadow-lg ring-1 ring-slate-100"}>
        <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-brand/10">
          <Icon name="check" size={26} className="text-brand" />
        </div>
        <h3 className="text-xl font-bold text-navy">Rahmat, {name.split(" ")[0]}!</h3>
        <p className="mt-2 text-slate-600">
          Arizangiz qabul qilindi. Tez orada operatorlarimiz siz bilan bogʻlanadi.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={bare ? "" : "rounded-2xl bg-white p-6 shadow-lg ring-1 ring-slate-100 sm:p-8"}
    >
      {!compact && (
        <div className="mb-6">
          <h3 className="text-2xl font-bold text-navy">
            {courseName ? `${courseName} uchun roʻyxatdan oʻting` : "Roʻyxatdan oʻtish"}
          </h3>
          <p className="mt-1 text-sm text-slate-500">
            Maʼlumotlaringizni qoldiring — biz siz bilan bogʻlanamiz.
          </p>
        </div>
      )}

      <div className="space-y-4">
        <div>
          <label className="mb-1.5 block text-sm font-medium text-navy">Ism-familiya</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Ismingiz"
            className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-navy outline-none transition focus:border-brand focus:bg-white focus:ring-2 focus:ring-brand/20"
          />
        </div>
        <div>
          <label className="mb-1.5 block text-sm font-medium text-navy">Telefon raqam</label>
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="+998 90 123 45 67"
            className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-navy outline-none transition focus:border-brand focus:bg-white focus:ring-2 focus:ring-brand/20"
          />
        </div>
        {!courseName && (
          <div>
            <label className="mb-1.5 block text-sm font-medium text-navy">Kursni tanlang</label>
            <select
              value={course}
              onChange={(e) => setCourse(e.target.value)}
              className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-navy outline-none transition focus:border-brand focus:bg-white focus:ring-2 focus:ring-brand/20"
            >
              <option value="">Kurs tanlang</option>
              {courses.map((c) => (
                <option key={c.slug} value={c.title}>
                  {c.title}
                </option>
              ))}
            </select>
          </div>
        )}
        <div>
          <label className="mb-1.5 block text-sm font-medium text-navy">Filialni tanlang</label>
          <select
            value={branch}
            onChange={(e) => setBranch(e.target.value)}
            className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-navy outline-none transition focus:border-brand focus:bg-white focus:ring-2 focus:ring-brand/20"
          >
            <option value="">Filial tanlang</option>
            {allBranches.map((b) => (
              <option key={b} value={b}>
                {b}
              </option>
            ))}
          </select>
        </div>
      </div>

      {error && <p className="mt-3 text-sm text-red-500">{error}</p>}

      <button
        type="submit"
        className="mt-6 w-full rounded-full bg-brand px-6 py-3.5 text-base font-semibold text-white shadow-sm transition hover:bg-brand-dark"
      >
        Roʻyxatdan oʻtish
      </button>
      <p className="mt-3 text-center text-xs text-slate-400">
        Yoki qoʻngʻiroq qiling: <a href="tel:+998788889888" className="font-semibold text-brand">78 888 98 88</a>
      </p>
    </form>
  );
}
