import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const Navigation = () => {
    const { user, logOut } = useAuth();
    return (
        <Box sx={{ flexGrow: 1, }}>
            <AppBar sx={{ backgroundColor: 'black' }} position="static">
                <Toolbar>

                    <Typography variant="h6" component="div" sx={{ flexGrow: 1, textAlign: 'left' }}>
                        <NavLink style={{ color: 'white', textDecoration: 'none' }} to='/'>BHMS</NavLink >
                    </Typography>

                    {user?.email ?
                        <Box>
                            <NavLink style={{ textDecoration: 'none', color: 'white' }} to='/dashboard'><Button style={{ textDecoration: 'none', color: 'white' }} >Dashboard</Button></NavLink>
                            <Button style={{ textDecoration: 'none', color: 'white' }} onClick={logOut}>Logout</Button>
                        </Box>
                        :
                        <NavLink style={{ textDecoration: 'none', color: 'white' }} to='/login'><Button color="inherit">Login</Button></NavLink>


                    }
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default Navigation;