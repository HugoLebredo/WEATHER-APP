import React from 'react'
import PropTypes from 'prop-types'
import ForecastItem from '../ForecastItem'
import Grid from '@material-ui/core/Grid'
import {validValues} from '../IconState'

const renderForecastItems = node => {
    const {weekDay, hour, state, temperature} = node
    return(
        <Grid data-testid = 'forecast-item-container'
            item key = {`${weekDay}${hour}`}>
            <ForecastItem weekDay = {weekDay}
                            hour = {hour}
                            state = {state}
                            temperature = {temperature}
            />
        </Grid>)
}

const Forecast = ({list}) => {
    return (
        <Grid container justify="center" alignItems="center">
            {list.map(node => renderForecastItems(node))}
        </Grid>
    )
}

Forecast.propTypes = {
    list: PropTypes.arrayOf(PropTypes.shape({
        weekDay: PropTypes.string.isRequired,
        hour: PropTypes.number.isRequired,
        state: PropTypes.oneOf(validValues).isRequired,
        temperature: PropTypes.number.isRequired,
    })).isRequired,
}

export default Forecast
