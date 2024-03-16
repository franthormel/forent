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
