import { Alert, Box, Button, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import useAuth from '../../Hooks/useAuth';

const AddProduct = () => {
    const initialInfo = { name: '', img: '', rating: '', Description: '', rent: '' }

    const [packages, setPackages] = useState(initialInfo)
    const [success, setSuccess] = useState(false);

    const { user, owner } = useAuth()
    const handleOnchange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newPackages = { ...packages };
        newPackages[field] = value;
        setPackages(newPackages);


    }
    const handlePackages = e => {

        const packs = {
            ...packages
        }

        fetch('https://safe-caverns-99351.herokuapp.com/allPackages', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(packs)
        })
            .then(res => res.json)
            .then(data => {

                setSuccess(true);
                e.target.reset();

            })

        e.preventDefault()

    }
    return (
        <Box>
            <Typography sx={{ my: 2, textAlign: 'center' }} variant="h4" >{owner ? 'Post Advertisement' : 'Add Package'}</Typography>
            <Grid container spacing={2}>
                <Grid sx={{ m: 'auto', textAlign: 'center' }} item xs={8} md={8}>
                    <form style={{ margin: 'auto', textAlign: 'center' }} onSubmit={handlePackages} >
                        <TextField
                            sx={{ width: '75%', my: 1 }}
                            id="standard-basic"
                            name='name'
                            type='text'
                            onChange={handleOnchange}
                            required
                            label="Package Title"
                            variant="standard" />

                        <TextField
                            sx={{ width: '75%', my: 1 }}
                            id="standard-basic"
                            name='img'
                            type='text'
                            onChange={handleOnchange}
                            required
                            label="Please Enter The Image Link"
                            variant="standard" />
                        <TextField
                            sx={{ width: '75%', my: 1 }}
                            id="standard-basic"
                            name='rating'
                            type='number'
                            onChange={handleOnchange}
                            required
                            label="Rating"
                            variant="standard" />


                        <TextField
                            id="filled-multiline-flexible"
                            sx={{ width: '75%', my: 1, py: 3 }}
                            label="Description"
                            multiline
                            maxRows={3}
                            onChange={handleOnchange}
                            name='description'

                            variant="standard" />

                        <TextField
                            sx={{ width: '75%', my: 1 }}
                            id="standard-basic"
                            name='rent'
                            type='text'
                            onChange={handleOnchange}
                            required
                            label="Amount of The Rent"
                            variant="standard" />


                        <Button type='submit' variant='contained' sx={{ width: '75%', my: 3 }}>Confirm</Button>
                    </form>
                    {success && <Alert sx={{ width: '70%', m: 'auto' }} severity="success">Package Added Successfilly</Alert>}
                </Grid>

            </Grid>

        </Box >
    );
};

export default AddProduct;