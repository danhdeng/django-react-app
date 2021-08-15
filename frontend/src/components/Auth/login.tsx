import React, {useState} from 'react'
import axiosInstance from '../../axios';
import { useHistory } from 'react-router-dom';

//Material ui
import { Avatar, Button, CssBaseline, TextField, 
    FormControlLabel, Checkbox, Link, Grid, Typography, Container } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import useStyles from './login.styles.js';

export default function Login() {
    const classes = useStyles();

    const history=useHistory();
    const initialFormData =Object.freeze({
        email: '',
        username:'',
        firstname:'',
        password: '',
    });

    const [formData, setFormData]=useState(initialFormData)

    const handleChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
        setFormData({
            ...formData,
            [e.target.name]: e.target.value.trim(),
        })
    }

    const handleSubmit=(e:any)=>{
        e.preventDefault();
        axiosInstance.post('token/',{
          email:formData.email,
          password: formData.password,
        }).then((res)=>{
          history.push("/");
          localStorage.setItem("access_token", res.data.access);
          localStorage.setItem("refresh_token", res.data.refresh);
          axiosInstance.defaults.headers["Authorization"]=`JWT ${localStorage.getItem('access_token')}`
          history.push('/');
        }).catch((error) => {
          console.log(error);
      });
        
    }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            onChange={handleChange}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            onChange={handleChange}
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={handleSubmit}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="/register" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}