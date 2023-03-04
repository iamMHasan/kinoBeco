import React, { useEffect, useState } from 'react';
import HeadingText from '../../component/Heading text/HeadingText';
import LoadingSpinner from '../../component/LoadingSpinner';
import ProductCard from '../../component/ProductCard/ProductCard';

const ProductMap = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [activeLink, setActiveLink] = useState('Mount Bike'); // update here
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        setLoading(true);
        fetch('https://kinobeco-server.vercel.app/allProducts')
            .then((res) => res.json())
            .then((data) => {
                setProducts(data);
                setLoading(false);
            });
    }, []);

    useEffect(() => {
        let filteredData = products.filter((product) => {
            if (activeLink === 'All') {
                return product.productName.toLowerCase().includes(searchTerm.toLowerCase());
            } else {
                return product.category === activeLink && product.productName.toLowerCase().includes(searchTerm.toLowerCase());
            }
        });
        setFilteredProducts(filteredData);
    }, [activeLink, searchTerm, products]);
    

    const handleClick = (category) => {
        setActiveLink(category);
    };

    const uniqueCategories = ['All', ...new Set(products.map((item) => item.category))];

    return (
        <div className="max-w-[90%] mx-auto text-center" id="products-category">
            <HeadingText main="BROWSE TOP CATEGORY" title="Find best cycle for you" />
            {loading ? (
                <LoadingSpinner />
            ) : (
                <>
                    <div className="flex justify-center items-center gap-3 overflow-x-auto scrollbar-hide">
                        <div className="flex flex-wrap max-w-full">
                            {uniqueCategories.map((category) => (
                                <button
                                    key={category}
                                    className={`w-auto outline-none mr-1 mb-1 border border-solid border-red-500 rounded px-4 py-2 bg-transparent text-xs font-bold uppercase focus:outline-none ${
                                        activeLink === category
                                            ? 'bg-red-500 text-white'
                                            : 'border-red-500 text-red-500 hover:bg-red-500 hover:text-white'
                                    }`}
                                    onClick={() => handleClick(category)}
                                >
                                    {category}
                                </button>
                            ))}
                        </div>
                    </div>
                    <div>
                        <input
                            type="text"
                            className="mt-3 text-center w-full max-w-sm mx-auto px-3 py-2 rounded-lg border border-red-500 focus:outline-none focus:border-red-400 "
                            placeholder="Search Cycle"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3 mt-4">
                        {(filteredProducts.length ? filteredProducts : products.slice(5, 13)).map((product) => (
                            <ProductCard key={product._id} product={product} />
                        ))}
                    </div>
                </>
            )}
        </div>
    );
};

export default ProductMap;
