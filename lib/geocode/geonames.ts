import { GeocodeProvider } from ".";
import { CreateListingFormAddress } from "../types/listing";

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

  async fetch(): Promise<CreateListingFormAddress> {
    const response: GeonamesResponse = await fetch(this.url()).then((res) =>
      res.json()
    );
    // Address line
    const addressLine = response.nearest.name ?? "";

    // NOTE: There are two (2) types of responses for 3Geonames for province and city. If {} it is empty otherwise it is string

    // Adrress city
    let city;
    const responseCity = response.nearest.city;
    if (typeof responseCity === "string") {
      city = responseCity;
    } else {
      city = "";
      console.log("Response for city address is invalid");
    }

    // Address state
    let state;
    const responseState = response.nearest.prov;
    if (typeof responseState === "string") {
      state = responseState;
    } else {
      state = "";
      console.log("Response for state address is invalid");
    }

    return {
      addressLine: addressLine,
      city: city,
      state: state,
    };
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
  city?: string;
  distance?: string;
  elevation?: string;
  inlatt?: string;
  inlongt?: string;
  latt?: string;
  longt?: string;
  name?: string;
  prov?: string;
  region?: string;
  state?: string;
  timezone?: string;
}
