import { signOutCallbackURL } from "../../components/header/functions";

describe("header", () => {
  describe("sign out", () => {
    test.each([{ page: "/listings/" }, { page: "/" }])(
      "returns undefined url when page is public ($page)",
      ({ page }) => {
        const callbackURL = signOutCallbackURL(page);
        expect(callbackURL).toBeUndefined();
      }
    );
    test("return index URL when page is restricted", () => {
      const page = "/listing/create";
      const callbackURL = signOutCallbackURL(page);
      expect(callbackURL).toBe("/");
    });
  });
});
