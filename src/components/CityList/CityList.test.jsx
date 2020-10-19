import React from 'react'
import {render, fireEvent} from '@testing-library/react'
import CityList from './CityList'

const list = [
    {city:"Madrid",country:"España"},
    {city:"Lima",country:"Perú"}
]

const fnClickOnItem = jest.fn()

test("CityList render", async () => {
    //Arrange
    const { findAllByRole } = render(<CityList cities = {list} onClickCity={fnClickOnItem}/>)
    //Act
    const items = await findAllByRole("listitem")
    //Assert
    expect(items).toHaveLength(2)
} 
)

test("CityList call onclick", async () =>{ 
    const { findAllByRole } = render(<CityList cities = {list} onClickCity={fnClickOnItem}/>)

    const items = await findAllByRole("listitem")
    
    fireEvent.click(items[0])

    expect(fnClickOnItem).toHaveBeenCalledTimes(1)
})
