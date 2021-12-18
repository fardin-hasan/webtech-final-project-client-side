import { Alert, Box, Button, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import useAuth from '../../Hooks/useAuth';

const Pay = () => {
    const initialInfo = { name: '', email: '', pType: '', payment: '' }

    const [payment, setPayment] = useState(initialInfo)
    const [success, setSuccess] = useState(false);

    const { user, owner } = useAuth()
    const handleOnchange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newPayment = { ...payment };
        newPayment[field] = value;
        setPayment(newPayment);



    }
    const handlePayment = e => {

        const pay = {
            ...payment
        }

        fetch('https://safe-caverns-99351.herokuapp.com/userPayment', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(pay)
        })
            .then(res => res.json)
            .then(data => {
                e.target.reset();
                setSuccess(true);


            })

        e.preventDefault()

    }
    return (
        <Box>
            <Typography sx={{ my: 2, textAlign: 'center' }} variant="h4" >{owner ? 'Advertisement Payment' : 'Payment'} </Typography>
            <Grid container spacing={2}>
                <Grid sx={{ m: 'auto', textAlign: 'center' }} item xs={8} md={8}>
                    <form style={{ margin: 'auto', textAlign: 'center' }} onSubmit={handlePayment} >
                        <TextField
                            sx={{ width: '75%', my: 1 }}
                            id="standard-basic"
                            name='name'
                            type='text'
                            onChange={handleOnchange}
                            required
                            label=" Your Name"
                            variant="standard" />
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
                            id="standard-basic"
                            name='pType'
                            type='text'
                            onChange={handleOnchange}
                            required
                            label="Payment Method"
                            variant="standard" />



                        <TextField
                            sx={{ width: '75%', my: 1 }}
                            id="standard-basic"
                            name='payment'
                            type='number'
                            onChange={handleOnchange}
                            required
                            label=" Payment Amount"
                            variant="standard" />


                        <Button type='submit' variant='contained' sx={{ width: '75%', my: 3 }}>Confirm Payment</Button>
                    </form>
                    {success && <Alert sx={{ width: '70%', m: 'auto' }} severity="success">Payment Made Successfilly</Alert>}
                </Grid>

            </Grid>

        </Box >
    );
};

export default Pay;