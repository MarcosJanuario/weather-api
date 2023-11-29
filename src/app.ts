import express, { Request, Response } from 'express';
import axios from 'axios';
import { AxiosResponse } from 'axios';
import { CurrentWeather, WeatherResponse } from './types/weather';

const app = express();
app.use(express.json());

const WEATHER_API_KEY = '';

app.get('/', (req, res) => {
  res.send('Weather API works!');
});

app.post('/weather', async (req: Request, res: Response) => {
  const cityName: string = req.body.cityName;

  const weatherApiUrl: string = `http://api.weatherstack.com/current?access_key=${WEATHER_API_KEY}&query=${cityName}`;

  try {
    const response: AxiosResponse<WeatherResponse> = await axios.get(weatherApiUrl);
    const weatherData: WeatherResponse = response.data;

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
    console.error(error);
    res.status(500).send('Error fetching weather data');
  }
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});
