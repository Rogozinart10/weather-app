import axios from 'axios';

const service = axios.create({
  baseURL: 'https://api.weatherapi.com/v1',
});

export default service;

// async function getWeatherByLocation(location) {
//   const data = await service.get('/forecast.json', {
//     params: {
//       key: process.env.REACT_APP_API_KEY,
//       q: location,
//       days: 7,
//     },
//   });

//   return data;
// }

// const WeatherAPI = {
//   getWeatherByLocation,
// };

// export default WeatherAPI;