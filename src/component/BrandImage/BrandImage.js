import React from 'react'
import TopBrands from '../TopBrands/TopBrands'

const BrandImage = ({ img }) => {
  return (
    <div className=''>
        <img className='transition hover:scale-110 duration-100 w-full h-20' src={img} alt="" />
    </div>
  )
}

export default BrandImage
