import { staggerContainer } from "@/lib/motion";
import { motion } from "framer-motion";
import { useState } from "react";
import { TypingText } from "../TextEffect";
import FeatureItem from "./FeatureItem";
import { featuresData } from "./featuresData";

export default function AppFeatures() {
  const [activeFeature, setActiveFeature] = useState(0);
  return (
    <motion.main
      variants={staggerContainer()}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className="mx-auto mt-10 py-6 text-center"
    >
      <TypingText title={"| App Features"} textStyle="text-center" />
      <div className="m-3 flex w-full flex-col items-center justify-center gap-3 space-y-5 p-3 lg:flex-row lg:justify-around">
        {featuresData.map((feature, i) => (
          <FeatureItem
            key={feature.id}
            feature={feature}
            count={i}
            activeFeature={activeFeature}
            onFeatureChange={setActiveFeature}
          />
        ))}
      </div>
    </motion.main>
  );
}
