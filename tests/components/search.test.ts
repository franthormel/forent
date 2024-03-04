import { searchAction, searchWidth } from "../../components/search/functions";
import { SearchWidth } from "../../components/search/type";

describe("search", () => {
  test("action works", () => {
    const action = jest.fn();
    searchAction(action)
    expect(action).toHaveBeenCalled();
  });
  describe("width", () => {
    const inputs: Array<{
      width?: SearchWidth;
      expected: string;
    }> = [
      { width: "small", expected: "w-52" },
      { width: "regular", expected: "w-72" },
      { width: "large", expected: "w-96" },
      { width: undefined, expected: "w-72" },
    ];

    test.each(inputs)(".width($width, $expected)", ({ width, expected }) => {
      const actual = searchWidth(width);
      expect(actual).toBe(expected);
    });
  });
});
