import React from 'react';
import { useGeoPosition } from '../../utils/hooks/useGeoPosition';

import { DumbInfo, MainWrapper } from './Main.styles';

const Main = ({ children }: any) => {
  const lang = navigator.language;

  const { latitude, longitude, accuracy, timestamp } = useGeoPosition();

  const formatHours: any = () => {
    if (timestamp) {
      let hour = new Date(timestamp);
      const translatedHour = hour.toLocaleString(lang, {
        hour: 'numeric',
        minute: 'numeric',
        hour12: true,
      });
      return translatedHour;
    }
    return timestamp;
  };

  return (
    <>
      <DumbInfo>
        <span>{lang}</span>
        <span>lat: {latitude?.toPrecision()}</span>
        <span>lon: {longitude?.toPrecision()}</span>
        <span>accuracy: +/- {accuracy?.toFixed()} meters</span>
        <span>{formatHours()}</span>
      </DumbInfo>
      <MainWrapper>{children}</MainWrapper>
    </>
  );
};

export default Main;
