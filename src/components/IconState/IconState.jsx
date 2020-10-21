import React from 'react'
import PropTypes from 'prop-types'
import {WiCloud,
        WiRaindrop,
        WiDaySunny,
        WiRain,
        WiSnow,
        WiThunderstorm} from 'react-icons/wi'

export const validValues = [
        "clouds",
        "clear",
        "rain",
        "snow",
        "drizzle",
        "thunderstorm"
    ]

const stateByName = {
        clouds: WiCloud,
        clear: WiDaySunny,
        drizzle: WiRaindrop,
        snow: WiSnow,
        rain: WiRain,
        thunderstorm: WiThunderstorm
    }

const renderState = state => {
    const IconState = stateByName[state]
    return <IconState/>
}

const IconState = ({state}) => {
    return (
        renderState(state)
    )
}

IconState.propTypes = {
 state: PropTypes.oneOf(validValues).isRequired,
}

export default IconState
