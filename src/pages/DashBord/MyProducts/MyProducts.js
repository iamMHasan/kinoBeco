import { useQuery } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { useContext, useEffect } from 'react';
import { AuthContext } from '../../../context/Authprovider';
import { useState } from 'react';

const MyProducts = () => {
    const [postedProduct, setPostedProduct] = useState({})
    const { user } = useContext(AuthContext)
    const { data: myproducts = [], refetch } = useQuery({
        queryKey: [],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/addAproduct?email=${user?.email}`)
            const data = await res.json()
            return data;
        }
    })

    const handleDelete = id => {
        fetch(`http://localhost:5000/addAproduct/${id}`, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                toast.success('product delted successfully')
                refetch()
            })
    }
    useEffect(() => {
      
    }, [])
    const handleAdvertise = (id) => {
        console.log(id);
        fetch(`http://localhost:5000/addAproduct/${id}`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify()
        })
            .then(res => res.json())
    }

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
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        myproducts.map((product, i) => (

                            <tr key={product._id}>
                                <th>{i + 1}</th>
                                <td>{product.productName}</td>
                                <td>{product.category}</td>
                                <td>{product.email}</td>
                                <td><>
                                    <p className='badge badge-ghost badge-sm'>Available</p>
                                    <button onClick={() => handleAdvertise(product._id)} className="btn btn-success btn-xs text-white">Advertise</button>
                                </></td>
                                <td><button onClick={() => handleDelete(product._id)} className="btn btn-ghost text-red-700">Delete</button></td>
                            </tr>

                        ))
                    }

                </tbody>
            </table>
        </div>
    );
};

export default MyProducts;