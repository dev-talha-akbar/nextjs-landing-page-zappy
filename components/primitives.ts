import { tv } from "tailwind-variants";

export const title = tv({
  base: "inline font-semibold text-default-600",
  variants: {
    color: {
      primary: "text-primary",
    },
    size: {
      sm: "text-3xl lg:text-4xl",
      md: "text-[2.3rem] lg:text-5xl leading-9",
      lg: "text-4xl lg:text-6xl",
    },
    fullWidth: {
      true: "w-full block",
    },
  },
  defaultVariants: {
    size: "md",
  },
});

export const subtitle = tv({
  base: "w-full md:w-1/2 my-2 block max-w-full text-default-600",
  variants: {
    size: {
      lg: "text-lg lg:text-xl",
    },
    fullWidth: {
      true: "!w-full",
    },
  },
  defaultVariants: {
    fullWidth: true,
  },
});

export const heading = tv({
  base: "inline font-bold text-default-600",
  variants: {
    color: {
      primary: "text-primary",
    },
    size: {
      sm: "text-sm lg:text-md",
      md: "lg:text-md",
      lg: "text-md lg:text-lg",
    },
    fullWidth: {
      true: "w-full block",
    },
  },
  defaultVariants: {
    size: "md",
  },
});
