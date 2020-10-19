import React from 'react'
import PropTypes from 'prop-types'
import {WiCloud,
        WiDayCloudy,
        WiDayFog,
        WiDaySunny,
        WiRain} from 'react-icons/wi'

export const validValues = [
        "cloud",
        "cloudy",
        "fog",
        "sunny",
        "rain"
    ]

const stateByName = {
        cloud: WiCloud,
        cloudy: WiDayCloudy,
        fog: WiDayFog,
        sunny: WiDaySunny,
        rain: WiRain
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
