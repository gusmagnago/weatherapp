export const getIcon = (icon: string | undefined) =>
  `http://openweathermap.org/img/wn/${icon}@2x.png`;

export const formatCelsius = (temp: number | undefined) =>
  temp?.toFixed() + 'º';

export const formatToDate = (sec: any) => {
  const locale = navigator.language;
  if (sec) {
    let date = new Date(sec);
    const translatedDate = date.toLocaleString(locale, {
      weekday: 'short',
      day: 'numeric',
      month: 'long',
    });
    return translatedDate;
  }
  return sec;
};

export const determineUrl = (location: string, lat?: number, lon?: number) => {
  let url = `${process.env.REACT_APP_API_URL}${
    location.length ? `q=${location}` : `lat=${lat}&lon=${lon}`
  }&units=metric&appid=${process.env.REACT_APP_API_KEY}`;
  return url;
};

export const determineFUrl = (lat?: number, lon?: number) => {
  let forecastUrl = `${
    process.env.REACT_APP_FORECAST_API_URL
  }${`lat=${lat}&lon=${lon}`}&exclude=current,minutely,hourly,alerts&units=metric&appid=${
    process.env.REACT_APP_API_KEY
  }`;
  return forecastUrl;
};
