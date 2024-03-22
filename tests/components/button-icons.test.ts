import { IconSize } from "@/components/button-icons/types";
import { iconSize } from "../../components/button-icons/functions";

describe("iconSize", () => {
  test("returns default value if param is undefined", () => {
    const input = undefined;

    const output = iconSize(input);

    expect(output).toBe(24);
  });

  test.each([
    { size: 24, output: 24 },
    { size: 30, output: 30 },
    { size: 36, output: 36 },
    { size: 48, output: 48 },
  ] as Array<{
    size?: IconSize;
    output: number;
  }>)("returns correct icon size ($size)", ({ size, output }) => {
    const actual = iconSize(size);

    expect(actual).toBe(output);
  });
});
