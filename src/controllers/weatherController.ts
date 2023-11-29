import { Request, Response } from 'express';
import { getWeather } from '../services/weatherService';
import { WeatherResponse, CurrentWeather, WeatherError } from '../types/weather';

export default async function WeatherController(req: Request, res: Response): Promise<void | Response<WeatherError>> {
  try {
    const cityName: string = req.body.cityName;
    if (!cityName) {
      return res.status(400).json({ error: 'CityName not provided.' });
    }

    const weatherData: WeatherResponse = await getWeather(cityName);

    if (weatherData.current) {
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
        precipitation: weatherData.current.precip,
        humidity: weatherData.current.humidity,
        cloudCover: weatherData.current.cloudcover,
        feelsLike: weatherData.current.feelslike,
        uvIndex: weatherData.current.uv_index,
        visibility: weatherData.current.visibility,
        location: {
          name: weatherData.location.name,
          country: weatherData.location.country,
          region: weatherData.location.region,
          lat: weatherData.location.lat,
          lon: weatherData.location.lon,
          timezoneId: weatherData.location.timezone_id,
          localtime: weatherData.location.localtime,
          localtimeEpoch: weatherData.location.localtime_epoch,
          utcOffset: weatherData.location.utc_offset,
        },
      };

      return res.json(currentWeather);
    } else {
      return res.status(400).json({ error: 'Invalid city name' });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}
