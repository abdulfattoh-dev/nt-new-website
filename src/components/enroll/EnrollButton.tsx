"use client";

import type { ReactNode } from "react";
import { useEnroll } from "./EnrollProvider";

export function EnrollButton({
  courseName,
  className,
  children,
}: {
  courseName?: string;
  className?: string;
  children: ReactNode;
}) {
  const { openEnroll } = useEnroll();
  return (
    <button type="button" onClick={() => openEnroll(courseName)} className={className}>
      {children}
    </button>
  );
}
