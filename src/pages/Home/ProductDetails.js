import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ProductDetailsCard from './ProductDetailsCard';

const ProductDetails = () => {
    const prodcuts = useLoaderData()
    const productSubCata = prodcuts.data
    return (
        <div>
            {
                productSubCata.map(productDetails =><ProductDetailsCard
                key={productDetails._id}
                productDetails={productDetails}
                ></ProductDetailsCard> )
            }
        </div>
    );
};

export default ProductDetails;