import { useQuery } from '@tanstack/react-query';
import { getSuggestedQuery } from '@testing-library/react';
import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../context/Authprovider';
import AdvertiseItmCard from './AdvertiseItmCard';

const AdvertiseItems = () => {
    const { user } = useContext(AuthContext)
    const { data: advertiseItems, isLoading } = useQuery({
        queryKey: ['advertiseProduct'],
        queryFn: async () => {
            const res = await fetch(`https://assignement-12-server.vercel.app/advertiseProduct`)
            const data = await res.json()
            return data;
        }
    })

    return (
        <>
            {
                isLoading ? 'loading' : (
                    <>
                        {
                            advertiseItems.length > 0 && (
                                <>
                                <h1 className="text-3xl md:text-4xl my-10 text-center font-bold">Find a suitable <br className='hidden md:block' /> <span className='font-5xl text-green-700 font-thin'> cycle </span> from Advertise items</h1>
                                    <div className='grid grid-cols-1 md:grid-cols-3 gap-4 my-5 bg-zinc-100'>
                                        {
                                            advertiseItems.map(advertiseIteme => <AdvertiseItmCard
                                                key={advertiseIteme._id}
                                                advertiseIteme={advertiseIteme}
                                            ></AdvertiseItmCard>)
                                        }
                                    </div>
                                </>
                            )
                        }
                    </>
                )
            }
        </>
    );
};

export default AdvertiseItems;