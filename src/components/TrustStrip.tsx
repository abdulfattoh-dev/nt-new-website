import { Icon, type IconName } from "./Icon";

const items: { icon: IconName; label: string }[] = [
  { icon: "rocket", label: "Zamonaviy oʻquv dasturi" },
  { icon: "user", label: "Amaliyotchi ustozlar" },
  { icon: "bulb", label: "Bepul master-klasslar" },
  { icon: "star", label: "Sertifikat" },
];

export function TrustStrip() {
  return (
    <div className="bg-navy">
      <div className="mx-auto flex max-w-7xl flex-wrap justify-between gap-8 px-4 py-5 sm:px-6 lg:px-8">
        {items.map((item) => (
          <div key={item.label} className="flex items-center gap-3">
            <Icon name={item.icon} size={20} className="text-brand-bright" />
            <span className="text-sm font-medium text-white">{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
