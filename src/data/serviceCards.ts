import {
  Braces,
  CodeXml,
  Paintbrush,
  SearchCheck,
  type LucideIcon,
} from "lucide-react";

export type servicesItem = {
  cardNumber: number;
  title: string;
  text: string;
  icon: LucideIcon;
};

export const SERVICE_CARDS: readonly servicesItem[] = [
  {
    cardNumber: 0,
    title: "Web Development",
    text: "From frontend to backend, I develop scalable and secure web applications using the MERN stack. Clean architecture, maintainable code, and seamless API integrations are always a priority.",
    icon: CodeXml,
  },
  {
    cardNumber: 1,
    title: "UI/UX Implementation",
    text: "I turn designs into pixel-perfect, interactive experiences. With attention to spacing, motion, and usability, I ensure the final product feels smooth, natural, and user-friendly.",
    icon: Paintbrush,
  },
  {
    cardNumber: 2,
    title: "Website Performance Optimization",
    text: "I optimize websites for speed, SEO, and responsiveness. Faster load times, better Lighthouse scores, and improved user engagement come as a result.",
    icon: SearchCheck,
  },
  {
    cardNumber: 3,
    title: "API Integration & Backend Logic",
    text: "I integrate REST APIs and build backend logic with Node.js and .NET where needed, ensuring secure data handling and smooth communication between systems.",
    icon: Braces,
  },
];
