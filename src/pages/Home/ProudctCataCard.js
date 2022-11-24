import React from 'react';
import {Link} from 'react-router-dom'

const ProudctCataCard = ({ categories }) => {
    const { productName, image, _id } = categories
    return (
        <Link to={`/allCategories/${_id}`}>
            <div className="card h-[20rem] bg-base-100 shadow-xl image-full">
                <figure><img src={image} alt="Shoes" /></figure>
                <div className="card-body flex justify-center items-center">
                    <h1 className="text-3xl">{productName}</h1>
                </div>
            </div>
        </Link>
    );
};

export default ProudctCataCard;