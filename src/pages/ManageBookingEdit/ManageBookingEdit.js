import { Alert, Button, Grid, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import useAuth from '../../Hooks/useAuth';

const ManageBookingEdit = () => {
    const initialInfo = { name: '', img: '', rating: '', Description: '', rent: '' }
    const [update, setUpdate] = useState(initialInfo)
    const { user } = useAuth();
    const [success, setSuccess] = useState(false);

    const { id } = useParams();
    const [bookingEdit, setBookingEdit] = useState([]);
    useEffect(() => {
        const url = `https://safe-caverns-99351.herokuapp.com/manageEditList/${id}`
        console.log(id)
        fetch(url)
            .then(res => res.json())
            .then(data => setBookingEdit(data))
    }, [])



    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newUpdate = { ...update };
        newUpdate[field] = value;
        setUpdate(newUpdate);
    }

    const handleUpdate = e => {
        const packages = {
            ...update
        };
        fetch('https://safe-caverns-99351.herokuapp.com/package/update', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(packages)
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
            <Typography sx={{ my: 2, textAlign: 'center' }} variant="h4" >Edit Package </Typography>
            <Grid container spacing={2}>
                <Grid sx={{ m: 'auto', textAlign: 'center' }} item xs={8} md={8}>
                    <form onSubmit={handleUpdate}>
                        <TextField
                            sx={{ width: '75%', my: 1 }}
                            id="standard-basic"
                            name='name'
                            type='text'
                            onChange={handleOnBlur}
                            required
                            label="Package Title"
                            variant="standard" />

                        <TextField
                            sx={{ width: '75%', my: 1 }}
                            id="standard-basic"
                            name='img'
                            type='text'
                            onChange={handleOnBlur}
                            required
                            label="Please Enter The Image Link"
                            variant="standard" />
                        <TextField
                            sx={{ width: '75%', my: 1 }}
                            id="standard-basic"
                            name='rating'
                            type='number'
                            onChange={handleOnBlur}
                            required
                            label="Rating"
                            variant="standard" />


                        <TextField
                            id="filled-multiline-flexible"
                            sx={{ width: '75%', my: 1, py: 3 }}
                            label="Description"
                            multiline
                            maxRows={3}
                            onChange={handleOnBlur}
                            name='description'

                            variant="standard" />

                        <TextField
                            sx={{ width: '75%', my: 1 }}
                            id="standard-basic"
                            name='rent'
                            type='text'
                            onChange={handleOnBlur}
                            required
                            label="Amount of The Rent"
                            variant="standard" />

                        <Button sx={{ width: '30%', my: 3 }} variant='contained' type='submit'>Update</Button>
                    </form>
                    {success && <Alert sx={{ width: '70%', m: 'auto' }} severity="success">Package Updated Successfilly</Alert>}
                </Grid>

            </Grid>

        </Box >
    );
};

export default ManageBookingEdit;