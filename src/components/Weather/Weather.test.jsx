import React from 'react'
import {render} from '@testing-library/react'
import Weather from './Weather'

test("Weather render sunny", async () => {
        //Arrange
        const temperature = 10
        const state = "sunny"
        //state = null
        //Act
        const {findByRole} = render(<Weather temperature = {temperature} state = {state}/>)
        const temperatureComponent = await findByRole('heading')
        //Assert
        expect(temperatureComponent).toHaveTextContent(temperature.toString())
        }
)