import { NextFunction, Request, Response } from "express";
import axios from "axios";
import { fetchWeatherApi } from "openmeteo";

interface history {
  date: string;
  maxTemp: number;
  minTemp: number;
}

const fetchWethear = async (req: Request, res: Response, next: NextFunction) => {
  console.log("fetchWethear")
  const { start_date, end_date } = req.body;
  let historicalWeather: history[] = [];

  const params = {
    //longtitude and latitude for Jerusalem
    latitude: 31.76904,
    longitude: 35.21633,
    start_date: start_date,
    end_date: end_date,
    daily: ["temperature_2m_max", "temperature_2m_min"],
  };

  try {
    const url = "https://archive-api.open-meteo.com/v1/archive";
    const responses = await fetchWeatherApi(url, params);

    // Helper function to form time ranges
    const range = (start: number, stop: number, step: number) =>
      Array.from({ length: (stop - start) / step }, (_, i) => start + i * step);
    const response = responses[0];

    const utcOffsetSeconds = response.utcOffsetSeconds();
    const daily = response.daily()!;

    // Note: The order of weather variables in the URL query and the indices below need to match!
    const weatherData = {
      daily: {
        time: range(
          Number(daily.time()),
          Number(daily.timeEnd()),
          daily.interval()
        ).map((t) => new Date((t + utcOffsetSeconds) * 1000)),
        temperature2mMax: daily.variables(0)!.valuesArray()!,
        temperature2mMin: daily.variables(1)!.valuesArray()!,
      },
    };
    // `weatherData` now contains a simple structure with arrays for datetime and weather data
    for (let i = 0; i < weatherData.daily.time.length; i++) {
      historicalWeather.push({
        date: weatherData.daily.time[i].toISOString().split("T")[0],
        maxTemp: Number(weatherData.daily.temperature2mMax[i].toFixed(2)),
        minTemp: Number(weatherData.daily.temperature2mMin[i].toFixed(2)),
      });
    }
    res.status(200).send(
      /*success: true,
      message: "Historical weather data fetched successfully",*/
      historicalWeather,
    );
  } catch (error:any) {
    const err = new Error(error)
    return next(err)
  }
};

export default { fetchWethear };
