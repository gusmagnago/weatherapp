import React from 'react';
import { formatCelsius, getIcon, formatToDate } from '../../../utils/variables';
import { Icon, Info, Wrapper } from './SmallCard.styles';
import type { PropTypes } from './SmallCard.types';

const SmallCard: React.FC<PropTypes> = (props) => {
  const {
    daily: [
      {
        dt,
        day,
        temp: { min, max },
        weather: [{ description, icon }],
      },
    ],
  } = props;

  return (
    <Wrapper key={dt}>
      <span>{formatToDate(day).slice(0, 3)}</span>
      <Info>
        <Icon src={getIcon(icon)} alt={description} />
        <span>{description}</span>
      </Info>
      <span>max {formatCelsius(max)}</span>
      <span>min {formatCelsius(min)}</span>
    </Wrapper>
  );
};

export default SmallCard;
