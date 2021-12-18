import { Grid } from '@mui/material';
import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link, NavLink } from 'react-router-dom';

const Product = ({ product }) => {
    const { name, img, rating, description, _id } = product
    return (
        <Grid item xs={4} sm={4} md={4} >
            <Card sx={{ maxWidth: 545, maxHeight: 450 }}>
                <CardMedia
                    component="img"
                    height="150"
                    image={img}
                    alt="green iguana"
                />
                <CardContent >
                    <Typography gutterBottom variant="h5" component="div">
                        {name}
                    </Typography>
                    <Typography sx={{ textAlign: 'left' }} variant="subtitle1" color="text.secondary">
                        <b>Description : </b> {description}
                    </Typography>
                    <Typography sx={{ textAlign: 'left' }} variant="subtitle1" color="text.secondary">
                        <b>Rating :</b> {rating}
                    </Typography>
                </CardContent>
                <CardActions sx={{ m: 'auto' }}>
                    <NavLink style={{ margin: 'auto', textDecoration: 'none' }} to={`/purchase/${_id}`}> <Button variant='contained' size="small">Purchase Package</Button></NavLink>

                </CardActions>
            </Card>
        </Grid>
    );
};

export default Product;