import { Alert, Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const Register = () => {
    const [loginData, setLoginData] = useState([]);
    const { registerUser, isLoading, user, error } = useAuth();

    const history = useHistory();
    const handleOnchange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    const handleLogin = e => {

        registerUser(loginData.email, loginData.password, history, loginData.name);
        e.preventDefault();
    }

    return (
        <Container>
            <Grid sx={{ my: 5 }} container spacing={2}>
                <Grid sx={{ m: 'auto' }} item xs={12} md={5}>
                    <img width='80%' src="https://alphaechurch.com/account/login.png" alt="" />
                </Grid>
                <Grid sx={{ m: 'auto' }} item xs={12} md={6}>
                    <Box sx={{ textAlign: 'center' }}>
                        <Typography sx={{ my: 5, textAlign: 'center' }} variant="h4" gutterBottom>
                            Please Register
                        </Typography>
                        {user?.email && <Alert sx={{ width: '70%', m: 'auto' }} severity="success">Registration Successful</Alert>}

                        {!isLoading && < form onSubmit={handleLogin} >
                            <TextField
                                sx={{ width: '75%', m: 1 }}
                                id="standard-basic"
                                type='text'
                                name='name'
                                required
                                onChange={handleOnchange}
                                label="Your Name"
                                variant="standard" />
                            <TextField
                                sx={{ width: '75%', m: 1 }}
                                id="standard-basic"
                                type='email'
                                required
                                name='email'
                                onChange={handleOnchange}
                                label="Your Email"
                                variant="standard" />
                            <TextField
                                sx={{ width: '75%', m: 1 }}
                                id="standard-basic"
                                type='text'
                                name='city'
                                required
                                onChange={handleOnchange}
                                label="Your City"
                                variant="standard" />
                            <TextField
                                sx={{ width: '75%', m: 1 }}
                                id="standard-password-input"
                                label="Password"
                                name='password'
                                required
                                onChange={handleOnchange}
                                type="password"
                                autoComplete="current-password"
                                variant="standard"
                            />
                            <TextField
                                sx={{ width: '75%', m: 1 }}
                                id="standard-password-input"
                                label="Confirm Password"
                                name='confirmPassword'
                                required
                                onChange={handleOnchange}
                                type="password"
                                autoComplete="current-password"
                                variant="standard"
                            />
                            <Button type='submit' variant='contained' sx={{ width: '75%', m: 1 }}>Register</Button>
                            <NavLink style={{ textDecoration: 'none' }} to='/login'><Button sx={{ width: '75%', m: 1 }} variant='text'>Already Have an Account? Please Login</Button></NavLink>
                        </form>}
                    </Box>
                    {isLoading && <CircularProgress />}
                    {error && <Alert sx={{ width: '70%', m: 'auto' }} severity="error">{error}</Alert>}
                </Grid>


            </Grid>
        </Container >
    );
};

export default Register;