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

export class GeonamesProvider implements GeocodeProvider {
  latitude: string;
  longitude: string;

  constructor(latitude: string, longitude: string) {
    this.latitude = latitude;
    this.longitude = latitude;
  }

  url(): string {
    return process.env
      .GEOCODE_URL_GEONAMES!.replace("lat", this.latitude)
      .replace("lon", this.longitude);
  }
}
