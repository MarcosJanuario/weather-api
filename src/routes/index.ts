import express from 'express';
import WeatherController from '../controllers/weatherController';

const router = express.Router();

router.get('/', (req, res) => {
  res.send('Weather API working!');
});

router.post('/', WeatherController);
router.post('/weather', WeatherController);

export default router;
