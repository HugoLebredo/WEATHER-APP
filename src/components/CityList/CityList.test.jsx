import React from 'react'
import {render, fireEvent} from '@testing-library/react'
import CityList from './CityList'

const list = [
    {city:"Madrid",country:"España",countryCode:"ES"},
    {city:"Lima",country:"Perú",countryCode:"PE"}
]

const fnClickOnItem = jest.fn()

test("CityList render", async () => {
    //Arrange
    const { findAllByRole } = render(<CityList cities = {list} onClickCity={fnClickOnItem}/>)
    //Act
    const items = await findAllByRole("button")
    //Assert
    expect(items).toHaveLength(2)
} 
)

test("CityList call onclick", async () =>{ 
    const { findAllByRole } = render(<CityList cities = {list} onClickCity={fnClickOnItem}/>)

    const items = await findAllByRole("button")
    
    fireEvent.click(items[0])

    expect(fnClickOnItem).toHaveBeenCalledTimes(1)
})
