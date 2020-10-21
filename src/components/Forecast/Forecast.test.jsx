import React from 'react'
import {render} from '@testing-library/react'
import Forecast from './Forecast'
import { ExpansionPanelActions } from '@material-ui/core'

const list = [
    {weekDay:"Monday", hour:12,state:"clouds", temperature:13},
    {weekDay:"Tuesday",hour:15,state:"rain",temperature:7},
    {weekDay:"Wednesday",hour:9,state:"thunderstorm",temperature:17},
    {weekDay:"Thursday",hour:13,state:"clear",temperature:22},
    {weekDay:"Friday",hour:20,state:"drizzle",temperature:5},
]

test("Forecast render", async ()=> {
    const {findAllByTestId} = render(<Forecast list={list}/>)
    
    const forecastItems = await findAllByTestId('forecast-item-container')

    expect(forecastItems).toHaveLength(5)
})