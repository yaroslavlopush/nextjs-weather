import React, { useState, useEffect } from 'react';
import { MainInfo as IMainInfo } from './../../utils/utils';
import { StyledContainer, StyledTextBlock } from './MainInfo.styled';

export interface MainInfoProps {
  main: IMainInfo;
}

const MainInfo = ({ main }: MainInfoProps) => {
  return (
    <StyledContainer>
        <h1>{main.city}</h1>
        <StyledTextBlock>{main.weatherTitle}</StyledTextBlock>
        <StyledTextBlock><i>{main.timeZone}</i></StyledTextBlock>
    </StyledContainer>
  )
}

export default MainInfo; 