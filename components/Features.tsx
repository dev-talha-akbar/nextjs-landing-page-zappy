"use client";

import clsx from "clsx";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Image } from "@nextui-org/image";

import notionFrame from "@/images/notion-frame.png";

export const Features = () => {
  return (
    <div className="mt-20">
      <Feature
        aside={<Image src={notionFrame.src} />}
        title="Advanced Analytics for Insightful Marketing"
      >
        <p>
          Zappy advanced analytics provide deep insights into customer behavior,
          allowing you to tailor your marketing strategies effectively.
        </p>
        <p>
          With real-time data tracking and comprehensive reports, you can
          identify the best-performing campaigns and optimize them for even
          better results.
        </p>
      </Feature>

      <Feature
        aside={
          <div className="flex w-full md:w-[80%] mx-auto gap-4">
            <div className="flex flex-col gap-2">
              <span className="inline font-semibold text-primary text-4xl lg:text-6xl">
                76%
              </span>
              <p>Of people abandon forms after beginning to fill them out*</p>
            </div>
            <div className="flex flex-col gap-2">
              <span className="inline font-semibold text-primary text-4xl lg:text-6xl">
                29%
              </span>
              <p>Of people abandon forms due to security concerns**</p>
            </div>
          </div>
        }
        asidePlacement="end"
        title="Automated Outreach for Enhanced Engagement"
      >
        <p>
          Zappy includes automated outreach capabilities that streamline your
          communication with potential leads.
        </p>
        <p>
          Through personalized email campaigns, follow-ups, and drip marketing
          sequences, you can engage with prospects at the right time with the
          right message, significantly enhancing the likelihood of conversion.
        </p>
      </Feature>

      <Feature
        aside={<Image src={notionFrame.src} />}
        title="Lead Scoring and Segmentation for Prioritized Efforts"
      >
        <p>
          Zappy features robust lead scoring and segmentation tools. These allow
          you to categorize and prioritize leads based on their engagement
          levels and likelihood to convert.
        </p>
        <p>
          By focusing your efforts on the most promising prospects, you can
          ensure a more efficient sales process and higher conversion rates.
        </p>
      </Feature>
    </div>
  );
};

const Feature = ({ children, title, aside, asidePlacement = "start" }: any) => {
  const ref = useRef(null);

  const inView = useInView(ref, {
    amount: 0.5,
    once: true,
  });

  return (
    <motion.section
      ref={ref}
      animate={{
        opacity: inView ? 1 : 0,
        y: inView ? 0 : 100,
        transition: { duration: 1 },
      }}
      className={clsx(
        "flex gap-4 md:gap-8 xl:gap-32 p-6 mt-16 lg:mt-24 items-center",
        {
          "flex-col md:flex-row": asidePlacement === "start",
          "flex-col md:flex-row-reverse": asidePlacement === "end",
        },
      )}
      initial={{
        opacity: 0,
        y: 100,
      }}
      viewport={{ once: true }}
    >
      <div className="w-full">{aside}</div>
      <div className="w-full relative py-4">
        <span className="hidden md:block absolute top-0 left-0 w-full h-[3px] rounded-[3px] bg-gray-100" />
        <motion.span
          animate={{
            width: inView ? "33%" : 0,
            transition: {
              duration: 1,
              ease: "easeInOut",
            },
          }}
          className="hidden md:block absolute top-0 left-0 h-[3px] rounded-[3px] bg-[linear-gradient(to_right,_#ffffff,_#5a34e3)]"
          initial={{ width: 0 }}
          viewport={{ once: true }}
        />
        <div className="flex flex-col gap-4 w-full md:w-[85%] mx-auto">
          <div className="flex gap-4 pt-4">
            <h4 className="text-lg font-bold text-default-600">{title}</h4>
          </div>
          {children}
        </div>
      </div>
    </motion.section>
  );
};
