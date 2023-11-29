import express from 'express';
import getWeatherData from '../controllers/weatherController';

const router = express.Router();

router.get('/', (req, res) => {
  res.send('Weather API working!');
});

router.post('/weather', getWeatherData);

export default router;
