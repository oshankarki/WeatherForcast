require('dotenv').config(); 
const axios = require('axios');

exports.info = async (req, res) => {
  try {
    const city = req.query.city;
    const apiKey = process.env.API_KEY;
     

    const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`);

    const weatherData = {
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      conditions: response.data.weather[0].description,
    };

    res.json(weatherData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while fetching weather data' });
  }
};
