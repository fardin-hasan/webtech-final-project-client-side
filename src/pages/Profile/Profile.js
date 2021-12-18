import { Alert, Box, Button, Card, CardActions, CardContent, CardMedia, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';

import useAuth from '../../Hooks/useAuth';

const Profile = () => {

    const initialInfo = { name: '', email: '' }
    const [update, setUpdate] = useState(initialInfo)
    const { user } = useAuth();

    const [success, setSuccess] = useState(false);
    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newUpdate = { ...update };
        newUpdate[field] = value;
        setUpdate(newUpdate);
    }

    const handleUpdate = e => {
        const user = {
            ...update
        };
        fetch('https://safe-caverns-99351.herokuapp.com/users/update', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    setSuccess(true);
                    e.target.reset();
                }

            })

        e.preventDefault()
    }
    return (
        <Box>
            <Typography sx={{ my: 2, textAlign: 'center' }} variant="h4" >Update Information </Typography>
            <Grid container spacing={2}>
                <Grid sx={{ m: 'auto', textAlign: 'center' }} item xs={8} md={8}>
                    <form onSubmit={handleUpdate}>
                        <TextField
                            sx={{ width: '75%', my: 1 }}
                            id="standard-basic"
                            name='email'
                            type='email'

                            onBlur={handleOnBlur}
                            required
                            label="User Email"
                            variant="standard" />
                        <TextField
                            sx={{ width: '75%', my: 1 }}
                            id="standard-basic"
                            name='name'
                            type='text'
                            onBlur={handleOnBlur}

                            required
                            label="User Name"
                            variant="standard" />

                        <Button sx={{ width: '30%', my: 3 }} variant='contained' type='submit'>Update</Button>
                    </form>
                    {success && <Alert sx={{ width: '70%', m: 'auto' }} severity="success">Information Updated Successfilly</Alert>}
                </Grid>

            </Grid>

        </Box >
    );
};

export default Profile;