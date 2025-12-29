import { Button } from "@/components/ui/button";
import { useState, type JSX } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Experience from "@/components/ResumeDetails/Experience";
import Education from "@/components/ResumeDetails/Education";
import Skills from "@/components/ResumeDetails/Skills";
import AboutMe from "@/components/ResumeDetails/AboutMe";

const ResumePage = () => {
  type ResumeItem = {
    label: string;
    key: string;
    component: JSX.Element;
  };

  const [selected, setSelected] = useState("experience");

  const onSelect = (key: string) => setSelected(key);

  const RESUME_ITEMS: ResumeItem[] = [
    { key: "experience", label: "Experience", component: <Experience /> },
    { key: "education", label: "Education", component: <Education /> },
    { key: "skills", label: "Skills", component: <Skills /> },
    { key: "aboutMe", label: "About me", component: <AboutMe /> },
  ];

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
    <motion.div
      className="grid xl:grid-cols-2 grid-cols-1 gap-y-10 items-start justify-center pt-15"
      variants={containerVariant}
      initial="hidden"
      animate="visible"
    >
      {/* Left: Tabs */}
      <motion.div
        className="flex items-start xl:items-center justify-center flex-col gap-10"
        variants={containerVariant}
      >
        <h1 className="text-4xl font-semibold ">Why hire me?</h1>
        <div className="flex flex-col gap-5 w-full xl:w-100 ">
          {RESUME_ITEMS.map(({ label, key }) => (
            <Button
              key={key}
              variant={selected === key ? "secondary" : "outline"}
              className="cursor-pointer rounded-b-4xl h-15 text-xl"
              onClick={() => onSelect(key)}
            >
              {label}
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
            {
              RESUME_ITEMS.find((section) => section.key === selected)
                ?.component
            }
          </motion.div>
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default ResumePage;
