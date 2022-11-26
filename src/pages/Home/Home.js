import React from 'react';
import Stat from '../../component/BookingModal/Stat/Stat';
import useTitle from '../../hooks/useTitle';
import Carousel from './Carousel';
import ProductCatagory from './ProductCatagory';

const Home = () => {
    useTitle('Home')
    return (
        <div>
            <Carousel/>
            <ProductCatagory/>
            <Stat/>
        </div>
    );
};

export default Home;