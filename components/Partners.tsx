"use client";

import { motion } from "framer-motion";
import { Image } from "@nextui-org/image";

import logoipsum264 from "@/images/logoipsum-264.svg";
import logoipsum226 from "@/images/logoipsum-226.svg";
import logoipsum212 from "@/images/logoipsum-212.svg";
import logoipsum243 from "@/images/logoipsum-243.svg";

const brandImages = [logoipsum243, logoipsum212, logoipsum264, logoipsum226];

export const Partners = () => {
  const container = {
    initial: { opacity: 0 },
    enter: {
      opacity: 1,
      transition: {
        delay: 2.5,
      },
    },
  };

  const brandsContainer = {
    initial: {},
    enter: {
      transition: {
        staggerChildren: 0.3,
        delayChildren: 2.5,
      },
    },
  };

  const brandImage = {
    initial: { opacity: 0, y: "100px" },
    enter: {
      opacity: 0.5,
      y: 0,
    },
  };

  return (
    <motion.div
      className="hidden md:flex flex-col gap-8 px-6 pt-20 mt-10 items-center"
      initial="initial"
      variants={container}
      viewport={{ once: true }}
      whileInView="enter"
    >
      <p className="text-default-400  md:text-center">
        Trusted by high converting sites including...
      </p>
      <motion.div
        className="flex gap-16 opacity-50"
        initial="initial"
        variants={brandsContainer}
        viewport={{ once: true }}
        whileInView="enter"
      >
        {brandImages.map((brand, i) => (
          <motion.div key={i} variants={brandImage}>
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
