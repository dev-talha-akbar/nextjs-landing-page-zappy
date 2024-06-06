import { Input } from "@nextui-org/input";
import { Button } from "@nextui-org/button";

import { title, subtitle } from "@/components/primitives";
import heroImage from "@/images/hero.jpg";

import { Notification } from "@/components/notification";

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
          className="absolute top-20 left-[50%] right-[calc(-1_*_(1512px_-_1280px)_/_2)] h-[calc(100%-4rem)] rounded-l-[4rem]"
          style={{
            backgroundImage: `url(${heroImage.src})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <Notification className="absolute left-[-50px] top-[30px] opacity-85">
            <p>
              <b>Jake</b> from <b>Lahore, Pakistan</b> just signed up for a call
            </p>
          </Notification>

          <Notification className="absolute right-[150px] bottom-[30px] opacity-85">
            <p>
              <b>Jake</b> from <b>Lahore, Pakistan</b> just signed up for a call
            </p>
          </Notification>
        </div>
      </section>
    </>
  );
}
