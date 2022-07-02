import React from 'react';
import { formatCelsius, getIcon, formatToDate } from '../../utils/variables';
import Forecast from '../forecast/Forecast';
import {
  CardWrapper,
  Img,
  Info,
  InfoCard,
  MainContent,
  StyledDiv,
  Temperature,
} from './Card.styles';
import { PropTypes } from './Card.types';

const Card: React.FC<PropTypes> = (props) => {
  const {
    name,
    main: { temp, feels_like, temp_min, temp_max, pressure, humidity },
    weather: [{ id, description, icon }],
    sys: { sunrise, sunset, country },
    wind: { speed },
    forecastData,
  } = props;

  const currentDay = new Date().getTime();

  return (
    <CardWrapper key={id}>
      <MainContent>
        <h1>{name + ',' + country}</h1>
        <Temperature>{formatCelsius(temp)}</Temperature>
        <Img src={getIcon(icon)} alt={description} />
        <h2>{description}</h2>
        <span>{formatToDate(currentDay)}</span>
        <div>
          <span>max: {formatCelsius(temp_max)} </span>
          <span>min: {formatCelsius(temp_min)} </span>
        </div>
      </MainContent>
      <Info>
        <InfoCard>
          <StyledDiv>
            <span>feels like: {formatCelsius(feels_like)}</span>
            <span>pressure: {pressure} hPa</span>
            <span>humidity: {humidity}%</span>
          </StyledDiv>
          <StyledDiv>
            <span>wind speed: {speed?.toFixed()}km/h</span>
            <span>sunrise: {formatToDate(sunrise)}</span>
            <span>sunset: {formatToDate(sunset)}</span>
          </StyledDiv>
        </InfoCard>
        <Forecast forecastData={forecastData} />
      </Info>
    </CardWrapper>
  );
};

export default Card;
