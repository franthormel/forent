/**
 * Reverse Geocode provider using 3Geonames API.
 */
export class GeonamesProvider implements GeocodeProvider {
  latitude: number;
  longitude: number;

  constructor(latitude: number, longitude: number) {
    this.latitude = latitude;
    this.longitude = longitude;
  }

  url(): string {
    const baseUrl = process.env.GEOCODE_URL_GEONAMES;
    return baseUrl!
      .replace("lat", this.latitude.toString())
      .replace("lon", this.longitude.toString());
  }
}

export interface GeonamesResponse {
  nearest: GeonamesResponseNearest;
}

interface GeonamesResponseNearest {
  city: string;
  distance: string;
  elevation: string;
  inlatt: string;
  inlongt: string;
  latt: string;
  longt: string;
  name: string;
  prov: string;
  region: string;
  state: string;
  timezone: string;
}
