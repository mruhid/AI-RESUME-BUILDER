"use client";
import { textContainer, textVariant2 } from "@/lib/motion";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export const TypingText = ({
  title,
  textStyle,
}: {
  title: string;
  textStyle?: string;
}) => (
  <motion.p
    variants={textContainer}
    className={cn(textStyle, "text-[14px] font-normal text-foreground/80")}
  >
    {Array.from(title).map((l, i) => (
      <motion.span variants={textVariant2} key={i}>
        {l === " " ? "\u00A0" : l}
      </motion.span>
    ))}
  </motion.p>
);

export const TitleText = ({
  title,
  textStyle,
}: {
  title: string | React.ReactNode;
  textStyle?: string;
}) => (
  <motion.h2
    variants={textVariant2}
    initial="hidden"
    whileInView="show"
    className={cn(
      textStyle,
      "mt-[8px] text-[40px] font-bold text-black md:text-[64px]",
    )}
  >
    {title}
  </motion.h2>
);
