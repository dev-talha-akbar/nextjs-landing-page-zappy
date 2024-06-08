import { Input } from "@nextui-org/input";
import { Button } from "@nextui-org/button";
import { Image } from "@nextui-org/image";

import { title, subtitle, heading } from "@/components/primitives";
import { Notification } from "@/components/notification";

import heroImage from "@/images/hero.jpg";

import notionFrame from "@/images/notion-frame.png";

import logoipsum264 from "@/images/logoipsum-264.svg";
import logoipsum226 from "@/images/logoipsum-226.svg";
import logoipsum212 from "@/images/logoipsum-212.svg";
import logoipsum243 from "@/images/logoipsum-243.svg";

import { Feature } from "@/components/feature";
import clsx from "clsx";

const brandImages = [logoipsum243, logoipsum212, logoipsum264, logoipsum226];

export default function Home() {
  return (
    <>
      <section className="px-6 pt-20 relative">
        <div className="flex flex-col gap-4 w-full md:w-[40%]">
          <h1 className={title({ size: "md" })}>
            Increase
            <br />
            conversions by
            <br />
            3x with{" "}
            <span className={title({ color: "primary", size: "md" })}>
              Zappy
            </span>
          </h1>
          <h2 className={subtitle({ class: "mt-4" })}>
            Thousands of companies use Zappy to convert visitors into leads and
            sales with the power of Social Proof Marketing.
          </h2>
          <div className="flex flex-col gap-4 mt-4">
            <div className="flex gap-2">
              <Input placeholder="Enter your email address" />
              <Button className="w-48" color="primary" variant="solid">
                Start free trial
              </Button>
            </div>
            <p className="text-sm text-default-400">
              By signing up, I agree to Zappy Privacy Policy and Terms of
              Service
            </p>
          </div>
        </div>

        <div className="hidden md:flex absolute top-20 left-[50%] right-[calc(-1_*_(1512px_-_1280px)_/_2)] h-[calc(100%-5rem)]">
          <Image
            classNames={{
              img: "!rounded-r-none rounded-l-[4rem]",
              wrapper: "!rounded-r-none rounded-l-[4rem] !w-full !max-w-full",
            }}
            className="object-cover w-full max-h-full object-center -z-1"
            src={heroImage.src}
          />
          <Notification className="absolute left-[-100px] top-[40px]">
            <p>
              <b>Micheal</b> from <b>Hamburg</b> just signed up for a call
            </p>
          </Notification>
        </div>
      </section>
      <section className="flex flex-col gap-8 px-6 pt-20 items-center">
        <p className={clsx(subtitle(), "text-center")}>
          Trusted by high converting sites including...
        </p>
        <div className="flex gap-16 opacity-50">
          {brandImages.map((brand, i) => (
            <Image key={i} src={brand.src} className="h-12 grayscale" />
          ))}
        </div>
      </section>
      <section className="flex gap-8 xl:gap-32 px-6 pt-20 items-center">
        <div className="w-full rounded-lg">
          <Image src={notionFrame.src} />
        </div>
        <Feature title="Advanced Analytics for Insightful Marketing">
          <p>
            Zappy advanced analytics provide deep insights into customer
            behavior, allowing you to tailor your marketing strategies
            effectively.
          </p>
          <p>
            With real-time data tracking and comprehensive reports, you can
            identify the best-performing campaigns and optimize them for even
            better results.
          </p>
        </Feature>
      </section>
      <section className="flex gap-8 xl:gap-32 px-6 pt-20 items-center">
        <Feature title="Automated Outreach for Enhanced Engagement">
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
        <div className="w-full">
          <div className="flex w-[80%] mx-auto gap-4">
            <div className="flex flex-col gap-2">
              <span className={title({ size: "lg", color: "primary" })}>
                76%
              </span>
              <p>Of people abandon forms after beginning to fill them out*</p>
            </div>
            <div className="flex flex-col gap-2">
              <span className={title({ size: "lg", color: "primary" })}>
                29%
              </span>
              <p>Of people abandon forms due to security concerns**</p>
            </div>
          </div>
        </div>
      </section>
      <section className="flex gap-8 xl:gap-32 px-6 pt-20 items-center">
        <div className="w-full rounded-lg">
          <Image src={notionFrame.src} />
        </div>
        <Feature title="Lead Scoring and Segmentation for Prioritized Efforts">
          <p>
            Zappy features robust lead scoring and segmentation tools. These
            allow you to categorize and prioritize leads based on their
            engagement levels and likelihood to convert.
          </p>
          <p>
            By focusing your efforts on the most promising prospects, you can
            ensure a more efficient sales process and higher conversion rates.
          </p>
        </Feature>
      </section>
    </>
  );
}
