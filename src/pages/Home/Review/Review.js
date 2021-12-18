import { Button, Card, CardActions, CardContent, Grid, Paper, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import ReviewData from '../../ReviewData/ReviewData';

const Review = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('https://safe-caverns-99351.herokuapp.com/customerReview')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])


    return (
        <Box sx={{ my: 10 }} >
            <Typography variant="h4" sx={{ fontWeight: "medium", m: 10, textAlign: 'center' }} gutterBottom>
                Customer Reviews
            </Typography>


            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                {
                    reviews.map(review => <ReviewData key={review._id} review={review}></ReviewData>)
                }


            </Grid>


        </Box>

    );
};

export default Review;