import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import BookingModal from '../../component/BookingModal/BookingModal';
import ProductDetailsCard from './ProductDetailsCard';

const ProductDetails = () => {
    const [selectedProduct, setSelectedProduct] = useState({})
    const prodcuts = useLoaderData()
    const productSubCata = prodcuts.data
    console.log(selectedProduct);
    return (
        <div>
            {
                productSubCata.map(productDetails =><ProductDetailsCard
                key={productDetails._id}
                setSelectedProduct={setSelectedProduct}
                productDetails={productDetails}
                ></ProductDetailsCard> )
            }
             <BookingModal selectedProduct={selectedProduct}/>
        </div>
    );
};

export default ProductDetails;