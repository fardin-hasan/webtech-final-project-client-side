import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const Footer = () => {
    return (
        <Box>
            <Typography variant='h5' sx={{ py: 3, color: 'white', fontWeight: 'medium', mt: 2, backgroundColor: 'black', textAlign: 'center' }}>All Rights Reserved © 2021 BHMS</Typography>

        </Box>

    );
};

export default Footer;