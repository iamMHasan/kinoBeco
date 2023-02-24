import { useQuery } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { useContext, useEffect } from 'react';
import { AuthContext } from '../../../context/Authprovider';
import { useState } from 'react';

const MyProducts = () => {
    const [postedProduct, setPostedProduct] = useState({})
    const { user } = useContext(AuthContext)
    const { data: myproducts = [], refetch, isLoading } = useQuery({
        queryKey: [],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/addAproduct?email=${user?.email}`,{
                headers : {
                    authorization : `bearer ${localStorage.getItem('kenoBeco')}`
                }
            })
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
        fetch(`https://assignement-12-server.vercel.app/addAproduct/${id}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                const advertiseData = {
                    email : user?.email,
                    image : data?.prdImage,
                    datePosted : data?.postedDate,
                    location : data?.location,
                    mobile : data?.mobile,
                    productName : data?.productName,
                    condition : data?.condition,
                    isAdvertised : false,
                }
                fetch(`https://assignement-12-server.vercel.app/advertiseProduct`,{
                    method : 'POST',
                    headers : {
                        'content-type' : 'application/json'
                    },
                    body : JSON.stringify(advertiseData)
                })
                .then(res => res.json())
                .then(data =>{
                    console.log(data);
                    toast.success('advertise item successfull')
                    refetch()
                })
                .catch(err => console.log(err))

            })
            .catch(err => console.log(err))
    }

    return (
        <div className="overflow-x-auto">
            {isLoading ? 'loading' : (
                <>
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
                                   {
                                    !product.isAdvertised ?  <button onClick={() => handleAdvertise(product._id)} className="btn btn-success btn-xs text-white">Advertise</button> : 'advertised'
                                   }
                                </></td>
                                <td><button onClick={() => handleDelete(product._id)} className="btn btn-ghost text-red-700">Delete</button></td>
                            </tr>

                        ))
                    }

                </tbody>
            </table>
                </>
            )}
        </div>
    );
};

export default MyProducts;