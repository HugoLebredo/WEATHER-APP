import React from 'react'
import {render} from '@testing-library/react'
import Forecast from './Forecast'
import { ExpansionPanelActions } from '@material-ui/core'

const list = [
    {weekDay:"Monday", hour:12,state:"cloudy", temperature:13},
    {weekDay:"Tuesday",hour:15,state:"rain",temperature:7},
    {weekDay:"Wednesday",hour:9,state:"cloud",temperature:17},
    {weekDay:"Thursday",hour:13,state:"sunny",temperature:22},
    {weekDay:"Friday",hour:20,state:"rain",temperature:5},
]

test("Forecast render", async ()=> {
    const {findAllByTestId} = render(<Forecast list={list}/>)
    
    const forecastItems = await findAllByTestId('forecast-item-container')

    expect(forecastItems).toHaveLength(5)
})