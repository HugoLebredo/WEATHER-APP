import React from 'react'
import Grid from '@material-ui/core/Grid'
import PropTypes from 'prop-types'
import Typography from '@material-ui/core/Typography'
import Skeleton from '@material-ui/lab/Skeleton'
import {IconContext} from 'react-icons'
import IconState, { validValues } from '../IconState'


const Weather = ({temperature, state}) => {
    return (
        <Grid container
                item
                direction="row"
                justify="center"
                alignItems="center"
                spacing={1}>
            <IconContext.Provider value={{size:'6em'}}>
            {
                state ?
                <IconState state = {state && state}/>
                :
                <Skeleton variant="circle" height={80} width={80}/>
            }  
            </IconContext.Provider>
            {temperature ?
                <Typography variant="h2" display="inline">{temperature}</Typography>
                :
                <Skeleton variant="rect" height={80} width={80}/>
            }
        </Grid>
    )
}

Weather.propTypes = {
    temperature: PropTypes.number,
    state: PropTypes.oneOf(validValues),
}

export default Weather
