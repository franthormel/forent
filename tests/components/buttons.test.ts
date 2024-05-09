import { ButtonSize, ButtonType } from "@/components/buttons/types";
import {
  buttonFontSize,
  buttonPadding,
  buttonType,
} from "../../components/buttons/functions";

describe("button", () => {
  test.each([
    { size: "base", output: "px-10 py-4" },
    { size: "small", output: "px-5 py-2.5" },
  ] as Array<{
    size?: ButtonSize;
    output: string;
  }>)("padding = $size", ({ size, output }) => {
    const actual = buttonPadding(size);
    expect(actual).toBe(output);
  });

  test.each([
    { size: "base", output: "text-base" },
    { size: "small", output: "text-sm" },
  ] as Array<{
    size?: ButtonSize;
    output: string;
  }>)("fontSize = $size", ({ size, output }) => {
    const actual = buttonFontSize(size);
    expect(actual).toBe(output);
  });

  test.each([
    { type: undefined, output: "button" },
    { type: "button", output: "button" },
    { type: "reset", output: "reset" },
    { type: "submit", output: "submit" },
  ] as Array<{
    type?: ButtonType;
    output: ButtonType;
  }>)("buttonType = $type", ({ type, output }) => {
    const actual = buttonType(type);
    expect(actual).toBe(output);
  });
});
