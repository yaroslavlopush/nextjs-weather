import { useState } from 'react';
import fetchCityList, { CityApi } from '../apis/apiCityList';

const useCityList = () => {
  const [cityList, setCityList] = useState<CityApi[]>([]);

  const getCityList = async (searchStr: string): Promise<void> => {
    try {
      const response = await fetchCityList(searchStr);
      const startsWith: CityApi[] = response.filter((city) => {
        if (city.name.toLowerCase().startsWith(searchStr.toLowerCase())) {
            return city;
        }
        
        return null;
      })
      setCityList(startsWith);
    } catch (error) {
      console.error(error);
      setCityList([]);
    }
  };

  return [ cityList, getCityList ] ;
};

export default useCityList;
