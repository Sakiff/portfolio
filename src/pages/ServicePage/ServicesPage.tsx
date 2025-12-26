import { motion } from "framer-motion";
import {
  Braces,
  CodeXml,
  MoveUpRight,
  Paintbrush,
  SearchCheck,
  type LucideIcon,
} from "lucide-react";
import { Link } from "react-router";
const ServicesPage = () => {
  type servicesItem = {
    cardNumber: number;
    title: string;
    text: string;
    icon: LucideIcon;
  };

  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const fadeUp = {
    hidden: {
      opacity: 0,
      y: 24,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7 },
      ease: "easeOut",
    },
  };

  const SERVICE_CARDS: readonly servicesItem[] = [
    {
      cardNumber: 1,
      title: "Web Development",
      text: "From frontend to backend, I develop scalable and secure web applications using the MERN stack. Clean architecture, maintainable code, and seamless API integrations are always a priority.",
      icon: CodeXml,
    },
    {
      cardNumber: 2,
      title: "UI/UX Implementation",
      text: "I turn designs into pixel-perfect, interactive experiences. With attention to spacing, motion, and usability, I ensure the final product feels smooth, natural, and user-friendly.",
      icon: Paintbrush,
    },
    {
      cardNumber: 3,
      title: "Website Performance Optimization",
      text: "I optimize websites for speed, SEO, and responsiveness. Faster load times, better Lighthouse scores, and improved user engagement come as a result.",
      icon: SearchCheck,
    },
    {
      cardNumber: 4,
      title: "API Integration & Backend Logic",
      text: "I integrate REST APIs and build backend logic with Node.js and .NET where needed, ensuring secure data handling and smooth communication between systems.",
      icon: Braces,
    },
  ];

  return (
    <div className="pt-10 px-0 md:px-20 flex items-center justify-center w-full">
      <motion.div
        className="grid grid-cols-1 xl:grid-cols-2 items-center justify-center w-full gap-10"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        {SERVICE_CARDS.map(({ cardNumber, title, text, icon: Icon }) => (
          <motion.div
            className=" min-h-65 rounded-lg bg-input/30 dark:bg-input/10 p-5 transition-all duration-1000 "
            variants={fadeUp}
            key={cardNumber}
          >
            <div className="flex items-center justify-between">
              <span className="text-3xl bg-input/20 p-1 rounded-lg w-10 flex items-center justify-center border-2 mb-3">
                <Icon />
              </span>
              <Link to={"/portfolio"}>
                <motion.span
                  className="text-3xl bg-input/20 p-1 rounded-lg w-20  flex items-center justify-center border-2 mb-3 cursor-pointer"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <MoveUpRight />
                </motion.span>
              </Link>
            </div>
            <div className="flex items-start justify-center flex-col gap-5">
              <h1 className="text-4xl ">{title} </h1>
              <p className="text-start">{text}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default ServicesPage;
