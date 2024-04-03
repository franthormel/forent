import { GeonamesProvider } from "../../../lib/geocode/geonames";

describe("Geonames provider", () => {
  const INITIAL_ENV = process.env.ENVIRONMENT;

  afterEach(() => {
    process.env.ENVIRONMENT = INITIAL_ENV;
  });

  test("should return correct url", () => {
    // Given
    process.env.GEOCODE_URL_GEONAMES = "https://api.geonames.com/lat,lon.json";
    const sut = new GeonamesProvider(45, 90);

    // When
    const actual = sut.url();

    // Then
    expect(actual).toBe("https://api.geonames.com/45,90.json");
  });

  test("should return the same url", () => {
    // Given
    process.env.GEOCODE_URL_GEONAMES = "https://api.others.com/x,y.xml";
    const sut = new GeonamesProvider(90, 45);

    // When
    const actual = sut.url();

    // Then
    expect(actual).toBe("https://api.others.com/x,y.xml");
  });
});
