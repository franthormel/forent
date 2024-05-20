// Prisma schema
interface Listing {
  id: string;
  title: string;
  deposit?: number;
  imageUrls: string[];
  description: string;
  beds: number;
  baths: number;
  area: number;
  availableDate?: string;
  prices: ListingPrice[];
  address: ListingAddress;
}

interface ListingPrice {
  id: string;
  value: number;
  startDate: string;
  endDate: string;
  isCurrent: boolean;
}

interface ListingAddress {
  id: string;
  addressLine: string;
  city: string;
  state: string;
  zipcode?: string;
  country: string;
  latitude: number;
  longitude: number;
}

export interface CreateListingFormAddress {
  addressLine: string;
  city: string;
  state: string;
}

export interface CreateListingForm {
  price: number;
  description: string;
  deposit: number;
  availableDate: Date;
  beds: number;
  baths: number;
  longitude: number;
  latitude: number;
  area: number;
}
