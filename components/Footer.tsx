"use client";

import React from "react";
import { motion } from "framer-motion";

import { SubscribeNewsletter } from "./SubscribeNewsletter";

import { siteConfig } from "@/config/site";

export const Footer = () => {
  const container = {
    initial: {
      y: 100,
      opacity: 0,
    },
    enter: {
      y: 0,
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        ease: "easeInOut",
        duration: 0.8,
        when: "beforeChildren",
      },
    },
  };

  const item = {
    initial: {
      opacity: 0,
    },
    enter: {
      opacity: 1,
      transition: {
        ease: "easeInOut",
        duration: 0.5,
      },
    },
  };

  return (
    <footer className="mt-8">
      <SubscribeNewsletter />

      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="col-span-1 lg:col-span-6 flex flex-col lg:flex-row mt-5">
          <div className="w-full lg:w-1/2 flex flex-row flex-wrap justify-between">
            {siteConfig.footerNavItems.map((navGroup) => (
              <motion.div
                key={navGroup.group}
                className="min-w-24 sm:w-1/3 lg:w-1/6 mb-10 sm:mb-0"
                initial="initial"
                variants={container}
                viewport={{ once: true }}
                whileInView="enter"
              >
                <p className="font-medium text-default-600">{navGroup.group}</p>
                <ul className="mt-6 space-y-4 text-sm">
                  {navGroup.items.map(({ href, label }) => (
                    <motion.li key={href} variants={item}>
                      <a
                        className="transition hover:opacity-75 text-default-600"
                        href={href}
                      >
                        {label}
                      </a>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
          <motion.ul
            className="w-full lg:w-1/2 flex mt-0 sm:mt-5 lg:mt-0 justify-start gap-6 lg:justify-end"
            initial="initial"
            variants={container}
            viewport={{ once: true }}
            whileInView="enter"
          >
            {siteConfig.socialNavItems.map(({ href, label, icon }) => (
              <motion.li key={href} variants={item}>
                <a
                  className="transition hover:opacity-75 text-default-600"
                  href={href}
                  rel="noreferrer"
                  target="_blank"
                >
                  <span className="sr-only">{label}</span>
                  {React.createElement(icon, {})}
                </a>
              </motion.li>
            ))}
          </motion.ul>
        </div>
        <p className="text-center mt-16 text-xs text-gray-700">
          Developed with ❤️ by Talha Akbar. Inspired by Zapify.
        </p>
      </div>
    </footer>
  );
};
