import {
  Listing,
  ListingSort,
  ListingsSearchFilters,
  ListingsSearchFiltersRequest,
} from "./types";

export function countListingsToSkip(currentPage: number, countPerPage: number) {
  return (currentPage - 1) * countPerPage;
}

export function makeSearchFiltersRequest(
  original: ListingsSearchFilters
): ListingsSearchFiltersRequest {
  return {
    price: {
      min: original.price.min.value,
      max: original.price.max.value,
    },
    beds: original.beds.value,
    baths: original.baths.value,
    area: {
      min: original.area.min.value,
      max: original.area.max.value,
    },
  };
}

type ListingSortCompareFunction = (a: Listing, b: Listing) => number;

export class ListingSortCompareFunctions {
  static #NEWEST: ListingSortCompareFunction = (a, b) => {
    if (a.createdDate < b.createdDate) {
      return 1;
    }

    if (a.createdDate === b.createdDate) {
      return 0;
    }

    return -1;
  };

  static #PRICE_DESC: ListingSortCompareFunction = (a, b) => {
    return b.price.value - a.price.value;
  };

  static #PRICE_ASC: ListingSortCompareFunction = (a, b) => {
    return a.price.value - b.price.value;
  };

  static choose(sort: ListingSort): ListingSortCompareFunction {
    switch (sort) {
      case ListingSort.NEWEST:
        return ListingSortCompareFunctions.#NEWEST;
        break;
      case ListingSort.PRICE_DESC:
        return ListingSortCompareFunctions.#PRICE_DESC;
        break;
      case ListingSort.PRICE_ASC:
        return ListingSortCompareFunctions.#PRICE_ASC;
        break;
      default:
        return ListingSortCompareFunctions.#NEWEST;
    }
  }
}
