import React from 'react';
import MasterLayout from '../components/MasterLayout/MasterLayout';
import HeroSlider from '../components/Home/HeroSlider';
import Category from '../components/Home/Category';
import Products from '../components/Home/Products';
import Services from '../components/Home/Services';
import FeaturedProduct from '../components/Home/FeaturedProduct';
import Brands from '../components/Home/Brands';

const Home = () => {
    return (
        <MasterLayout>
            <HeroSlider/>
            <Category/>
            <Products/>
            <FeaturedProduct/>
            <Services/>
            <Brands/>
        </MasterLayout>
    );
};

export default Home;