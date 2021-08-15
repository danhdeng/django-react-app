import React, {useState} from 'react'
import { AppBar, Toolbar, Typography, Link, IconButton, Button} from '@material-ui/core'
import useStyles from './styles.js'
import { NavLink } from 'react-router-dom';
import MenuIcon from '@material-ui/icons/Menu';
import SearchBar from "material-ui-search-bar";
import { useHistory } from 'react-router-dom';

export default function Header(){
    const classes=useStyles();
    const history = useHistory();
    const [searchData, setSearchData]=useState({search:''})
    const goSearch=() =>{
        history.push("/search/",{search: `?search=${searchData.search}`});
        window.location.reload();
    }

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
            <SearchBar value={searchData.search} onChange={(newValue) =>setSearchData({ search: newValue })} onRequestSearch={() => goSearch()} />
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
};

