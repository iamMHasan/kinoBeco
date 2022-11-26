import React from 'react';

const Welcome = () => {
    return (
        <div className='flex justify-center items-center'>
            <h1 className="text-3xl md:text-6xl font-thin text-green-500">Welcome to your dashboard, <span className='text-3xl'>You can manage your task from here</span></h1>
        </div>
    );
};

export default Welcome;