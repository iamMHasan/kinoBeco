import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import ProudctCataCard from './ProudctCataCard';

const ProductCatagory = () => {
    const [allCategories, setAllcategories] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/allCategories')
            .then(res => res.json())
            .then(data => setAllcategories(data))
    }, [])
    return (
        <>
            <h1 className="text-3xl md:text-4xl my-10 text-center font-bold">Find a reusable <br className='hidden md:block' /> <span className='font-5xl text-green-700 font-thin'> cycle </span> for you</h1>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                {
                    allCategories.map(categories => <ProudctCataCard
                    key={categories._id}
                    categories={categories}
                    ></ProudctCataCard>)
                }
            </div>
        </>
    );
};

export default ProductCatagory;