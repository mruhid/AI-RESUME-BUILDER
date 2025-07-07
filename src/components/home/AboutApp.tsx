import { fadeIn, staggerContainer } from "@/lib/motion";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { TypingText } from "../TextEffect";

const AboutApp = () => {
  return (
    <motion.section className={`relative z-0 mx-auto px-6 py-2 lg:px-12`}>
      <div className="gradient-02 z-0" />
      <motion.div
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`mx-auto flex flex-col items-center justify-center gap-4`}
      >
        <TypingText
          title={"| About AI Resume Builder"}
          textStyle="text-center"
        />
        <motion.p
          variants={fadeIn("up", "tween", 0.2, 1)}
          className={`text-secondary-white mt-[8px] text-center text-[20px] font-normal sm:text-[32px] md:text-start`}
        >
          <span className="font-extrabold text-primary">ResumeAI Builder</span>{" "}
          is your intelligent companion for creating modern, professional
          resumes with ease. With powerful{" "}
          <span className="font-extrabold text-primary">AI assistance</span>,
          sleek design customization, and a user-friendly interface, building
          your dream resume takes just minutes. We offer{" "}
          <span className="font-extrabold text-primary">Free</span>,{" "}
          <span className="font-extrabold text-primary">Pro</span>, and{" "}
          <span className="font-extrabold text-primary">Pro Plus</span>{" "}
          subscription tiers — giving you full control over your experience and
          features. While payment functionality is enabled through{" "}
          <span className="font-extrabold text-primary">Stripe</span>, please
          note that we are currently in{" "}
          <span className="font-extrabold text-primary">Test Mode</span>.
          Explore confidently, test freely, and build your perfect resume —
          powered by smart tools and great design.
        </motion.p>

        <motion.div
          variants={fadeIn("up", "tween", 0.3, 1)}
          className="mt-[28px] h-[28px] w-[18px]"
        >
          <ArrowDown size={40} />
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default AboutApp;
