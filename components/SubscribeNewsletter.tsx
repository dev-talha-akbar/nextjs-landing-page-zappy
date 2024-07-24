import React, { useRef } from "react";
import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import { motion, useInView } from "framer-motion";

export const SubscribeNewsletter = () => {
  const ref = useRef(null);

  const inView = useInView(ref, {
    amount: 0.5,
    once: true,
  });

  return (
    <motion.div
      ref={ref}
      animate={inView ? { y: 0, opacity: 1 } : {}}
      className="px-6 py-20"
      initial={{ y: 100, opacity: 0 }}
      transition={{ ease: "easeInOut", duration: 0.5 }}
    >
      <div className="flex flex-col gap-8 md:w-[75%] lg:w-[50%] mx-auto text-center">
        <h4 className="text-lg font-bold text-default-600">
          Subscribe to our newsletter
        </h4>
        <div className="flex gap-2">
          <Input placeholder="Enter your email address" variant="bordered" />
          <Button className="w-48" color="primary" variant="solid">
            Subscribe
          </Button>
        </div>
      </div>
    </motion.div>
  );
};
