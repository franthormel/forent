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
  ratings: ListingRating[];
  address: ListingAddress;
}

interface ListingPrice {
  id: string;
  value: number;
  startDate: string;
  endDate: string;
  isCurrent: boolean;
}

interface ListingRating {
  id: string;
  value: number;
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

export interface FormListing {
  price: number;
  description: string;
  deposit: number;
  availableDate: Date;
  beds: number;
  baths: number;
  longitude: string;
  latitude: string;
}
