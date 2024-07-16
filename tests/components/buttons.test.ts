import { ButtonType } from "@/components/buttons/types";
import {
  buttonCursor,
  buttonText,
  buttonType,
} from "../../components/buttons/functions";

describe("button", () => {
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

  test.each([
    { loading: true, output: "cursor-not-allowed" },
    { loading: false, output: undefined },
    { loading: undefined, output: undefined },
  ] as Array<{
    loading?: boolean;
    output: string | undefined;
  }>)("buttonCursor = $loading", ({ loading, output }) => {
    const actual = buttonCursor(loading);
    expect(actual).toBe(output);
  });

  test.each([
    { loading: true, output: "Loading..." },
    { loading: false, output: undefined },
    { loading: undefined, output: undefined },
  ] as Array<{
    loading?: boolean;
    output: string | undefined;
  }>)("buttonText = $loading", ({ loading, output }) => {
    const actual = buttonText(loading);
    expect(actual).toBe(output);
  });
});
