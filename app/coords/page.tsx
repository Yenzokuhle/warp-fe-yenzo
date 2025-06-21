"use client";

import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { DataResponse, WeatherResponseType } from "@/src/Utils/types";
import { currentLocationWeather } from "@/src/Actions/weather";
import { Loader } from "@/src/elements/Other/Loader";
import { Result } from "@/src/components/Results";
import { NoResultsView } from "@/src/elements/GenericViews/NoResultsView";
import { useQuery } from "@tanstack/react-query";

const CoordsPage = () => {
  const [weather, setWeather] = useState<WeatherResponseType | null>(null);
  const [isError, setIsError] = useState<string>();
  const searchParams = useSearchParams();
  const lat = searchParams.get("lat");
  const lon = searchParams.get("lon");

  const { isLoading, error, data } = useQuery<DataResponse, Error>({
    queryKey: ["currentLocationWeather", { lat: lat, lon: lon }],
    enabled: !!lat && !!lon,
    queryFn: async () => await currentLocationWeather(Number(lat), Number(lon)),
  });

  // Update data when queries succeed
  useEffect(() => {
    if (data?.success && data?.data) {
      if (data?.data.name === "") {
        //found data but not name included due to incorrect lat and long
        setIsError("Incorrect latitude and longitutude");
      } else {
        //success
        setWeather(data?.data);
      }
    } else if (!data?.success) {
      //failed
      setIsError(data?.message);
    }
  }, [data, error]);

  if (isLoading) {
    return (
      <div className="flex min-h-[50vh] w-full items-center justify-center">
        <Loader />
      </div>
    );
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-6">
      {!isLoading && isError && <NoResultsView text={isError} />}

      {!isLoading && weather && (
        <div className="bg-white-smoke relative flex min-h-screen w-full flex-col p-2">
          <Result weather={weather} />
        </div>
      )}
    </div>
  );
};

export default CoordsPage;
