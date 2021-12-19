import { Button } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { NavLink } from 'react-router-dom';

const Banner = () => {

    return (

        <Box sx={{ mt: -5 }}>
            <img width='100%' height='500px' src="https://www.trillmag.com/wp-content/uploads/2016/12/eaa629705852b7e8628c56dd1db47701.png" alt="" />

            <Box sx={{ display: 'flex', mt: -10, justifyContent: 'right', mx: 5 }}>
                <NavLink style={{ textDecoration: 'none' }} to='allProducts'>  <Button sx={{ width: '220px' }} variant='contained'> All Packages</Button></NavLink>
            </Box>
        </Box>


    );
};

export default Banner;