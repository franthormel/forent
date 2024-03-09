import { DM_Sans, DM_Serif_Display, Libre_Baskerville } from "next/font/google";

export const textFont = DM_Sans({
  subsets: ["latin"],
  weight: [
    "100",
    "200",
    "300",
    "400",
    "500",
    "600",
    "700",
    "800",
    "900",
    "1000",
  ],
});

export const headerFont = DM_Serif_Display({
  subsets: ["latin"],
  weight: "400",
  adjustFontFallback: true,
});

export const logoFont = Libre_Baskerville({
  subsets: ["latin"],
  weight: "700",
});
