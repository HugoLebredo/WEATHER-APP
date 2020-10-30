import { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import getChartData from '../utils/transform/getChartData'
import getForecastItemList from '../utils/transform/getForecastItemList'
import { getUrlForecast } from '../utils/urls'

const useCityPage = () => {
    const[data, setData] = useState(null)
    const[forecastItemList, setForecastItemList] = useState(null)

    const { city, countryCode } = useParams()

    useEffect(() => {

        const getForecast = async () => {
            const url = getUrlForecast(city, countryCode)
            try{
                const { data } = await axios.get(url)

                const dataAux = getChartData(data)
                setData(dataAux)

                const forecastItemListAux = getForecastItemList(data)
                setForecastItemList(forecastItemListAux)
                
            } catch(error) {
        
            }
        }

        getForecast()

    }, [city, countryCode])

    return {data, forecastItemList}
}

export default useCityPage