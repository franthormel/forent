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
