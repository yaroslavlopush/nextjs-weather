import Amadeus from 'amadeus';
import { AMADEUS_CREDS } from './apiConstants';

const amadeus = new Amadeus({
  clientId: AMADEUS_CREDS.API_KEY,
  clientSecret: AMADEUS_CREDS.API_SECRET,
});

const MAX_RESULTS = 10;

export interface CityApi {
  type: string;
  subType: string;
  name: string;
  iataCode: string;
  address: {
      countryCode: string;
      stateCode: string;
  },
  geoCode: {
      latitude: number;
      longitude: number;
  }
}

export default async function fetchCityList(city: string): Promise<CityApi[]> {
  const url = '/v1/reference-data/locations/cities';
  const response = await amadeus.client.get(url, {
    keyword: city,
    max: MAX_RESULTS, 
  });
  return response.data;
}

