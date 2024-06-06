import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { button as buttonStyles } from "@nextui-org/theme";

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";

import heroImage from "@/images/hero.jpg";

export default function Home() {
  return (
    <>
      <section className="flex flex-col gap-4 py-8 md:py-10">
        <div className="inline-block w-lg max-w-[50%]">
          <h1 className={title({ size: "lg" })}>
            Increase conversions by 3x with{" "}
            <span className={title({ color: "violet", size: "lg" })}>
              Zappy
            </span>
          </h1>
          <h2 className={subtitle({ class: "mt-4" })}>
            Beautiful, fast and modern React UI library.
          </h2>
        </div>

        <div className="flex gap-3">
          <Link
            isExternal
            className={buttonStyles({
              color: "primary",
              radius: "full",
              variant: "shadow",
            })}
            href={siteConfig.links.docs}
          >
            Documentation
          </Link>
          <Link
            isExternal
            className={buttonStyles({ variant: "bordered", radius: "full" })}
            href={siteConfig.links.github}
          >
            <GithubIcon size={20} />
            GitHub
          </Link>
        </div>

        <div className="mt-8">
          <Snippet hideCopyButton hideSymbol variant="flat">
            <span>
              Get started by editing <Code color="primary">app/page.tsx</Code>
            </span>
          </Snippet>
        </div>
      </section>
      <aside className="absolute top-32 right-0 w-[50%]">
        <img src={heroImage.src} alt="hero" className="rounded-l-[4rem]" />
      </aside>
    </>
  );
}
