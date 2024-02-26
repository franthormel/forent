import { ThemeColorPicker } from "../theme/color";
import { Theme } from "../theme/props";

describe("Color theme picker", () => {
  test("text color must dark when the given color mode is also dark", () => {
    const theme: Theme = "Dark";
    const actual = ThemeColorPicker.textColor(theme);
    expect(actual).toBe("text-gray-800");
  });

  test("text color must light when the given color mode is also light", () => {
    const theme: Theme = "Light";
    const actual = ThemeColorPicker.textColor(theme);
    expect(actual).toBe("text-slate-50");
  });
});
