// Umumiy sayt maʼlumotlari — Website reja.pdf va Brendbuk asosida

export const site = {
  name: "Najot Taʼlim",
  phone: "78 888 98 88",
  phoneHref: "tel:+998788889888",
  foundedYear: 2018,
  address: "Toshkent shahar, Chilonzor tumani, Qatortol koʻchasi, 1 uy",
  addressLines: ["Toshkent shahar, Chilonzor tumani", "Qatortol koʻchasi, 1 uy"],
};

export const stats = [
  { value: "12 000+", label: "Muvaffaqiyatli bitiruvchi" },
  { value: "6 ta", label: "Filial" },
  { value: "300+", label: "Xodim" },
  { value: "2000+", label: "TechJobs orqali ishga joylashgan" },
];

export const branches = {
  tashkent: ["Xadra", "Chilonzor", "Chimboy"],
  regions: ["Fargʻona", "Samarqand", "Xorazm"],
};

// Filial tanlash uchun roʻyxat (forma)
export const allBranches = [
  "Xadra (Toshkent)",
  "Chilonzor (Toshkent)",
  "Chimboy (Toshkent)",
  "Fargʻona",
  "Samarqand",
  "Xorazm",
];

export interface BranchLocation {
  name: string;
  city: string;
  address: string;
  landmark?: string; // moʻljal
  hours: string;
  mapEmbedUrl: string; // Yandex xarita — najottalim.uz'dagi aniq tashkilot (oid) havolasi
}

// Filiallar boʻyicha batafsil maʼlumot va xarita havolalari — barcha 6 ta
// filial najottalim.uz saytidagi "Bizning manzillar" boʻlimidan tasdiqlangan (2026-07-08).
export const branchLocations: BranchLocation[] = [
  {
    name: "Chilonzor",
    city: "Toshkent",
    address: "Chilonzor tumani, Qatortol koʻchasi, 1 uy",
    landmark: "Rayhon milliy taomlar roʻparasidagi uy orqasida",
    hours: "09:00 – 18:00",
    mapEmbedUrl:
      "https://yandex.com/map-widget/v1/?ll=69.203892%2C41.285765&mode=search&oid=94800077397&ol=biz&z=17.75",
  },
  {
    name: "Xadra",
    city: "Toshkent",
    address: "Xadra maydoni, Sebzor koʻchasi",
    landmark: "Milliy taomlar yonida",
    hours: "09:00 – 18:00",
    mapEmbedUrl:
      "https://yandex.com/map-widget/v1/?ll=69.245540%2C41.325115&mode=search&oid=127633196997&ol=biz&z=18.36",
  },
  {
    name: "Chimboy",
    city: "Toshkent",
    address: "Olmazor tumani, Kichik halqa yoʻli, 72A uy",
    hours: "09:00 – 18:00",
    mapEmbedUrl:
      "https://yandex.com/map-widget/v1/?ll=69.215550%2C41.347272&mode=search&oid=203287967764&ol=biz&z=18.1",
  },
  {
    name: "Fargʻona",
    city: "Fargʻona",
    address: "Terakmozor ort tomoni, Margʻilon soy boʻyi",
    landmark: "Bolajon parki ichida",
    hours: "09:00 – 18:00",
    mapEmbedUrl:
      "https://yandex.com/map-widget/v1/?ll=71.788266%2C40.388071&mode=search&oid=128069515051&ol=biz&z=18.37",
  },
  {
    name: "Samarqand",
    city: "Samarqand",
    address: "Samarqand shahri, Yoshlar MFY, Rudakiy koʻchasi, 225-uy",
    landmark: "Rudakiy va Shamsiya koʻchalarining chorrahasida",
    hours: "09:00 – 18:00",
    mapEmbedUrl:
      "https://yandex.uz/map-widget/v1/org/najot_ta_lim/13184533332/?ll=66.955948%2C39.673504&z=16",
  },
  {
    name: "Xorazm",
    city: "Xorazm",
    address: "Urganch, Al-Xorazmiy mahalla fuqarolar yigʻini, Al-Xorazmiy koʻchasi, 66B",
    landmark: "Garaj burger qarshisida joylashgan, Mediapark binosi",
    hours: "09:00 – 18:00",
    mapEmbedUrl:
      "https://yandex.com/map-widget/v1/?ll=60.632064%2C41.561896&mode=search&oid=101159162175&ol=biz&z=16.71",
  },
];

// Bitiruvchilarimiz ish joylari — najottalim.uz saytidagi "Bitiruvchilarimiz
// ish joylari" boʻlimidan tasdiqlangan haqiqiy kompaniyalar roʻyxati (2026-07-08).
// Logotiplar: public/brands/ — asl saytdan yuklab olingan.
export interface GraduateWorkplace {
  name: string;
  logo: string;
}

