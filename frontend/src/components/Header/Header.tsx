import React from 'react'
import { AppBar, Toolbar, Typography, CssBaseline } from '@material-ui/core'
import useStyles from './styles.js'

export default function Header() {
    const classes=useStyles();

    return (
        <React.Fragment>
            <AppBar
                position="static"
                color="transparent"
                elevation={0}
                className={classes.appBar}
            >
                <Toolbar>
                    <Typography variant="h6" color="inherit" noWrap>
                        MyBlog
                    </Typography>
                </Toolbar>
            </AppBar>
        </React.Fragment>
    )
}

