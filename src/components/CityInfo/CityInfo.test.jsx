import React from 'react'
import {render} from '@testing-library/react'
import CityInfo from './CityInfo' // SUT Subject Under Testing (objeto del testeo)

test("CityInfo render", async () => {
    //Arrange
    const city = "Buenos Aires"
    const country = "Argentina"
    const { findAllByRole } = render(<CityInfo city = {city} country = {country}/>)
    //Act
    const cityandCountryComponents = await findAllByRole("heading")
    //Assert
    expect(cityandCountryComponents[0]).toHaveTextContent(city)
    expect(cityandCountryComponents[1]).toHaveTextContent(country)
}
)