export const graduateWorkplaces: GraduateWorkplace[] = [
  { name: "Baik", logo: "/brands/Baik.png" },
  { name: "Davlat soliq xizmati", logo: "/brands/Davalt-Soliq-xizmati.png" },
  { name: "605 Agency", logo: "/brands/605agency.png" },
  { name: "Abutech", logo: "/brands/abutech.png" },
  { name: "Humo", logo: "/brands/Humo.png" },
  { name: "CIC", logo: "/brands/CIC.png" },
  { name: "Asaxiy", logo: "/brands/asaxiy.png" },
  { name: "Hamkorbank", logo: "/brands/Hamkorbank.png" },
  { name: "BILLZ", logo: "/brands/BILLZ.png" },
  { name: "Dreysys", logo: "/brands/dreysys.png" },
  { name: "Fido Biznes", logo: "/brands/Fido-biznes.png" },
  { name: "Azon", logo: "/brands/azon.png" },
  { name: "Davr Bank", logo: "/brands/DAVR-BANK.png" },
  { name: "Dizpro", logo: "/brands/dizpro.png" },
  { name: "Beelab", logo: "/brands/beelab.png" },
  { name: "Exadel", logo: "/brands/exadel.png" },
  { name: "Asakabank", logo: "/brands/asakabank.png" },
  { name: "Agrobank", logo: "/brands/Agrobank.png" },
  { name: "Eurosoft", logo: "/brands/Eurosoft.png" },
  { name: "FPI", logo: "/brands/fpi.png" },
  { name: "Eriell", logo: "/brands/Eriell.png" },
  { name: "MyTaxi", logo: "/brands/my-taxi.png" },
  { name: "Ishonch", logo: "/brands/ishonch.png" },
  { name: "MacBro", logo: "/brands/MacBro.png" },
  { name: "IIV", logo: "/brands/IIV.png" },
  { name: "Merit", logo: "/brands/merit.png" },
  { name: "Mohir Dev", logo: "/brands/mohirdev.png" },
  { name: "MFaktor", logo: "/brands/mfaktor.png" },
  { name: "Mars", logo: "/brands/Mars.png" },
  { name: "Jafton", logo: "/brands/jafton.png" },
  { name: "Let's Animate", logo: "/brands/lets-animate.png" },
  { name: "Iman", logo: "/brands/iman.png" },
  { name: "Islom.uz", logo: "/brands/islom-uz.png" },
  { name: "iTechArt", logo: "/brands/itechArt.png" },
  { name: "Paynet", logo: "/brands/Paynet.png" },
  { name: "Mediapark", logo: "/brands/Mediapark.png" },
  { name: "Mehrigiyo", logo: "/brands/Mehrigiyo.png" },
  { name: "OKS", logo: "/brands/OKS.png" },
  { name: "Novalab", logo: "/brands/novalab.png" },
  { name: "Med Pharm Plus", logo: "/brands/MED-PHARM-PLUS.png" },
  { name: "Korzinka", logo: "/brands/Korzinka.png" },
  { name: "TL", logo: "/brands/TL.png" },
  { name: "UIC", logo: "/brands/uic.png" },
  { name: "Uzum", logo: "/brands/UZUM.png" },
  { name: "PDP", logo: "/brands/pdp.png" },
  { name: "Smart Soft Development", logo: "/brands/Smart-Soft-Development.png" },
  { name: "Uzinfocom", logo: "/brands/Uzinfocom.png" },
  { name: "Uzcard", logo: "/brands/Uzcard.png" },
  { name: "Trast Bank", logo: "/brands/TrastBank.png" },
  { name: "SAG", logo: "/brands/SAG.png" },
  { name: "Payme", logo: "/brands/PayMe.png" },
  { name: "Registon LC", logo: "/brands/registan-LC.png" },
  { name: "SRV", logo: "/brands/srv.png" },
  { name: "Udevs", logo: "/brands/udevs.png" },
  { name: "Prodox", logo: "/brands/prodox.png" },
  { name: "Perfect Media", logo: "/brands/perfect-media.png" },
  { name: "Unicon Soft", logo: "/brands/unicon-soft.png" },
  { name: "Tenge Bank", logo: "/brands/tenge-bank.png" },
  { name: "Yoshlar ishlari agentligi", logo: "/brands/yoshlar-ishlari.png" },
  { name: "Universalbank", logo: "/brands/Universalbank.png" },
  { name: "Xon Saroy", logo: "/brands/xon-saroy.png" },
  { name: "Riada", logo: "/brands/riada.png" },
  { name: "Turkiston", logo: "/brands/Turkistan.png" },
  { name: "Qurilish vazirligi", logo: "/brands/Qurilish-vazirligi.png" },
];

