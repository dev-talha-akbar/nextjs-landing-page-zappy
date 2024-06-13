import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";

import { heading } from "@/components/primitives";

export const Footer = () => {
  return (
    <footer className="w-full mt-20 border-t border-default-100">
      <div className="px-6 py-20">
        <div className="flex flex-col gap-12 md:gap-8 w-[50%] mx-auto text-center">
          <h4 className={heading({ size: "sm" })}>
            Subscribe to our newsletter to receive latest updates
          </h4>
          <div className="flex lg:flex-row lg:gap-2 md:flex-col md:gap-4 gap-2">
            <Input placeholder="Enter your email address" variant="bordered" />
            <Button
              className="w-48 md:w-full lg:w-48"
              color="primary"
              variant="solid"
            >
              Subscribe
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};
