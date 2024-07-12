"use client";

import { useState } from "react";
import { Image } from "@nextui-org/image";
import { Input } from "@nextui-org/input";
import { Button } from "@nextui-org/button";
import { motion } from "framer-motion";
import NextImage from "next/image";

import { Partners } from "@/components/Partners";
import { Notification } from "@/components/notification";
import heroImage from "@/images/hero.jpg";

export const HeroSection = () => {
  const [isHeroImageLoaded, setIsHeroImageLoaded] = useState(false);
  const [isHeroImageShown, setIsHeroImageShown] = useState(false);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: "100px" },
    show: { opacity: 1, y: 0 },
  };

  const transition = { duration: 0.5, ease: "easeInOut" };

  return (
    <section>
      <div className="px-6 pt-20 relative">
        <motion.div
          animate="show"
          className="flex flex-col gap-4 w-full md:w-[45%]"
          initial="hidden"
          variants={container}
          onAnimationComplete={() => setIsHeroImageShown(true)}
        >
          <motion.div transition={transition} variants={item}>
            <h1 className="font-semibold text-default-600 text-[2.3rem] lg:text-5xl leading-9">
              Increase
              <br />
              conversions by
              <br />
              3x with <span className="text-primary">Zappy</span>
            </h1>
          </motion.div>
          <motion.div transition={transition} variants={item}>
            <h2 className="text-default-600">
              Thousands of companies use Zappy to convert visitors into leads
              and sales with the power of Social Proof Marketing.
            </h2>
          </motion.div>
          <motion.div transition={transition} variants={item}>
            <div className="flex flex-col gap-4 mt-4">
              <div className="flex lg:flex-row lg:gap-2 md:flex-col md:gap-4 gap-2">
                <Input placeholder="Enter your email address" />
                <Button
                  className="w-48 md:w-full lg:w-48"
                  color="primary"
                  variant="solid"
                >
                  Start free trial
                </Button>
              </div>
              <p className="text-sm text-default-400">
                By signing up, I agree to Zappy Privacy Policy and Terms of
                Service
              </p>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          animate={{ opacity: isHeroImageShown ? 1 : 0 }}
          className="hidden md:flex absolute top-20 left-[50%] right-0 xl:right-[calc(-1_*_(min(100vw,1536px)_-_1280px)_/_2)] h-[calc(100%-5rem)]"
          initial={{ opacity: 0 }}
          transition={transition}
        >
          <Image
            disableAnimation
            alt="Two coworkers celebrating success"
            as={NextImage}
            className="object-cover w-full h-full object-center -z-1"
            classNames={{
              img: "!rounded-r-none rounded-l-[4rem]",
              wrapper: "!rounded-r-none rounded-l-[4rem] !w-full !max-w-full",
            }}
            height={380}
            src={heroImage.src}
            width={768}
            onLoad={() => {
              setIsHeroImageLoaded(true);
            }}
          />
          {isHeroImageLoaded && isHeroImageShown && (
            <motion.div
              className="lg:[--x-from:-100px] lg:[--x-to:-100px] lg:[--y-to:40px]"
              initial={{
                opacity: 0,
                x: "var(--x-from,-50px)",
                y: "var(--y-from,100px)",
                position: "absolute",
              }}
              transition={{ delay: 2, ease: "easeInOut" }}
              viewport={{ once: true }}
              whileInView={{
                opacity: 1,
                x: "var(--x-to,-50px)",
                y: "var(--y-to,20px)",
              }}
            >
              <Notification>
                <p>
                  <span className="font-semibold">Micheal</span> from{" "}
                  <span className="font-semibold">Hamburg</span> just signed up
                  for a call
                </p>
              </Notification>
            </motion.div>
          )}
        </motion.div>
      </div>

      <Partners
        isHeroAnimationComplete={isHeroImageLoaded && isHeroImageShown}
      />
    </section>
  );
};
