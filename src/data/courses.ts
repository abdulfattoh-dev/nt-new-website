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
        title: "Zamonaviy va talab yuqori boʻlgan kasb egasi boʻlishni istaganlar",
        text: "Doimiy talabga ega, yuqori daromadli va istiqbolli sohada faoliyat yuritishni xohlaganlar uchun.",
      },
      {
        icon: "compass",
        title: "Oʻz kasbini oʻzgartirishni istaganlar",
        text: "Agar oʻz kasbingizdan qoniqmayotgan yoki hozirgi kasbingizda oʻz kelajagingizni koʻrolmayotgan boʻlsangiz.",
      },
      {
        icon: "bulb",
        title: "Startup yaratishni istaganlar",
        text: "Oʻz gʻoyalarini raqamli mahsulotga aylantirib, muvaffaqiyatli startup qurishni istaganlar uchun.",
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
    salary: { min: "$300", avg: "$800", max: "$2000+" },
    price: {
      monthly: "1 600 000 soʻm",
      full: "13 000 000 soʻm",
      note: "Bittada toʻlovda 3 mln soʻm tejaysiz · 2 mln soʻmlik bonuslar · viloyat uchun 1 000 000 soʻm/oy",
      regions: [
        {
          region: "Toshkent shahri",
          monthly: "1 600 000 soʻm",
          split: "7 250 000 soʻm (1 500 000 tejaysiz)",
          full: "13 000 000 soʻm (3 000 000 tejaysiz)",
          highlight: true,
        },
        {
          region: "Viloyatlar uchun",
          monthly: "1 000 000 soʻm",
          split: "4 500 000 soʻm (1 000 000 tejaysiz)",
          full: "8 000 000 soʻm (2 000 000 tejaysiz)",
        },
      ],
    },
    laptop: {
      cpu: "Intel Core i5 (12-avlod)",
      ram: "8 GB",
      storage: "SSD 256 GB yoki HDD 512 GB",
    },
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
        text: "Internet xavfsizligi, maʼlumotlarni himoya qilish va zamonaviy kiberxavfsizlik texnologiyalarini oʻrganmoqchi boʻlganlar uchun.",
      },
      {
        icon: "lock",
        title: "Yoshligidan hakerlar faoliyatiga qiziqqanlar",
        text: "Hakerlar aslida qanday ishlashi, tizimlardagi zaifliklar qanday aniqlanishi va ular qanday himoyalanishini professional va qonuniy usulda oʻrganishni istaganlar uchun.",
      },
      {
        icon: "award",
        title: "IT yoʻnalishida tahsil olayotgan talabalar",
        text: "CS, Software Engineering yoki IT yoʻnalishida tahsil olayotgan boʻlsangiz, bu kurs sizni nazariyadan amaliyotga olib chiqadi.",
      },
      {
        icon: "code",
        title: "Junior dasturchilar",
        text: "Python, Git va dasturlash asoslarini biladigan, xavfsiz dastur yaratish, OWASP, log tahlili va zamonaviy xavfsizlik vositalarini chuqur oʻrganasiz.",
      },
      {
        icon: "userCheck",
        title: "IT oʻqituvchilari",
        text: "OS yoki tarmoq asoslarini oʻrgatadigan tajribali oʻqituvchi boʻlsangiz, bu kurs kiberxavfsizlikni amaliy yondashuvda oʻrgatish imkoniyatini beradi.",
      },
      {
        icon: "compass",
        title: "Kasbini oʻzgartirmoqchi boʻlganlar",
        text: "Xalqaro bozorda talab yuqori boʻlgan kiberxavfsizlik yoʻnalishida professional karyera qurishni istasangiz, bu kurs sizga mos keladi.",
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
    salary: { min: "$400", avg: "$800", max: "$2000+" },
    price: {
      monthly: "2 400 000 soʻm",
      full: "16 000 000 soʻm",
      note: "Bittada toʻlovda 3 mln 200 ming tejaysiz · viloyat uchun 1 800 000 soʻm/oy",
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
      cpu: "Intel Core i5 (12-avlod)",
      ram: "8 GB",
      storage: "SSD 256 GB yoki HDD 512 GB",
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
        text: "SI va zamonaviy texnologiyalarni oʻrganishni istagan, Machine Learning, Deep Learning kabi texnologiyalar orqali aqlli tizimlar yaratishga qiziqadiganlar uchun.",
      },
      {
        icon: "graph",
        title: "Dasturchilar",
        text: "Dasturlash boʻyicha mavjud bilimlarini keyingi bosqichga olib chiqib, Machine Learning modellar yaratish va ularni real loyihalarda qoʻllashni oʻrganmoqchi boʻlganlar uchun.",
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
    salary: { min: "$500", avg: "$900", max: "$2500" },
    price: {
      monthly: "2 400 000 soʻm",
      full: "16 000 000 soʻm",
      note: "Bittada toʻlovda 3 mln 200 ming tejaysiz",
    },
    laptop: {
      cpu: "Intel Core i5 (12-avlod)",
      ram: "8 GB",
      storage: "SSD 256 GB yoki HDD 512 GB",
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
        text: "Hisob-kitobga asoslangan sohalarda faoliyat yuritayotgan, tahliliy koʻnikmalarini rivojlantirib, karyerasini yangi bosqichga olib chiqishni istaganlar uchun.",
      },
      {
        icon: "graph",
        title: "Sonlar, grafiklar va statistika bilan ishlashni yoqtiradiganlar",
        text: "Sonlar, grafiklar, jadval va statistik maʼlumotlar bilan ishlashga qiziqadiganlar.",
      },
      {
        icon: "gem",
        title: "Talab va maoshi yuqori barqaror kasb egallamoqchi boʻlganlar",
        text: "Kelajakda talab va maoshi yuqori boʻlgan, barqaror kasb egasi boʻlishni xohlaganlar.",
      },
      {
        icon: "compass",
        title: "Muammoni chuqur tahlil qilishga qiziquvchilar",
        text: "Murakkab narsalarni tahlil qilishga va muammoni chuqur tushunib, uning sababini va yechimini topishga qiziqadiganlar.",
      },
      {
        icon: "userCheck",
        title: "Mantiq va faktlarga tayanib qaror qabul qiluvchilar",
        text: "Aniq fanlarga, mantiq va faktlarga tayangan holda qaror qabul qilishga qiziqadiganlar.",
      },
      {
        icon: "target",
        title: "Biznes qarorlarini raqamlar asosida qabul qilmoqchi boʻlganlar",
        text: "Biznes qarorlarini aniq raqamlar asosida amalga oshirishni oʻrganmoqchi boʻlganlar uchun.",
      },
      {
        icon: "rocket",
        title: "Marketing va sotuvda natijani data bilan oshirmoqchi boʻlganlar",
        text: "Marketing, sotuv yoki biznesda ishlayotgan va natijasini real data bilan oshirmoqchi boʻlganlar uchun.",
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
    salary: { min: "$400", avg: "$700", max: "$2000+" },
    price: {
      monthly: "2 200 000 soʻm",
      full: "13 000 000 soʻm",
      note: "Bittada toʻlovda 2 mln 400 ming tejaysiz · viloyat uchun 1 500 000 soʻm/oy",
      regions: [
        {
          region: "Toshkent shahri",
          monthly: "2 200 000 soʻm",
          split: "7 200 000 soʻm (1 000 000 tejaysiz)",
          full: "13 000 000 soʻm (2 400 000 tejaysiz)",
          highlight: true,
        },
        {
          region: "Viloyatlar uchun",
          monthly: "1 500 000 soʻm",
          split: "4 900 000 soʻm (700 000 tejaysiz)",
          full: "9 100 000 soʻm (1 400 000 tejaysiz)",
        },
      ],
    },
    laptop: {
      cpu: "Intel Core i5 (12-avlod)",
      ram: "8 GB",
      storage: "SSD 256 GB yoki HDD 512 GB",
    },
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
    duration: "12 oy · haftada 3 kun · 1,5 soat",
    forWhom: [
      {
        icon: "users",
        title: "Farzandini kelajakda mutaxassis sifatida koʻrmoqchi ota-onalar",
        text: "Farzandingizni kelajakda kompyuter va texnologiyalarni yaxshi tushunadigan mutaxassis sifatida koʻrishni xohlaysiz.",
      },
      {
        icon: "rocket",
        title: "AyTi va dasturlashga qiziqadigan yoshlar",
        text: "Farzandingizning AyTi va dasturlash sohasiga qiziqishi va bu yoʻnalishda rivojlanishini istaysiz.",
      },
      {
        icon: "compass",
        title: "Kompyuterdan foydali maqsadda foydalanishni istovchilar",
        text: "Farzandingizning kompyuterdan faqat oʻyin uchun emas, balki taʼlim va rivojlanish vositasi sifatida foydalanishini xohlaysiz.",
      },
      {
        icon: "bulb",
        title: "Mantiqiy va kreativ fikrlashni rivojlantirmoqchi boʻlganlar",
        text: "Zamonaviy kasblar uchun zarur boʻlgan mantiqiy va kreativ fikrlash koʻnikmalarini rivojlantirmoqchisiz.",
      },
      {
        icon: "gem",
        title: "Kelajak kasbiga poydevor qoʻymoqchi boʻlganlar",
        text: "Farzandingizning kelajak kasbiga bugundan poydevor qoʻyishni istaysiz.",
      },
      {
        icon: "time",
        title: "Vaqtini foydali oʻtkazishini istovchilar",
        text: "Farzandingizning vaqtini foydali va mazmunli oʻtkazishini xohlaysiz.",
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
      monthly: "1 200 000 soʻm",
      full: "10 800 000 soʻm",
      note: "Ikkiga boʻlib toʻlovda 1 800 000 soʻm, bittada toʻlovda 3 600 000 soʻm tejaysiz · viloyat uchun 800 000 soʻm/oy",
      regions: [
        {
          region: "Toshkent shahri",
          monthly: "1 200 000 soʻm",
          split: "6 300 000 soʻm (1 800 000 tejaysiz)",
          full: "10 800 000 soʻm (3 600 000 tejaysiz)",
          highlight: true,
        },
        {
          region: "Viloyatlar uchun",
          monthly: "800 000 soʻm",
          split: "4 200 000 soʻm (1 200 000 tejaysiz)",
          full: "7 200 000 soʻm (2 400 000 tejaysiz)",
        },
      ],
    },
    extraFaq: [
      {
        q: "Farzandim kompyuter va dasturlashni bilmasa ham qatnasha oladimi?",
        a: "Ha. Kurs boshlangʻich darajadagilar uchun tuzilgan, kompyuter savodxonligi va dasturlash asoslari noldan oʻrgatiladi.",
      },
      {
        q: "Kurs yakunida farzandim qanday natijalarga erisha oladi?",
        a: "Oʻquvchilar kompyuter savodxonligi, algoritmik fikrlash, muammo yechish va dasturlash asoslarini egallab, keyingi professional AyTi yoʻnalishlarini oʻrganish uchun mustahkam poydevorga ega boʻladilar.",
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
        text: "Ushbu soha eng soʻnggi zamonaviy va talabgir kasblardan hisoblanadi.",
      },
      {
        icon: "compass",
        title: "Oʻz kasbini oʻzgartirishni istaganlar",
        text: "Agar oʻz kasbingizdan qoniqmayotgan yoki hozirgi kasbingizda oʻz kelajagingizni koʻrolmayotgan boʻlsangiz, ushbu sohada karyera boshlashingiz mumkin.",
      },
      {
        icon: "time",
        title: "Qisqa vaqt ichida kasb egallab daromadga chiqishni istaganlar",
        text: "Kurs davomida SMM boʻyicha zarur nazariy va amaliy koʻnikmalarni egallab, qisqa vaqt ichida ilk loyiha va mijozlar bilan ishlash darajasiga chiqishingiz mumkin.",
      },
      {
        icon: "bulb",
        title: "Oʻz bilimlarini mustahkamlamoqchi boʻlganlar",
        text: "Agar siz SMM yoʻnalishini bilsangiz, kurs sizga zamonaviy strategiyalar va yangi vositalar orqali bilimingizni yanada oshirishga yordam beradi.",
      },
      {
        icon: "gift",
        title: "Qoʻshimcha daromad manbai boʻlishni istaganlar",
        text: "Kundalik hayotda oʻqish yoki ish faoliyatingizdan tashqari boʻsh vaqtingizni samarali sarflab, qoʻshimcha kasb egallab, daromad topishingiz mumkin.",
      },
      {
        icon: "building",
        title: "Oʻz biznesini internet orqali rivojlantirishni istaganlar",
        text: "Biznesni rivojlantirish uchun eng samarali vositalaridan biri bu ijtimoiy tarmoqlardir. SMMʼni oʻrganish orqali biznesingizni rivojlantirib sotuv darajasini oshirishingiz mumkin.",
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
    salary: { min: "$300", avg: "$600", max: "$1500" },
    price: {
      monthly: "2 200 000 soʻm",
      full: "7 600 000 soʻm",
      note: "Bittada toʻlovda 1 200 ming tejaysiz · viloyat uchun 1 500 000 soʻm/oy",
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
          monthly: "1 500 000 soʻm",
          split: "2 850 000 soʻm (300 ming tejaysiz)",
          full: "5 400 000 soʻm (600 ming tejaysiz)",
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
        title: "Zamonaviy kasb egasi boʻlishni istasaganlar",
        text: "Videografiya bugungi kunda yuqori talabga ega sohaga aylanmoqda. 6 oy davomida asosiy bilim va koʻnikmalarni egallab, ilk mijozlar bilan ishlash darajasiga chiqishingiz mumkin.",
      },
      {
        icon: "camera",
        title: "Mobilografiyadan professional videografiyaga oʻtishni istaganlar",
        text: "Mobilografiya bilan shugʻullanayotgan boʻlsangiz, ushbu kurs orqali professional kamera ishlari, montaj va yuqori darajadagi video ishlab chiqish koʻnikmalarini egallaysiz.",
      },
      {
        icon: "compass",
        title: "Oʻz kasbini oʻzgartirishni istaganlar",
        text: "Hozirgi kasbingizdan koʻra kelajagingizni boshqa sohada koʻrayotgan boʻlsangiz, videografiya siz uchun yangi imkoniyatlarni ochadi.",
      },
      {
        icon: "gem",
        title: "Oʻz bilimini yanada mustahkamlamoqchi boʻlganlar",
        text: "Videografiya asoslarini bilsangiz, kurs davomida yangi usullar, zamonaviy trendlar va professional yondashuvlarni oʻrganib, mahoratingizni yuqori darajaga olib chiqasiz.",
      },
      {
        icon: "gift",
        title: "Qoʻshimcha kasb orqali daromad manbai izlayotganlar",
        text: "Oʻqish yoki ish faoliyatidan tashqari boʻsh vaqtingizdan samarali foydalanib, videografiya orqali daromad qilishingiz mumkin.",
      },
      {
        icon: "video",
        title: "Biznes uchun kuchli kontent yaratishni istaganlar",
        text: "Biznes rivoji uchun kuchli omillardan biri — sifatli video kontent. Biznes va brendlar uchun professional videolar yaratishni oʻrganasiz.",
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
    salary: { min: "$400", avg: "$700", max: "$1500" },
    price: {
      monthly: "2 200 000 soʻm",
      full: "11 400 000 soʻm",
      note: "Bittada toʻlovda 1 mln 800 ming tejaysiz",
    },
    laptop: {
      cpu: "Intel Core i5 (12-avlod)",
      ram: "8 GB",
      storage: "SSD 256 GB yoki HDD 512 GB",
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
        text: "Mobilografiya hozirda eng talabgir yoʻnalishlardan biri boʻlib, oddiy telefon orqali ham professional kontent yaratish imkonini beradi.",
      },
      {
        icon: "image",
        title: "Ijtimoiy tarmoqlar uchun kontent yaratishni istaganlar",
        text: "Instagram, Tik-Tok va YouTube kabi ijtimoiy tarmoqlar uchun sifatli, kreativ videolar tayyorlashni oʻrganasiz.",
      },
      {
        icon: "building",
        title: "Biznesi uchun kontent yaratmoqchi boʻlganlar",
        text: "Biznes yoki shaxsiy sahifangiz rivoji uchun mahsulot yoki xizmatlaringizni professional tarzda tasvirga olishni oʻrganasiz.",
      },
      {
        icon: "gift",
        title: "Qoʻshimcha daromad topishni istaganlar",
        text: "Video olish va montaj xizmatlarini koʻrsatib, qoʻshimcha daromad qilishingiz mumkin.",
      },
      {
        icon: "camera",
        title: "Telefonda video olishga qiziquvchilar",
        text: "Telefon yordamida sifatli videolar yaratishni va yorugʻlik, montaj asoslari kabilarni amaliy tarzda oʻrganasiz.",
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
    salary: { min: "$250", avg: "$500", max: "$900+" },
    price: {
      monthly: "2 200 000 soʻm",
      full: "4 000 000 soʻm",
      note: "Bittada toʻlovda 400 000 soʻm tejaysiz · viloyat uchun 1 200 000 soʻm/oy",
      regions: [
        {
          region: "Toshkent shahri",
          monthly: "2 200 000 soʻm",
          full: "4 000 000 soʻm (400 000 tejaysiz)",
          highlight: true,
        },
        {
          region: "Viloyatlar uchun",
          monthly: "1 200 000 soʻm",
          full: "2 200 000 soʻm (200 000 tejaysiz)",
        },
      ],
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
        text: "SI yordamida ishlarni tezroq bajarish, takroriy vazifalarni avtomatlashtirish orqali vaqtingizni tejay olasiz.",
      },
      {
        icon: "clipboard",
        title: "KPI, hisobot va taqdimotlar ishining asosiy qismi boʻlganlar",
        text: "SI orqali tez hisobot yozish, katta maʼlumotlarni tahlil qilish, taqdimotlar tayyorlash va vizual materiallarni yaratish osonlashadi.",
      },
      {
        icon: "time",
        title: "Kundalik hayotda samaradorlikni oshirmoqchi boʻlganlar",
        text: "SI yordamida reja tuzish, matn yozish, tarjima qilish, vazifalarni eslatib turish va tartibga solish kabi vazifalarni osonlikcha bajarasiz.",
      },
      {
        icon: "image",
        title: "Kontent va vizual materiallar yaratmoqchi boʻlganlar",
        text: "SI yordamida postlar yozish, dizayn gʻoyalarini yaratish, rasm, video generatsiyasi va vizual kontentlarni tez ishlab chiqish mumkin.",
      },
      {
        icon: "megaphone",
        title: "Tadbirkorlar, SMM va marketing sohasi vakillari",
        text: "SI yordamida reklama matnlari yozish, kontent reja tuzish, vizual materiallar yaratish va marketing jarayonlarini avtomatlashtirish mumkin.",
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
    laptop: {
      cpu: "Intel Core i3 (12-avlod)",
      ram: "8 GB",
      storage: "SSD 256 GB",
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
        text: "AI dizayn yoʻnalishi orqali siz zamonaviy va talab yuqori boʻlgan kasbni oʻrganib, qisqa vaqt ichida professional dizaynlar yaratish koʻnikmalariga ega boʻlasiz.",
      },
      {
        icon: "gem",
        title: "Dizayn koʻnikmalarini yuqori darajaga olib chiqmoqchilar",
        text: "Sunʼiy intellektdan foydalanib, kreativ gʻoyalarni tezroq amalga oshirish, sifatli vizuallar yaratish va zamonaviy dizayn trendlariga mos ishlashni oʻrganasiz.",
      },
      {
        icon: "image",
        title: "Ijtimoiy tarmoqlar uchun kontent yaratishni istaganlar",
        text: "Instagram, Telegram, TikTok va boshqa platformalar uchun kreativ postlar, bannerlar va vizuallar tayyorlashni oʻrganasiz.",
      },
      {
        icon: "gift",
        title: "Qoʻshimcha daromad topishni istaganlar",
        text: "Qisqa vaqt ichida talab yuqori boʻlgan dizayn xizmatlarini koʻrsatishni oʻrganib, oʻz portfolioingizni shakllantirasiz.",
      },
      {
        icon: "sparks",
        title: "Dizayn sohasiga qiziquvchilar",
        text: "Kreativlik va dizayn yaratishga qiziqsangiz, lekin murakkab dasturlarni oʻrganishga vaqtingiz boʻlmasa, AI vositalari yordamida qisqa muddatda sifatli dizaynlar yaratishni oʻrganasiz.",
      },
    ],
    learn: [
      { title: "AI Dizayn asoslari", items: ["Ranglar", "Shriftlar", "Kompozitsiya", "Kreativ fikrlash"] },
      { title: "AI vositalari bilan dizayn", items: ["ChatGPT", "Midjourney", "Adobe Firefly", "Canva AI"] },
      { title: "Ijtimoiy tarmoqlar uchun dizayn", items: ["Postlar", "Storylar", "Bannerlar"] },
      { title: "Brending va vizual identitet", items: ["Logo", "Moodboard", "Korporativ uslub"] },
      { title: "Portfolio va mijozlar bilan ishlash", items: ["Portfolio tayyorlash", "Mijozlar bilan ishlash"] },
    ],
    salary: { min: "$350", avg: "$700", max: "$1200+" },
    price: {
      monthly: "1 800 000 soʻm",
      full: "6 200 000 soʻm",
      note: "Bittada toʻlovda 1 mln soʻm tejaysiz · viloyat uchun 1 500 000 soʻm/oy",
      regions: [
        {
          region: "Toshkent shahri",
          monthly: "1 800 000 soʻm",
          full: "6 200 000 soʻm (1 000 000 tejaysiz)",
          highlight: true,
        },
        {
          region: "Viloyatlar uchun",
          monthly: "1 500 000 soʻm",
          full: "5 400 000 soʻm (600 000 tejaysiz)",
        },
      ],
    },
    laptop: {
      cpu: "Intel Core i5 (12-avlod)",
      ram: "8 GB",
      storage: "SSD 256 GB",
    },
  },
];

export const categories: Category[] = ["Dasturlash", "Dizayn", "Marketing"];

export function getCourse(slug: string): Course | undefined {
  return courses.find((c) => c.slug === slug);
}
