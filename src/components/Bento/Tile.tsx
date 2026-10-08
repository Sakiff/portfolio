import { motion, type HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

type TileProps = HTMLMotionProps<"div"> & {
  index?: number;
};

// A single bento card. Fades up once when it scrolls into view;
// `index` staggers neighbouring tiles.
const Tile = ({ className, index = 0, children, ...props }: TileProps) => {
  return (
    <motion.div
      className={cn("tile", className)}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
        delay: index * 0.06,
      }}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default Tile;
