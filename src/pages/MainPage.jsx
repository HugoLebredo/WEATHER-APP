import React from 'react'
import { useHistory } from 'react-router-dom'
import Paper from '@material-ui/core/Paper'
import AppFrame from '../components/AppFrame'
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
        <AppFrame>
            <Paper elevation={3}>
                <CityList cities = {cities} onClickCity={onClickHandler}/>
            </Paper>
        </AppFrame>
    )
}

export default MainPage
