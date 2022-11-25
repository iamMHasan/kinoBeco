import { useQuery } from '@tanstack/react-query';
import React from 'react';

const AllOrders = ({ myOrders }) => {
    console.log(myOrders);
    const { image, productName, resalePrice } = myOrders
    return (
        <div className="overflow-x-auto w-full">
            <table className="table w-full">
                <tbody>
                    <tr>
                        <td>
                            <div className="flex items-center space-x-3">
                                <div className="avatar">
                                    <div className="mask mask-squircle w-12 h-12">
                                        <img src={image} alt="Avatar Tailwind CSS Component" />
                                    </div>
                                </div>
                                <div>
                                    <div className="font-bold">
                                        {productName}
                                    </div>
                                </div>
                            </div>
                        </td>
                        <td>
                            {resalePrice}
                        </td>
                        <th>
                            <button className="btn btn-ghost btn-xs">details</button>
                        </th>
                    </tr>
                </tbody>

            </table>
        </div>
    );
};

export default AllOrders;