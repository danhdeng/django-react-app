import React, {useState} from 'react'
import axiosInstance from '../axios';
import { useHistory } from 'react-router-dom';
import FacebookLogin from 'react-facebook-login';
import SocialLogin from '../../axios/sociallogin';

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

    const responseFacebook = (response:any) => {
      console.log("fb response:",response);
      SocialLogin(response.accessToken);

    }

    const handleChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
        setFormData({
            ...formData,
            [e.target.name]: e.target.value.trim(),
        })
    }

    const handleSubmit=(e:any)=>{
        e.preventDefault();
        axiosInstance.post('auth/token/',{
          username:formData.email,
          password: formData.password,
          grant_type: 'password',
          client_id: 'a0t3GHYLH2p2PpFS2YxZYDUL0yhsNwsufWiCgnto',
          client_secret: 'V3Jev013m3pItFxCVKQVQNhNVZWUtLiId5PCY22Z5yiV70zBHKtfKhIl2L4ZdgEUnp4jOt84hSLo45hhDpiGYPRDvqzIoa9AEhGaTuOxheksS6P6G2L7T4NDiPTZWtli',
        }).then((res)=>{
           console.log(res.data);
          // history.push("/");
          localStorage.setItem("access_token", res.data.access_token);
          localStorage.setItem("refresh_token", res.data.refresh_token);
          axiosInstance.defaults.headers["Authorization"]=`Bearer ${localStorage.getItem('access_token')}`
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
          <FacebookLogin
              appId="1209575486170050"
              fields="name,email,picture"
              callback={responseFacebook} />,
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