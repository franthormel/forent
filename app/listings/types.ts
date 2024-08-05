import { Decimal } from "@prisma/client/runtime/library";

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
