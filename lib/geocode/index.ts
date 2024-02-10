interface GeocodeProvider {
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
}
