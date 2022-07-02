import React from 'react';
import SmallCard from '../card/components/SmallCard';

import type { PropTypes } from './Forecast.types';
import { ForecastList } from './Forecast.styles';

const Forecast: React.FC<PropTypes> = ({ forecastData }) => {
  return (
    <ForecastList>
      {forecastData &&
        forecastData?.daily
          .map((value: any) => (
            <SmallCard
              key={value.dt}
              daily={[
                {
                  day: value.dt,
                  temp: {
                    min: value.temp.min,
                    max: value.temp.max,
                  },
                  weather: [
                    {
                      description: value.weather[0].description,
                      icon: value.weather[0].icon,
                    },
                  ],
                },
              ]}
            />
          ))
          .slice(0, -1)}
    </ForecastList>
  );
};

export default Forecast;
