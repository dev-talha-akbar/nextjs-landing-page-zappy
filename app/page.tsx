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
import { GrowthTrendIcon } from "@/components/icons";

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

        <div
          className="hidden md:block absolute top-20 left-[50%] right-[calc(-1_*_(1512px_-_1280px)_/_2)] h-[calc(100%-5rem)] rounded-l-[4rem]"
          style={{
            backgroundImage: `url(${heroImage.src})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <Notification className="absolute left-[-50px] top-[30px]">
            <p>
              <b>Micheal</b> from <b>Hamburg, Germany</b> just signed up for a
              call
            </p>
          </Notification>

          <Notification className="absolute right-[150px] bottom-[30px]">
            <p>
              <b>Ahmed</b> from <b>Lahore, Pakistan</b> requested a demo
            </p>
          </Notification>
        </div>
      </section>
      <section className="flex flex-col gap-8 px-6 pt-20 items-center">
        <p className="text-semibold">
          Trusted by high converting sites including...
        </p>
        <div className="flex gap-16 opacity-50">
          {brandImages.map((brand, i) => (
            <Image key={i} src={brand.src} className="h-12 grayscale" />
          ))}
        </div>
      </section>
      <section className="flex gap-8 px-6 pt-20">
        <div className="w-[50%] pt-6 pr-6 bg-[#fafafa] rounded-lg">
          <Image src={notionFrame.src} />
        </div>
        <div className="w-[50%] py-4 px-12 text-center">
          <div className="flex gap-4">
            <GrowthTrendIcon size={30} className="text-primary" />
            <h4 className={heading({ size: "lg" })}>
              Increase credibility with Recent Activity
            </h4>
          </div>
        </div>
      </section>
    </>
  );
}
