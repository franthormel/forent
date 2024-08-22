import { Decimal } from "@prisma/client/runtime/library";

export interface PrismaListing {
  id: string;
  deposit: Decimal | null;
  imageUrls: string[];
  description: string;
  beds: number;
  baths: number;
  area: Decimal;
  availableDate: Date | null;
  createdDate: Date;
  userId: string;
  address: {
    id: string;
    addressLine: string;
    city: string;
    state: string;
    zipcode: string | null;
    country: string;
    latitude: Decimal;
    longitude: Decimal;
    listingId: string;
  } | null;
  prices: {
    id: string;
    value: Decimal;
    startDate: Date;
    endDate: Date;
    isCurrent: boolean;
    listingId: string;
  }[];
}

interface ListingPrice {
  value: number;
}

interface ListingAddress {
  addressLine: string;
  city: string;
  state: string;
  latitude: number;
  longitude: number;
}

export interface Listing {
  id: string;
  imageUrls: string[];
  beds: number;
  baths: number;
  area: number;
  createdDate: Date;
  address: ListingAddress;
  price: ListingPrice;
}

export enum ListingSort {
  NEWEST = "Newest",
  PRICE_DESC = "Price (high to low)",
  PRICE_ASC = "Price (low to high)",
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

export type ContextTypeNumber = {
  value: number;
  change: (value: number) => void;
};

type ContenTypeNumberRange = {
  min: ContextTypeNumber;
  max: ContextTypeNumber;
};

export interface ListingsSearchFilters {
  price: ContenTypeNumberRange;
  beds: ContextTypeNumber;
  baths: ContextTypeNumber;
  area: ContenTypeNumberRange;
}
