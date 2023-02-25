import React, { useEffect, useState } from 'react'
import HeadingText from '../../component/Heading text/HeadingText';
import LoadingSpinner from '../../component/LoadingSpinner';
import ProductCard from '../../component/ProductCard/ProductCard';
import Spinner from '../../spinner/Spinner';

const ProductMap = () => {
    const activeClass = 'bg-red-300'
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(false)
    const [filteredProducts, setfilteredProducts] = useState([])
    console.log(filteredProducts)
    const [activeLink, setActiveLink] = useState('');
    // get unique cata
    const uniqueCata = [...new Set(products.map(item => item.category))];

    const handleClick = (cata) => {
        setActiveLink(cata);
        handleCataLoad(cata)
    };
    //   fetch data
    useEffect(() => {
        setLoading(true)
        fetch("https://kinobeco-server.vercel.app/allProducts")
            .then(res => res.json())
            .then(data => {
                setProducts(data)
                setLoading(false)
            })
    }, [])
    // handle cata load
    const handleCataLoad = (cata) => {
        const data = products.filter(product => product.category === cata)
        setfilteredProducts(data)
    }


    return (
        <div className='max-w-[90%] mx-auto overflow-y-hidden text-center'>
            <HeadingText main={'BROWSE TOP CATEGORY'} title={'Find best cycle for you'}></HeadingText>
            {
                // loading ? <p className="text-center">loading...</p> : (
                loading ? <LoadingSpinner/> : (
                    <>
                        <div className="flex justify-center items-center gap-3">
                            {
                                uniqueCata.map(cata => (
                                    <button
                                        key={cata}
                                        className={`max-w-[100vw] outline-none mr-1 mb-1 border border-solid border-red-500 rounded px-4 py-2 bg-transparent text-xs text-red-500 font-bold uppercase focus:outline-none hover:bg-red-600 hover:text-white ${activeLink === cata ? activeClass : ''}`}
                                        onClick={() => handleClick(cata)}
                                    >
                                        {cata}
                                    </button>
                                ))
                            }
                        </div>
                        <div className='grid grid-cols-1 md:grid-cols-4 gap-3 mt-4'>
                            {filteredProducts.length ?
                                filteredProducts.map(product => <ProductCard
                                    key={product._id}
                                    product={product}
                                />) :
                                products.slice(5, 13).map(product => <ProductCard
                                    key={product._id}
                                    product={product}
                                />)
                            }
                        </div>
                    </>
                )
            }
        </div>
    )
}

export default ProductMap
