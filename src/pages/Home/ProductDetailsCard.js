import React from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { HiOutlineLocationMarker, HiUser } from "react-icons/hi";
import { HiCheckBadge, HiUserCircle,HiTag } from "react-icons/hi2";
import { AuthContext } from '../../context/Authprovider';


const ProductDetailsCard = ({ productDetails, setSelectedProduct }) => {
    const {user} = useContext(AuthContext)
    const {_id, image, location, name, resalePrice, originalPrice, sellerName, yearUse, datePosted } = productDetails

    const handleWishList = () =>{
        const wishlistInfo ={
            order : _id,
            productName : name,
            userName: user?.displayName,
            userEmail: user?.email,
            location,
            image,
            resalePrice,
        }
        fetch(`https://assignement-12-server.vercel.app/wishlist`,{
            method : 'POST',
            headers : {
                'content-type' : 'application/json'
            },
            body : JSON.stringify(wishlistInfo)
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data);
            toast.success('product added to wishlist')
        })
        .catch(err => console.log(err))
    }
    return (
        <>
            <div className='p-3 md:p-0 md:flex items-center justify-center gap-3 border-y-2 my-3 hover:bg-slate-200'>
                <div>
                    <img src={image} className='h-96 w-96' alt="" />
                </div>
                <div className="flex flex-col justify-start">
                    <div>
                        <div className='flex justify-between items-center'>
                            <div>
                                <h1 className="text-xs">Product :<span className='text-xl text-green-700'>{name}</span> </h1>
                            </div>
                            <HiTag onClick={handleWishList} className='text-xl' title='add wishlist' cursor='pointer'/>
                        </div>
                        <hr className='my-3' />
                        <div className="flex items-center justify-between gap-3 ">
                            <div className="">
                                <h1 className="text-xs flex items-center justify-between gap-1"><HiUserCircle className='text-xl' /> <span className='text-xl text-green-700'>{sellerName}</span> <HiCheckBadge className='text-xl text-green-700' /> </h1>
                            </div>
                            <hr className='my-3' />
                            <div>
                                <h1 className="text-xs flex items-center justify-between gap-1 "> <HiOutlineLocationMarker className='text-xl' /> <span className='text-xl text-green-700'>{location}</span></h1>
                            </div>
                        </div>
                        <hr className='my-3' />
                    </div>
                    <div className='flex items-center justify-between gap-3'>
                        <p className="text-xs">Original Price : <span className='text-xl text-green-700'>{originalPrice}</span></p>

                        <p className="text-xs">Resell Price :<span className='text-xl text-green-700'>{resalePrice}</span> </p>

                    </div>
                    <hr className='my-3' />
                    <div className='flex justify-between items-center  gap-3'>
                        <p className="text-xs">Years used :<span className='text-xl text-green-700'>{yearUse}</span></p>

                        <p className="text-xs">Date posted : <span className='text-xl text-green-700'>{datePosted}</span></p>
                    </div>

                    <label
                        onClick={() => setSelectedProduct(productDetails)}
                        htmlFor="my-modal-3" className="btn my-4">Book Now</label>
                </div>
            </div>
        </>
    );
};

export default ProductDetailsCard;