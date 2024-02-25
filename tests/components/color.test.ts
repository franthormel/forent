import { ThemeColorPicker } from "../../components/theme/color";
import { Theme } from "../../components/theme/props";

describe("Color theme picker", () => {
  test("text color must dark when the given color mode is also dark", () => {
    const colorMode: Theme = "Dark";
    const actual = ThemeColorPicker.textColor(colorMode);
    expect(actual).toBe("text-gray-800");
  });

  test("text color must light when the given color mode is also light", () => {
    const colorMode: Theme = "Light";
    const actual = ThemeColorPicker.textColor(colorMode);
    expect(actual).toBe("text-slate-50");
  });
});
