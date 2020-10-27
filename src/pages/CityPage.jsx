import React,{ useState, useEffect } from 'react'
import axios from 'axios'
import Grid from '@material-ui/core/Grid'
import moment from 'moment'
import 'moment/locale/es'
import { useParams } from 'react-router-dom'
import convertUnits from 'convert-units'
import AppFrame from '../components/AppFrame'
import CityInfo from '../components/CityInfo'
import ForecastChart from '../components/ForecastChart'
import Forecast from '../components/Forecast'
import Weather from '../components/Weather'
import WeatherDetails from '../components/WeatherDetails'
import {url_forecast_weather, api_key} from '../constants/api_url'

const CityPage = props => {


    const[data, setData] = useState(null)
    const[forecastItemList, setForecastItemList] = useState(null)

    const {city, countryCode} = useParams()

    useEffect(() => {

        const getForecast = async () => {
            const url = `${url_forecast_weather}?q=${city},${countryCode}&appid=${api_key}`
            try{
                const { data } = await axios.get(url)

                const daysAhead = [0,1,2,3,4,5]
                const days = daysAhead.map( d => moment().add(d, 'd'))

                const dataAux = days.map( day => {
                    
                    const tempObjArray = data.list.filter( item => {
                        const dayOfYear = moment.unix(item.dt).dayOfYear()
                        return dayOfYear === day.dayOfYear()
                    })
        
                    const temps = tempObjArray.map( item => item.main.temp)
        
                    return({
                        "dayHour": day.format(`ddd`),
                        "min": Number(convertUnits(Math.min(...temps)).from("K").to("C").toFixed(0)),
                        "max": Number(convertUnits(Math.max(...temps)).from("K").to("C").toFixed(0))
                        
                    })
                })
                setData(dataAux)

                const interval = [4, 8, 12, 16, 20, 24]
                const forecastItemListAux = data.list
                    .filter((item, index) => interval.includes(index))
                    .map( item => { 
                        return({
                            hour:moment.unix(item.dt).hour(),
                            weekDay: moment.unix(item.dt).format('dddd'),
                            state: item.weather[0].main.toLowerCase(),
                            temperature: Number(convertUnits(item.main.temp).from("K").to("C").toFixed(0))
                        })
                    })
                setForecastItemList(forecastItemListAux)
                
            } catch(error) {
        
            }
        }

        getForecast()

    }, [city, countryCode])

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
