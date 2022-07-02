export type PropTypes = {
  name?: string;
  coord?: { lon?: number; lat?: number };
  main: {
    temp?: number;
    feels_like?: number;
    temp_min?: any;
    temp_max?: any;
    pressure?: string;
    humidity?: string;
  };
  weather: [
    {
      id?: number;
      description?: string;
      icon?: string;
    }
  ];
  sys: {
    sunrise?: string;
    sunset?: string;
    country?: string;
  };
  timezone?: number;
  wind: { speed?: number };
  forecastData?: any;
};
