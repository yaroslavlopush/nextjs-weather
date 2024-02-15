import { useState } from 'react';
import fetchCityWeather, { WeatherApi } from '../apis/apiWeather';

const useWeather = () => {
  const [weatherData, setWeatherData] = useState<WeatherApi>({} as WeatherApi);

  const search = async (city: string) => {
    try {
      const response = await fetchCityWeather(city);
      setWeatherData(response);
    } catch (error) {
      console.error(error);
      setWeatherData({} as WeatherApi);
    }
  };

  return [ weatherData, search ];
};

export default useWeather;