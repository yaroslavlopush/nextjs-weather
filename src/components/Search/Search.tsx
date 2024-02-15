import React, { useState, useEffect } from 'react';
import useWeather from '@/hooks/useWeather';
import useCityList from '@/hooks/useCity';
import { parseDataForWidget } from '@/utils/utils';
import { StyledInput, StyledButton, StyledForm, StyledSearchBox, StyledOptionList, StyledOption } from './Search.styled';
import { CityApi } from '@/apis/apiCityList';
import { WeatherApi } from '@/apis/apiWeather';

const DEFAULT_CITY = 'Kyiv';
const PLACEHOLDER = 'Enter your location...';

const Search = ({ setWeatherData }) => {
  const [inputValue, setInputValue] = useState('');
  const [showOptions, setShowOptions] = useState(false);
  const [placeholder, setPlaceholder] = useState(DEFAULT_CITY);
  const [data, search] = useWeather() as [data: WeatherApi, (query: string) => void];
  const [cityList, getCityList] = useCityList() as [cityList: CityApi[], (query: string) => void];

  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newInputValue = event.target.value;
    if (newInputValue.length > 2) {
      setShowOptions(true);
    } else {
      setShowOptions(false);
    }

    setPlaceholder(PLACEHOLDER);
    setInputValue(newInputValue);
  };

  const handleSelectCity = (cityName) => {
    setInputValue(cityName);
    search(cityName);
    setShowOptions(false);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    search(inputValue);
    setShowOptions(false);
  }

  useEffect(() => {
    search(DEFAULT_CITY);
  }, []);

  useEffect(() => {
    if (inputValue.length > 2) {
      getCityList(inputValue);
    }
  }, [ inputValue ]);

  useEffect(() => {
    const parsedData = parseDataForWidget(data);
    setWeatherData(parsedData);
  }, [ data ]);

  return (
    <StyledSearchBox>
      <StyledForm onSubmit={handleSubmit}>
        <StyledInput type='search' placeholder={placeholder} onChange={onChangeHandler} value={inputValue} />
        <StyledButton type='submit'></StyledButton>
      </StyledForm>
      {showOptions && <StyledOptionList>
        {cityList?.map((city, index: number) => (
          <StyledOption key={index} onClick={() => handleSelectCity(city.name)}>{city.name}, {city.address.countryCode}</StyledOption>
        ))}
      </StyledOptionList>}
    </StyledSearchBox>
  );
};

export default Search;