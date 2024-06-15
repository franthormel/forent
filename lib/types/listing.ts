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

export interface ListingCreateFormAddress {
  addressLine: string;
  city: string;
  state: string;
}

export interface ListingCreateForm {
  price: number;
  description: string;
  deposit: number;
  imageUrls: string[];
  availableDate: Date;
  beds: number;
  baths: number;
  longitude: number;
  latitude: number;
  area: number;
}

export interface ListingPreviewForm {
  price?: number;
  deposit?: number;
  description?: string;
  imageUrls?: string[];
  beds?: number;
  baths?: number;
  area?: number;
  availableDate?: string;
  addressLongitude?: number;
  addressLatitude?: number;
  addressLine?: string;
  addressCity?: string;
  addressState?: string;
  addressZipcode?: string;
}
