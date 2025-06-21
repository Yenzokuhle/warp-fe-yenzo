"use client";

import { LinkPrimaryButton } from "../elements/Buttons/LinkPrimaryButton";

type WeatherCardProps = {
  onClick?: () => void;
  weatherIcon: React.ReactNode;
  cityName: string;
  description: string;
  latLng: {
    lat: number;
    lng: number;
  };
};

export const WeatherCard = ({
  weatherIcon,
  cityName,
  description,
  latLng,
}: WeatherCardProps) => {
  return (
    <div className="border-purple bg-white-smoke flex h-[7.813rem] w-full items-center gap-2 rounded-[0.813rem] border p-4">
      <div className="text-gray/80 flex h-[4.75rem] w-[4.75rem] items-center justify-center p-2">
        {weatherIcon}
      </div>
      <div className="grow">
        <h1 className="text-2xl">{cityName}</h1>
        <p className="text-xl font-normal">{description}</p>
      </div>
      <LinkPrimaryButton
        buttonText={"View more"}
        href={`/coords?lat=${latLng.lat}&lon=${latLng.lng}`}
      />
    </div>
  );
};
