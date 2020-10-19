import React from 'react'
import Forecast from './Forecast'

const list = [
    {weekDay:"Monday", hour:12,state:"cloudy", temperature:13},
    {weekDay:"Tuesday",hour:15,state:"rain",temperature:7},
    {weekDay:"Wednesday",hour:9,state:"cloud",temperature:17},
    {weekDay:"Thursday",hour:13,state:"sunny",temperature:22},
    {weekDay:"Friday",hour:20,state:"rain",temperature:5},
]

export default {
    title: "Forecast",
    component: Forecast
}

export const ForecastExample = () => <Forecast list={list}/>