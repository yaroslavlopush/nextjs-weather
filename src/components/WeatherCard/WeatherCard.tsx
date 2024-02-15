import React, { useState, useEffect } from 'react';
import Search from '../Search/Search';
import MainImage from '../MainImage/MainImage';
import TemperatureToggle from '../TemperatureToggle/TemperatureToggle';
import MainInfo from '../MainInfo/MainInfo';
import Details from '../Details/Details';
import { StyledContainer, StyledInnerElement, StyledDetails, StyledErrorContainer, StyledText, StyledBackgroundGradient } from './WeatherCard.styled';
import { metersPerSecondToKmPerHour, Weather } from '@/utils/utils';

const WeatherCard = () => {
  const [weatherData, setWeatherData] = useState<Weather>();

  return (
    <StyledContainer>
        <StyledInnerElement>
            <StyledBackgroundGradient />
            <Search setWeatherData={setWeatherData} />

            {weatherData?.city ? <div>
                <MainImage icon={weatherData.icon}/>
                <TemperatureToggle temperature={weatherData.temperature}/>
                <MainInfo main={weatherData.mainInfo} />
                <StyledDetails>
                    <Details icon="humidity" value={`${weatherData.humidity}%`} text="Humidity"/>
                    <Details icon="wind" value={`${metersPerSecondToKmPerHour(weatherData.wind)} km/h`} text="Wind Speed"/>
                </StyledDetails>
            </div> : 
            <StyledErrorContainer>
                <MainImage icon={'000'}/>
                <p>Error: <StyledText>Invalid City/State</StyledText></p>
            </StyledErrorContainer>}
        </StyledInnerElement>

    </StyledContainer>
  )
}

export default WeatherCard;