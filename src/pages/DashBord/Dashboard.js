import React from 'react';
import { useQuery } from '@tanstack/react-query';
import AllOrders from '../AllOrders/AllOrders';
import { useContext } from 'react';
import { AuthContext } from '../../context/Authprovider';
import useTitle from '../../hooks/useTitle';
import toast from 'react-hot-toast';

const Dashboard = () => {
    useTitle('Dashboard')
    const { user } = useContext(AuthContext)
    const { data: myAllOrder = [],refetch, isLoading } = useQuery({
        queryKey: ['myOrders'],
        queryFn: async () => {
            const res = await fetch(`https://assignement-12-server.vercel.app/myOrders?email=${user?.email}`,{
                headers : {
                     authorization : `bearer ${localStorage.getItem('kenoBeco')}`
                }
            })
            const data = await res.json()
            return data
        }
    })
    const handleDeleteOrder = id =>{
        fetch(`https://assignement-12-server.vercel.app/myOrders/${id}`,{
            method : 'DELETE'
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data);
            toast.success('order deleted')
            refetch()
        })
        .catch(err => console.log(err))
    }
    console.log(myAllOrder);
    return (
        <div className="table w-full">
           {
            isLoading ? 'loading my ordrs' : (
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
                myAllOrder.map((myOrders, i) => (
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
                        <th><div className="btn  btn-ghost">pay</div></th>
                        <th><div onClick={()=>handleDeleteOrder(myOrders._id)} className="btn  btn-xs">delete</div></th>
                    </tr>
                ))
            }
                </>
            )
           }
        </div>
    );
};

export default Dashboard;