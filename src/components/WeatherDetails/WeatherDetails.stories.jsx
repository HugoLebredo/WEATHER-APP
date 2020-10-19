import React from 'react'
import WeatherDetails from './WeatherDetails'

const wind = 7
const humidity = 10

export default {
    title: "WeatherDetails",
    component: WeatherDetails
}

export const WeatherDetailsExample = () => <WeatherDetails humidity={humidity} wind = {wind}/>