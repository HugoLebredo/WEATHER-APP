import React from 'react'
import IconState from './IconState'

const state = "thunderstorm"

export default {
    title: "IconState",
    component: IconState
}

export const Cloudy = () => 
    <IconState state = {state}/>