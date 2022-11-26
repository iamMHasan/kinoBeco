import React from 'react';
import useTitle from '../../hooks/useTitle';
import Carousel from './Carousel';
import ProductCatagory from './ProductCatagory';

const Home = () => {
    useTitle('Home')
    return (
        <div>
            <Carousel/>
            <ProductCatagory/>
        </div>
    );
};

export default Home;