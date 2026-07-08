import Image from "next/image";
import Link from "next/link";

export function Logo({
  variant = "color",
  className = "",
  priority = false,
}: {
  variant?: "color" | "white";
  className?: string;
  priority?: boolean;
}) {
  const src =
    variant === "white" ? "/brand/logo-central-white.svg" : "/brand/logo-central.svg";
  return (
    <Link href="/" className={`inline-flex items-center ${className}`} aria-label="Najot Taʼlim — bosh sahifa">
      <Image
        src={src}
        alt="Najot Taʼlim"
        width={2001}
        height={429}
        priority={priority}
        className="h-8 w-auto sm:h-9"
      />
    </Link>
  );
}
