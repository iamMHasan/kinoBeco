import React, { useContext } from 'react';
import { AuthContext } from '../../../context/Authprovider';
import { useQuery } from '@tanstack/react-query';
import useTitle from '../../../hooks/useTitle';
import toast from 'react-hot-toast';
import { useEffect } from 'react';
import { useState } from 'react';

const MyWishlist = () => {
    useTitle('Mywishlist')
    const { user } = useContext(AuthContext)
    const [loading, setLoading] = useState(false)
    const { data: wishlist = [],refetch , isLoading} = useQuery({
        queryKey: ['addToCart', user?.email],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/addToCart?email=${user?.email}`,{
                // headers : {
                //      authorization : `bearer ${localStorage.getItem('kenoBeco')}`
                // }
            })
            const data = await res.json()
            return data
        }
    })
    const handleDeleteOrder = id =>{
        setLoading(true)
        fetch(`http://localhost:5000/addToCart/${id}`,{
            method : 'DELETE'
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data);
            toast.success('order deleted')
            refetch()
            setLoading(false)
        })
        .catch(err => console.log(err))
    }
    console.log(wishlist);
    return (
        <div className="table w-full">
          {
            isLoading ? 'loading wishlist' : (
                <>
                 <thead>
                <tr>
                    <th></th>
                    <th>image</th>
                    <th>Product Name</th>
                    <th>Price</th>
                    <th>Action</th>
                </tr>
            </thead>
            {
                wishlist.map((myOrders, i) => (
                    <tr key={myOrders._id}>
                        <th>{i + 1}</th>
                        <th>
                            <div className="avatar">
                                <div className="mask mask-squircle w-12 h-12">
                                    <img src={myOrders.image}alt="Avatar Tailwind CSS Component" />
                                </div>
                            </div>
                        </th>
                        <th>{myOrders.productName}</th>
                        <th>{myOrders.resalePrice}</th>
                        <th><div className="btn btn-ghost">Book Now</div></th>
                        <th><div onClick={()=>handleDeleteOrder(myOrders._id)} className="btn  btn-xs">{loading ? 'delete....' : 'delete'}</div></th>
                    </tr>
                ))
            }
                </>
            )
          }
        </div>
    );
};

export default MyWishlist;