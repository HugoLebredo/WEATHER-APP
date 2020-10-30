const api_key = `a2a3072629512251e3858069addc6dd4`;
const url_base_weather = `http://api.openweathermap.org/data/2.5/weather`;
const url_forecast_weather = `https://api.openweathermap.org/data/2.5/forecast`;

export const getUrlWeather = (city,countryCode) => `${url_base_weather}?q=${city},${countryCode}&appid=${api_key}`
export const getUrlForecast = (city,countryCode) => `${url_forecast_weather}?q=${city},${countryCode}&appid=${api_key}`