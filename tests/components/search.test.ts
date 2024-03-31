import { searchAction } from "../../components/search/functions";

describe("search", () => {
  test("action works", () => {
    const action = jest.fn();
    searchAction(action);
    expect(action).toHaveBeenCalled();
  });
});
