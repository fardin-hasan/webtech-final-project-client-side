import React, { useState } from 'react';

import { Alert, Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import { NavLink, useLocation, useHistory } from 'react-router-dom';


import useAuth from '../../Hooks/useAuth';
import { Box } from '@mui/system';

const Login = () => {
    const [loginData, setLoginData] = useState([]);
    const { loginUser, error, isLoading, user } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const handleOnchange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    const handleLogin = e => {
        loginUser(loginData.email, loginData.password, location, history);

        e.preventDefault();
    }

    return (
        <Container>
            <Grid sx={{ my: 5 }} container spacing={2}>
                <Grid sx={{ m: 'auto' }} item xs={12} md={6}>
                    <img width='100%' src="https://image.freepik.com/free-vector/security-analysts-protect-internet-connected-systems-with-shield-cyber-security-data-protection-cyberattacks-concept_335657-1827.jpg" alt="" />
                </Grid>
                <Grid item xs={12} md={6}>
                    <Box sx={{ m: 'auto' }}>
                        <Typography sx={{ my: 5, textAlign: 'center' }} variant="h4" gutterBottom>
                            Login
                        </Typography>
                        <form style={{ margin: 'auto', textAlign: 'center' }} onSubmit={handleLogin} >
                            <TextField
                                sx={{ width: '75%', my: 1 }}
                                id="standard-basic"
                                name='email'
                                type='email'
                                onChange={handleOnchange}
                                required
                                label="Your Email"
                                variant="standard" />
                            <TextField
                                sx={{ width: '75%', my: 1 }}
                                id="standard-password-input"
                                label="Password"
                                name='password'
                                onChange={handleOnchange}
                                required
                                type="password"
                                autoComplete="current-password"
                                variant="standard"
                            />
                            <Button type='submit' variant='contained' sx={{ width: '75%', my: 3 }}>Login</Button>
                            <NavLink style={{ textDecoration: 'none' }} to='/register'><Button sx={{ width: '75%', my: 4 }} variant='text'>Don't Have an Account? Please Register</Button></NavLink>
                            {isLoading && <CircularProgress />}
                            {error && <Alert sx={{ width: '70%', m: 'auto' }} severity="error">{error}</Alert>}
                        </form>
                    </Box>
                </Grid>


            </Grid>
        </Container>
    );
};

export default Login;