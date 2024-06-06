import { Input } from "@nextui-org/input";
import { Button } from "@nextui-org/button";

import { title, subtitle } from "@/components/primitives";
import heroImage from "@/images/hero.jpg";

export default function Home() {
  return (
    <>
      <section className="px-6 pt-20 relative">
        <div className="flex flex-col gap-4 w-[40%]">
          <h1 className={title({ size: "md" })}>
            Increase
            <br />
            conversions by
            <br />
            3x with{" "}
            <span className={title({ color: "violet", size: "md" })}>
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
          className="absolute top-20 left-[50%] right-[calc(-1_*_(1512px_-_1280px)_/_2)] h-full rounded-l-[4rem]"
          style={{
            backgroundImage: `url(${heroImage.src})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      </section>
    </>
  );
}
