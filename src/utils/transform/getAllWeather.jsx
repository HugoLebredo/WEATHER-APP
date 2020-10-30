import { validValues } from '../../components/IconState'
import { getCityAndCountry, toCelsius } from '../utils'

const getAllWeather = (response, city, countryCode) => {
    
    const { data } = response

    const key = getCityAndCountry(city,countryCode)
    const temperature = toCelsius(data.main.temp)
    const wind = data.wind.speed
    const humidity = data.main.humidity
    const stateFromServer = data.weather[0].main.toLowerCase()

    const state = validValues.includes(stateFromServer) ? stateFromServer : null
    const propValue = {temperature, state, wind, humidity}
    
    return ({[key]: propValue}) 
}

export default getAllWeather