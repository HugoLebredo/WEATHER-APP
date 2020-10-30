import React from 'react'
import PropTypes from 'prop-types'
import Grid from '@material-ui/core/Grid'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import Alert from '@material-ui/lab/Alert'
import useCityList from '../../hooks/useCityList'
import { getCityAndCountry } from '../../utils/utils'
import CityInfo from '../CityInfo'
import Weather from '../Weather'

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
                            state = {weather && weather.state}
                        />
                </Grid>
            </Grid>
        </ListItem>
    )
}

const CityList = ({cities, onClickCity}) => {
    const {allWeather, error, setError} = useCityList(cities)
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
