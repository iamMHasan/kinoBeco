import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../context/Authprovider';


const BookingModal = ({ selectedProduct }) => {
    const { user } = useContext(AuthContext)
    const { image, location, name, resalePrice, originalPrice, sellerName, yearUse, datePosted, _id } = selectedProduct
    const handleBooking = (e) => {
        e.preventDefault()
        const form = e.target


        const myOrdersInfo = {
            orderId : _id,
            productName : name,
            userName: user?.displayName,
            userEmail: user?.email,
            location,
            resalePrice,
        }
        fetch(`http://localhost:5000/myOrders`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(myOrdersInfo)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })
            .catch(err => console.log(err))
    }
    return (
        <>
            <input type="checkbox" id="my-modal-3" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <form action="">
                        <div className='flex flex-col py-2'>
                            <label htmlFor="">Product Name</label>
                            <input defaultValue={name} type="text" readOnly placeholder="Type here" className="input input-bordered input-accent w-full mt-1" />
                        </div>
                        <div className='flex flex-col py-2'>
                            <label htmlFor="">User Name</label>
                            <input defaultValue={user?.displayName} readOnly type="text" placeholder="Type here" className="input input-bordered input-accent w-full mt-1" />
                        </div>
                        <div className='flex flex-col py-2'>
                            <label htmlFor="">User Email</label>
                            <input defaultValue={user?.email} readOnly type="text" placeholder="Type here" className="input input-bordered input-accent w-full mt-1" />
                        </div>
                        <div className='flex flex-col py-2'>
                            <label htmlFor="">Resell Price</label>
                            <input defaultValue={resalePrice} readOnly type="text" placeholder="Type here" className="input input-bordered input-accent w-full mt-1" />
                        </div>
                        <div className='flex flex-col py-2'>
                            <label htmlFor="">Meeting Location</label>
                            <input defaultValue={location} readOnly type="text" placeholder="Type here" className="input input-bordered input-accent w-full mt-1" />
                        </div>
                        <div className='flex flex-col py-2'>
                            <label htmlFor="">Seller Phone</label>
                            <input defaultValue={"01647572449"} readOnly type="text" placeholder="Type here" className="input input-bordered input-accent w-full mt-1" />
                        </div>
                        <button onClick={handleBooking} className="btn-dark">Confirm Booking</button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default BookingModal;