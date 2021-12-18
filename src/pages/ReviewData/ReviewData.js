import { Card, CardContent, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import useAuth from '../../Hooks/useAuth';

const ReviewData = ({ review }) => {
    const { name, feedback } = review;

    return (
        <Grid item xs={2} sm={4} md={4} >
            <Box sx={{ mx: 2 }}>
                <Card variant="outlined">
                    <React.Fragment>
                        <CardContent>
                            <Typography variant="h4" gutterBottom>
                                {name}
                            </Typography>
                            <Typography sx={{ fontSize: '14' }} color="text.secondary" component="div">
                                {feedback}
                            </Typography>

                        </CardContent>

                    </React.Fragment>
                </Card>
            </Box>
        </Grid>

    );
};

export default ReviewData;