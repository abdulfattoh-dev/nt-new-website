// Header va footer'da baravar ishlatiladigan sahifalar roʻyxati.

export interface NavLink {
  href: string;
  label: string;
  external?: boolean;
}

export const navLinks: NavLink[] = [
  { href: "/#kurslar", label: "Kurslar" },
  { href: "/#natijalar", label: "Bitiruvchilar" },
  { href: "https://edfix.uz", label: "Onlayn taʼlim", external: true },
  { href: "/blog", label: "Blog" },
  { href: "/savollar", label: "Savollar" },
  { href: "/#biz-haqimizda", label: "Biz haqimizda" },
];
