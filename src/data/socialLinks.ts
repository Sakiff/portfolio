import { Github, Instagram, Linkedin, type LucideIcon } from "lucide-react";

export type SocialLinkIcon = {
  label: string;
  handle: string;
  path: string;
  icon: LucideIcon;
};

export const SOCIAL_LINKS: readonly SocialLinkIcon[] = [
  {
    label: "GitHub",
    handle: "@Sakiff",
    path: "https://github.com/Sakiff",
    icon: Github,
  },
  {
    label: "LinkedIn",
    handle: "Sakif Fataliyev",
    path: "https://www.linkedin.com/in/sakif-fataliyev-38b460370/",
    icon: Linkedin,
  },
  {
    label: "Instagram",
    handle: "@sakif.ftlyv",
    path: "https://www.instagram.com/sakif.ftlyv/",
    icon: Instagram,
  },
];

export const EMAIL = "ftliyevsakif@gmail.com";

// Phone from the CV (+994 50 585 32 67), in wa.me international format.
export const WHATSAPP_URL = "https://wa.me/994505853267";
