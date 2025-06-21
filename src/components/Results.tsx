import React from "react";
import Link from "next/link";
import { FaThermometerHalf } from "react-icons/fa";
import { CloseIconButton } from "../elements/Buttons/CloseIconButton";
import { getWeatherIcon } from "@/src/lib/iconmaps";
import { WeatherResponseType } from "../Utils/types";

interface ResultProps {
  weather: WeatherResponseType;
  onClose?: () => void;
}

export const Result: React.FC<ResultProps> = ({ weather, onClose }) => {
  const icon = weather.weather[0]?.icon;
  const WeatherIcon = getWeatherIcon(icon);

  return (
    <>
      <div className="mt-10 flex w-full items-center justify-center">
        {/* Weather Icon */}
        <div className="mr-6 flex-shrink-0 text-purple-400">{WeatherIcon}</div>
        {/* City and Description */}
        <div className="mr-8 flex flex-col items-start">
          <span className="text-2xl leading-tight font-bold text-blue-900">
            {weather.name}
          </span>
          <span className="text-lg font-semibold text-blue-900">
            {weather.weather[0]?.description}
          </span>
        </div>
        {/* Temperature and Close */}
        <div className="ml-auto flex flex-col items-end gap-2">
          {onClose ? (
            <CloseIconButton onClick={onClose} />
          ) : (
            <Link href="/">
              <CloseIconButton />
            </Link>
          )}
          <div className="mt-2 flex items-center gap-2">
            <span className="text-xl font-semibold text-blue-900">
              {/* {weather.main.temp} */}
              {Math.round(weather.main.temp)}
            </span>
            <FaThermometerHalf className="text-blue-900" />
            <span className="text-base font-normal text-blue-900">°C</span>
          </div>
        </div>
      </div>
      <p className="mx-auto mt-10 max-w-2xl text-center text-lg font-normal text-blue-700">
        {weather.weather[0]?.description}
      </p>
    </>
  );
};
