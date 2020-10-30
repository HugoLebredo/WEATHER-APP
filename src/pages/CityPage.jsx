import React from 'react'
import Grid from '@material-ui/core/Grid'
import LinearProgress from '@material-ui/core/LinearProgress'
import useCityPage from '../hooks/useCityPage'
import AppFrame from '../components/AppFrame'
import CityInfo from '../components/CityInfo'
import ForecastChart from '../components/ForecastChart'
import Forecast from '../components/Forecast'
import Weather from '../components/Weather'
import WeatherDetails from '../components/WeatherDetails'

const CityPage = () => {

    const {data, forecastItemList} = useCityPage()
    
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
                <Grid>
                     {!data && !forecastItemList && <LinearProgress/>}
                </Grid>
                
                <Grid item  sm={12}>
                    {
                        data && <ForecastChart data={data}/>
                    }
                </Grid>
                
                <Grid item  sm={12}>
                    {
                        forecastItemList && <Forecast list={forecastItemList}/>
                    }
                </Grid>
            </Grid>
        </AppFrame>
    )
}

export default CityPage
