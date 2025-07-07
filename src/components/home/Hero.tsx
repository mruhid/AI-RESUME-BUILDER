import Logo from "@/assets/logo.png";
import ResumeImage from "@/assets/Ruhid-CV.png";
import { slideIn, staggerContainer, textVariant } from "@/lib/motion";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";

export default function Hero() {
  const fadeVariant = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { delay: 0.2, duration: 0.5 } },
  };
  return (
    <motion.main
      variants={staggerContainer()}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className="flex min-h-screen flex-col items-center justify-center gap-6 bg-gray-100 px-5 py-12 text-center text-gray-900 md:flex-row md:text-start lg:gap-12"
    >
      <div className="relative z-10 max-w-prose space-y-3">
        <motion.div variants={fadeVariant} initial="hidden" animate="show">
          <Image
            src={Logo}
            alt="Logo"
            width={150}
            height={150}
            className="mx-auto md:ms-0"
          />
        </motion.div>

        <motion.h1
          variants={textVariant(1.1)}
          className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl"
        >
          Create the{" "}
          <span className="inline-block bg-gradient-to-r from-primary/50 to-primary bg-clip-text text-transparent">
            Perfect Resume
          </span>{" "}
          in Minutes
        </motion.h1>
        <p className="text-lg text-gray-500">
          Our <span className="font-bold">AI resume builder</span> helps you
          design a professional resume with easy method.
        </p>
        <Button variant={"premium"} size={"forPremium"} asChild>
          <Link href={"/resumes"}>Get started</Link>
        </Button>
      </div>
      <div>
        <motion.div
          variants={slideIn("right", "tween", 0.3, 1)}
          className="relative mt-4"
        >
          <div className="absolute -top-[30px] h-full w-full rounded-tr-[140px] bg-gradient-to-r from-primary to-indigo-900 lg:rotate-[1.5deg]" />

          <Image
            src={ResumeImage}
            alt="Resume preview"
            width={500}
            className="reshadow-md relative z-10 rounded-tr-[140px] lg:rotate-[1.5deg]"
          />
        </motion.div>
      </div>
    </motion.main>
  );
}
