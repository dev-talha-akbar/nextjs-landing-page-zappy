import { Image } from "@nextui-org/image";

import { HeroSection } from "@/components/HeroSection";
import { Feature } from "@/components/feature";
import { title } from "@/components/primitives";
import notionFrame from "@/images/notion-frame.png";

export default function Home() {
  return (
    <>
      <HeroSection />
      <section className="flex flex-col-reverse md:flex-row gap-12 md:gap-8 xl:gap-32 px-6 pt-20 items-center">
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
      <section className="flex flex-col md:flex-row gap-12 md:gap-8 xl:gap-32 px-6 pt-20 items-center">
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
          <div className="flex w-full md:w-[80%] mx-auto gap-4">
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
      <section className="flex flex-col-reverse md:flex-row gap-12 md:gap-8 xl:gap-32 px-6 pt-20 items-center">
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
