// Mentorlar va oʻquvchilar sharhlari — Website reja.pdf tuzilishi boʻyicha.
// Mentor: rasmi, maʼlumot, tajribasi, yutuqlari, ishlagan kompaniyalari
// Sharh: rasmi, oʻqigan kursi, natijalari, ishlayotgan kompaniyasi, video
//
// DIQQAT: quyidagilar NAMUNAVIY maʼlumotlar — haqiqiy ism, rasm va matn
// bilan almashtiring. `image` ga public/ dagi yoʻlni yozing (masalan
// "/mentors/aziz.jpg"), aks holda bosh harflardan avatar chiziladi.

export interface Mentor {
  name: string;
  role: string;
  direction: string; // yoʻnalish
  bio: string; // maʼlumot
  experience: string; // tajriba
  achievements: string[]; // yutuqlari
  companies: string[]; // ishlagan kompaniyalar
  image?: string;
}

export interface Testimonial {
  name: string;
  course: string; // oʻqigan kursi
  company: string; // hozir ishlayotgan kompaniyasi
  result: string; // natijasi (qisqa)
  quote: string;
  video?: string; // YouTube havolasi (suhbat)
  image?: string;
}

export const mentors: Mentor[] = [
  {
    name: "Aziz Karimov",
    role: "Senior Frontend Mentor",
    direction: "Full-stack Dasturlash",
    bio: "React va TypeScript boʻyicha ekspert. 200+ oʻquvchini Junior darajaga tayyorlagan.",
    experience: "7+ yil tajriba",
    achievements: ["50+ ishga joylashgan bitiruvchi", "Xalqaro sertifikatlar"],
    companies: ["EPAM", "Uzum"],
  },
  {
    name: "Dilnoza Rahimova",
    role: "Backend Mentor",
    direction: "Dasturlash Foundation",
    bio: "Node.js va maʼlumotlar bazalari boʻyicha mutaxassis, kuchli metodika egasi.",
    experience: "6+ yil tajriba",
    achievements: ["Yilning eng yaxshi mentori — 2023", "3 ta yirik loyiha rahbari"],
    companies: ["IT Park", "Click"],
  },
  {
    name: "Sardor Toshev",
    role: "Cybersecurity Lead",
    direction: "Kiberxavfsizlik",
    bio: "Pentester va OSCP sertifikat egasi. Bug bounty dasturlarida faol ishtirokchi.",
    experience: "8+ yil tajriba",
    achievements: ["OSCP sertifikati", "Xalqaro CTF gʻoliblari murabbiysi"],
    companies: ["UZCERT", "Infinbank"],
  },
  {
    name: "Malika Yusupova",
    role: "Data Science Mentor",
    direction: "Machine Learning · Data Analitika",
    bio: "ML modellari va data pipelineʼlar boʻyicha amaliyotchi mutaxassis.",
    experience: "5+ yil tajriba",
    achievements: ["Kaggle Expert", "Bank sohasida ML yechimlar mualifi"],
    companies: ["Beeline", "TBC"],
  },
  {
    name: "Jasur Ergashev",
    role: "Marketing Mentor",
    direction: "SMM Pro",
    bio: "Yirik brendlar uchun marketing strategiyalar tuzgan amaliyotchi marketolog.",
    experience: "6+ yil tajriba",
    achievements: ["1M+ auditoriyali loyihalar", "Milliy reklama mukofoti"],
    companies: ["Korzinka", "MyTaxi"],
  },
  {
    name: "Nigora Aliyeva",
    role: "Design Mentor",
    direction: "AI Dizayn · Videografiya",
    bio: "AI vositalari va vizual brending boʻyicha ekspert, freelance murabbiy.",
    experience: "5+ yil tajriba",
    achievements: ["Xalqaro mijozlar bilan ishlagan", "50+ brend identifikatsiyasi"],
    companies: ["Freelance", "Payme"],
  },
];

export const testimonials: Testimonial[] = [
  {
    name: "Oybek Nazarov",
    course: "SMM Pro",
    company: "Oʻz agentligim",
    result: "SMM agentligi asoschisi",
    quote:
      "Kursdan keyin oʻz SMM agentligimni ochdim. Endi bir nechta brendlar bilan ishlayman va oylik daromadim bir necha barobar oshdi.",
    video: "https://youtu.be/1WkBZ7_eR0I",
  },
  {
    name: "Begzod Sobirov",
    course: "SMM Pro",
    company: "Marketing jamoasi",
    result: "Middle SMM mutaxassis",
    quote:
      "Amaliy vazifalar va real mijozlar bilan ishlash tajribasi menga tez oʻsishimga yordam berdi.",
    video: "https://youtu.be/p83gVlC6Uzw",
  },
  {
    name: "Kamola Ismoilova",
    course: "Data Analitika",
    company: "TBC Bank",
    result: "Buxgalter → Data Analyst",
    quote:
      "SQL, Python va Power BI ni amaliyotda oʻrgandim va bank sohasida yangi karyeramni boshladim.",
  },
  {
    name: "Ulugʻbek Rasulov",
    course: "Full-stack Dasturlash",
    company: "Uzum Market",
    result: "Junior Frontend Developer",
    quote:
      "Noldan boshlab 10 oyda Junior darajaga chiqdim va kursni tugatmasdanoq ishga taklif oldim.",
    video: "https://youtu.be/Mrnl-E2bi7M",
  },
  {
    name: "Sevara Xolmatova",
    course: "AI Dizayn",
    company: "Freelance",
    result: "Xalqaro freelance dizayner",
    quote:
      "AI vositalarini oʻrganib, dizayn xizmatlarimni xalqaro mijozlarga sotayapman. Portfolioim kurs davomida shakllandi.",
  },
  {
    name: "Doston Qodirov",
    course: "Machine Learning",
    company: "Beeline",
    result: "ML Engineer",
    quote:
      "Matematikadan tortib deploymentgacha bosqichma-bosqich oʻrgatildi. Yakuniy loyiham meni ishga olishlariga sabab boʻldi.",
    video: "https://youtu.be/SOSsuANaA8E",
  },
];

