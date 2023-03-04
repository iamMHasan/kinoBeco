import React from 'react';
import AdvertiseItems from '../../component/Advertise/AdvertiseItems';
import FeaturedBlog from '../../component/FeaturedBlog/FeaturedBlog';
import TopBrands from '../../component/TopBrands/TopBrands';
import useTitle from '../../hooks/useTitle';
import Carousel from './Carousel';
import ProductCatagory from './ProductCatagory';
import ProductMap from './ProductMap';

const Home = () => {
    useTitle('Home')
    return (
        <div>
            <Carousel/>
            {/* <ProductCatagory/> */}
            <ProductMap/>
            {/* <FeaturedBlog/>  */}
             <TopBrands/>
        </div>
    );
};

export default Home;