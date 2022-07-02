export type PropTypes = {
  daily: [
    {
      dt?: any;
      day?: any;
      temp: {
        min: any;
        max: any;
      };
      weather: [
        {
          description?: string;
          icon?: string;
        }
      ];
    }
  ];
  lat?: number;
  lon?: number;
};
