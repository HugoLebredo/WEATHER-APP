import React from 'react'
import { LineChart,
            Line,
            XAxis,
            YAxis,
            CartesianGrid,
            Tooltip,
            Legend,
            ResponsiveContainer } from 'recharts'
import PropTypes from 'prop-types'

const ForecastChart = ({data}) => {
    return (
        <ResponsiveContainer width={"95%"} height={250}>
            <LineChart margin={{top: 20, bottom: 20, right: 5, left:5}}
                        data={data}>
            <XAxis dataKey="dayHour"></XAxis>
            <YAxis></YAxis>
            <CartesianGrid/>
            <Legend/>
            <Tooltip/>
            <Line type="monotone" dataKey="max" stroke="#FF0000"/>
            <Line type="monotone" dataKey="min" stroke="#0000FF"/>
            </LineChart>
        </ResponsiveContainer>
    )
}

ForecastChart.propTypes = {
    data: PropTypes.arrayOf(PropTypes.shape({
        dayHour: PropTypes.string.isRequired,
        min: PropTypes.number.isRequired,
        max: PropTypes.number.isRequired,
    })).isRequired,
}

export default ForecastChart
