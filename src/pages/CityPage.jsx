import React from 'react'
import Grid from '@material-ui/core/Grid'
import AppFrame from '../components/AppFrame'
import CityInfo from '../components/CityInfo'
import ForecastChart from '../components/ForecastChart'
import Forecast from '../components/Forecast'
import Weather from '../components/Weather'
import WeatherDetails from '../components/WeatherDetails'

const listForecast = [
    {weekDay:"Monday", hour:12,state:"cloudy", temperature:13},
    {weekDay:"Tuesday",hour:15,state:"rain",temperature:7},
    {weekDay:"Wednesday",hour:9,state:"cloud",temperature:17},
    {weekDay:"Thursday",hour:13,state:"sunny",temperature:22},
    {weekDay:"Friday",hour:20,state:"rain",temperature:5},
]

const dataForecastChart = [
    {
        "dayHour": "Jue 18",
        "min": 14,
        "max": 22,
    },
    {
        "dayHour": "Vie 06",
        "min": 18,
        "max": 27,
    },
    {
        "dayHour": "Vie 12",
        "min": 18,
        "max": 28,
    },
    {
        "dayHour": "Vie 18",
        "min": 18,
        "max": 25,
    },
    {
        "dayHour": "Sab 06",
        "min": 15,
        "max": 22,
    },
    {
        "dayHour": "Sab 12",
        "min": 12,
        "max": 19,
    }
]

const CityPage = props => {
    return (
        <AppFrame>
            <Grid container
                justify="space-around"
                direction = "column"
                spacing={2}>
                
                <Grid container item
                        xs={12}
                        justify="center"
                        alignItems="flex-end">
                        <CityInfo city = {"Avilés"} country={"Spain"}/>  
                </Grid>
                
                <Grid item container
                        xs={12}
                        justify="center">
                        <Weather temperature={10} state={"rain"}/>
                        <WeatherDetails wind={12} humidity={68}/>
                </Grid>
                
                <Grid item  sm={12}>
                    <ForecastChart data={dataForecastChart}/>
                </Grid>
                
                <Grid item  sm={12}>
                    <Forecast list={listForecast}></Forecast>
                </Grid>
            </Grid>
        </AppFrame>
    )
}

export default CityPage
