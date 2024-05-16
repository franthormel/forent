import { CreateListingFormValidator } from "../../../lib/validation/listing";

describe("Create listing form validation", () => {
  describe("price", () => {
    test.each([{ price: 100 }, { price: 1_000 }, { price: 100_000_000 }])(
      "valid = $price",
      ({ price }) => {
        const actual = CreateListingFormValidator.validatePrice(price);
        expect(actual.success).toBeTruthy();
      }
    );
    test.each([{ price: -100 }, { price: 0 }, { price: 999_000_000 }])(
      "invalid = $price",
      ({ price }) => {
        const actual = CreateListingFormValidator.validatePrice(price);
        expect(actual.success).toBeFalsy();
      }
    );
  });

  describe("deposit", () => {
    test.each([{ deposit: 5 }, { deposit: 12_000 }, { deposit: 50_000 }])(
      "valid = $deposit",
      ({ deposit }) => {
        const actual = CreateListingFormValidator.validateDeposit(deposit);
        expect(actual.success).toBeTruthy();
      }
    );
    test.each([{ deposit: -100 }, { deposit: -1 }, { deposit: 99_000_000 }])(
      "invalid = $deposit",
      ({ deposit }) => {
        const actual = CreateListingFormValidator.validateDeposit(deposit);
        expect(actual.success).toBeFalsy();
      }
    );
  });

  describe("description", () => {
    test.each([
      {
        description:
          "Quisque ornare efficitur est non mattis. Fusce eu vehicula lorem, a efficitur.",
      },
      {
        description:
          "Praesent in enim tristique, euismod dui a, posuere ligula. Sed feugiat, nulla.",
      },
      {
        description:
          "Phasellus pretium id eros faucibus fermentum. Aenean fermentum lectus sit amet malesuada.",
      },
    ])("valid", ({ description }) => {
      const actual =
        CreateListingFormValidator.validateDescription(description);
      expect(actual.success).toBeTruthy();
    });
    test.each([
      { description: "" },
      { description: "Cras sagittis." },
      {
        description: `Aenean sapien risus, porttitor id ligula a, sagittis eleifend risus.
      Curabitur euismod magna elit, quis tempus odio commodo sit amet.
      Suspendisse tempor maximus quam mollis dignissim.
      Maecenas eget arcu libero.
      Phasellus ac eros nibh.
      Duis semper at est sed pretium.
      In vitae diam sed augue ultrices faucibus id ac nunc.
      Quisque eget enim quis elit faucibus finibus.
      Donec sit amet ex eu mi convallis pharetra.
      Morbi at ornare leo.
      Nunc aliquam cursus lectus, ac dignissim erat tincidunt id.
      Nulla at rhoncus libero.
      Duis blandit maximus tellus ac aliquet.
      Vivamus eu felis ultrices, rutrum tortor vitae, pretium magna.
      Sed arcu odio, mattis id cursus iaculis, porttitor nec leo.
      Donec vitae tellus vitae elit lobortis scelerisque et eget erat.
      Nullam tincidunt nunc sed eros hendrerit interdum.
      Donec scelerisque pretium leo sodales pretium.
      Quisque commodo, massa consequat varius tempor, nisi leo porttitor diam, et sodales velit erat sed ipsum.
      Sed mattis arcu in tincidunt ornare.
      In fermentum quam lacus, vitae rutrum elit semper ut.
      Cras pulvinar, magna sed vestibulum condimentum, turpis sapien laoreet diam, a venenatis quam augue non tellus.
      Ut accumsan magna et purus dapibus semper.
      Vivamus vitae velit id velit consequat pulvinar vel ut lacus.
      Cras at pellentesque turpis, ut egestas leo.
      Nullam fringilla tellus at quam imperdiet sagittis.
      Pellentesque elit augue, pulvinar eu porta id, tempor vel dui.`,
      },
    ])("invalid", ({ description }) => {
      const actual =
        CreateListingFormValidator.validateDescription(description);
      expect(actual.success).toBeFalsy();
    });
  });

  describe("beds", () => {
    test.each([{ beds: 1 }, { beds: 25 }, { beds: 749 }])(
      "valid = $beds",
      ({ beds }) => {
        const actual = CreateListingFormValidator.validateBeds(beds);
        expect(actual.success).toBeTruthy();
      }
    );
    test.each([{ beds: -1 }, { beds: 0 }, { beds: 1_000 }])(
      "invalid = $beds",
      ({ beds }) => {
        const actual = CreateListingFormValidator.validateBeds(beds);
        expect(actual.success).toBeFalsy();
      }
    );
  });

  describe("baths", () => {
    test.each([{ baths: 1 }, { baths: 12 }, { baths: 230 }])(
      "valid = $baths",
      ({ baths }) => {
        const actual = CreateListingFormValidator.validateBaths(baths);
        expect(actual.success).toBeTruthy();
      }
    );
    test.each([{ baths: -12 }, { baths: 0 }, { baths: 101_000 }])(
      "invalid = $baths",
      ({ baths }) => {
        const actual = CreateListingFormValidator.validateBaths(baths);
        expect(actual.success).toBeFalsy();
      }
    );
  });

  describe("area", () => {
    test.each([{ area: 12 }, { area: 32 }, { area: 462 }])(
      "valid = $area",
      ({ area }) => {
        const actual = CreateListingFormValidator.validateArea(area);
        expect(actual.success).toBeTruthy();
      }
    );
    test.each([{ area: -21 }, { area: 9 }, { area: 45_007_912 }])(
      "invalid = $area",
      ({ area }) => {
        const actual = CreateListingFormValidator.validateArea(area);
        expect(actual.success).toBeFalsy();
      }
    );
  });

  describe("available date", () => {
    const today = new Date("2024-01-01T00:00:00");

    test.each([
      { date: "2024-01-01T00:00:00" },
      { date: "2024-01-10T00:00:00.000Z" },
      { date: "2024-12-24T00:00:00.000Z" },
      { date: "2025-01-01T00:00:00.000Z" },
    ])("valid = $date", ({ date }) => {
      const actual = CreateListingFormValidator.validateAvailableDate(
        date,
        today
      );
      expect(actual.success).toBeTruthy();
    });
    test.each([
      // Below minimum date
      { date: "2023-01-10T00:00:00.000Z" },
      { date: "2022-12-24T00:00:00.000Z" },
      { date: "2021-05-06T00:00:00.000Z" },
      //   After maximum
      { date: "2025-02-01T00:00:00.000Z" },
      { date: "2026-11-14T00:00:00.000Z" },
      { date: "2027-02-20T00:00:00.000Z" },
    ])("invalid = $date", ({ date }) => {
      const actual = CreateListingFormValidator.validateAvailableDate(
        date,
        today
      );
      expect(actual.success).toBeFalsy();
    });
  });

  describe("address line", () => {
    test.each([
      { addressLine: "Duis elementum, nisi varius ornare pretium" },
      { addressLine: "est odio ultricies odio" },
      { addressLine: "sit amet dictum orci erat sed lacus" },
    ])("valid", ({ addressLine }) => {
      const actual =
        CreateListingFormValidator.validateAddressLine(addressLine);
      expect(actual.success).toBeTruthy();
    });
    test.each([
      { addressLine: "" },
      {
        addressLine: `Cras cursus pulvinar mollis.
        Praesent a felis elit.
        Etiam porttitor feugiat nisi, et ultricies sem tincidunt id.
        Morbi vitae velit non neque pretium ultrices.`,
      },
    ])("invalid", ({ addressLine }) => {
      const actual =
        CreateListingFormValidator.validateAddressLine(addressLine);
      expect(actual.success).toBeFalsy();
    });
  });

  describe("address city", () => {
    test.each([
      { city: "Duis elementum, nisi varius ornare pretium" },
      { city: "est odio ultricies odio" },
      { city: "sit amet dictum orci erat sed lacus" },
    ])("valid", ({ city }) => {
      const actual = CreateListingFormValidator.validateAddressCity(city);
      expect(actual.success).toBeTruthy();
    });
    test.each([
      { city: "" },
      {
        city: `Vestibulum sollicitudin nibh magna, et elementum purus elementum eget.`,
      },
    ])("invalid", ({ city }) => {
      const actual = CreateListingFormValidator.validateAddressCity(city);
      expect(actual.success).toBeFalsy();
    });
  });

  describe("address state", () => {
    test.each([
      { state: "Duis elementum, nisi varius ornare pretium" },
      { state: "est odio ultricies odio" },
      { state: "sit amet dictum orci erat sed lacus" },
    ])("valid", ({ state }) => {
      const actual = CreateListingFormValidator.validateAddressState(state);
      expect(actual.success).toBeTruthy();
    });
    test.each([
      { state: "" },
      {
        state: `Vestibulum sollicitudin nibh magna, et elementum purus elementum eget.`,
      },
    ])("invalid", ({ state }) => {
      const actual = CreateListingFormValidator.validateAddressState(state);
      expect(actual.success).toBeFalsy();
    });
  });

  describe("address zip code", () => {
    test.each([
      { zipCode: "Duis elementum, nisi varius ornare pretium" },
      { zipCode: "est odio ultricies odio" },
      { zipCode: "sit amet dictum orci erat sed lacus" },
    ])("valid", ({ zipCode }) => {
      const actual = CreateListingFormValidator.validateAddressZip(zipCode);
      expect(actual.success).toBeTruthy();
    });
    test.each([
      { zipCode: "" },
      {
        zipCode: `Vestibulum sollicitudin nibh magna, et elementum purus elementum eget.`,
      },
    ])("invalid", ({ zipCode }) => {
      const actual = CreateListingFormValidator.validateAddressZip(zipCode);
      expect(actual.success).toBeFalsy();
    });
  });
});
