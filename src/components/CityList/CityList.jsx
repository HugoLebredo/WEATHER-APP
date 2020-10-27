import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'
import convertUnits from 'convert-units'
import Grid from '@material-ui/core/Grid'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import Alert from '@material-ui/lab/Alert'
import { url_base_weather, api_key } from '../../constants/api_url'
import CityInfo from '../CityInfo'
import Weather from '../Weather'
import validValues from '../IconState'

const getCityAndCountry = (city, countryCode) => `${city}-${countryCode}`

const renderCityAndCountry = eventOnClickCity => (CityAndCountry, weather) => {

    const {city, country, countryCode} = CityAndCountry
 
    return (
        <ListItem button key = {getCityAndCountry(city, countryCode)}
                        onClick= {() => eventOnClickCity(city, countryCode)}>
            <Grid container justify = "center" alignItems = "center">
                <Grid item md = {9} xs = {12}>
                    <CityInfo city = {city} country = {country} />
                </Grid>
                <Grid item md = {3} xs = {12}>

                        <Weather
                            temperature = {weather && weather.temperature}
                            state = {weather && weather.state}/>
                </Grid>
            </Grid>
        </ListItem>
    )
}

const CityList = ({cities, onClickCity}) => {

    const [allWeather, setAllWeather] = useState({})
    const [error,setError] = useState(null)

    useEffect(() => {
        const setWeather = async (city, countryCode) => {

            const url = `${url_base_weather}?q=${city},${countryCode}&appid=${api_key}`
            
            try {
                const response = await axios.get(url)

                const { data } = response

                const key = getCityAndCountry(city,countryCode)
                const temperature = Number(convertUnits(data.main.temp).from("K").to("C").toFixed(0))
                const state = data.weather[0].main.toLowerCase()
                
                setAllWeather(allWeather => ({...allWeather,[key]:{temperature,state}})) 
                
            } catch (error) {
                if (error.response) {
                    // errors with a response by the server
                    const {data, status} = error.response
                    console.log("data :",data)
                    console.log("status :", status)
                    setError("An error occurred in the server")
                } else if (error.request) {
                    // request doesnt arrive to server
                    console.log("request doesnt arrive to server")
                    setError("Server unreachable or maybe your device is offline")
                } else {
                    //unexpected errors
                    console.log("Unexpected error")
                    setError("Error until loading data")
                }
                
            }

        }

        cities.forEach(({city, countryCode}) => {
            setWeather(city, countryCode)
        })
        

     },[cities])

    return(
        <div>
            {
                error && <Alert onClose={() => setError(null)} severity="error">{error}</Alert>
            }
            <List>
                { 
                    cities.map(city => renderCityAndCountry(onClickCity)(city,
                        allWeather[getCityAndCountry(city.city, city.countryCode)]))
                }
            </List>
        </div>
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
