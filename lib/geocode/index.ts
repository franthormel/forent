interface GeocodeProvider {
  /**
   * Latitude
   */
  latitude: string;
  /**
   * Longitude
   */
  longitude: string;

  /**
   * Create endpoint for the geocoding provider
   */
  url(): string;
}
