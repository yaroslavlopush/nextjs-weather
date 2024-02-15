import React, { useState } from 'react';
import { StyledContainer, StyledSpan, StyledLabel, StyledInput, StyledDiv } from './TemperatureToggle.styled';
import { kelvinToFahrenheit, kelvinToCelsius } from '@/utils/utils';

const TemperatureToggle = ({ temperature }) => {
  const [isCelsius, setIsCelsius] = useState(true);

  const toggleTemperatureUnit = () => {
    setIsCelsius(prevState => !prevState);
  };

  return (
    <StyledContainer>
      <StyledSpan>{isCelsius ? kelvinToCelsius(temperature) : kelvinToFahrenheit(temperature)}{isCelsius ? '°C' : '°F'}</StyledSpan>
      <StyledLabel className="switch">
        <StyledInput type="checkbox" checked={isCelsius} onChange={toggleTemperatureUnit} />
        <StyledDiv className="slider round">
          <span>°C</span>
          <span>°F</span>
        </StyledDiv>
      </StyledLabel>
    </StyledContainer>
  );
};

export default TemperatureToggle;