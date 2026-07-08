// Barcha kurslar — Website reja.pdf asosida
// Narxlar soʻmda, Toshkent filiali uchun (viloyat narxi boʻlsa qavsda izohda)

import type { IconName } from "@/components/Icon";

export type Category = "Dasturlash" | "Dizayn" | "Marketing";

export interface Price {
  monthly: string; // oylik toʻlov
  full?: string; // bittada toʻlov
  note?: string; // qoʻshimcha izoh (bonus, tejash)
}

export interface Course {
  slug: string;
  title: string;
  icon: IconName;
  image?: string; // kurs kartochkasi rasmi (public/courses/)
  squareImage?: boolean; // TEST: true = kvadrat band + object-cover (B), false/undefined = h-32 + object-contain (A)
  category: Category;
  level?: string; // masalan "Foundation", "Intensiv"
  tagline: string; // hero katta matn
  subtitle: string; // hero kichik matn
  duration: string; // davomiylik
  featured?: boolean; // bosh sahifada ajratib koʻrsatish
  forWhom: string[];
  learn: { title: string; text?: string }[];
  skills?: string[];
  salary?: { min: string; avg: string; max: string };
  price: Price;
  laptop?: { cpu: string; ram: string; storage: string; os?: string };
  graduateVideos?: string[]; // YouTube havolalari (bitiruvchilar bilan suhbat)
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
    squareImage: true,
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
      "Dasturlash sohasiga endi kirib kelayotganlar",
      "Qaysi AyTi yoʻnalishini tanlashni bilmaganlar",
      "Kuchli fundamental bilim olishni istaganlar",
    ],
    learn: [
      { title: "Kompyuter savodxonligi", text: "Operatsion tizimlar va raqamli vositalar bilan ishlash." },
      { title: "C va Python", text: "Dasturlashning asosiy tushunchalari va amaliy dasturlar yaratish." },
      { title: "Dasturlash mantigʻi va strukturasi", text: "Kodlarning tuzilishi va ishlash tamoyillari." },
      { title: "Algoritmlar va mantiqiy fikrlash", text: "Muammolarni tahlil qilish va yechim topish." },
      { title: "Kelgusi yoʻnalishlar uchun poydevor", text: "Backend, Frontend, AI uchun tayyorgarlik." },
    ],
    skills: [
      "Tanlangan tilda va freymvorklar bilan ishlash",
      "MVC arxitekturasi asosida dastur yaratish",
      "Design Patterns tamoyillarini qoʻllash",
      "API va RESTful servislar bilan ishlash",
      "Sodda va oʻrta murakkablikdagi loyihalar",
    ],
    price: {
      monthly: "1 800 000 soʻm",
      full: "6 400 000 soʻm",
      note: "Bittada toʻlovda 800 ming tejaysiz · viloyat uchun 1 400 000 soʻm/oy",
    },
    laptop: laptopBasic,
    graduateVideos: ["https://youtu.be/Mrnl-E2bi7M", "https://youtu.be/SOSsuANaA8E"],
  },
  {
    slug: "full-stack",
    image: "/courses/full-stack.jpg",
    squareImage: true,
    title: "Full-stack Dasturlash",
    icon: "rocket",
    category: "Dasturlash",
    level: "Intensiv",
    tagline: "Full-stack dasturlashni mutaxassislardan oʻrganing",
    subtitle: "Qisqa muddatda kasb oʻrganib, daromadga chiqing! Frontend + Backend + AI.",
    duration: "10 oy · haftada 3 kun · 2 soat",
    featured: true,
    forWhom: [
      "Zamonaviy va talab yuqori kasb egasi boʻlishni istaganlar",
      "Oʻz kasbini oʻzgartirmoqchi boʻlganlar",
      "Startup yaratishni istaganlar",
    ],
    learn: [
      { title: "1-boʻlim. Dasturlash asoslari", text: "HTML, CSS, JavaScript (ES6+), OOP, async va Git." },
      { title: "2-boʻlim. JavaScript Pro + TypeScript", text: "React: komponentlar, state, props, hooks." },
      { title: "3-boʻlim. Frontend — React", text: "State management, Router, API integratsiya, Node.js, Express." },
      { title: "4-boʻlim. Backend, xavfsizlik va AI", text: "REST API, maʼlumotlar bazasi, autentifikatsiya, OpenAI integratsiya." },
      { title: "5-boʻlim. Professional koʻnikmalar", text: "Kod sifati, portfolio, texnik intervyularga tayyorgarlik." },
      { title: "6-boʻlim. Yakuniy loyiha", text: "Toʻliq Full-Stack ilova — real domenga joylashtirish." },
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
    squareImage: true,
    title: "Kiberxavfsizlik",
    icon: "lock",
    category: "Dasturlash",
    level: "Intensiv",
    tagline: "Kiberxavfsizlikni mutaxassislardan oʻrganing",
    subtitle: "Pentesting, Linux, tarmoq xavfsizligi va etik xakerlik — amaliyot asosida.",
    duration: "8 oy · haftada 3+3 kun · 3 soat",
    featured: true,
    forWhom: [
      "AyTi va texnologiyaga qiziqadiganlar",
      "Hakerlar faoliyatiga qiziqqanlar (etik, qonuniy usulda)",
      "CS/AyTi yoʻnalishida tahsil olayotgan talabalar",
      "Junior dasturchilar va AyTi oʻqituvchilari",
      "Kasbini oʻzgartirmoqchi boʻlganlar",
    ],
    learn: [
      { title: "1-modul. Asoslar va qonunchilik", text: "CIA triadasi, etik xakerlik, Kali Linux, VirtualBox." },
      { title: "2-modul. Linux OS", text: "Bash scriptlar, SSH, UFW, Wireshark bilan tarmoq tahlili." },
      { title: "3-modul. Windows OS", text: "Active Directory, Mimikatz, privilege escalation." },
      { title: "4-modul. Tarmoq asoslari va hujumlar", text: "OSI, TCP/IP, Nmap, MITM, DNS spoofing." },
      { title: "5-modul. Pentesting vositalari", text: "Metasploit, Burp Suite, DVWA, TryHackMe." },
      { title: "6-modul. Web Pentesting (OWASP Top 10)", text: "XSS, SQLi, CSRF, SSRF va boshqalar." },
      { title: "7-modul. Ekspluatatsiya", text: "Buffer overflow, reverse shell, credential harvesting." },
      { title: "8-modul. Yakuniy loyiha va sertifikat", text: "Real infratuzilmaga pentest va hisobot." },
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
  },
  {
    slug: "machine-learning",
    image: "/courses/machine-learning.png",
    squareImage: true,
    title: "Machine Learning",
    icon: "cpu",
    category: "Dasturlash",
    level: "Intensiv",
    tagline: "Machine Learning sohasini mutaxassislardan oʻrganing",
    subtitle: "Sunʼiy intellekt, neyron tarmoqlar va deep learning — noldan deploymentgacha.",
    duration: "8 oy · haftada 6 kun · 2 soat",
    forWhom: [
      "Sunʼiy intellektga qiziquvchilar",
      "Bilimini keyingi bosqichga olib chiqmoqchi dasturchilar",
    ],
    learn: [
      { title: "1-modul. Ehtimollar, statistika va Python", text: "NumPy, Pandas, Matplotlib, Seaborn." },
      { title: "2-modul. Matematika: algebra va calculus", text: "Vektorlar, matritsalar, gradient, optimallashtirish." },
      { title: "3-modul. Klassik ML algoritmlari", text: "Linear/Logistic Regression, SVM, KNN, Decision Tree." },
      { title: "4-modul. Ensemble modellar", text: "EDA, feature engineering, XGBoost, CatBoost." },
      { title: "5-modul. Deep Learning: CNN va RNN", text: "Neyron tarmoqlar, LSTM, hyperparameter tuning." },
      { title: "6-modul. Transformer modellar", text: "Stacking, blending, pipelines, interpretability." },
      { title: "7-modul. Reinforcement Learning", text: "Transfer learning, RLHF asoslari." },
      { title: "8-modul. Yakuniy loyiha va deployment", text: "End-to-end loyiha, API, Docker, Cloud." },
    ],
    price: {
      monthly: "2 400 000 soʻm",
      full: "16 000 000 soʻm",
      note: "Bittada toʻlovda 3 mln 200 ming tejaysiz",
    },
  },
  {
    slug: "data-analitika",
    image: "/courses/data-analitika.jpg",
    squareImage: true,
    title: "Data Analitika",
    icon: "graph",
    category: "Dasturlash",
    level: "Intensiv",
    tagline: "Data analitikani mutaxassislardan oʻrganing",
    subtitle: "SQL, Excel, Python va Power BI bilan maʼlumotlardan qaror chiqarishni oʻrganing.",
    duration: "7 oy · haftada 3 kun · 2 soat",
    forWhom: [
      "Buxgalteriya, moliya sohasidagilar",
      "Sonlar, grafiklar va statistika bilan ishlashni yoqtiradiganlar",
      "Talab va maoshi yuqori barqaror kasb egallamoqchi boʻlganlar",
      "Biznes qarorlarini raqamlar asosida qabul qilmoqchi boʻlganlar",
      "Marketing va sotuvda natijani data bilan oshirmoqchi boʻlganlar",
    ],
    learn: [
      { title: "SQL", text: "Maʼlumotlar bazasidan olish, filtrlash, tartiblash va tahlil." },
      { title: "Excel", text: "Maʼlumotlarni tahlil qilib, tushunarli hisobotlarga aylantirish." },
      { title: "Python", text: "pandas, matplotlib, seaborn bilan tozalash, tahlil, vizualizatsiya." },
      { title: "Power BI", text: "Interaktiv dashboard va biznes hisobotlar." },
      { title: "Statistik tahlil", text: "A/B testlar, regressiya, gipoteza tekshirish." },
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
    squareImage: true,
    title: "Start Junior",
    icon: "compass",
    category: "Dasturlash",
    level: "15–17 yosh",
    tagline: "Farzandingiz kelajagi shu yerdan boshlanadi",
    subtitle: "Start Junior: 15–17 yoshlilar uchun AyTi kurs.",
    duration: "Boshlangʻich · amaliyotga yoʻnaltirilgan",
    forWhom: [
      "Farzandini kelajakda AyTi mutaxassisi sifatida koʻrmoqchi ota-onalar",
      "AyTi va dasturlashga qiziqadigan yoshlar",
      "Mantiqiy va kreativ fikrlashni rivojlantirmoqchi boʻlganlar",
    ],
    learn: [
      { title: "Kompyuter savodxonligi", text: "Google Docs, Sheets, Canva, ofis dasturlari." },
      { title: "Mantiqiy va algoritmik fikrlash" },
      { title: "HTML/CSS", text: "Portfolio yoki shaxsiy web-sayt yaratish." },
      { title: "JavaScript", text: "Calculator, to-do app kabi mini loyihalar." },
      { title: "Python", text: "Telegram bot yaratish." },
      { title: "Jamoada ishlash", text: "Loyihalarni taqdim qilish tajribasi." },
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
      "Zamonaviy kasb egallamoqchi boʻlganlar",
      "Oʻz kasbini oʻzgartirishni istaganlar",
      "Qisqa vaqtda daromadga chiqmoqchi boʻlganlar",
      "Oʻz biznesini internet orqali rivojlantirmoqchi boʻlganlar",
    ],
    learn: [
      { title: "1-boʻlim. Marketing va ijtimoiy tarmoqlarga kirish", text: "Marketing asoslari, SMM, Google Workspace, Canva, ijtimoiy tarmoqlar, strategiya." },
      { title: "2-boʻlim. Kontent tayyorlash", text: "Stories, reels, syomka, montaj, kontent-plan, nativ reklama." },
      { title: "3-boʻlim. Reklama va boshqaruv", text: "Bloger va influencerlar, PR, targeting, community management, shaxsiy brend." },
    ],
    skills: [
      "SMM strategiya va kontent rejalar tuzish",
      "Bozor va raqobatchilar tahlili",
      "Smartfonda video syomka va montaj",
      "Sotuv maqolalarini yozish",
      "Jamoani boshqarish va media reja",
    ],
    salary: { min: "$250", avg: "$600", max: "$2000" },
    price: {
      monthly: "2 200 000 soʻm",
      full: "7 600 000 soʻm",
      note: "Bittada toʻlovda 1 200 ming tejaysiz · viloyat uchun 1 350 000 soʻm/oy",
    },
    laptop: laptopBasic,
    graduateVideos: ["https://youtu.be/1WkBZ7_eR0I", "https://youtu.be/p83gVlC6Uzw"],
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
      "Zamonaviy kasb egasi boʻlishni istaganlar",
      "Mobilografiyadan professional videografiyaga oʻtmoqchilar",
      "Oʻz kasbini oʻzgartirmoqchi boʻlganlar",
      "Biznes uchun kuchli kontent yaratmoqchi boʻlganlar",
    ],
    learn: [
      { title: "1-boʻlim. Premiere Pro va montaj asoslari" },
      { title: "2-boʻlim. Montaj psixologiyasi va storytelling" },
      { title: "3-boʻlim. Professional syomka va kamera" },
      { title: "4-boʻlim. Mustaqil amaliy tajriba" },
      { title: "5-boʻlim. After Effects — professional effektlar" },
      { title: "6-boʻlim. Mijoz topish va ular bilan ishlash" },
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
      "Zamonaviy kasb oʻrganishni istaganlar",
      "Ijtimoiy tarmoqlar uchun kontent yaratmoqchilar",
      "Biznesi uchun kontent yaratmoqchi boʻlganlar",
      "Telefonda video olishga qiziquvchilar",
    ],
    learn: [
      { title: "Mobil videografiya asoslari", text: "Telefon kamerasi, kadr, yorugʻlik." },
      { title: "CapCut va VN montaj" },
      { title: "Motion Ninja — 3D kamera treking va effektlar" },
      { title: "Motion grafika va keyframe" },
      { title: "Canvada vizual dizayn" },
      { title: "Hypic bilan vizualni yaxshilash" },
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
      "Oʻz kasbi bor, samaradorlikni oshirmoqchi boʻlganlar",
      "Hisobot va taqdimotlar bilan ishlaydiganlar",
      "Kontent va vizual material yaratmoqchilar",
      "Tadbirkorlar, SMM va marketing vakillari",
    ],
    learn: [
      { title: "SI asoslari", text: "Machine Learning, Deep Learning, neyron tarmoqlar." },
      { title: "Generativ SI", text: "ChatGPT, Midjourney, DALL·E, Jasper." },
      { title: "Prompt Injinering", text: "SIʼdan aniq natija olish uchun promptlar." },
      { title: "No-code avtomatlashtirish", text: "Zapier, Make, Notion AI." },
      { title: "Kontent, vizual, audio va tahlil" },
      { title: "Real loyiha", text: "Oʻz kasbingizga mos avtomatlashtirish." },
    ],
    price: {
      monthly: "Bittada: 2 500 000 soʻm",
      note: "Viloyat uchun 1 800 000 soʻm",
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
      "Zamonaviy kasb oʻrganishni istaganlar",
      "Dizayn koʻnikmalarini yuqori darajaga olib chiqmoqchilar",
      "Ijtimoiy tarmoqlar uchun kontent yaratmoqchilar",
      "Qoʻshimcha daromad topishni istaganlar",
    ],
    learn: [
      { title: "AI Dizayn asoslari", text: "Ranglar, shriftlar, kompozitsiya, kreativ fikrlash." },
      { title: "AI vositalari bilan dizayn", text: "ChatGPT, Midjourney, Adobe Firefly, Canva AI." },
      { title: "Ijtimoiy tarmoqlar uchun dizayn", text: "Postlar, storylar, bannerlar." },
      { title: "Brending va vizual identitet", text: "Logo, moodboard, korporativ uslub." },
      { title: "Portfolio va mijozlar bilan ishlash" },
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
