import React from 'react';
import { useQuery } from '@tanstack/react-query';
import AllOrders from '../AllOrders/AllOrders';
import { useContext } from 'react';
import { AuthContext } from '../../context/Authprovider';

const Dashboard = () => {
    const { user } = useContext(AuthContext)
    const { data: myAllOrder = [] } = useQuery({
        queryKey: ['myOrders'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/myOrders?email=${user?.email}`)
            const data = await res.json()
            return data
        }
    })
    console.log(myAllOrder);
    return (
        <div className="table w-full">
            {/* <thead >
                <tr>
                    <th>Title</th>
                    <th>Price</th>
                    <th>Action</th>
                    <th></th>
                </tr>
            </thead> */}
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
                        <th><div className="btn btn btn-ghost">pay</div></th>
                    </tr>
                ))
            }
        </div>
    );
};

export default Dashboard;