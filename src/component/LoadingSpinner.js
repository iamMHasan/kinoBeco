import React from 'react'

const LoadingSpinner = () => {
    return (
        <div className='flex justify-center'>
            <div class="w-12 h-12  text-center rounded-full animate-spin absolute
border-4 border-solid border-red-500 border-t-transparent"> </div>
        </div>
    )
}

export default LoadingSpinner
