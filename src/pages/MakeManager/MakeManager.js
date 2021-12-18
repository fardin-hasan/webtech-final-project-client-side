import { Alert, Button, Grid, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';

const MakeManager = () => {
    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false);
    const handleOnBlur = e => {
        setEmail(e.target.value);
    }

    const handleManager = e => {
        const user = { email };
        fetch('https://safe-caverns-99351.herokuapp.com/users/manager', {
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
            <Typography sx={{ my: 2, textAlign: 'center' }} variant="h4" >Make An User Manager </Typography>
            <Grid container spacing={2}>
                <Grid sx={{ m: 'auto', textAlign: 'center' }} item xs={8} md={8}>
                    <form onSubmit={handleManager}>
                        <TextField
                            sx={{ width: '75%', my: 1 }}
                            id="standard-basic"
                            name='email'
                            type='email'
                            onBlur={handleOnBlur}
                            required
                            label="User Email"
                            variant="standard" />

                        <Button sx={{ width: '30%', my: 3 }} variant='contained' type='submit'>Make Manager</Button>
                    </form>
                    {success && <Alert sx={{ width: '70%', m: 'auto' }} severity="success">Manager Added Successfilly</Alert>}
                </Grid>

            </Grid>

        </Box >
    );
};

export default MakeManager;