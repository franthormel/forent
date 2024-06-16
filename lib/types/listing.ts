export interface ListingCreateFormAddress {
  addressLine: string;
  city: string;
  state: string;
}

export interface ListingCreateForm {
  price: number;
  deposit: number;
  description: string;
  imageUrls: string[];
  beds: number;
  baths: number;
  area: number;
  availableDate: Date;
  addressLongitude: number;
  addressLatitude: number;
  addressLine: string;
  addressCity: string;
  addressState: string;
  addressZipcode: string;
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
