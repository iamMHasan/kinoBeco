import React from 'react';
import error from '../image/error.jpg'

const Error = () => {
    return (
        <div className='flex h-full justify-center items-center'>
            {/* <div className="text-5xl text-red-800">Can't find the page</div>                                 */}
            <img className='w-full h-[100vh]' src={error} alt="" />
        </div>
    );
};

export default Error;