import React from 'react';
import { HiOutlineLocationMarker, HiUser } from "react-icons/hi";

const ProductDetailsCard = ({ productDetails }) => {
    console.log(productDetails);
    const { image, location, name, resalePrice, originalPrice, sellerName, yearUse, datePosted } = productDetails
    return (
        <>
            <div className='p-3 md:p-0 md:flex items-center justify-center gap-3 border-y-2 my-3 hover:bg-slate-200'>
                <div>
                    <img src={image} className='h-96 w-96' alt="" />
                </div>
                <div className="flex flex-col justify-start">
                    <div>
                        <h1 className="text-xs">Product :<span className='text-xl text-green-700'>{name}</span> </h1>
                        <hr className='my-3' />
                        <div className="flex items-center justify-center gap-3 ">
                            <div className="">
                                <h1 className="text-xs flex items-center justify-center gap-1"><HiUser className='text-xl' /> <span className='text-xl text-green-700'>{sellerName}</span> </h1>
                            </div>
                            <hr className='my-3' />
                            <div>
                                <h1 className="text-xs flex items-center justify-center gap-1 "> <HiOutlineLocationMarker className='text-xl' /> <span className='text-xl text-green-700'>{location}</span></h1>
                            </div>
                        </div>
                        <hr className='my-3' />
                    </div>
                    <div className='flex items-center  gap-3'>
                        <p className="text-xs">Original Price : <span className='text-xl text-green-700'>{originalPrice}</span></p>

                        <p className="text-xs">Resell Price :<span className='text-xl text-green-700'>{resalePrice}</span> </p>

                    </div>
                    <hr className='my-3' />
                    <div className='flex items-center  gap-3'>
                        <p className="text-xs">Years used :<span className='text-xl text-green-700'>{yearUse}</span></p>

                        <p className="text-xs">Date posted : <span className='text-xl text-green-700'>{datePosted}</span></p>
                    </div>
                <button className='btn btn-dark  mt-4'>BOOK NOW</button>
                </div>
            </div>
        </>
    );
};

export default ProductDetailsCard;