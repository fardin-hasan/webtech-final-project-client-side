import { Alert, Button, Grid, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';

const MakeOwner = () => {
    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false);
    const handleOnBlur = e => {
        setEmail(e.target.value);
    }

    const handleOwner = e => {
        const user = { email };
        fetch('https://safe-caverns-99351.herokuapp.com/users/houseOwner', {
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
            <Typography sx={{ my: 2, textAlign: 'center' }} variant="h4" >Make An User House Owner </Typography>
            <Grid container spacing={2}>
                <Grid sx={{ m: 'auto', textAlign: 'center' }} item xs={8} md={8}>
                    <form onSubmit={handleOwner}>
                        <TextField
                            sx={{ width: '75%', my: 1 }}
                            id="standard-basic"
                            name='email'
                            type='email'
                            onBlur={handleOnBlur}

                            required
                            label="User Email"
                            variant="standard" />


                        <Button sx={{ width: '30%', my: 3 }} variant='contained' type='submit'>Make Owner</Button>
                    </form>
                    {success && <Alert sx={{ width: '70%', m: 'auto' }} severity="success">Owner Added Successfilly</Alert>}
                </Grid>

            </Grid>

        </Box >
    );
};

export default MakeOwner;