import ServicesCard from "@/components/ServicesCard/ServicesCard";
import { useScroll } from "framer-motion";
import {
  Braces,
  CodeXml,
  Paintbrush,
  SearchCheck,
  type LucideIcon,
} from "lucide-react";
import { useRef } from "react";

import { motion } from "framer-motion";

import Lenis from "@studio-freight/lenis";

const ServicesPage = () => {
  type servicesItem = {
    cardNumber: number;
    title: string;
    text: string;
    icon: LucideIcon;
  };

  const SERVICE_CARDS: readonly servicesItem[] = [
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

  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  const lenis = new Lenis();

  function raf(time: number) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);

  return (
    <motion.div
      className="px-0 md:px-20 "
      ref={container}
      initial={{ opacity: 0, y: 30 }}
      animate={{
        opacity: 1,
        y: 0,
        transition: { duration: 0.7, ease: "easeOut" },
      }}
    >
      {SERVICE_CARDS.map(({ cardNumber, title, text, icon: Icon }) => (
        <ServicesCard
          Icon={Icon}
          cardNumber={cardNumber}
          title={title}
          text={text}
          key={cardNumber}
          range={[cardNumber * 0.25, 1]}
          targetScale={1 - (SERVICE_CARDS.length - cardNumber) * 0.05}
          progress={scrollYProgress}
        />
      ))}
    </motion.div>
  );
};

export default ServicesPage;