export const advantages: { icon: string; title: string; text: string }[] = [
  {
    icon: "award",
    title: "IT Learning Leader — 2024",
    text: "2024-yilda Oʻzbekistondagi eng yaxshi taʼlim muassasasi nominatsiyasi gʻolibi.",
  },
  {
    icon: "briefcase",
    title: "Ishga joylashtirish",
    text: "Markazimiz bitiruvchilarni ish bilan taʼminlash uchun \"TechJobs\" kompaniyasiga asos solgan — hozirda 2000+ oʻquvchimiz shu orqali ishga joylashgan.",
  },
  {
    icon: "users",
    title: "Kuchli mentorlar",
    text: "Malakali mutaxassislardan kuchli bilimlar oling.",
  },
  {
    icon: "building",
    title: "24/7 kovorking",
    text: "Ijobiy muhitdagi kovorking zonasi, wifi va netvorking imkoniyatlari.",
  },
  {
    icon: "discount",
    title: "Chegirmalar",
    text: "Qizlar uchun 10%, ingliz tili C1+ sertifikat egalariga 10% chegirma.",
  },
  {
    icon: "rocket",
    title: "StartUP inkubatsiyasi",
    text: "Gʻoya egalari uchun Najot Taʼlim inkubatsion loyihasi orqali startapingizni rivojlantiring.",
  },
  {
    icon: "compass",
    title: "Edfix platformasi",
    text: "Edfix platformasidan HR va kompyuter savodxonligi darslarini bepul oʻrganing.",
  },
  {
    icon: "gift",
    title: "Mutolaa premium",
    text: "Mutolaa mobil ilovasidan premium obunani bepul qoʻlga kiriting.",
  },
  {
    icon: "crown",
    title: "Najot Taʼlim mobil ilovasi",
    text: "Shaxsiy ilova orqali darslar jadvali va yutuqlaringizni doim nazorat qiling.",
  },
];

export const extras: { icon: string; title: string; text: string }[] = [
  {
    icon: "coffee",
    title: "24/7 kovorking zonasi",
    text: "Ijobiy muhitdagi ish maydoni va bepul wifi — istalgan vaqtda oʻqing.",
  },
  {
    icon: "clipboard",
    title: "Haftalik master-klasslar",
    text: "Har hafta oʻz sohasi professionallaridan ochiq darslar.",
  },
  {
    icon: "gamepad",
    title: "Geymifikatsiya tizimi",
    text: "Sovgʻali ragʻbatlantirish tizimi — oʻqish yanada qiziqarli.",
  },
  {
    icon: "target",
    title: "Musobaqa va quizlar",
    text: "Turli xil musobaqalar, ochiq darslar va zakovat tadbirlari.",
  },
  {
    icon: "gift",
    title: "5 mln soʻm mukofot",
    text: "Eksportyor kompaniyaga ishga kirganlar uchun qoʻshimcha mukofot.",
  },
  {
    icon: "award",
    title: "Sertifikat + HR tayyorlov",
    text: "Kursdan soʻng sertifikat va \"HR suhbatlariga tayyorlov\" kursi.",
  },
];

// Bir nechta kursda takrorlanadigan umumiy savollar
export const commonFaq = [
  {
    q: "Najot Taʼlimda qanday kurslar bor?",
    a: "Najot Taʼlimda Dasturlash, Dizayn va Marketing yoʻnalishida intensiv (chuqurlashtirilgan) va odatiy kurslar mavjud.",
  },
  {
    q: "Til kurslari bormi?",
    a: "Bizda til kurslari mavjud emas. Markazimizda dasturlash, grafik dizayn va marketing yoʻnalishlari boʻyicha taʼlim beriladi.",
  },
  {
    q: "Najot Taʼlim ish bilan taʼminlaydimi?",
    a: "Kurslarni muvaffaqiyatli bitirgan oʻquvchilarga maʼlum shartlar asosida ish taklifi beriladi. Har oy bitiruvchilarning ishga kirish statistikasi ijtimoiy tarmoqlarda yoritib boriladi.",
  },
  {
    q: "Yosh chegarasi qanday?",
    a: "Markazimizda 16 yoshdan 35 yoshgacha yosh chegarasi mavjud. 14–16 yosh yoki 35 yoshdan yuqori oʻquvchilar suhbat asosida oʻqishlari mumkin.",
  },
  {
    q: "Kimlarga grant ajratiladi?",
    a: "Yoshlar ishlari agentligining \"Kelajak kasblari\" granti asosida oʻqishingiz mumkin. Ariza tasdiqlansa, 6 oygacha 1 mln 300 minggacha kurs toʻlovi qoplab beriladi.",
  },
  {
    q: "Najot Taʼlim qayerda joylashgan?",
    a: "Toshkent shahrida (Xadra, Chilonzor, Chimboy) hamda Fargʻona, Samarqand va Xorazm viloyatlarida filiallar mavjud. Call-markaz: 78 888 98 88.",
  },
];
