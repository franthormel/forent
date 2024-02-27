import { ThemeColorPicker } from "../theme/color";

describe("Color theme picker", () => {
  describe("text color", () => {
    test("must dark when the given color mode is also dark", () => {
      const actual = ThemeColorPicker.textColor("dark");
      expect(actual).toBe("text-gray-800");
    });

    test("must light when the given color mode is also light", () => {
      const actual = ThemeColorPicker.textColor("light");
      expect(actual).toBe("text-slate-50");
    });
  });

  describe("background color", () => {
    test("must primary when the given color swatch is also primary", () => {
      const actual = ThemeColorPicker.backgroundColor("primary");
      expect(actual).toBe("bg-amber-400");
    });

    test("must secondary when the given color swatch is also secondary", () => {
      const actual = ThemeColorPicker.backgroundColor("secondary");
      expect(actual).toBe("bg-orange-500");
    });

    test("must tertiary when the given color swatch is also tertiary", () => {
      const actual = ThemeColorPicker.backgroundColor("tertiary");
      expect(actual).toBe("bg-cyan-300");
    });
  });
});
