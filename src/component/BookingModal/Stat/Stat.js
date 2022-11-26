import React from 'react';

const Stat = () => {
    return (
        <>
            <h1 className="text-3xl md:text-4xl my-10 text-center font-bold">See how our <br className='hidden md:block' /> community is  <span className='font-5xl text-green-700 font-thin'> GROWING </span> </h1>
            <div className="stats shadow flex justify-center items-center">
                <div className="stat place-items-center">
                    <div className="stat-title">Downloads</div>
                    <div className="stat-value">31K</div>
                    <div className="stat-desc">From January 1st to February 1st</div>
                </div>

                <div className="stat place-items-center">
                    <div className="stat-title">Users</div>
                    <div className="stat-value text-secondary">4,200</div>
                    <div className="stat-desc text-secondary">↗︎ 40 (2%)</div>
                </div>

                <div className="stat place-items-center">
                    <div className="stat-title">New Registers</div>
                    <div className="stat-value">1,200</div>
                    <div className="stat-desc">↘︎ 90 (14%)</div>
                </div>

            </div>
        </>
    );
};

export default Stat;