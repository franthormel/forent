import { ListingCreateFormAddress } from "../types/listing";

export interface GeocodeProvider {
  /**
   * Latitude
   */
  latitude: number;
  /**
   * Longitude
   */
  longitude: number;

  /**
   * Create endpoint for the geocoding provider
   */
  url(): string;

  /**
   * Fetch address response from the geocoding provider
   */
  fetch(): Promise<ListingCreateFormAddress>;
}
