import { ColorSwatch, Theme } from "./props";

interface ThemeColor {
  primary: string;
  secondary: string;
  text: {
    dark: string;
    light: string;
    warning: string;
  };
  gray: {
    dark: string;
    light: string;
  };
}

// The following color values are only useful for Tailwind CSS
const defaultColors: ThemeColor = {
  primary: "amber-400", // #FBBF24
  secondary: "amber-200", // #FDE68A
  text: {
    dark: "gray-800", // #1F2937
    light: "slate-50", // #F8FAFC
    warning: "red-600", // #DC2626
  },
  gray: {
    dark: "gray-400", // #9CA3AF
    light: "gray-200", // #E5E7EB
  },
};

export class ThemeColorPicker {
  /**
   * Choose text color depending on the given theme
   * @param theme Theme
   * @returns Text color
   */
  static textColor(theme?: Theme): string {
    let value = defaultColors.text.dark;

    if (theme === "light") {
      value = defaultColors.text.light;
    }

    return `text-${value}`;
  }

  // /**
  //  * Choose background color depending on the given theme
  //  * @param theme Theme
  //  * @returns Background color
  //  */
  // static backgroundColor(color?: ColorSwatch): string {
  //   let value = defaultColors.primary;

  //   switch (color) {
  //     case "primary":
  //       value = defaultColors.primary;
  //       break;
  //     case "secondary":
  //       value = defaultColors.secondary;
  //       break;
  //     case "tertiary":
  //       value = defaultColors.tertiary;
  //       break;
  //   }

  //   return `bg-${value}`;
  // }
}

export function backgroundColor(color?: ColorSwatch): string {
  let value = defaultColors.primary;

  switch (color) {
    case "primary":
      value = defaultColors.primary;
      break;
    case "secondary":
      value = defaultColors.secondary;
      break;
  }

  return `bg-${value}`;
}
