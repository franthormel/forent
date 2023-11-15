import { decideSessionStrategy } from "../lib/auth";

describe("decide session strategy", () => {
  const INITIAL_ENV = process.env.ENVIRONMENT;

  afterEach(() => {
    process.env.ENVIRONMENT = INITIAL_ENV;
  });

  test("must be `jwt` in non-production environments", () => {
    process.env.ENVIRONMENT = "development";
    expect(decideSessionStrategy()).toBe("jwt");
  });

  test("must be `database` in production environments", () => {
    process.env.ENVIRONMENT = "production";
    expect(decideSessionStrategy()).toBe("database");
  });
});
