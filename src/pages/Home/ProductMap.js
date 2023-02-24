import React, { useEffect, useState } from 'react'
import HeadingText from '../../component/Heading text/HeadingText';

const ProductMap = () => {
    const [products, setProducts] = useState([])
    const uniqueCata = [...new Set(products.map(item => item.category))];
    useEffect(()=>{
        fetch("products.json")
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])
  return (
    <div className='w-[90%] mx-auto'>
        <HeadingText main={'BROWSE TOP CATEGORY'} title={'Find best cycle for you'}></HeadingText>
      <div className="flex justify-center items-center gap-3">
        {
            uniqueCata.map(cata => (
                <button className='btn btn-outline'>  {cata}</button>
            ))
        }
      </div>
      <p className="text-8xl">lore</p>
    </div>
  )
}

export default ProductMap
