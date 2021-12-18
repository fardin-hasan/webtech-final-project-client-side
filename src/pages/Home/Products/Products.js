import { Container, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Product from "../Product/Product";

const Products = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://safe-caverns-99351.herokuapp.com/packages')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <Box sx={{ flexGrow: 1, my: 10 }}>
            <Typography variant="h4" sx={{ fontWeight: "medium", m: 10, textAlign: 'center' }}> Best Packages</Typography>
            <Container>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {
                        products.map(product => <Product key={product._id} product={product}></Product>)
                    }
                </Grid>
            </Container >
        </Box>

    );
};

export default Products;