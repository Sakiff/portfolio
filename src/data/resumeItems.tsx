import { type JSX } from "react";
import Experience from "@/components/ResumeDetails/Experience";
import Education from "@/components/ResumeDetails/Education";
import Skills from "@/components/ResumeDetails/Skills";
import AboutMe from "@/components/ResumeDetails/AboutMe";

export type ResumeItem = {
  label: string;
  key: string;
  component: JSX.Element;
};

export const RESUME_ITEMS: ResumeItem[] = [
  { key: "experience", label: "Experience", component: <Experience /> },
  { key: "education", label: "Education", component: <Education /> },
  { key: "skills", label: "Skills", component: <Skills /> },
  { key: "aboutMe", label: "About me", component: <AboutMe /> },
];
