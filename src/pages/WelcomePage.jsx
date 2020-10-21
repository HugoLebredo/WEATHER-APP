import React from 'react'
import Grid from '@material-ui/core/Grid'
import Link from 'react-router-dom/Link'
import Typography from '@material-ui/core/Typography'
import WelcomeScreen from '../components/WelcomeScreen'
import { Link as RouterLink } from 'react-router-dom'
import { IconContext } from 'react-icons'
import { WiDaySunny } from 'react-icons/wi'

const WelcomePage = props => {
    return (
        <WelcomeScreen>
            <Grid container
                    direction="column"
                    justify = "center"
                    className = "full">
                        <div className="highlight">
                            <Grid item container xs={12}
                                    justify="center"
                                    alignItems="center" >
                                <Grid item>
                                    <IconContext.Provider value={{ size:"6em" }}>
                                        <WiDaySunny />
                                    </IconContext.Provider>
                                </Grid>
                                <Grid item container
                                        direction="column"
                                        justify="center"
                                        alignItems="center">
                                    <Typography variant="h4" color="inherit">
                                            Weather App
                                    </Typography>
                                    <Link color="inherit"
                                        aria-label="menu"
                                        component={RouterLink}
                                        to="/main">
                                        Enter
                                    </Link>
                                </Grid>
                            </Grid>
                        </div>
                    </Grid>
            <Link to='/main'> Go to main </Link>
        </WelcomeScreen>
    )
}

export default WelcomePage
