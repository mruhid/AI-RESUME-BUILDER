import Link from "next/link";
import { Button } from "../ui/button";
import { motion } from "framer-motion";
import { fadeIn } from "@/lib/motion";

interface FeatureItemProps {
  activeFeature: number;
  count: number;
  onFeatureChange: (feature: number) => void;
  feature: {
    id: number;
    title: string;
    description: string;
    imgSrc: string;
  };
}

export default function FeatureItem({
  activeFeature,
  count,
  onFeatureChange,
  feature,
}: FeatureItemProps) {
  const isActive = count === activeFeature;

  return (
    <motion.div
      variants={fadeIn("rihht", "spring", (count + 1) * 0.5, 0.75)}
      onClick={() => onFeatureChange(count)}
      className={`relative border-2 border-primary/50 shadow-sm ${isActive ? "h-md" : "h-[150px]"} w-full lg:h-[700px] ${
        isActive ? "lg:max-w-[500px]" : "lg:max-w-[200px]"
      } z-10 cursor-pointer overflow-hidden rounded-lg`}
    >
      <img
        src={feature.imgSrc}
        alt="Feature img"
        className="z-0 h-full w-full object-cover"
      />
      {isActive ? (
        <div className="absolute bottom-0 h-[200px] w-full bg-black/50 px-2">
          <div className="flex flex-col items-center justify-center gap-3">
            <p className="text-center text-2xl font-semibold text-white">
              {feature.title}
            </p>
            <p className="text-center text-sm text-gray-200">
              {feature.description}
            </p>
            <Button
              className="h-12 w-full rounded-md"
              variant={"premium"}
              asChild
            >
              <Link href={"/resumes"}>Start now</Link>
            </Button>
          </div>
        </div>
      ) : (
        <div className="absolute z-0 flex h-[100px] items-center justify-center rounded-lg bg-[rgba(0,0,0,0.5)] p-2 text-center text-[18px] font-semibold text-white sm:text-[26px] lg:bottom-24 lg:origin-[0,0] lg:rotate-[-90deg]">
          <p>{feature.title}</p>
        </div>
      )}
    </motion.div>
  );
}
