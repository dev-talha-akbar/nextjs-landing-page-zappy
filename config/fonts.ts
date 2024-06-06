import { Fira_Code as FontMono, Poppins as FontSans } from "next/font/google";

export const fontSans = FontSans({
  subsets: ["latin"],
  weight: "400",
});

export const fontMono = FontMono({
  subsets: ["latin"],
  variable: "--font-mono",
});
