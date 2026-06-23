import ServicesCard from "@/components/ServicesCard/ServicesCard";
import { SERVICE_CARDS } from "@/data/serviceCards";
import { useScroll } from "framer-motion";
import { useRef } from "react";
import { motion } from "framer-motion";
import Lenis from "@studio-freight/lenis";
import { useTranslation } from "react-i18next";

const ServicesPage = () => {
  const { t } = useTranslation();
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

  // Merge static card data (icon, number) with translated text
  const translatedCards = SERVICE_CARDS.map((card, i) => ({
    ...card,
    title: t(`services.cards.${i}.title`),
    text: t(`services.cards.${i}.text`),
  }));

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
      {translatedCards.map(({ cardNumber, title, text, icon: Icon }) => (
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
