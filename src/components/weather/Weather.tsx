import React, { useEffect, useState } from 'react';
import type { PropTypes, WrapperTypes } from './Weather.types';
import Card from '../card/Card';
import { useGeoPosition } from '../../utils/hooks/useGeoPosition';
import { BsPlusCircleFill } from 'react-icons/bs';
import {
  CardList,
  CardWrapper,
  Content,
  Icon,
  Input,
  InputWrapper,
} from './Weather.styles';
import axios from 'axios';
import { determineFUrl, determineUrl } from '../../utils/variables';
import Spinner from '../spinner/Spinner';

const Wrapper: React.FC<WrapperTypes> = (props: any) => {
  const { data, forecastData } = props;

  return (
    <CardWrapper>
      {data && Object.keys(data).length > 0 && (
        <Card
          name={data?.name}
          weather={[
            {
              id: data.weather[0].id,
              description: data.weather[0].description,
              icon: data.weather[0].icon,
            },
          ]}
          main={{
            temp: data.main?.temp,
            feels_like: data.main?.feels_like,
            temp_min: data.main?.temp_min,
            temp_max: data.main?.temp_max,
            pressure: data.main?.pressure,
            humidity: data.main?.humidity,
          }}
          wind={{ speed: data.wind?.speed }}
          timezone={data.timezone}
          sys={{
            sunrise: data.sys.sunrise,
            sunset: data.sys.sunset,
            country: data.sys.country,
          }}
          forecastData={forecastData}
        />
      )}
    </CardWrapper>
  );
};

const Weather: React.FC<PropTypes> = () => {
  const { latitude, longitude } = useGeoPosition();
  const [cards, setCards] = useState<WrapperTypes[]>([]);
  const [location, setLocation] = useState('');

  const [loading, setLoading] = useState(true);

  const getCurData = async () => {
    const initUrl = determineUrl(location, latitude, longitude);
    const current = await axios.get(initUrl);
    var data = current.data;

    const initFUrl = determineFUrl(data?.coord?.lat, data?.coord?.lon);
    var forecastData = undefined as undefined | any;
    try {
      const forecast = await axios.get(initFUrl);
      forecastData = forecast.data;
    } catch (error) {
      console.error(error);
    }
    setCards([{ data, forecastData }, ...cards]);
    setLocation('');
  };

  useEffect(() => {
    setLoading(true);
    if (latitude && longitude) {
      getCurData();
      setLoading(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [latitude, longitude]);

  return (
    <Content>
      <InputWrapper>
        <Input
          value={location}
          onChange={(event) => setLocation(event.target.value)}
          placeholder="Search a Location"
          type="text"
        />
        {location.length > 0 && (
          <Icon onClick={getCurData}>
            <BsPlusCircleFill />
          </Icon>
        )}
      </InputWrapper>
      <CardList>
        {loading ? (
          <Spinner />
        ) : (
          cards.map(({ data, forecastData }, idx) => (
            <Wrapper key={idx} data={data} forecastData={forecastData} />
          ))
        )}
      </CardList>
    </Content>
  );
};

export default Weather;
