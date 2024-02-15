import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { StyledContainer, StyledDiv, StyledValue, StyledText} from './Details.styled'

const Details = ({icon, value, text}) => {

  return (
    <StyledContainer>
        <Image width="30" height="30" src={`${icon}.svg`} alt={`${icon} image`}/>
        <StyledDiv>
            <StyledValue>{value}</StyledValue>
            <StyledText>{text}</StyledText>
        </StyledDiv>
    </StyledContainer>
  )
}

export default Details 