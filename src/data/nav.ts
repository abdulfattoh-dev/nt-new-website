// Header va footer'da baravar ishlatiladigan sahifalar roʻyxati.

export interface NavLink {
  href: string;
  label: string;
  external?: boolean;
}

export const navLinks: NavLink[] = [
  { href: "/kurslar", label: "Kurslar" },
  { href: "/#natijalar", label: "Bitiruvchilar" },
  { href: "/#biz-haqimizda", label: "Biz haqimizda" },
  { href: "/blog", label: "Blog" },
  { href: "https://edfix.uz", label: "Onlayn taʼlim", external: true },
  { href: "/savollar", label: "FAQ" },
];
