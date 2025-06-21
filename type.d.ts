export type LocationType = { lat: number; lon: number };

export type WeatherType = {
  id: number;
  main: string;
  icon: string;
  description: string;
};

export type WeatherResponseType = {
  cod: number;
  name: string;
  message?: string;
  weather: WeatherType[];
  main: {
    temp: number;
  };
  coord: {
    lat: number;
    lon: number;
  };
};
