import { useQuery } from '@tanstack/react-query';
import React, { useEffect } from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../../context/Authprovider';

const MyProducts = () => {
    const { user } = useContext(AuthContext)
    const { data: myproducts = [] } = useQuery({
        queryKey: [],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/addAproduct?email=${user?.email}`)
            const data = await res.json()
            return data;
        }
    })
    return (
        <div className="overflow-x-auto">
            <table className="table table-zebra w-full">
                <thead>
                    <tr>
                        <th></th>
                        <th>Product Name</th>
                        <th>category</th>
                        <th>Email</th>
                        <th>status</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        myproducts.map(product => (
                            <>
                                <tr key={product._id}>
                                    <th>1</th>
                                    <td>{product.productName}</td>
                                    <td>{product.category}</td>
                                    <td>{product.email}</td>
                                    <td><button className="btn btn-ghost">Available</button></td>
                                </tr>
                            </>
                        ))
                    }

                </tbody>
            </table>
        </div>
    );
};

export default MyProducts;