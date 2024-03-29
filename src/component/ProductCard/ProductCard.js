import React from 'react'
import { Link } from 'react-router-dom'

const ProductCard = ({ product }) => {
    const { image, resalePrice, originalPrice, productName, _id, category } = product
    return (
        <Link to={`/productDetails/${_id}`}>
            <div className="p-3 bg-white shadow-md hover:scale-105 hover:shadow-xl duration-500 mx-auto w-72 h-96">
                <img src={image} alt='cycle' className="w-full h-3/5 object-contain"/>
                <div className="md:px-4 md:py-3 w-full text-start h-1/4">
                    <div className="flex items-center justify-between">
                        <span className="text-gray-400 mr-3 uppercase text-xs">Brand</span>
                        <div className="badge badge-secondary text-xs">{category}</div>
                    </div>
                    <p className="text-lg font-bold text-black truncate block capitalize">{productName}</p>
                    <div className="flex items-center">
                        <p className="text-lg font-semibold text-black cursor-auto my-3">${resalePrice}</p>
                        <del>
                            <p className="text-sm text-gray-600 cursor-auto ml-2">${originalPrice}</p>
                        </del>
                        <div className="ml-auto">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-bag-plus" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z" />
                                <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default ProductCard
