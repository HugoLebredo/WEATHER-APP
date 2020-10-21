import { ExpansionPanelActions } from '@material-ui/core'
import React from 'react'
import {render} from '@testing-library/react'
import ForecastItem from './ForecastItem'

test("ForecastItem render", async () => {
    const { findByText } = render(<ForecastItem weekDay={"Sunday"}
                                    hour={16}
                                    state={"thunderstorm"}
                                    temperature={100}
                                />)
    const weekday = await findByText("Sunday")
    const hour = await findByText("16")
    const temp = await findByText("100 º")

    expect(weekday).toHaveTextContent("Sunday")
    expect(hour).toHaveTextContent("16")
    expect(temp).toHaveTextContent("100 º")
})