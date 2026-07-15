// Barcha kurslar — Website reja.pdf asosida
// Narxlar soʻmda, Toshkent filiali uchun (viloyat narxi boʻlsa qavsda izohda)

import type { IconName } from "@/components/Icon";

export type Category = "Dasturlash" | "Dizayn" | "Marketing";

export interface RegionalPrice {
  region: string; // "Toshkent shahri" | "Viloyatlar uchun"
  monthly?: string; // oyma-oy toʻlov
  split?: string; // ikkiga boʻlib toʻlov
  full: string; // bittada toʻlov
  highlight?: boolean; // "Mashhur" belgisi
}

export interface Price {
  monthly: string; // oylik toʻlov
  full?: string; // bittada toʻlov
  note?: string; // qoʻshimcha izoh (bonus, tejash)
  regions?: RegionalPrice[]; // Toshkent/viloyat boʻyicha toʻlov variantlari (Website reja.pdf)
}

export interface Course {
  slug: string;
  title: string;
  icon: IconName;
  image?: string; // kurs kartochkasi rasmi (public/courses/)
  category: Category;
  level?: string; // masalan "Foundation", "Intensiv"
  tagline: string; // hero katta matn
  subtitle: string; // hero kichik matn
  duration: string; // davomiylik
  featured?: boolean; // bosh sahifada ajratib koʻrsatish
  forWhom: { icon: IconName; title: string; text: string }[];
  learn: { title: string; items: string[] }[];
  skills?: string[];
  salary?: { min: string; avg: string; max: string };
  price: Price;
  laptop?: { cpu: string; ram: string; storage: string; os?: string };
  extraFaq?: { q: string; a: string }[];
}

// Koʻp kurslar uchun umumiy minimum noutbuk talabi (Website reja.pdf)
const laptopBasic = {
  cpu: "Intel Core i3 (12-avlod)",
  ram: "4 GB",
  storage: "SSD 128 GB yoki HDD 512 GB",
};

