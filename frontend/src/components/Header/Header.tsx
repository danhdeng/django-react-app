import React from 'react'
import { AppBar, Toolbar, Typography, CssBaseline, Link, IconButton, Button} from '@material-ui/core'
import useStyles from './styles.js'
import { NavLink } from 'react-router-dom';
import MenuIcon from '@material-ui/icons/Menu';

export default function Header() {
    const classes=useStyles();

    return (
        <div className={classes.root}>
        <AppBar position="static" color="default" elevation={0} className={classes.appBar}>
          <Toolbar>
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
            <Link component={NavLink} className={classes.link} to="/" underline="none" color="textPrimary">MyBlog</Link>
            </Typography>
            <nav><Link component={NavLink} className={classes.link} to="/register" underline="none" color="textPrimary">Register</Link></nav>
            <Button
              href="#"
              color="primary"
              variant="outlined"
              className={classes.link}
              component={NavLink}
              to="/login">
						    Login
					  </Button>
          <Button
						href="#"
						color="primary"
						variant="outlined"
						className={classes.link}
						component={NavLink}
						to="/logout">
					    Logout
					</Button>      
        </Toolbar>
        </AppBar>
      </div>
    )
}

