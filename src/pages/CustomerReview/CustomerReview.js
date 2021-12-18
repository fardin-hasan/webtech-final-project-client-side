import { Alert, Button, Grid, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import useAuth from '../../Hooks/useAuth';

const CustomerReview = () => {
    const initialInfo = { name: '', feedback: '' }
    const [success, setSuccess] = useState(false);
    const [review, setReview] = useState(initialInfo)
    const { user } = useAuth()
    const handleOnchange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newReview = { ...review };
        newReview[field] = value;
        setReview(newReview);

    }
    const handleReview = e => {

        const reivews = {
            ...review
        }

        fetch('https://safe-caverns-99351.herokuapp.com/customerReview', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(reivews)
        })
            .then(res => res.json)
            .then(data => {

                setSuccess(true);
                e.target.reset();
            })

        e.preventDefault()

    }
    return (
        <Box sx={{ my: 1 }}>
            <Typography sx={{ my: 1, textAlign: 'center' }} variant="h4" gutterBottom>
                Give Us Your Feedback Below
            </Typography>
            <Grid sx={{ my: 5 }} container spacing={2}>

                <Grid sx={{ my: 5 }} item xs={8} md={6}>
                    <form style={{ margin: 'auto', textAlign: 'center' }} onSubmit={handleReview} >
                        <TextField
                            sx={{ width: '75%', my: 1 }}
                            id="standard-basic"
                            name='name'
                            type='text'
                            onChange={handleOnchange}
                            required

                            label="Your Name"
                            variant="standard" />
                        <TextField
                            id="filled-multiline-flexible"
                            sx={{ width: '75%', my: 1, py: 3 }}
                            label="Please Type Your Feedback Here"
                            multiline
                            maxRows={4}
                            onChange={handleOnchange}
                            name='feedback'

                            variant="standard" />


                        <Button type='submit' variant='contained' sx={{ width: '75%', my: 3 }}>Submit Feedback</Button>
                    </form>
                    {success && <Alert sx={{ width: '70%', m: 'auto' }} severity="success">Review Added Successfilly</Alert>}
                </Grid>
                <Grid sx={{ my: 5, m: 'auto' }} item xs={4} md={6}>
                    <img src="https://t4.ftcdn.net/jpg/03/03/44/49/360_F_303444978_YQAubTQzxojY3tm42tWBySxMHIJfj177.jpg" alt="" />
                </Grid>

            </Grid>
        </Box>

    );
};

export default CustomerReview;