import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import HeadingText from '../../component/Heading text/HeadingText';
import ProudctCataCard from './ProudctCataCard';

const ProductCatagory = () => {
    const [loading, setLoading] = useState(false)
    const [allCategories, setAllcategories] = useState([])
    useEffect(() => {
        setLoading(true)
        fetch('https://assignement-12-server.vercel.app/allCategories')
            .then(res => res.json())
            .then(data => {
                setAllcategories(data)
                setLoading(false)
            })
    }, [])
    return (
        <div>
            {
                loading ? <div className='text-2xl text-center'>'loading category please wait'</div> : (
                    <>
                        <HeadingText main={'BROWSE TOP CATEGORY'} title={'Find best cycle for you'}></HeadingText>
                        <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                            {
                                allCategories.map(categories => <ProudctCataCard
                                    key={categories._id}
                                    categories={categories}
                                ></ProudctCataCard>)
                            }
                        </div>
                    </>
                )
            }
        </div>
    );
};

export default ProductCatagory;