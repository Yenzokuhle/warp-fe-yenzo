import { cityNameWeather } from "@/src/Actions/weather";
import { DataResponse } from "@/src/Utils/types";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<DataResponse>
) {
  const { city } = req.query;

  const weatherData: DataResponse = await cityNameWeather(
    city?.toString() || ""
  );

  res.status(200).json(weatherData);
}
