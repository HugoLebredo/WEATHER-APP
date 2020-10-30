import React from 'react'
import PropTypes from 'prop-types'
import AppBar from '@material-ui/core/AppBar'
import Grid from '@material-ui/core/Grid'
import { IconContext } from 'react-icons'
import IconButton from '@material-ui/core/IconButton'
import Link from '@material-ui/core/Link'
import { Link as LinkRouter } from 'react-router-dom/Link'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import { WiDaySunny } from 'react-icons/wi'

const AppFrame = ({children}) => {
    return (
        <Grid container justify = "center">
            <AppBar position = "static">
                <Toolbar variant = "dense">
                    <IconButton color="inherit" aria-label="menu">
                        <Link 
                            component={LinkRouter}
                            to="/main"
                            color="inherit"
                            aria-label="menu">
                            <IconContext.Provider value={{size:'2em'}}>
                                <WiDaySunny/>
                            </IconContext.Provider>
                        </Link>
                    </IconButton>
                    <Typography variant='h6' color="inherit">
                        Weather App
                    </Typography>
                </Toolbar>
            </AppBar>
            <Grid item xs={12} sm={11} md={10} lg={8}>
                {children}
            </Grid>
        </Grid>
    )
}

AppFrame.propTypes = {
  children: PropTypes.node,
}

export default AppFrame
