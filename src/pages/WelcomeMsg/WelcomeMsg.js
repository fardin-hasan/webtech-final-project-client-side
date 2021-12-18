import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import useAuth from '../../Hooks/useAuth';

const WelcomeMsg = () => {
    const [names, setName] = useState([]);

    const { user } = useAuth();

    useEffect(() => {
        const url = `https://safe-caverns-99351.herokuapp.com/singleUser?email=${user.email}`
        fetch(url)
            .then(res => res.json())
            .then(data => setName(data));
    }, [])

    return (
        <Box>
            {names.map((name) => (
                <Typography key={name._id} variant='h4' sx={{ fontWeight: 'medium', textAlign: 'center', opacity: '75%', mb: 5 }}>Welcome To Dashboard {name.displayName} </Typography>
            ))}

        </Box>
    );
};

export default WelcomeMsg;
// singleUser