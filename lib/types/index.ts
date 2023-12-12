// Store types here that do not yet have a proper domain

/**
 * Util interface for listing preview (all properties are optional)
 */
export interface DraftListingOptional {
  price?: string;
  description?: string;
  deposit?: string;
  availableDate?: string;
  beds?: string;
  baths?: string;
}

/**
 * Util interface for listing preview (all properties are optional)
 */
export interface DraftListing {
  price: string;
  description?: string;
  deposit?: string;
  availableDate?: string;
  beds?: string;
  baths?: string;
}
