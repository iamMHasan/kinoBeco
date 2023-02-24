import React, { useContext, useState } from 'react'
import { Link, useLoaderData } from 'react-router-dom';
import { AiFillStar } from 'react-icons/ai';
import { IoIosMan } from 'react-icons/io';
import { AuthContext } from '../../context/Authprovider';
import { toast } from 'react-hot-toast';

const ProductDetailsNew = () => {
    const [loading, setLoading] = useState(false)
    const [isButtonClicked, setIsButtonClicked] = useState(false);
    const { user } = useContext(AuthContext)
    const data = useLoaderData()
    const { image, productName, resalePrice, originalPrice, sellerName, _id } = data

    const handleAddtoCart = () => {
        setLoading(true)
        const wishlistInfo = {
            order: _id,
            productName,
            userName: user?.displayName,
            userEmail: user?.email,
            image,
            resalePrice,
            originalPrice
        }

        fetch(`http://localhost:5000/addToCart`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(wishlistInfo)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setLoading(false)
                setIsButtonClicked(true)
                toast.success('product added to wishlist')
            })
            .catch(err => console.log(err))
    }
    return (
        <div className='flex flex-col items-center md:flex-row gap-24 w-[90%] mx-auto my-14 h-full'>
            <img src={image} alt="" className='flex-1' />
            <div className='flex-1 space-y-3'>
                <div className="flex">
                    <AiFillStar size={26} className='text-yellow-300' />
                    <AiFillStar size={26} className='text-yellow-300' />
                    <AiFillStar size={26} className='text-yellow-300' />
                    <AiFillStar size={26} className='text-yellow-300' />
                    <AiFillStar size={26} className='text-yellow-300' />
                </div>
                <p className="text-4xl uppercase">{productName}</p>
                <div className="flex items-center">
                    <p className="text-3xl font-semibold text-black cursor-auto my-3">${resalePrice}</p>
                    <del>
                        <p className="text-sm text-gray-600 cursor-auto ml-2">${originalPrice}</p>
                    </del>
                </div>
                <div className="flex items-center gap-4">
                    <IoIosMan size={20} />
                    <p>{sellerName}</p>
                </div>
                {
                    user?.uid ? <button
                        onClick={handleAddtoCart}
                        disabled={isButtonClicked}
                        htmlFor="my-modal-3" className="btn gap-3 items-center my-4">{loading ? 'Add to cart...' : 'Add to cart'}
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-bag-plus" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z" />
                            <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                        </svg>
                    </button> :
                        <Link to='/login'>
                            <button
                                htmlFor="my-modal-3" className="btn gap-3 items-center my-4">Login to Add cart
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-bag-plus" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z" />
                                    <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                                </svg>
                            </button>
                        </Link>
                }
            </div>
        </div>
    )
}

export default ProductDetailsNew
