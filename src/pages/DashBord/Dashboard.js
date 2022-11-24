import React from 'react';
import { useQuery } from '@tanstack/react-query';
import AllOrders from '../AllOrders/AllOrders';

const Dashboard = () => {
    const { data: myAllOrder = [] } = useQuery({
        queryKey: ['myOrders'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/myOrders')
            const data = await res.json()
            return data
        }
    })
    console.log(myAllOrder);
    return (
        <div className="table w-full">
            <thead >
                <tr>
                    <th>Title</th>
                    <th>Price</th>
                    <th>Action</th>
                    <th></th>
                </tr>
            </thead>
            {
                myAllOrder.map(myOrders => <AllOrders
                    key={myOrders._id}
                    myOrders={myOrders}
                ></AllOrders>)
            }
        </div>
    );
};

export default Dashboard;