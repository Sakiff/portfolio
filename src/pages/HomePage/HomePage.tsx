import { Button } from "@/components/ui/button";
import {
  Download,
  Github,
  Instagram,
  Linkedin,
  type LucideIcon,
} from "lucide-react";

import { motion } from "framer-motion";

import styles from "./HomePage.module.css";

type SocialLinkIcon = {
  path: string;
  icon: LucideIcon;
};

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
} as const;

const imageVariant = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.9, ease: "easeOut" },
  },
} as const;

const SOCIAL_LINKS: readonly SocialLinkIcon[] = [
  { path: "https://github.com/Sakiff", icon: Github },
  {
    path: "https://www.linkedin.com/in/sakif-fataliyev-38b460370/",
    icon: Linkedin,
  },
  { path: "https://www.instagram.com/sakif.ftlyv/", icon: Instagram },
];

const HomePage = () => {
  return (
    <div className="flex items-center justify-center pt-0 lg:pt-20">
      <motion.div
        className="flex items-center justify-around pt-10 w-11/12 flex-col lg:flex-row gap-5 lg:gap-0 "
        variants={container}
        initial="hidden"
        animate="visible"
      >
        {/* Hero Text (Left Side) */}
        <motion.div
          className="flex items-center lg:items-start  flex-col gap-3 lg:gap-2 w-full lg:w-1/3"
          variants={container}
        >
          <motion.div className={styles.handUnderlineWrapper} variants={fadeUp}>
            <span className="relative z-10 text-xl">MERN Stack Developer</span>

            <svg
              className={styles.handUnderlineSvg}
              viewBox="0 0 200 20"
              preserveAspectRatio="none"
            >
              <path
                className={styles.handUnderlinePath}
                d="
        M5 12
        C 20 16, 40 8, 60 12
        C 80 16, 100 9, 120 13
        C 140 17, 160 10, 195 12
      "
              />
            </svg>
          </motion.div>
          <motion.strong className={styles.fontSize} variants={fadeUp}>
            Hello I'm
          </motion.strong>
          <motion.strong
            className={` text-amber-700 ${styles.fontSize}`}
            variants={fadeUp}
          >
            Sakif
          </motion.strong>
          <motion.p
            className="text-lg text-center lg:text-start"
            variants={fadeUp}
          >
            Frontend developer specializing in
            <strong className="text-blue-400"> React</strong>, building scalable
            UI systems with <strong>Tailwind CSS</strong>, crafting smooth
            animations with{" "}
            <strong className="text-pink-500">Framer Motion</strong>, and
            integrating them with{" "}
            <strong className="text-green-600">Node.js</strong>-powered
            backends.
          </motion.p>

          <motion.div
            className="flex items-center justify-center gap-3"
            variants={fadeUp}
          >
            <a href="/cv/sakif_cv.pdf" download>
              <Button variant={"outline"} className="uppercase cursor-pointer">
                Download CV <Download />
              </Button>
            </a>

            {SOCIAL_LINKS.map(({ path, icon: Icon }) => (
              <a href={path} target="_blank" key={path}>
                <Button variant={"outline"} className="cursor-pointer">
                  <Icon />
                </Button>
              </a>
            ))}
          </motion.div>
        </motion.div>

        {/* Hero Section Photo (Right Side) */}
        <motion.div
          className={`border-2 ${styles.borderAnimation}`}
          variants={imageVariant}
          initial="hidden"
          animate="visible"
        >
          <img
            src="/assets/hero_image.jpeg"
            alt="profile_photo"
            className="w-full h-full "
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default HomePage;
