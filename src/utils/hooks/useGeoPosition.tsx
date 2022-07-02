import { useEffect, useState } from 'react';
import { PropTypes } from './useGeoPosition.types';

export const useGeoPosition = (): PropTypes => {
  const [position, setPosition] = useState({
    latitude: 0,
    longitude: 0,
    accuracy: 0,
    timestamp: 0,
  });

  useEffect(() => {
    const geoPosition = navigator.geolocation;

    if (!geoPosition) {
      setPosition({
        latitude: Number('38.7170786'),
        longitude: Number('-9.1339908'),
        accuracy: 0,
        timestamp: 0,
      });
    }

    geoPosition.getCurrentPosition((position) => {
      setPosition({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
        accuracy: position.coords.accuracy,
        timestamp: position.timestamp,
      });
    });
  }, []);

  return {
    latitude: position.latitude,
    longitude: position.longitude,
    accuracy: position.accuracy,
    timestamp: position.timestamp,
  };
};
