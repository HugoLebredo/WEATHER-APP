import { useState, useEffect } from 'react'
import axios from 'axios'
import getAllWeather from '../utils/transform/getAllWeather'
import { getUrlWeather } from '../utils/urls'

const useCityList = ( cities ) => {

    const [allWeather, setAllWeather] = useState({})
    const [error,setError] = useState(null)

    useEffect(() => {
        const setWeather = async (city, countryCode) => {

            const url = getUrlWeather(city, countryCode)
            
            try {
                const response = await axios.get(url)

                const AllWeatherAux = getAllWeather(response, city, countryCode )

                setAllWeather( allWeather => ({...allWeather,...AllWeatherAux}))
                
            } catch (error) {
                if (error.response) {
                    // errors with a response by the server
                    const {data, status} = error.response
                    console.log("data :",data)
                    console.log("status :", status)
                    setError("An error occurred in the server")
                } else if (error.request) {
                    // request doesnt arrive to server
                    console.log("request doesnt arrive to server")
                    setError("Server unreachable or maybe your device is offline")
                } else {
                    //unexpected errors
                    console.log("Unexpected error")
                    setError("Error until loading data")
                }
                
            }

        }

        cities.forEach(({city, countryCode}) => {
            setWeather(city, countryCode)
        })
        

     },[cities])

     return {allWeather, error, setError}
}

export default useCityList