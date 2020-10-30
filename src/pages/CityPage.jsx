import React, { useMemo } from 'react'
import Grid from '@material-ui/core/Grid'
import LinearProgress from '@material-ui/core/LinearProgress'
import useCityPage from '../hooks/useCityPage'
import useCityList from '../hooks/useCityList'
import { getCityAndCountry } from '../utils/utils'
import { getContryByCountryCode } from '../utils/serviceCities'
import AppFrame from '../components/AppFrame'
import CityInfo from '../components/CityInfo'
import ForecastChart from '../components/ForecastChart'
import Forecast from '../components/Forecast'
import Weather from '../components/Weather'
import WeatherDetails from '../components/WeatherDetails'

const CityPage = () => {

    const { data, forecastItemList, city, countryCode } = useCityPage()

    const country = getContryByCountryCode(countryCode)

    const cities = useMemo(() => ([{city, countryCode}]), [city, countryCode])
    const {  allWeather } = useCityList(cities)

    const key = getCityAndCountry(city, countryCode)
    const weather = allWeather[key]
    
    const temperature = weather && weather.temperature
    const state = weather && weather.state
    const wind = weather && weather.wind
    const humidity = weather && weather.humidity
    
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
                        <CityInfo city = {city} country={country}/>  
                </Grid>
                
                <Grid item container
                        xs={12}
                        justify="center">
                        <Weather temperature={temperature} state={state}/>
                        <WeatherDetails wind={wind} humidity={humidity}/>
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
