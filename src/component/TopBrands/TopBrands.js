import React from 'react'
import HeadingText from '../Heading text/HeadingText'
import trek from '../../image/trek.png'
import santa from '../../image/santa.png'
import giant from '../../image/giant.png'
import merida from '../../image/merida.png'
import BrandImage from '../BrandImage/BrandImage'

const TopBrands = ({ img }) => {
  return (
    <div>
      <HeadingText main={'Top Brands'} title={'Top brands are in our store'} />
      <div className="flex justify-center items-center bg-black gap-5">
        <BrandImage img={trek} />
        <BrandImage img={santa} />
        <BrandImage img={giant} />
        <BrandImage img={merida} />
      </div>
    </div>
  )
}

export default TopBrands
