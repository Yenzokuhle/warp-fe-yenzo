"use server";

import { DataResponse, WeatherResponseType } from "../Utils/types";
import { getResponse } from "../Utils/utils";

const API_URL = process.env.API_URL!;

const constructUrlAndGetData = async (
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  params: any
): Promise<WeatherResponseType> => {
  const url = new URL(API_URL);

  if (!params) {
    throw new Error("Cannot pass empty params.");
  }

  for (const [key, value] of Object.entries(params)) {
    if (!!key && !!value) {
      url.searchParams.set(key, `${value}`);
    }
  }

  url.searchParams.set("units", "metric"); //metric = Celsius
  url.searchParams.set("lang", "en");
  url.searchParams.set("appid", process.env.OPEN_WEATHER_API_KEY!);

  const response = await fetch(url);
  const data = await response.json();

  // console.log("\n");
  // console.log("DATA:", data);
  // console.log("\n");

  return {
    cod: data.cod,
    name: data.name,
    weather: data.weather,
    message: data.message,
    main: {
      temp: data.main?.temp,
    },
    coord: data.coord,
  };
};

export const currentLocationWeather = async (
  lat?: number,
  lon?: number
): Promise<DataResponse> => {
  if (!lat || !lon) {
    console.error("Lat and Lng are required.");
    return getResponse(false, "Lat and Lng are required.");
  }

  const results = await constructUrlAndGetData({ lat, lon });

  if (results.cod !== 200 || !!results.message) {
    return getResponse(false, results?.message || "Something went wrong");
  }

  return getResponse(true, "Successfully received weather data", results);
};

export const cityNameWeather = async (
  city_name: string
): Promise<DataResponse> => {
  if (!city_name || city_name.trim() === "") {
    console.error("City name is required.");
    return getResponse(false, "City name is required.");
  }

  // console.log("\nCITY NAME:", city_name);

  const results = await constructUrlAndGetData({ q: city_name.trim() });

  if (results.cod !== 200 || !!results.message) {
    return getResponse(false, results?.message || "Something went wrong");
  }

  return getResponse(true, "Successfully received weather data", results);
};
