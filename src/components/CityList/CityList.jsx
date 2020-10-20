import React from 'react'
import PropTypes from 'prop-types'
import Grid from '@material-ui/core/Grid'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import CityInfo from '../CityInfo'
import Weather from '../Weather'

const renderCityAndCountry = eventOnClickCity => CityAndCountry => {
    const {city,country} = CityAndCountry
    return (
        <ListItem button key ={city} onClick={eventOnClickCity}>
            <Grid container justify = "center" alignItems = "center">
                <Grid item md = {9} xs = {12}>
                    <CityInfo city = {city} country = {country} />
                </Grid>
                <Grid item md = {3} xs = {12}>
                    <Weather temperature = {10} state = {"sunny"}/>
                </Grid>
            </Grid>
        </ListItem>
    )
}

const CityList = ({cities, onClickCity}) => {
        return(
            <List>
                { cities.map(city => renderCityAndCountry(onClickCity)(city)) }
            </List>
        )
    }


CityList.propTypes = {
    cities: PropTypes.arrayOf(PropTypes.shape({
        city:PropTypes.string.isRequired,
        country: PropTypes.string.isRequired,
    })).isRequired,
    onClickCity: PropTypes.func.isRequired,
}

export default CityList
