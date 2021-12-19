import { Box } from '@mui/system';
import React from 'react';
import Footer from '../../../Shared/Footer/Footer';
import Navigation from '../../../Shared/Navigation/Navigation';
import WelcomeMsg from '../../WelcomeMsg/WelcomeMsg';
import AboutUs from '../AboutUS/AboutUs';
import Banner from '../Banner/Banner';




import ContactUs from '../ContactUs/ContactUs';
import Products from '../Products/Products';
import Review from '../Review/Review';


const Home = () => {
    return (
        <Box sx={{ mt: 5 }}>
            <Banner></Banner>
            <Products></Products>
            <Review></Review>
            <ContactUs></ContactUs>
            <Footer></Footer>
        </Box >
    );
};

export default Home;