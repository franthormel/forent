import { Theme } from "./props";

interface ThemeColor {
  primary: string;
  secondary: string;
  tertiary: string;
  text: {
    dark: string;
    light: string;
    gray: string;
    warning: string;
  };
  url: {
    visited: string;
    active: string;
  };
}

// The following color values are only useful for Tailwind CSS
const defaultColors: ThemeColor = {
  primary: "amber-400", // #FBBF24
  secondary: "orange-500", // #F97316
  tertiary: "cyan-300", // #67E8F9
  text: {
    dark: "gray-800", // #1F2937
    light: "slate-50", // #F8FAFC
    gray: "gray-400", // #9CA3AF
    warning: "red-600", // #DC2626
  },
  url: {
    visited: "blue-600", // #2563EB
    active: "purple-900", // #581C87
  },
};

export class ThemeColorPicker {
  /**
   * Choose text color depending on the given theme
   * @param theme Theme
   * @returns Text color
   */
  static textColor(theme?: Theme): string {
    let color = defaultColors.text.dark;

    if (theme === "Light") {
      color = defaultColors.text.light;
    }

    return `text-${color}`;
  }

  /**
   * Choose background color depending on the given theme
   * @param theme Theme
   * @returns Background color
   */
  static backgroundColor(theme?: Theme): string {
    let color = defaultColors.primary;

    if (theme === "Light") {
      color = defaultColors.text.light;
    }

    return `bg-${color}`;
  }
}
