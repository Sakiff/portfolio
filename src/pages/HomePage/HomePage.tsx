import { Button } from "@/components/ui/button";
import {
  Download,
  Github,
  Instagram,
  Linkedin,
  type LucideIcon,
} from "lucide-react";

import styles from "./HomePage.module.css";

type SocialLinkIcon = {
  path: string;
  icon: LucideIcon;
};

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
      <div className="flex items-center justify-around pt-10 w-11/12 flex-col lg:flex-row gap-5 lg:gap-0 ">
        {/* Hero Text (Left Side) */}
        <div className="flex items-center lg:items-start  flex-col gap-3 lg:gap-2 w-full lg:w-1/3">
          <div className={styles.handUnderlineWrapper}>
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
          </div>
          <strong className={styles.fontSize}>Hello I'm</strong>
          <strong className={` text-amber-700 ${styles.fontSize}`}>
            Fataliyev Sakif
          </strong>
          <p className="text-lg text-center lg:text-start">
            I craft digital experiences that feel simple, smooth, and alive.
            Where creativity meets clean and purposeful code.
          </p>

          <div className="flex items-center justify-center gap-3">
            <Button variant={"outline"} className="uppercase cursor-pointer">
              Download CV <Download />
            </Button>

            {SOCIAL_LINKS.map(({ path, icon: Icon }) => (
              <a href={path} target="_blank" key={path}>
                <Button variant={"outline"} className="cursor-pointer">
                  <Icon />
                </Button>
              </a>
            ))}
          </div>
        </div>

        {/* Hero Section Photo (Right Side) */}
        <div className={`border-2 ${styles.borderAnimation}`}>
          <img
            src="/assets/hero_image.jpeg"
            alt="profile_photo"
            className="w-full h-full "
          />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
