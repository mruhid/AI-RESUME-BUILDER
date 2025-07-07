import { motion } from "framer-motion";
import { insights, styles } from "./featuresData";
import { staggerContainer } from "@/lib/motion";
import { TitleText, TypingText } from "../TextEffect";
import InsightCard from "./InsightCard";

export default function Insights() {
  return (
    <section className={`${styles.paddings} relative z-10`}>
      <motion.div
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}
      >
        <TypingText title="| Highlight " textStyle="text-center" />
        <TitleText title={<>Highlight About Us</>} textStyle="text-center" />
        <div className="mt-[50px] flex flex-col gap-[30px]">
          {insights.map((item, index) => (
            <InsightCard key={`insight-${index}`} {...item} index={index + 1} />
          ))}
        </div>
      </motion.div>
    </section>
  );
}
