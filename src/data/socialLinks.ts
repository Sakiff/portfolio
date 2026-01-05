import { Github, Instagram, Linkedin, type LucideIcon } from "lucide-react";

export type SocialLinkIcon = {
  path: string;
  icon: LucideIcon;
};

export const SOCIAL_LINKS: readonly SocialLinkIcon[] = [
  { path: "https://github.com/Sakiff", icon: Github },
  {
    path: "https://www.linkedin.com/in/sakif-fataliyev-38b460370/",
    icon: Linkedin,
  },
  { path: "https://www.instagram.com/sakif.ftlyv/", icon: Instagram },
];
