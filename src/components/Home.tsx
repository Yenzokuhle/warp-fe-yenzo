"use client";
import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { getWeatherIcon } from "@/src/lib/iconmaps";
import { DataResponse, WeatherResponseType, WeatherType } from "../Utils/types";
import { cityNameWeather } from "../Actions/weather";
import { DefaultView } from "../elements/GenericViews/DefaultView";
import { Loader } from "../elements/Other/Loader";
import { WeatherCard } from "./WeatherCard";
import { Result } from "./Results";
import { NoResultsView } from "../elements/GenericViews/NoResultsView";
import { LeftSearchSide } from "../elements/GenericViews/LeftSearchSide";

export const Home = () => {
  // This is the values to be sent to the API with debounce
  const [searchedValue, setSearchedValue] = useState<string>("");
  const [dataWeather, setDataWeather] = useState<WeatherResponseType | null>(
    null
  );
  const [dataError, setDataError] = useState<string | undefined>();

  const { isLoading, error, data } = useQuery<DataResponse, Error>({
    queryKey: ["cityNameWeather", searchedValue],
    enabled: !!searchedValue && searchedValue.trim() !== "",
    queryFn: async () => await cityNameWeather(searchedValue),
  });

  // Update data when queries succeed
  useEffect(() => {
    if (data?.success && data?.data) {
      //success
      setDataWeather(data.data);
      setDataError(undefined);
    } else if (data && !data?.success) {
      //failed
      setDataWeather(null);
      setDataError(data?.message || "Something went wrong");
    }
  }, [data, error]);

  return (
    <>
      <LeftSearchSide
        isLoading={isLoading}
        handleChange={(e) => setSearchedValue(e)}
        handleClose={() => {
          setSearchedValue("");
          setDataError(undefined);
          setDataWeather(null);
        }}
      />
      <div className="md:bg-white-smoke flex w-full flex-col gap-4 px-2 sm:px-[1.563rem] md:h-full md:py-[1.563rem]">
        {isLoading && (
          <div className="flex grow items-center justify-center">
            <Loader />
          </div>
        )}
        {!data && !isLoading && (
          <div className="hidden grow md:flex md:items-center md:justify-center">
            <DefaultView text="No weather info to show ..." />
          </div>
        )}
        {/* Mobile view (below 768px) */}
        <div className="md:hidden">
          {dataWeather &&
            (dataWeather && (dataWeather.weather as WeatherType[])).map(
              ({ id, description, icon }) => {
                const weatherIcon = getWeatherIcon(icon);
                return (
                  <WeatherCard
                    key={`weather-card-${id}`}
                    weatherIcon={weatherIcon}
                    cityName={dataWeather?.name}
                    description={description}
                    latLng={{
                      lat: dataWeather?.coord?.lat,
                      lng: dataWeather?.coord?.lon,
                    }}
                  />
                );
              }
            )}
        </div>
        {dataWeather && (
          <div className="hidden md:block">
            <Result
              weather={dataWeather}
              onClose={() => {
                setSearchedValue("");
                setDataError(undefined);
                setDataWeather(null);
              }}
            />
          </div>
        )}
        {dataError && (
          <NoResultsView
            text={dataError}
            onClose={() => {
              setSearchedValue("");
              setDataError(undefined);
            }}
          />
        )}
      </div>
    </>
  );
};
