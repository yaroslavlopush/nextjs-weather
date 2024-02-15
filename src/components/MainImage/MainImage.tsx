import React, { useState, useEffect } from 'react';
import { StyledMainImage } from './MainImage.styled';
import { imagesCodes } from './icons.constant';

const MainImage = ({  icon = '000' }) => {


  return (
    <>
        <StyledMainImage width="170" height="150" src={`/${imagesCodes[icon]}.svg`} alt="weather image"/>
    </>
  )
}

export default MainImage; 