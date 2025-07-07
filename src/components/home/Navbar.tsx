import { navVariants } from "@/lib/motion";
import { motion } from "framer-motion";
import { styles } from "./featuresData";
import { Menu } from "lucide-react";
import MenuSheet from "./MenuSheet";

const Navbar = () => {
  return (
    <motion.div
      variants={navVariants}
      initial="hidden"
      whileInView="show"
      className={`${styles.xPaddings} relative bg-gray-100 py-6`}
    >
      <div
        className={`${styles.innerWidth} mx-auto flex justify-between gap-8`}
      >
        <img
          src="/favicon.png"
          alt="favicon"
          className="h-[40px] w-[40px] object-contain"
        />
        <h2 className="text-[24px] font-extrabold leading-[30.24px] text-primary">
          AI Resume Builder
        </h2>
        <MenuSheet />
      </div>
    </motion.div>
  );
};

export default Navbar;
