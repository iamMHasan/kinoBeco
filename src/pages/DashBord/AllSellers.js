import React from 'react';
import { useQuery } from '@tanstack/react-query';
import toast from 'react-hot-toast';

const AllSellers = () => {
    const { data: AllSellers = [], refetch, isLoading } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/users?userType=Seller`, {
                headers: {
                    authorization: `bearer ${localStorage.getItem('kenoBeco')}`,
                }
            })
            const data = await res.json()
            return data;
        }
    })
    const handleDelete = (id) => {
        fetch(`http://localhost:5000/users/${id}`, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json'
            },
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                toast.success('user deleted')
                refetch()
            })
            .catch(err => console.log(err))
    }
    const handleMakeAdmin = id => {
        fetch(`http://localhost:5000/users/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
            },
            // body : JSON.stringify({})
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                toast.success('Made Admin')
                refetch()
            })
            .catch(err => console.log(err))
    }
    return (
        <table className="table table-zebra w-full">
            {isLoading ? (
                'loading all sellers.......................'
            ) : (
                <>
                    <thead>
                        <tr>
                            <th></th>
                            <th>User Name</th>
                            <th>Email</th>
                            <th>User Role</th>
                            <th>Action</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            AllSellers.map((user, i) => (

                                <tr key={user._id}>
                                    <th>{i + 1}</th>
                                    <td>{user?.displayName}</td>
                                    <td>{user?.email}</td>
                                    <td>{user?.userType}</td>
                                    <td><button onClick={() => handleDelete(user._id)} className="btn btn-ghost text-red-700">Delete User</button></td>
                                    <td><button onClick={() => handleMakeAdmin(user._id)} className="btn btn-ghost btn-xs text-green-700">Make Admin</button></td>
                                </tr>

                            ))
                        }

                    </tbody>
                </>
            )}
        </table>
    );
};

export default AllSellers;