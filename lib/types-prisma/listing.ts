import { Decimal } from "@prisma/client/runtime/library";

interface PrismaListingAddress {
  id: string;
  addressLine: string;
  city: string;
  state: string;
  zipcode: string | null;
  country: string;
  latitude: Decimal;
  longitude: Decimal;
  listingId: string;
}

interface PrismaListingPrice {
  id: string;
  value: Decimal;
  startDate: Date;
  endDate: Date;
  isCurrent: boolean;
  listingId: string;
}

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
  address: PrismaListingAddress | null;
  prices: PrismaListingPrice[];
}
