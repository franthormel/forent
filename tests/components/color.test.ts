import { ColorThemePicker } from "../../components/theme/color";
import { ColorMode } from "../../components/theme/props";

describe("Color theme picker", () => {
  test("text color must dark when the given color mode is also dark", () => {
    const colorMode: ColorMode = "Dark";
    const actual = ColorThemePicker.textColor(colorMode);
    expect(actual).toBe("text-gray-800");
  });

  test("text color must light when the given color mode is also light", () => {
    const colorMode: ColorMode = "Light";
    const actual = ColorThemePicker.textColor(colorMode);
    expect(actual).toBe("text-slate-50");
  });
});
