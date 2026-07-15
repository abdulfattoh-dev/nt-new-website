"use client";

import { createContext, useCallback, useContext, useState, type ReactNode } from "react";
import { EnrollModal } from "./EnrollModal";

interface EnrollContextValue {
  openEnroll: (courseName?: string) => void;
}

const EnrollContext = createContext<EnrollContextValue | null>(null);

export function useEnroll(): EnrollContextValue {
  const ctx = useContext(EnrollContext);
  if (!ctx) throw new Error("useEnroll must be used within <EnrollProvider>");
  return ctx;
}

export function EnrollProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const [courseName, setCourseName] = useState<string | undefined>(undefined);

  const openEnroll = useCallback((name?: string) => {
    setCourseName(name);
    setOpen(true);
  }, []);

  return (
    <EnrollContext.Provider value={{ openEnroll }}>
      {children}
      <EnrollModal open={open} courseName={courseName} onClose={() => setOpen(false)} />
    </EnrollContext.Provider>
  );
}
