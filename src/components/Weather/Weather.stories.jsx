import React from 'react'
import Wheater from './Weather'

export default {
    title: "Weather",
    component: Wheater
}

export const WeatherSunny = () => <Wheater temperature = {22} state ={"clear"}/>
export const WeatherCloud = () => <Wheater temperature = {10} state ={"clouds"}/>