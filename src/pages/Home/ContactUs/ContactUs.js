import { Button, Grid, TextField, Typography, TextareaAutosize } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const ContactUs = () => {
    return (
        <Box>
            <Typography variant='h4' sx={{ fontWeight: 'medium', m: 2, textAlign: 'center' }}>Contact Us</Typography>
            <Grid sx={{ m: 'auto', textAlign: 'center' }} container spacing={2}>
                <Grid sx={{ m: 'auto', textAlign: 'center' }} item xs={10} md={8}>
                    <form  >
                        <TextField
                            sx={{ width: '75%', my: 1 }}
                            id="standard-password-input"
                            label="Your Name"
                            name='name'

                            required
                            type="text"

                            variant="standard"
                        />
                        <TextField
                            sx={{ width: '75%', my: 1 }}
                            id="standard-basic"
                            name='email'
                            type='email'

                            required
                            label="Your Email"
                            variant="standard" />
                        <TextField
                            id="filled-multiline-flexible"
                            sx={{ width: '75%', my: 1, py: 3 }}
                            label="Your Message"
                            multiline
                            maxRows={4}

                            variant="standard"
                        />
                        <Button type='submit' variant='contained' sx={{ width: '75%', my: 3 }}>Submit</Button>

                    </form>
                </Grid>


            </Grid>



        </Box>

    );
};

export default ContactUs;