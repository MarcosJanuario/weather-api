import axios, { AxiosResponse } from 'axios';
import { WeatherResponse } from '../types/weather';

export async function getWeather(cityName: string): Promise<WeatherResponse> {
  const WEATHER_API_KEY = '';
  const weatherApiUrl: string = `http://api.weatherstack.com/current?access_key=${WEATHER_API_KEY}&query=${cityName}`;

  const response: AxiosResponse<WeatherResponse> = await axios.get(weatherApiUrl);
  return response.data;
}
