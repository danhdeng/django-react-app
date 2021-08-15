import React, {useState} from 'react'
import axiosInstance from '../../axios';
import { useHistory } from 'react-router-dom';

//Material ui
import { Avatar, Button, CssBaseline, TextField, 
    FormControlLabel, Checkbox, Link, Grid, Typography, Container } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import useStyles from './register.styles.js';


export default function Signup() {
    const history=useHistory();
    const classes=useStyles();
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

        axiosInstance.post('user/register/',{
          email:formData.email,
          user_name: formData.username,
          password: formData.password,
          firstname: formData.firstname,
        }).then((res)=>{
          history.push("/login");
          console.log(res);
          console.log(res.data);
        }).catch(async (error) => {
          const response = error.response;
          console.log(response.data);
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
              Sign up
            </Typography>
            <form className={classes.form} noValidate>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    autoComplete="uname"
                    name="username"
                    variant="outlined"
                    required
                    fullWidth
                    id="username"
                    label="User Name"
                    autoFocus
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="firstname"
                    label="First Name"
                    name="firstname"
                    autoComplete="fname"
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <FormControlLabel
                    control={<Checkbox value="allowExtraEmails" color="primary" />}
                    label="I want to receive inspiration, marketing promotions and updates via email."
                  />
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
                onClick={handleSubmit}
              >
                Sign Up
              </Button>
              <Grid container justifyContent="flex-end">
                <Grid item>
                  <Link href="/login" variant="body2">
                    Already have an account? Sign in
                  </Link>
                </Grid>
              </Grid>
            </form>
          </div>
        </Container>
      );
    }


