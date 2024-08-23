import {
  BedsBathsOption,
  ListingsSearchFilters,
  ListingsSearchFiltersRequest,
} from "./types";

export const LISTINGS_PER_PAGE = 15;
export const STARTING_PAGE = 1;

const PRICE_MIN_FILTER = 0;
const PRICE_MAX_FILTER = 100_000_000;
/**
 * These are the labels for the beds/baths filter
 * The values to be used is its index.
 * For example, the `Any` label's value is `0`
 */
export const BEDS_BATHS_OPTIONS = [
  BedsBathsOption.ANY,
  BedsBathsOption.ONE,
  BedsBathsOption.TWO,
  BedsBathsOption.THREE,
  BedsBathsOption.FOUR,
  BedsBathsOption.MORE_THAN_FIVE,
];
const BEDS_BATHS_DEFAULT = BedsBathsOption.ANY;

const AREA_MIN_FILTER = 0;
const AREA_MAX_FILTER = 1_000_000;

export const DEFAULT_LIST_FILTERS: ListingsSearchFilters = {
  price: {
    min: {
      value: PRICE_MIN_FILTER,
      change: (value) => {},
    },
    max: {
      value: PRICE_MAX_FILTER,
      change: (value) => {},
    },
  },
  beds: {
    value: BEDS_BATHS_DEFAULT,
    change: (value) => {},
  },
  baths: {
    value: BEDS_BATHS_DEFAULT,
    change: (value) => {},
  },
  area: {
    min: {
      value: AREA_MIN_FILTER,
      change: (value) => {},
    },
    max: {
      value: AREA_MAX_FILTER,
      change: (value) => {},
    },
  },
};

export const DEFAULT_REQUEST_FILTERS: ListingsSearchFiltersRequest = {
  price: {
    min: PRICE_MIN_FILTER,
    max: PRICE_MAX_FILTER,
  },
  beds: BEDS_BATHS_DEFAULT,
  baths: BEDS_BATHS_DEFAULT,
  area: {
    min: AREA_MIN_FILTER,
    max: AREA_MAX_FILTER,
  },
};
