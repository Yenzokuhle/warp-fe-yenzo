import { currentLocationWeather } from "@/src/Actions/weather";
import { DataResponse } from "@/src/Utils/types";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<DataResponse>
) {
  const { lat, lng } = req.query;

  const weatherData: DataResponse = await currentLocationWeather(
    Number(lat),
    Number(lng)
  );

  res.status(200).json(weatherData);
}
