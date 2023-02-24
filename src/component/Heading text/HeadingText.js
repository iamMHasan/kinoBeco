import React from 'react'

const HeadingText = ({ main, title }) => {
    return (
        <div className='font-quicksand flex flex-col justify-center items-center mt-16 mb-10'>
            <h1 className='text-3xl font-semibold mb-3 transition hover:scale-110 duration-100'>
                {main}
            </h1>
            <p className='text-base'>
                {title}
            </p>
        </div>
    )
}

export default HeadingText
