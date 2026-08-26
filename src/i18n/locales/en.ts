const en = {
  // Navbar menu
  nav: {
    home: "Home",
    services: "Services",
    resume: "Resume",
    work: "Work",
  },

  // HomePage
  home: {
    role: "Software Developer",
    greeting: "Hello I'm",
    name: "Sakif",
    description:
      "Frontend developer specializing in React, building scalable UI systems with Tailwind CSS, crafting smooth animations with Framer Motion, and integrating them with Node.js-powered backends.",
    downloadCv: "Download CV",
  },

  // ServicesPage
  services: {
    viewWork: "View Work",
    scrollHint: "Scroll",
    cards: [
      {
        title: "Web Development",
        text: "From frontend to backend, I develop scalable and secure web applications using modern web technologies. Clean architecture, maintainable code, and seamless API integrations are always a priority.",
      },
      {
        title: "UI/UX Implementation",
        text: "I turn designs into pixel-perfect, interactive experiences. With attention to spacing, motion, and usability, I ensure the final product feels smooth, natural, and user-friendly.",
      },
      {
        title: "Website Performance Optimization",
        text: "I optimize websites for speed, SEO, and responsiveness. Faster load times, better Lighthouse scores, and improved user engagement come as a result.",
      },
      {
        title: "API Integration & Backend Logic",
        text: "I integrate REST APIs and build backend logic with Node.js and .NET where needed, ensuring secure data handling and smooth communication between systems.",
      },
    ],
  },

  // ResumePage
  resume: {
    whyHireMe: "Why hire me?",
    tabs: {
      experience: "Experience",
      education: "Education",
      skills: "Skills",
      aboutMe: "About me",
    },
  },

  // Experience
  experience: {
    heading: "My Experience",
    subheading:
      "Practical frontend experience gained through real-world projects and production-level development.",
    date: "March 2025 — May 2026",
    role: "Frontend Developer",
    company: "Imperia Groups MMC",
    description:
      "Built responsive and interactive user interfaces using React, Tailwind CSS, and modern frontend practices. Focused on clean code, performance, and smooth user experience.",
  },

  // Education
  education: {
    heading: "My Education",
    subheading:
      "Academic background combined with intensive practical training in modern web development.",
    degree: "Bachelor Degree",
    bootcamp: "Bootcamp",
    items: [
      {
        date: "2022 — 2026",
        title: "Information Technologies",
        institution: "Azerbaijan Technical University",
        type: "degree",
      },
      {
        date: "2022 — 2023",
        title: "Software Development",
        institution: "Code Academy",
        type: "bootcamp",
      },
    ],
  },

  // Skills
  skills: {
    heading: "My skills",
    subheading:
      "A collection of technologies and tools I actively use to build reliable, maintainable, and modern web applications.",
  },

  // About Me
  aboutMe: {
    heading: "About me",
    subheading:
      "Personal details and contact information relevant for professional purposes.",
    labels: {
      Name: "Name",
      Nationality: "Nationality",
      Phone: "Phone",
      Email: "Email",
      Languages: "Languages",
    },
    values: {
      Name: "Sakif Fataliyev",
      Nationality: "Azerbaijanian",
      Phone: "+994 (50) 585-32-67",
      Email: "ftliyevsakif@gmail.com",
      Languages: "English, Russian, Azerbaijani",
    },
  },

  // WorkPage
  work: {
    heading: "My Works",
    template: "Template",
    cards: [
      {
        description:
          "A modern corporate website developed for Imperia Group, an IT solutions provider. The project focuses entirely on frontend development, delivering a clean, responsive, and visually engaging user interface to clearly present the company's services and expertise. This website showcases advanced React components, smooth animations, and a user-centric design that enhances the overall user experience.",
      },
      {
        description:
          "A landing page for Piper, a mobile service-marketplace app that connects users with verified local tradespeople across 50+ home and office service categories, from plumbing and electrical work to repairs and cleaning. Users send a request, track the job status in real time, and pay the tradesperson directly. Built with Next.js and Tailwind CSS for a clean, responsive experience.",
      },
      {
        description:
          "A modern educational platform built for Bərdə Hazırlıq Kursları, an exam-preparation and tutoring center. The site presents the center's course offerings, including university entrance prep, technical school prep, and skill-improvement programs, along with exam results, achievements, and news for students and parents.",
      },
      {
        description:
          "A full-stack corporate website built for Sum Tekstil, focused on product presentation and brand identity. The project demonstrates backend development skills through API design, data handling, and server-side logic powering a responsive user interface. It includes features like product catalogs, contact forms, and admin panels for content management.",
      },
      {
        description:
          "A frontend-focused website developed for HR Courses, built with React, Tailwind CSS, and modern UI animations. The project demonstrates component-based architecture, responsive design, and interactive elements to effectively showcase training programs and course information. It features course listings, enrollment forms, and testimonial sections.",
      },
      {
        description:
          "The BizPro Media template website is a frontend-only project built with HTML and CSS. It demonstrates responsive design, structured layouts, and attention to visual detail for showcasing media content effectively. This template can be used as a starting point for media-related websites, including blogs, portfolios, and news sites.",
      },
    ],
  },
} as const;

export default en;
