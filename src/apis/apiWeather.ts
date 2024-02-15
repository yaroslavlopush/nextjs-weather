import { BASE_URL, API_KEY } from './apiConstants';

export interface WeatherApi {
  coord: {
      lon: number;
      lat: number;
  },
  weather: [
      {
          id: number;
          main: string;
          description: string;
          icon: string;
      }
  ],
  base: string;
  main: {
      temp: number;
      feels_like: number;
      temp_min: number;
      temp_max: number;
      pressure: number;
      humidity: number;
  },
  visibility: number;
  wind: {
      speed: number;
      deg: number;
  },
  clouds: {
      all: number;
  },
  dt: number;
  sys: {
      type: number;
      id: number;
      country: string;
      sunrise: number;
      sunset: number;
  },
  timezone: number;
  id: number;
  name: string;
  cod: number;
}

export default async function fetchCityWeather(city: string): Promise<WeatherApi> {
  const url = `${BASE_URL}${city}&appid=${API_KEY}`;
  const response = await fetch(url);
  return response.json();
}