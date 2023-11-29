import { Request, Response } from 'express';
import { getWeather } from '../services/weatherService';
import { CurrentWeather } from '../types/weather';

export default async function getWeatherData(req: Request, res: Response): Promise<void> {
  const cityName: string = req.body.cityName;

  try {
    const weatherData = await getWeather(cityName);

    const currentWeather: CurrentWeather = {
      observationTime: weatherData.current.observation_time,
      temperature: weatherData.current.temperature,
      weatherCode: weatherData.current.weather_code,
      weatherIcons: weatherData.current.weather_icons,
      weatherDescriptions: weatherData.current.weather_descriptions,
      windSpeed: weatherData.current.wind_speed,
      windDegree: weatherData.current.wind_degree,
      windDir: weatherData.current.wind_dir,
      pressure: weatherData.current.pressure,
      precip: weatherData.current.precip,
      humidity: weatherData.current.humidity,
      cloudcover: weatherData.current.cloudcover,
      feelslike: weatherData.current.feelslike,
      uvIndex: weatherData.current.uv_index,
      visibility: weatherData.current.visibility,
    };

    res.json(currentWeather);
  } catch (error) {
    //TODO: improve error handler
    console.error(error);
    res.status(500).send('Error fetching weather data');
  }
}
