import React from 'react';

const AdvertiseItmCard = ({ advertiseIteme }) => {
    const { email, image, datePosted, location, mobile, productName, condition } = advertiseIteme
    return (
        <div className='border-3 bg-yellow-300 rounded=xl p-4'>
            <div>
                <img className='w-80 h-80' src={image} alt='404' />
            </div>
            <div>
                <div className="text-xs">Product Name : <span className='text-xl text-green-800'> {productName}</span></div>
                <div className="text-xs">Product Condition : <span className='text-xl text-green-800'>{condition}</span></div>
                <div className="text-xs">Seller Mobile : <span className='text-xl text-green-800'>{mobile}</span></div>
                <div className="text-xs">Seller Location : <span className='text-xl text-green-800'>{location}</span></div>
                <div className="text-xs">Date posted : <span className='text-xl text-green-800'>{datePosted}</span></div>
                <div className="text-xs">Contact Email : <span className='text-xl text-green-800'>{email}</span></div>
            </div>
        </div>
    );
};

export default AdvertiseItmCard;