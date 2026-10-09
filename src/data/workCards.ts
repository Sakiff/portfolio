export type ProjectShot = {
  // Page path on the live site, shown as the address in the gallery.
  path: string;
  img: string;
};

export type WorkCardItem = {
  slug: string;
  number: string;
  title: string;
  // Locale key for projects whose name is translated; others keep `title` as is.
  titleKey?: string;
  description: string;
  technologies: string;
  // Omitted for private projects.
  link?: string;
  repoLink?: string;
  img: string;
  template: boolean;
  shots: ProjectShot[];
};

// "Next.js · Tailwind" -> ["Next.js", "Tailwind"]
export const splitTechs = (technologies: string) =>
  technologies
    .split("·")
    .map((tech) => tech.trim())
    .filter(Boolean);

// The name to show for a project in the current language.
export const projectTitle = (
  card: Pick<WorkCardItem, "title" | "titleKey">,
  t: (key: string) => string,
) => (card.titleKey ? t(card.titleKey) : card.title);

// Screenshots live in /public/assets/projects/<slug>/01.jpg, 02.jpg, ...
const shots = (slug: string, paths: string[]): ProjectShot[] =>
  paths.map((path, i) => ({
    path,
    img: `/assets/projects/${slug}/${String(i + 1).padStart(2, "0")}.jpg`,
  }));

// Single-page sites are captured section by section while scrolling.
const sections = (count: number) =>
  Array.from({ length: count }, (_, i) => (i === 0 ? "/" : `/#${i + 1}`));

export const WORK_CARDS: WorkCardItem[] = [
  {
    slug: "financial-management-system",
    number: "01",
    title: "Maliyyə İdarəetmə Sistemi",
    titleKey: "work.titles.financialSystem",
    description:
      "A private financial reporting system for a multi-branch education center: students, teachers, payments, salaries, and exam income with dashboards and role-based access.",
    technologies:
      "Next.js · TypeScript · Tailwind · shadcn/ui · MongoDB · Cloudinary · Recharts",
    img: "/assets/projects/financial-management-system/01.jpg",
    template: false,
    shots: shots("financial-management-system", [
      "/",
      "/kurs",
      "/kurs/sagirdler",
      "/kurs/muellimler/[id]",
      "/kurs/odenisler",
      "/imtahan",
      "/umumi",
      "/admin",
    ]),
  },
  {
    slug: "berde-hazirliq-kurslari",
    number: "02",
    title: "Bərdə Hazırlıq Kursları",
    description:
      "A modern educational platform developed for Bərdə Hazırlıq Kursları, designed to provide students with information about courses, programs, and educational opportunities.",
    link: "https://berdehazirliqkurslari.com/",
    technologies: "Next.js · Tailwind",
    img: "/assets/bhk.png",
    template: false,
    shots: shots("berde-hazirliq-kurslari", ["/", "/xidmetler/abituriyent-hazirligi", "/ugurlarimiz", "/imtahanlar", "/xeberler"]),
  },
  {
    slug: "sum-tekstil",
    number: "03",
    title: "Sum Tekstil",
    description:
      "A full-stack corporate website built for Sum Tekstil, focused on product presentation and brand identity. The project demonstrates backend development skills through API design, data handling, and server-side logic powering a responsive user interface. It includes features like product catalogs, contact forms, and admin panels for content management.",
    link: "https://sumtekstil.az/",
    repoLink: "https://github.com/Sakiff/sumsafety",
    technologies: "HTML5 · CSS3 · Tailwind · JavaScript · React · Node.js",
    img: "/assets/sumtekstil.png",
    template: false,
    shots: shots("sum-tekstil", ["/", "/mehsullar", "/haqqimizda", "/elaqe"]),
  },
  {
    slug: "imperia-groups",
    number: "04",
    title: "Imperia Groups",
    description:
      "A modern corporate website developed for Imperia Group, an IT solutions provider. The project focuses entirely on frontend development, delivering a clean, responsive, and visually engaging user interface to clearly present the company's services and expertise. This website showcases advanced React components, smooth animations, and a user-centric design that enhances the overall user experience.",
    link: "https://imperiagroups.az/",
    repoLink: "https://github.com/Sakiff/ImperiaTech",
    technologies: "HTML5 · CSS3 · Tailwind · JavaScript · React · Email.js",
    img: "/assets/imperia.png",
    template: false,
    shots: shots("imperia-groups", ["/", "/services/technology", "/portfolio", "/contact"]),
  },
  {
    slug: "piper",
    number: "05",
    title: "Piper",
    description:
      "A landing page for Piper, a mobile service-marketplace app that connects users with verified local tradespeople across 50+ home and office service categories.",
    link: "https://piper-website-nine.vercel.app",
    repoLink: "https://github.com/Sakiff/piper-website",
    technologies: "Next.js · Tailwind ",
    img: "/assets/piper.png",
    template: false,
    shots: shots("piper", sections(5)),
  },
  {
    slug: "hr-kurslari",
    number: "06",
    title: "HR kursları",
    description:
      "A frontend-focused website developed for HR Courses, built with React, Tailwind CSS, and modern UI animations. The project demonstrates component-based architecture, responsive design, and interactive elements to effectively showcase training programs and course information. It features course listings, enrollment forms, and testimonial sections.",
    link: "https://hr-kurslari.netlify.app/",
    repoLink: "https://github.com/Sakiff/hr-kurslar-",
    technologies: "HTML5 · CSS3 · Tailwind · JavaScript · React",
    img: "/assets/hr-kurslari.png",
    template: false,
    shots: shots("hr-kurslari", ["/", "/about", "/services", "/contact"]),
  },
  {
    slug: "bizpro-media",
    number: "07",
    title: "BizPro Media",
    description:
      "The BizPro Media template website is a frontend-only project built with HTML and CSS. It demonstrates responsive design, structured layouts, and attention to visual detail for showcasing media content effectively. This template can be used as a starting point for media-related websites, including blogs, portfolios, and news sites.",
    link: "https://bizpromedia.netlify.app/",
    repoLink: "https://github.com/Sakiff/bizpro",
    technologies: "HTML5 · CSS3",
    img: "/assets/bizpro.png",
    template: true,
    shots: shots("bizpro-media", sections(5)),
  },
];
