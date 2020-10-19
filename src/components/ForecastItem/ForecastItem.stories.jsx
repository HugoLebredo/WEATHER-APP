import React from 'react'
import ForecastItem from './ForecastItem'

const temp = 15
const hour = 13
const weekday = 'Monday'
const state = 'cloudy'

export default {
    title: "ForecastItem",
    component: ForecastItem
}

export const CloudyMonday = () => 
    <ForecastItem temperature={temp} 
                    hour = {hour}
                    weekDay = {weekday}
                    state = {state}
    />