import { Button } from "@/components/ui/button";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import type { ReactElement } from "react";
import Experience from "@/components/ResumeDetails/Experience";
import Education from "@/components/ResumeDetails/Education";
import Skills from "@/components/ResumeDetails/Skills";
import AboutMe from "@/components/ResumeDetails/AboutMe";

const RESUME_KEYS = ["experience", "education", "skills", "aboutMe"] as const;
type ResumeKey = (typeof RESUME_KEYS)[number];

const COMPONENTS: Record<ResumeKey, ReactElement> = {
  experience: <Experience />,
  education: <Education />,
  skills: <Skills />,
  aboutMe: <AboutMe />,
};

const ResumePage = () => {
  const { t } = useTranslation();
  const [selected, setSelected] = useState<ResumeKey>("experience");

  const containerVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const contentVariant = {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.4 } },
    exit: { opacity: 0, x: -20, transition: { duration: 0.3 } },
  };

  return (
    <motion.div className="grid xl:grid-cols-2 grid-cols-1 gap-y-10 items-start justify-center pt-15 xl:pr-20">
      {/* Left: Tabs */}
      <motion.div
        className="flex items-start xl:items-center justify-center flex-col gap-10"
        variants={containerVariant}
        initial="hidden"
        animate="visible"
      >
        <h1 className="text-4xl font-semibold">{t("resume.whyHireMe")}</h1>
        <div className="flex flex-col gap-5 w-full xl:w-100">
          {RESUME_KEYS.map((key) => (
            <Button
              key={key}
              variant={selected === key ? "secondary" : "outline"}
              className="cursor-pointer rounded-b-4xl h-15 text-xl"
              onClick={() => setSelected(key)}
            >
              {t(`resume.tabs.${key}`)}
            </Button>
          ))}
        </div>
      </motion.div>

      {/* Right: Tab content */}
      <div className="w-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={selected}
            variants={contentVariant}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {COMPONENTS[selected]}
          </motion.div>
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default ResumePage;
