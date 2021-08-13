import React from 'react'
import { AppBar, Toolbar, Typography, CssBaseline, Link, IconButton} from '@material-ui/core'
import useStyles from './styles.js'
import { NavLink } from 'react-router-dom';
import MenuIcon from '@material-ui/icons/Menu';

export default function Header() {
    const classes=useStyles();

    return (
        // <React.Fragment>
        //     <AppBar
        //         position="static"
        //         color="transparent"
        //         elevation={0}
        //         className={classes.appBar}
        //     >
        //         <Toolbar>
        //             <Typography variant="h6" color="inherit" noWrap>
        //                 MyBlog
        //             </Typography>
        //             <Container>
        //                 <Link component={NavLink} className={classes.link} to="/" underline="none" color="textPrimary">Blog</Link>
        //                 <Link component={NavLink} className={classes.link} to="/register" underline="none" color="textPrimary">Signup</Link>
        //                 <Link component={NavLink}  className={classes.link} to="/login" underline="none" color="textPrimary">Login</Link>
        //             </Container>
        //         </Toolbar>
        //     </AppBar>
        // </React.Fragment>
        <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              MyBlog
            </Typography>
            <Link component={NavLink} className={classes.link} to="/" underline="none" color="textPrimary">Blog</Link>
            <Link component={NavLink} className={classes.link} to="/register" underline="none" color="textPrimary">Signup</Link>
            <Link component={NavLink}  className={classes.link} to="/login" underline="none" color="textPrimary">Login</Link>       
        </Toolbar>
        </AppBar>
      </div>
    )
}

