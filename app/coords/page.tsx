"use client";

import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { DataResponse, WeatherResponseType } from "@/src/Utils/types";
import { currentLocationWeather } from "@/src/Actions/weather";
import { Loader } from "@/src/elements/Other/Loader";
import { Result } from "@/src/components/Results";
import { NoResultsView } from "@/src/elements/GenericViews/NoResultsView";

const CoordsPage = () => {
  const [weather, setWeather] = useState<WeatherResponseType | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<string>();
  const searchParams = useSearchParams();
  const lat = searchParams.get("lat");
  const lon = searchParams.get("lon");

  useEffect(() => {
    const fetchWeather = async () => {
      setIsLoading(true);
      if (lat && lon) {
        try {
          const weatherData: DataResponse = await currentLocationWeather(
            Number(lat),
            Number(lon),
          );

          if (weatherData?.success && weatherData?.data) {
            if (weatherData?.data.name === "") {
              //found data but not name included due to incorrect lat and long
              setIsError("Incorrect latitude and longitutude");
            } else {
              //success
              setWeather(weatherData?.data);
            }
          } else if (!weatherData?.success) {
            //failed
            setIsError(weatherData?.message);
          }

          setIsLoading(false);
        } catch {
          setIsLoading(false);
          setIsError("Somethig went wrong");
        }
      }
    };
    fetchWeather();
  }, [lat, lon]);

  if (isLoading) {
    return (
      <div className="flex min-h-[50vh] w-full items-center justify-center">
        <Loader />
      </div>
    );
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-amber-400 px-12 pt-6">
      {!isLoading && isError && <NoResultsView text={isError} />}

      {!isLoading && weather && (
        <div className="bg-white-smoke relative flex min-h-screen w-full flex-col p-2">
          <Result weather={weather} />{" "}
        </div>
      )}
    </div>
  );
};

export default CoordsPage;
