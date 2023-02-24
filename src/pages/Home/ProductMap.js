import React, { useEffect, useState } from 'react'
import HeadingText from '../../component/Heading text/HeadingText';
import ProductCard from '../../component/ProductCard/ProductCard';

const ProductMap = () => {
    const activeClass = 'bg-red-300'
    const [products, setProducts] = useState([])
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
        fetch("http://localhost:5000/allProducts")
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    // handle cata load
    const handleCataLoad = (cata) => {
        const data = products.filter(product => product.category === cata)
        setfilteredProducts(data)
    }
    return (
        <div className='w-[90%] mx-auto'>
            <HeadingText main={'BROWSE TOP CATEGORY'} title={'Find best cycle for you'}></HeadingText>
            <div className="flex justify-center items-center gap-3">
                {
                    uniqueCata.map(cata => (
                        <button
                            key={cata}
                            className={`outline-none mr-1 mb-1 border border-solid border-red-500 rounded px-4 py-2 bg-transparent text-xs text-red-500 font-bold uppercase focus:outline-none hover:bg-red-600 hover:text-white ${activeLink === cata ? activeClass : ''}`}
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
                    products.slice(5,13).map(product => <ProductCard
                        key={product._id}
                        product={product}
                    />)
                }
            </div>
        </div>
    )
}

export default ProductMap
