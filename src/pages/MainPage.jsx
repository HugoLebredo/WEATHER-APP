import React from 'react'
import { useHistory } from 'react-router-dom'
import CityList from '../components/CityList'

const cities = [{
    city:"Madrid",
    country:"España"
    },
    {
    city:"Lima",
    country:"Perú"
    }]

const MainPage = props => {

    const history = useHistory()

    const onClickHandler = () => {
        history.push('/city')
        console.log("boton pulsao")
    }
    return (
        <div>
            <h2>City List</h2>
            <CityList cities = {cities} onClickCity={onClickHandler}/>
        </div>
    )
}

export default MainPage
