import Link from "next/link";
import { motion } from "framer-motion";
import { footerVariants } from "@/lib/motion";
import { socials, styles } from "./featuresData";

const Footer = () => (
  <motion.footer
    variants={footerVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.xPaddings} relative bg-[#050713] py-8`}
  >
    <div className="footer-gradient" />
    <div className={`${styles.innerWidth} mx-auto flex flex-col gap-8`}>
      <div className="flex flex-wrap items-center justify-between gap-5">
        <h4 className="text-[44px] font-bold text-white md:text-[64px]">
          AI Resume Builder
        </h4>
        <Link href="https://my-gallery-indol.vercel.app/">
          <button
            type="button"
            className="flex h-fit items-center gap-[12px] rounded-[32px] bg-primary px-6 py-4"
          >
            <img
              src="/headset.svg"
              alt="headset"
              className="h-[24px] w-[24px] object-contain"
            />
            <span className="text-[16px] font-normal text-white">
              Enter portfolio
            </span>
          </button>
        </Link>
      </div>

      <div className="flex flex-col">
        <div className="mb-[50px] h-[2px] bg-white opacity-10" />

        <div className="flex flex-wrap items-center justify-between gap-4">
          <h4 className="text-[24px] font-extrabold text-white">
            Ruhid Mammadzade
          </h4>
          <p className="text-[14px] font-normal text-white opacity-50">
            Copyright © {new Date().getFullYear()} AI Resume Builder. All
            rights reserved.
          </p>

          <div className="flex items-center gap-4">
            {socials.map((social) => (
              <Link key={social.name} href={social.url}>
                <img
                  src={social.src}
                  alt={social.name}
                  className={`${
                    social.name === "Phone" || social.name === "Email"
                      ? "h-10 w-10"
                      : "h-8 w-8"
                  } ${social.name === "Phone" ? "rounded-full" : ""} cursor-pointer object-contain`}
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  </motion.footer>
);

export default Footer;
