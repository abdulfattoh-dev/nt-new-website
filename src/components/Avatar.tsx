import Image from "next/image";

function initials(name: string) {
  return name
    .split(" ")
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();
}

export function Avatar({
  name,
  image,
  size = 56,
  className = "",
}: {
  name: string;
  image?: string;
  size?: number;
  className?: string;
}) {
  if (image) {
    return (
      <Image
        src={image}
        alt={name}
        width={size}
        height={size}
        className={`rounded-full object-cover ${className}`}
        style={{ width: size, height: size }}
      />
    );
  }
  return (
    <div
      className={`flex shrink-0 items-center justify-center rounded-full bg-brand-gradient font-bold text-white ${className}`}
      style={{ width: size, height: size, fontSize: size * 0.36 }}
      aria-label={name}
    >
      {initials(name)}
    </div>
  );
}