export const courses: Course[] = [
  {
    slug: "dasturlash-foundation",
    image: "/courses/dasturlash-foundation.jpg",
    title: "Dasturlash Foundation",
    icon: "code",
    category: "Dasturlash",
    level: "Boshlangʻich",
    tagline: "Boshlangʻich dasturlashni Najot Taʼlimda oʻrganing",
    subtitle:
      "Dasturlash sohasiga mustahkam poydevor: C, Python, algoritmlar va mantiqiy fikrlash.",
    duration: "4 oy · haftada 3 kun · 4 soat",
    featured: true,
    forWhom: [
      {
        icon: "rocket",
        title: "Dasturlash sohasiga endi kirib kelayotganlar",
        text: "Noldan mustahkam poydevor bilan boshlab, ishonchli birinchi qadamni qoʻying.",
      },
      {
        icon: "compass",
        title: "Qaysi AyTi yoʻnalishini tanlashni bilmaganlar",
        text: "Backend, Frontend yoki AI — qaysi yoʻnalish sizga mosligini amaliyotda aniqlab oling.",
      },
      {
        icon: "gem",
        title: "Kuchli fundamental bilim olishni istaganlar",
        text: "Algoritmlar va mantiqiy fikrlashda mustahkam bilim bazasini shakllantiring.",
      },
    ],
    learn: [
      {
        title: "Kompyuter savodxonligi",
        items: ["Operatsion tizimlar bilan ishlash", "Raqamli vositalardan foydalanish"],
      },
      {
        title: "C va Python",
        items: ["Dasturlashning asosiy tushunchalari", "Amaliy dasturlar yaratish"],
      },
      {
        title: "Dasturlash mantigʻi va strukturasi",
        items: ["Kodlarning tuzilishi", "Ishlash tamoyillari"],
      },
      {
        title: "Algoritmlar va mantiqiy fikrlash",
        items: ["Muammolarni tahlil qilish", "Yechim topish"],
      },
      {
        title: "Kelgusi yoʻnalishlar uchun poydevor",
        items: ["Backend yoʻnalishi uchun tayyorgarlik", "Frontend yoʻnalishi uchun tayyorgarlik", "AI yoʻnalishi uchun tayyorgarlik"],
      },
    ],
    skills: [
      "Tanlangan yoʻnalishdagi dasturlash tilida va uning asosiy freymvorklari bilan ishlash",
      "MVC (Model-View-Controller) arxitekturasi asosida dasturlar yaratish",
      "Design Patterns tamoyillarini tushunib, kod yozishda samarali qoʻllash",
      "API va RESTful servislar bilan ishlash, maʼlumot almashish va tashqi servislarni integratsiya qilish",
      "Texnik topshiriq asosida mustaqil ravishda sodda va oʻrta murakkablikdagi loyihalarni ishlab chiqish",
      "Real loyihalarda qoʻllaniladigan dasturlash tamoyillari va professional yondashuvlarni amaliyotda qoʻllash",
    ],
    price: {
      monthly: "1 800 000 soʻm",
      full: "6 400 000 soʻm",
      note: "Bittada toʻlovda 800 ming tejaysiz · viloyat uchun 1 400 000 soʻm/oy",
      regions: [
        {
          region: "Toshkent shahri",
          monthly: "1 800 000 soʻm",
          full: "6 400 000 soʻm (800 ming tejaysiz)",
          highlight: true,
        },
        {
          region: "Viloyatlar uchun",
          monthly: "1 400 000 soʻm",
          full: "5 000 000 soʻm (600 ming tejaysiz)",
        },
      ],
    },
    laptop: laptopBasic,
  },
  {
    slug: "full-stack",
    image: "/courses/full-stack.jpg",
    title: "Full-stack Dasturlash",
    icon: "rocket",
    category: "Dasturlash",
    level: "Intensiv",
    tagline: "Full-stack dasturlashni mutaxassislardan oʻrganing",
    subtitle: "Qisqa muddatda kasb oʻrganib, daromadga chiqing! Frontend + Backend + AI.",
    duration: "10 oy · haftada 3 kun · 2 soat",
    featured: true,
    forWhom: [
      {
        icon: "rocket",
        title: "Zamonaviy va talab yuqori kasb egasi boʻlishni istaganlar",
        text: "Bugungi bozorda eng talabgir kasblardan biri — Full-stack dasturchilikni egallang.",
      },
      {
        icon: "compass",
        title: "Oʻz kasbini oʻzgartirmoqchi boʻlganlar",
        text: "Hozirgi sohangizda kelajagingizni koʻrmasangiz — qaytadan yangi yoʻnalishda boshlang.",
      },
      {
        icon: "bulb",
        title: "Startup yaratishni istaganlar",
        text: "Frontend, backend va AI koʻnikmalari bilan oʻz gʻoyangizni mahsulotga aylantiring.",
      },
    ],
    learn: [
      {
        title: "1-boʻlim. Dasturlash asoslari",
        items: ["HTML", "CSS", "JavaScript (ES6+)", "OOP", "Async", "Git"],
      },
      {
        title: "2-boʻlim. JavaScript Pro + TypeScript",
        items: ["React komponentlar", "State", "Props", "Hooks"],
      },
      {
        title: "3-boʻlim. Frontend — React",
        items: ["State management", "Router", "API integratsiya", "Node.js", "Express"],
      },
      {
        title: "4-boʻlim. Backend, xavfsizlik va AI",
        items: ["REST API", "Maʼlumotlar bazasi", "Autentifikatsiya", "OpenAI integratsiya"],
      },
      {
        title: "5-boʻlim. Professional koʻnikmalar",
        items: ["Kod sifati", "Portfolio", "Texnik intervyularga tayyorgarlik"],
      },
      {
        title: "6-boʻlim. Yakuniy loyiha",
        items: ["Toʻliq Full-Stack ilova", "Real domenga joylashtirish"],
      },
    ],
    skills: [
      "Zamonaviy veb-saytlar yaratish (HTML, CSS, JS)",
      "React bilan interaktiv interfeyslar",
      "Node.js va maʼlumotlar bazasi bilan backend",
      "Tashqi servislar va API integratsiyasi",
      "Kiberxavfsizlik asoslari va AI vositalari",
      "Toʻliq Full-Stack loyihalarni deploy qilish",
      "Professional portfolio va freelance",
    ],
    salary: { min: "$400", avg: "$700", max: "$1300" },
    price: {
      monthly: "1 600 000 soʻm",
      full: "13 000 000 soʻm",
      note: "Bittada toʻlovda 3 mln soʻm tejaysiz · 2 mln soʻmlik bonuslar",
    },
    laptop: laptopBasic,
  },
  {
    slug: "kiberxavfsizlik",
    image: "/courses/kiberxavfsizlik.jpg",
    title: "Kiberxavfsizlik",
    icon: "lock",
    category: "Dasturlash",
    level: "Intensiv",
    tagline: "Kiberxavfsizlikni mutaxassislardan oʻrganing",
    subtitle: "Pentesting, Linux, tarmoq xavfsizligi va etik xakerlik — amaliyot asosida.",
    duration: "8 oy · haftada 3+3 kun · 3 soat",
    featured: true,
    forWhom: [
      {
        icon: "cpu",
        title: "AyTi va texnologiyaga qiziqadiganlar",
        text: "Zamonaviy texnologiyalar va tizimlar dunyosiga chuqur kirib boring.",
      },
      {
        icon: "lock",
        title: "Hakerlar faoliyatiga qiziqqanlar (etik, qonuniy usulda)",
        text: "Etik xakerlik va pentesting koʻnikmalarini qonuniy, amaliy tarzda oʻrganing.",
      },
      {
        icon: "award",
        title: "CS/AyTi yoʻnalishida tahsil olayotgan talabalar",
        text: "Universitet bilimingizni real loyihalar va sertifikat bilan mustahkamlang.",
      },
      {
        icon: "code",
        title: "Junior dasturchilar va AyTi oʻqituvchilari",
        text: "Mavjud dasturlash bilimingizga kiberxavfsizlik yoʻnalishini qoʻshib, qadringizni oshiring.",
      },
      {
        icon: "compass",
        title: "Kasbini oʻzgartirmoqchi boʻlganlar",
        text: "Talab yuqori va istiqbolli kiberxavfsizlik sohasida yangi kasb egallang.",
      },
    ],
    learn: [
      {
        title: "1-modul. Asoslar va qonunchilik",
        items: ["CIA triadasi", "Etik xakerlik", "Kali Linux", "VirtualBox"],
      },
      {
        title: "2-modul. Linux OS",
        items: ["Bash scriptlar", "SSH", "UFW", "Wireshark bilan tarmoq tahlili"],
      },
      {
        title: "3-modul. Windows OS",
        items: ["Active Directory", "Mimikatz", "Privilege escalation"],
      },
      {
        title: "4-modul. Tarmoq asoslari va hujumlar",
        items: ["OSI", "TCP/IP", "Nmap", "MITM", "DNS spoofing"],
      },
      {
        title: "5-modul. Pentesting vositalari",
        items: ["Metasploit", "Burp Suite", "DVWA", "TryHackMe"],
      },
      {
        title: "6-modul. Web Pentesting (OWASP Top 10)",
        items: ["XSS", "SQLi", "CSRF", "SSRF va boshqalar"],
      },
      {
        title: "7-modul. Ekspluatatsiya",
        items: ["Buffer overflow", "Reverse shell", "Credential harvesting"],
      },
      {
        title: "8-modul. Yakuniy loyiha va sertifikat",
        items: ["Real infratuzilmaga pentest", "Hisobot tayyorlash"],
      },
    ],
    skills: [
      "Junior Cybersecurity Engineer",
      "Threat Intelligence Analyst",
      "Cybersecurity GRC Assistant",
      "Freelance Pentester / Bug Bounty",
    ],
    price: {
      monthly: "2 400 000 soʻm",
      full: "16 000 000 soʻm",
      note: "Bittada toʻlovda 3 mln 200 ming tejaysiz",
    },
    extraFaq: [
      {
        q: "Bu kursni oʻrganish uchun dasturlashni mukammal bilish shartmi?",
        a: "Yoʻq, boshlangʻich C va Python bilimlari yetarli. Asosiy urgʻu tizimlar bilan ishlash va xavfsizlikni tushunishda.",
      },
      {
        q: "Kurs faqat offline formatdami?",
        a: "Ha, kurs 100% offline, Toshkent shahrida. Chunki laboratoriyalar va jamoaviy amaliyot muhim.",
      },
    ],
    laptop: {
      cpu: "Intel Core i5 (8-avlod)",
      ram: "8 GB",
      storage: "SSD 256 GB",
      os: "Windows 10/11 yoki Linux (64-bit, virtuallashtirish yoqilgan)",
    },
  },
  {
    slug: "machine-learning",
    image: "/courses/machine-learning.png",
    title: "Machine Learning",
    icon: "cpu",
    category: "Dasturlash",
    level: "Intensiv",
    tagline: "Machine Learning sohasini mutaxassislardan oʻrganing",
    subtitle: "Sunʼiy intellekt, neyron tarmoqlar va deep learning — noldan deploymentgacha.",
    duration: "8 oy · haftada 6 kun · 2 soat",
    forWhom: [
      {
        icon: "sparks",
        title: "Sunʼiy intellektga qiziquvchilar",
        text: "Neyron tarmoqlar va deep learning dunyosiga noldan chuqur kirib boring.",
      },
      {
        icon: "graph",
        title: "Bilimini keyingi bosqichga olib chiqmoqchi dasturchilar",
        text: "Dasturlash bilimingizni Machine Learning va real loyihalar bilan yangi bosqichga olib chiqing.",
      },
    ],
    learn: [
      {
        title: "1-modul. Ehtimollar, statistika va Python",
        items: ["NumPy", "Pandas", "Matplotlib", "Seaborn"],
      },
      {
        title: "2-modul. Matematika: algebra va calculus",
        items: ["Vektorlar", "Matritsalar", "Gradient", "Optimallashtirish"],
      },
      {
        title: "3-modul. Klassik ML algoritmlari",
        items: ["Linear/Logistic Regression", "SVM", "KNN", "Decision Tree"],
      },
      {
        title: "4-modul. Ensemble modellar",
        items: ["EDA", "Feature engineering", "XGBoost", "CatBoost"],
      },
      {
        title: "5-modul. Deep Learning: CNN va RNN",
        items: ["Neyron tarmoqlar", "LSTM", "Hyperparameter tuning"],
      },
      {
        title: "6-modul. Transformer modellar",
        items: ["Stacking", "Blending", "Pipelines", "Interpretability"],
      },
      {
        title: "7-modul. Reinforcement Learning",
        items: ["Transfer learning", "RLHF asoslari"],
      },
      {
        title: "8-modul. Yakuniy loyiha va deployment",
        items: ["End-to-end loyiha", "API", "Docker", "Cloud"],
      },
    ],
    price: {
      monthly: "2 400 000 soʻm",
      full: "16 000 000 soʻm",
      note: "Bittada toʻlovda 3 mln 200 ming tejaysiz",
    },
    laptop: {
      cpu: "Intel Core i5 (10-avlod) yoki undan yuqori",
      ram: "16 GB",
      storage: "SSD 256 GB",
      os: "Windows 11 yoki macOS (64-bit)",
    },
  },
  {
    slug: "data-analitika",
    image: "/courses/data-analitika.jpg",
    title: "Data Analitika",
    icon: "graph",
    category: "Dasturlash",
    level: "Intensiv",
    tagline: "Data analitikani mutaxassislardan oʻrganing",
    subtitle: "SQL, Excel, Python va Power BI bilan maʼlumotlardan qaror chiqarishni oʻrganing.",
    duration: "7 oy · haftada 3 kun · 2 soat",
    forWhom: [
      {
        icon: "briefcase",
        title: "Buxgalteriya, moliya sohasidagilar",
        text: "Moliyaviy hisobotlarni SQL va Power BI orqali chuqur tahlil qilishni oʻrganing.",
      },
      {
        icon: "graph",
        title: "Sonlar, grafiklar va statistika bilan ishlashni yoqtiradiganlar",
        text: "Raqamlar va statistikaga qiziqishingizni kasbiy koʻnikmaga aylantiring.",
      },
      {
        icon: "gem",
        title: "Talab va maoshi yuqori barqaror kasb egallamoqchi boʻlganlar",
        text: "Bozorda talab yuqori va barqaror daromadli kasb sohibiga aylaning.",
      },
      {
        icon: "target",
        title: "Biznes qarorlarini raqamlar asosida qabul qilmoqchi boʻlganlar",
        text: "Intuitsiya oʻrniga aniq maʼlumotlarga asoslangan qarorlar qabul qilishni oʻrganing.",
      },
      {
        icon: "rocket",
        title: "Marketing va sotuvda natijani data bilan oshirmoqchi boʻlganlar",
        text: "Marketing va sotuv natijalarini data tahlili orqali yangi darajaga olib chiqing.",
      },
    ],
    learn: [
      {
        title: "SQL",
        items: ["Maʼlumotlar bazasidan olish", "Filtrlash", "Tartiblash", "Tahlil qilish"],
      },
      {
        title: "Excel",
        items: ["Maʼlumotlarni tahlil qilish", "Tushunarli hisobotlarga aylantirish"],
      },
      {
        title: "Python",
        items: ["Pandas", "Matplotlib", "Seaborn bilan tozalash, tahlil, vizualizatsiya"],
      },
      {
        title: "Power BI",
        items: ["Interaktiv dashboard", "Biznes hisobotlar"],
      },
      {
        title: "Statistik tahlil",
        items: ["A/B testlar", "Regressiya", "Gipoteza tekshirish"],
      },
    ],
    salary: { min: "$500", avg: "$700", max: "$1200" },
    price: {
      monthly: "2 200 000 soʻm",
      full: "13 000 000 soʻm",
      note: "Bittada toʻlovda 2 mln 400 ming tejaysiz",
    },
    laptop: laptopBasic,
  },
  {
    slug: "start-junior",
    image: "/courses/start-junior.jpg",
    title: "Start Junior",
    icon: "compass",
    category: "Dasturlash",
    level: "15–17 yosh",
    tagline: "Farzandingiz kelajagi shu yerdan boshlanadi",
    subtitle: "Start Junior: 15–17 yoshlilar uchun AyTi kurs.",
    duration: "Boshlangʻich · amaliyotga yoʻnaltirilgan",
    forWhom: [
      {
        icon: "users",
        title: "Farzandini kelajakda AyTi mutaxassisi sifatida koʻrmoqchi ota-onalar",
        text: "Farzandingiz uchun zamonaviy AyTi kasbiga mustahkam poydevor yarating.",
      },
      {
        icon: "rocket",
        title: "AyTi va dasturlashga qiziqadigan yoshlar",
        text: "Dasturlash va texnologiyalarga qiziqishni amaliy loyihalar orqali rivojlantiring.",
      },
      {
        icon: "bulb",
        title: "Mantiqiy va kreativ fikrlashni rivojlantirmoqchi boʻlganlar",
        text: "Oʻyin va mini-loyihalar orqali mantiqiy hamda ijodiy fikrlashni kuchaytiring.",
      },
    ],
    learn: [
      {
        title: "Kompyuter savodxonligi",
        items: ["Google Docs", "Sheets", "Canva", "Ofis dasturlari"],
      },
      {
        title: "Mantiqiy va algoritmik fikrlash",
        items: ["Mantiqiy fikrlashni rivojlantirish", "Algoritmik yondashuv"],
      },
      {
        title: "HTML/CSS",
        items: ["Portfolio yaratish", "Shaxsiy web-sayt yaratish"],
      },
      {
        title: "JavaScript",
        items: ["Calculator kabi mini loyihalar", "To-do app kabi mini loyihalar"],
      },
      {
        title: "Python",
        items: ["Telegram bot yaratish"],
      },
      {
        title: "Jamoada ishlash",
        items: ["Loyihalarni taqdim qilish tajribasi"],
      },
    ],
    price: {
      monthly: "Maʼlumot uchun murojaat qiling",
      note: "Batafsil narx uchun call-markazga qoʻngʻiroq qiling: 78 888 98 88",
    },
    extraFaq: [
      {
        q: "Farzandim kompyuter va dasturlashni bilmasa ham qatnasha oladimi?",
        a: "Ha. Kurs boshlangʻich darajadagilar uchun tuzilgan, kompyuter savodxonligi va dasturlash asoslari noldan oʻrgatiladi.",
      },
    ],
  },
  {
    slug: "smm-pro",
    image: "/courses/smm-pro.jpg",
    title: "SMM Pro",
    icon: "megaphone",
    category: "Marketing",
    level: "Intensiv",
    tagline: "SMM sohasini mutaxassislardan oʻrganing",
    subtitle: "Qisqa muddatda kasb oʻrganib, daromadga chiqing!",
    duration: "4 oy · haftada 3 kun · 2 soat",
    forWhom: [
      {
        icon: "rocket",
        title: "Zamonaviy kasb egallamoqchi boʻlganlar",
        text: "SMM — eng soʻnggi va talabgir kasblardan biri, bugun boshlab mutaxassis boʻling.",
      },
      {
        icon: "compass",
        title: "Oʻz kasbini oʻzgartirishni istaganlar",
        text: "Hozirgi kasbingizda kelajagingizni koʻrmasangiz — bu sohada qaytadan boshlang.",
      },
      {
        icon: "time",
        title: "Qisqa vaqtda daromadga chiqmoqchi boʻlganlar",
        text: "Qisqa muddatda amaliy koʻnikma egallab, ilk mijozlar bilan ishlash darajasiga chiqing.",
      },
      {
        icon: "building",
        title: "Oʻz biznesini internet orqali rivojlantirmoqchi boʻlganlar",
        text: "Ijtimoiy tarmoqlar orqali biznesingizni rivojlantirib, sotuvni oshiring.",
      },
    ],
    learn: [
      {
        title: "1-boʻlim. Marketing va ijtimoiy tarmoqlarga kirish",
        items: [
          "Marketingga kirish: yoʻnalishlari, vazifalari, biznesdagi oʻrni",
          "SMM asoslari: maqsadlar va imkoniyatlar",
          "Hard skillar: Google Workspace, Canva, Taplink, MyUrls",
          "Ijtimoiy tarmoqlar: algoritmlar, formatlar, segmentlar",
          "Telegram, Instagram, TikTok, YouTube",
          "Raqobatchilar tahlili va maqsadli auditoriya",
          "SMM strategiya tuzish",
        ],
      },
      {
        title: "2-boʻlim. Kontent tayyorlash",
        items: [
          "Stories va Reels management",
          "Mobil syomka va mobil montaj",
          "Content creator: food foto, personaj foto",
          "Kamera oldida soʻzlash va notiqlik",
          "Kontent plan va nativ reklama",
          "Ilhom va gʻoya olish",
        ],
      },
      {
        title: "3-boʻlim. Reklama va boshqaruv",
        items: [
          "Bloger va influencerlar bilan ishlash",
          "PR, nativ reklama va targeting",
          "Soft skills va community management",
          "Loyiha boshqaruvi va koordinatorlik",
          "Shaxsiy brend va brending",
          "Ish topish va muvaffaqiyatli ishga kirish",
        ],
      },
    ],
    skills: [
      "Kichik bizneslar uchun SMM strategiya, kontent rejalar tuzish va realizatsiya qilish",
      "Bozor tadqiqotlarini amalga oshirish, raqobatchilar va isteʼmolchilarni ishlaydigan metodlar bilan tahlil qilish",
      "Smartfon orqali boshlangʻich darajadagi videokontentlar yasay olish, telefon orqali syomka va montaj qilish",
      "Imlo xatolarsiz va ishlaydigan usullar orqali sotuv maqolalarini yozish",
      "Oʻz jamoangizni toʻgʻri boshqarish va nazorat qilish",
      "Biznesni toʻliqligicha boshlangʻich tarzda ijtimoiy tarmoqlarini yuritib borish",
      "Marketing stategiyasini tuzish, analitika, media rejani shakllantirish, biznesni baholash va tahlil qila olish",
    ],
    salary: { min: "$250", avg: "$600", max: "$2000" },
    price: {
      monthly: "2 200 000 soʻm",
      full: "7 600 000 soʻm",
      note: "Bittada toʻlovda 1 200 ming tejaysiz · viloyat uchun 1 350 000 soʻm/oy",
      regions: [
        {
          region: "Toshkent shahri",
          monthly: "2 200 000 soʻm",
          split: "4 000 000 soʻm (800 ming tejaysiz)",
          full: "7 600 000 soʻm (1 200 ming tejaysiz)",
          highlight: true,
        },
        {
          region: "Viloyatlar uchun",
          monthly: "1 350 000 soʻm",
          split: "2 600 000 soʻm (200 ming tejaysiz)",
          full: "4 800 000 soʻm (600 ming tejaysiz)",
        },
      ],
    },
    laptop: laptopBasic,
    extraFaq: [
      {
        q: "SMM Pro bitiruvchilariga ish taklif qilinadimi?",
        a: "Ish taklif qilinmaydi, lekin ochiq maʼlumotlarga koʻra marketing yoʻnalishi bitiruvchilarining 95% qismi oʻz ish oʻrinlariga ega boʻlgan.",
      },
      {
        q: "Target darslari oʻrgatiladimi?",
        a: "Ha, ads manager, facebook business suite va instagram orqali reklama yoqish oʻrgatiladi.",
      },
    ],
  },
  {
    slug: "videografiya",
    image: "/courses/videografiya.png",
    title: "Videografiya",
    icon: "video",
    category: "Dizayn",
    tagline: "Videografiya sohasini mutaxassislardan oʻrganing",
    subtitle: "Qisqa muddatda kasb oʻrganib, daromadga chiqing!",
    duration: "6 oy · haftada 3 kun · 2 soat",
    forWhom: [
      {
        icon: "rocket",
        title: "Zamonaviy kasb egasi boʻlishni istaganlar",
        text: "Talab yuqori ijodiy kasb — videografiyani noldan mutaxassis darajasida egallang.",
      },
      {
        icon: "camera",
        title: "Mobilografiyadan professional videografiyaga oʻtmoqchilar",
        text: "Telefon kamerasidan professional kamera va montajga oʻting.",
      },
      {
        icon: "compass",
        title: "Oʻz kasbini oʻzgartirmoqchi boʻlganlar",
        text: "Ijodiy va istiqbolli yoʻnalishda yangidan boshlang.",
      },
      {
        icon: "video",
        title: "Biznes uchun kuchli kontent yaratmoqchi boʻlganlar",
        text: "Brendingiz uchun sifatli va taʼsirchan video kontent yaratishni oʻrganing.",
      },
    ],
    learn: [
      { title: "1-boʻlim. Premiere Pro va montaj asoslari", items: ["Premiere Pro", "Montaj asoslari"] },
      { title: "2-boʻlim. Montaj psixologiyasi va storytelling", items: ["Montaj psixologiyasi", "Storytelling"] },
      { title: "3-boʻlim. Professional syomka va kamera", items: ["Professional syomka", "Kamera bilan ishlash"] },
      { title: "4-boʻlim. Mustaqil amaliy tajriba", items: ["Mustaqil amaliy tajriba"] },
      { title: "5-boʻlim. After Effects — professional effektlar", items: ["After Effects", "Professional effektlar"] },
      { title: "6-boʻlim. Mijoz topish va ular bilan ishlash", items: ["Mijoz topish", "Mijozlar bilan ishlash"] },
    ],
    salary: { min: "$400", avg: "$700", max: "$1300" },
    price: {
      monthly: "2 200 000 soʻm",
      full: "11 400 000 soʻm",
      note: "Bittada toʻlovda 1 mln 800 ming tejaysiz",
    },
    laptop: {
      cpu: "Intel Core i5 (11-avlod)",
      ram: "8 GB",
      storage: "SSD 256 GB yoki HDD 512 GB",
      os: "Windows 11 (64-bit)",
    },
  },
  {
    slug: "mobilografiya",
    image: "/courses/mobilografiya.jpg",
    title: "Mobilografiya",
    icon: "camera",
    category: "Dizayn",
    tagline: "Mobilografiya sohasini mutaxassislardan oʻrganing",
    subtitle: "Telefon orqali professional kontent — 2 oyda kasb egallang.",
    duration: "2 oy · haftada 3 kun · 2 soat",
    forWhom: [
      {
        icon: "rocket",
        title: "Zamonaviy kasb oʻrganishni istaganlar",
        text: "Telefon yordamida professional kontent yaratish kasbini tez muddatda egallang.",
      },
      {
        icon: "image",
        title: "Ijtimoiy tarmoqlar uchun kontent yaratmoqchilar",
        text: "Instagram va boshqa tarmoqlar uchun sifatli vizual kontent tayyorlashni oʻrganing.",
      },
      {
        icon: "building",
        title: "Biznesi uchun kontent yaratmoqchi boʻlganlar",
        text: "Oʻz biznesingiz uchun professional video-kontentni mustaqil yarating.",
      },
      {
        icon: "camera",
        title: "Telefonda video olishga qiziquvchilar",
        text: "Smartfoningiz bilan professional darajadagi syomka va montaj qiling.",
      },
    ],
    learn: [
      { title: "Mobil videografiya asoslari", items: ["Telefon kamerasi", "Kadr", "Yorugʻlik"] },
      { title: "CapCut va VN montaj", items: ["CapCut", "VN montaj"] },
      { title: "Motion Ninja — 3D kamera treking va effektlar", items: ["3D kamera treking", "Effektlar"] },
      { title: "Motion grafika va keyframe", items: ["Motion grafika", "Keyframe"] },
      { title: "Canvada vizual dizayn", items: ["Canvada vizual dizayn"] },
      { title: "Hypic bilan vizualni yaxshilash", items: ["Hypic bilan vizualni yaxshilash"] },
    ],
    price: {
      monthly: "2 200 000 soʻm",
      full: "4 000 000 soʻm",
      note: "2 oylik taʼlim · 60% amaliyot · 6 ta katta loyiha",
    },
  },
  {
    slug: "sun-iy-intellekt-asoslari",
    image: "/courses/sun-iy-intellekt-asoslari.jpg",
    title: "Sunʼiy Intellekt Asoslari",
    icon: "sparks",
    category: "Dizayn",
    tagline: "Sunʼiy intellektni mutaxassislardan oʻrganing",
    subtitle: "16 ta darsda AI vositalarini oʻzlashtirib, samaradorlikni oshiring.",
    duration: "2 oy · haftada 2 kun · 2 soat",
    forWhom: [
      {
        icon: "bulb",
        title: "Oʻz kasbi bor, samaradorlikni oshirmoqchi boʻlganlar",
        text: "AI vositalari yordamida ish samaradorligingizni sezilarli darajada oshiring.",
      },
      {
        icon: "clipboard",
        title: "Hisobot va taqdimotlar bilan ishlaydiganlar",
        text: "Hisobot va taqdimotlarni AI yordamida tezroq va sifatli tayyorlashni oʻrganing.",
      },
      {
        icon: "image",
        title: "Kontent va vizual material yaratmoqchilar",
        text: "Midjourney va DALL·E kabi vositalar bilan vizual kontent yarating.",
      },
      {
        icon: "megaphone",
        title: "Tadbirkorlar, SMM va marketing vakillari",
        text: "AI vositalari orqali marketing va biznes jarayonlaringizni avtomatlashtiring.",
      },
    ],
    learn: [
      { title: "SI asoslari", items: ["Machine Learning", "Deep Learning", "Neyron tarmoqlar"] },
      { title: "Generativ SI", items: ["ChatGPT", "Midjourney", "DALL·E", "Jasper"] },
      { title: "Prompt Injinering", items: ["SIʼdan aniq natija olish uchun promptlar"] },
      { title: "No-code avtomatlashtirish", items: ["Zapier", "Make", "Notion AI"] },
      { title: "Kontent, vizual, audio va tahlil", items: ["Kontent tahlili", "Vizual tahlil", "Audio tahlil"] },
      { title: "Real loyiha", items: ["Oʻz kasbingizga mos avtomatlashtirish"] },
    ],
    price: {
      monthly: "Bittada: 2 500 000 soʻm",
      note: "Viloyat uchun 1 800 000 soʻm",
      regions: [
        { region: "Toshkent shahri", full: "2 500 000 soʻm", highlight: true },
        { region: "Viloyatlar uchun", full: "1 800 000 soʻm" },
      ],
    },
  },
  {
    slug: "ai-dizayn",
    image: "/courses/ai-dizayn.jpg",
    title: "AI Dizayn",
    icon: "penTool",
    category: "Dizayn",
    tagline: "AI Dizayn sohasini mutaxassislardan oʻrganing",
    subtitle: "Sunʼiy intellekt yordamida professional dizaynlar yarating.",
    duration: "4 oy · haftada 3 kun · 2 soat",
    forWhom: [
      {
        icon: "rocket",
        title: "Zamonaviy kasb oʻrganishni istaganlar",
        text: "Sunʼiy intellekt yordamida zamonaviy dizayn kasbini tez muddatda egallang.",
      },
      {
        icon: "gem",
        title: "Dizayn koʻnikmalarini yuqori darajaga olib chiqmoqchilar",
        text: "Mavjud dizayn bilimingizni AI vositalari bilan yangi darajaga olib chiqing.",
      },
      {
        icon: "image",
        title: "Ijtimoiy tarmoqlar uchun kontent yaratmoqchilar",
        text: "Postlar, storylar va bannerlarni tez va sifatli tarzda yaratishni oʻrganing.",
      },
      {
        icon: "gift",
        title: "Qoʻshimcha daromad topishni istaganlar",
        text: "Dizayn koʻnikmalari orqali freelance tarzda qoʻshimcha daromad toping.",
      },
    ],
    learn: [
      { title: "AI Dizayn asoslari", items: ["Ranglar", "Shriftlar", "Kompozitsiya", "Kreativ fikrlash"] },
      { title: "AI vositalari bilan dizayn", items: ["ChatGPT", "Midjourney", "Adobe Firefly", "Canva AI"] },
      { title: "Ijtimoiy tarmoqlar uchun dizayn", items: ["Postlar", "Storylar", "Bannerlar"] },
      { title: "Brending va vizual identitet", items: ["Logo", "Moodboard", "Korporativ uslub"] },
      { title: "Portfolio va mijozlar bilan ishlash", items: ["Portfolio tayyorlash", "Mijozlar bilan ishlash"] },
    ],
    price: {
      monthly: "1 800 000 soʻm",
      full: "6 200 000 soʻm",
      note: "Bittada toʻlovda 1 mln soʻm tejaysiz",
    },
  },
];

export const categories: Category[] = ["Dasturlash", "Dizayn", "Marketing"];

export function getCourse(slug: string): Course | undefined {
  return courses.find((c) => c.slug === slug);
}
