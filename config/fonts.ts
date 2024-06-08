import { Fira_Code as FontMono, DM_Sans as FontSans } from "next/font/google";

export const fontSans = FontSans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const fontMono = FontMono({
  subsets: ["latin"],
  variable: "--font-mono",
});
