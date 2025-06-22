import { WeatherResponseType } from "./types";

export const getResponse = (
  success: boolean,
  message: string,
  data?: WeatherResponseType
) => {
  return {
    success: success,
    message: message,
    data: data,
  };
};
