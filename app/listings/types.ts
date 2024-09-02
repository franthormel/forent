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

export type ListingContextType<Type> = {
  value: Type;
  change: (value: Type) => void;
};

type ContenTypeNumberRange = {
  min: ListingContextType<number>;
  max: ListingContextType<number>;
};

export interface ListingsSearchFilters {
  price: ContenTypeNumberRange;
  beds: ListingContextType<BedsBathsOption>;
  baths: ListingContextType<BedsBathsOption>;
  area: ContenTypeNumberRange;
}

export interface ListingsSearchFiltersRequest {
  price: {
    min: number;
    max: number;
  };
  beds: BedsBathsOption;
  baths: BedsBathsOption;
  area: {
    min: number;
    max: number;
  };
}

export enum BedsBathsOption {
  ANY = "Any",
  ONE = "1",
  TWO = "2",
  THREE = "3",
  FOUR = "4",
  MORE_THAN_FIVE = "5+",
}
