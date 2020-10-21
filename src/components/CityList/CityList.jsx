import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'
import Grid from '@material-ui/core/Grid'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import { url_base_weather, api_key } from '../../constants/api_url'
import CityInfo from '../CityInfo'
import Weather from '../Weather'

const renderCityAndCountry = eventOnClickCity => (CityAndCountry, weather) => {
    const {city,country} = CityAndCountry
 
    return (
        <ListItem button key ={city} onClick={eventOnClickCity}>
            <Grid container justify = "center" alignItems = "center">
                <Grid item md = {9} xs = {12}>
                    <CityInfo city = {city} country = {country} />
                </Grid>
                <Grid item md = {3} xs = {12}>
                    { weather ?
                        (<Weather temperature = {weather.temperature}
                                     state = {weather.state}/>)
                        : ("No data")
                    }
                </Grid>
            </Grid>
        </ListItem>
    )
}

const CityList = ({cities, onClickCity}) => {

    const [allWeather, setAllWeather] = useState({})

    useEffect(() => {
        const setWeather = (city, country, countryCode) => {

            const url = `${url_base_weather}?q=${city},${countryCode}&appid=${api_key}`
            axios
                .get(url)
                .then( response => { 
                    const { data } = response
                    const temperature = data.main.temp
                    const state = data.weather[0].main.toLowerCase()

                    const propValue = { temperature, state }
                    const propName = `${city}-${country}` 

                    setAllWeather(allWeather => ({...allWeather,[`${city}-${country}`]:{temperature,state}})) 
                })
        }

        cities.forEach(({city, country, countryCode}) => {
            setWeather(city, country, countryCode)
        })
        

     },[cities])


    const weather = {
        temperature: 15,
        state: "rain"
    }
        return(
            <List>
                { 

                    cities.map(city => renderCityAndCountry(onClickCity)(city,
                        //weather)) 
                        allWeather[`${city.city}-${city.country}`]))
                 }
            </List>
        )
    }


CityList.propTypes = {
    cities: PropTypes.arrayOf(PropTypes.shape({
        city:PropTypes.string.isRequired,
        country: PropTypes.string.isRequired,
        countryCode: PropTypes.string.isRequired,
    })).isRequired,
    onClickCity: PropTypes.func.isRequired,
}

export default CityList
