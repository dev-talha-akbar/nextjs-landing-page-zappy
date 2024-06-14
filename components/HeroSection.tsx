import { Image } from "@nextui-org/image";
import { Input } from "@nextui-org/input";
import { Button } from "@nextui-org/button";
import NextImage from "next/image";

import { Notification } from "@/components/notification";
import heroImage from "@/images/hero.jpg";

export const HeroSection = () => {
  return (
    <section className="px-6 pt-20 relative">
      <div className="flex flex-col gap-4 w-full md:w-[45%]">
        <h1 className="font-semibold text-default-600 text-[2.3rem] lg:text-5xl leading-9">
          Increase
          <br />
          conversions by
          <br />
          3x with <span className="text-primary">Zappy</span>
        </h1>
        <h2 className="text-default-600">
          Thousands of companies use Zappy to convert visitors into leads and
          sales with the power of Social Proof Marketing.
        </h2>
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
            By signing up, I agree to Zappy Privacy Policy and Terms of Service
          </p>
        </div>
      </div>

      <div className="hidden md:flex absolute top-20 left-[50%] right-0 xl:right-[calc(-1_*_(min(100vw,1536px)_-_1280px)_/_2)] h-[calc(100%-5rem)]">
        <Image
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
        />
        <Notification className="absolute left-[-50px] top-[20px] lg:left-[-100px] lg:top-[40px]">
          <p>
            <b>Micheal</b> from <b>Hamburg</b> just signed up for a call
          </p>
        </Notification>
      </div>
    </section>
  );
};
