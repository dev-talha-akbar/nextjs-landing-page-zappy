"use client";

import { motion } from "framer-motion";
import { Image } from "@nextui-org/image";

import logoipsum264 from "@/images/logoipsum-264.svg";
import logoipsum226 from "@/images/logoipsum-226.svg";
import logoipsum212 from "@/images/logoipsum-212.svg";
import logoipsum243 from "@/images/logoipsum-243.svg";

const brandImages = [logoipsum243, logoipsum212, logoipsum264, logoipsum226];

type PartnersProps = {
  isHeroAnimationComplete: boolean;
};

export const Partners = ({ isHeroAnimationComplete }: PartnersProps) => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: isHeroAnimationComplete ? 1 : 0,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: "100px" },
    show: {
      opacity: isHeroAnimationComplete ? 0.3 : undefined,
      y: isHeroAnimationComplete ? 0 : undefined,
    },
  };

  return (
    <motion.div
      animate="show"
      className="hidden md:flex flex-col gap-8 px-6 pt-20 items-center"
      initial="hidden"
      variants={container}
    >
      <p className="text-default-600 md:text-center">
        Trusted by high converting sites including...
      </p>
      <motion.div
        animate="show"
        className="flex gap-16 opacity-50"
        initial="hidden"
        variants={container}
      >
        {brandImages.map((brand, i) => (
          <motion.div key={i} variants={item}>
            <Image
              classNames={{
                img: "h-12 grayscale",
              }}
              src={brand.src}
            />
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};
