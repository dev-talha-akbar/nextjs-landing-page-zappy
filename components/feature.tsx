import { GrowthTrendIcon } from "./icons";
import { heading } from "./primitives";

export const Feature = ({ children, title, ...props }: any) => {
  return (
    <div className="w-full relative py-4">
      <span className="block absolute top-0 left-0 w-full h-[3px] rounded-[3px] bg-gray-100" />
      <span className="block absolute top-0 left-0 w-[33%] h-[3px] rounded-[3px] bg-[linear-gradient(to_right,_#ffffff,_#5a34e3)]" />
      <div className="flex flex-col gap-4 w-full md:w-[85%] mx-auto">
        <div className="flex gap-4 pt-4">
          <GrowthTrendIcon size={30} className="text-primary" />
          <h4 className={heading({ size: "lg" })}>{title}</h4>
        </div>
        {children}
      </div>
    </div>
  );
};
