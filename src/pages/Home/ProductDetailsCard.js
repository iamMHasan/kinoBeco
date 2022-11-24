import React from 'react';

const ProductDetailsCard = ({ productDetails }) => {
    console.log(productDetails);
    const { image, location, name, resalePrice, originalPrice, sellerName, yearUse, datePosted } = productDetails
    return (
        <div className='md:flex items-center justify-center gap-3'>
            <div>
                <img src={image} className='h-96 w-96' alt="" />
            </div>
            <div>
                <div className="flex">
                <h1 className="text-xl font-semibold">Seller Name : {sellerName}</h1>
                <h1 className="text-xs font-semibold">Seller Location : {location}</h1>
                </div>
            </div>
        </div>
    );
};

export default ProductDetailsCard;