import React from 'react'
import CityList from './CityList'
import { action } from '@storybook/addon-actions'

const list = [{
    city:"Madrid",
    country:"España"
    },
    {
    city:"Lima",
    country:"Perú"
    }]

export default {
    title: "CityList",
    component: CityList
}

export const WeatherExample = () => <CityList cities={list} onClickCity = {action("click en city")}/>