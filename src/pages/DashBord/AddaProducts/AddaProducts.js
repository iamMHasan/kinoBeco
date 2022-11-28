import React from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../context/Authprovider';
import Spinner from '../../../spinner/Spinner';

const AddaProducts = () => {
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()
    const {user} = useContext(AuthContext)
    const handleAddProduct = e => {
        setLoading(true)
        e.preventDefault()
        const form = e.target
        const Prdname = form.Prdname.value
        const mobile = form.mobile.value
        const location = form.location.value
        const purcahseyear = form.purcahseyear.value
        const description = form.description.value
        const condition = form.condition.value
        const productName = form.category.value
        const image = form.file.files[0]
        const postedDate = new Date()
        postedDate.toDateString()
        // console.log(productName, mobile, location, purcahseyear, description, condition,category);
        console.log(image);
        const picform = new FormData()
        picform.append('image', image )
        fetch("https://api.imgbb.com/1/upload?key=6fe1164c2c0eeca68905e318bf8d48ca",{
            method : 'POST',
            body : picform
        })
        .then(res => res.json())
        .then(data =>{
            console.log('this is url', data.url);
            console.log(data.data.url);
            const addproductInfo = {
                prdImage : data?.data?.url,
                isAdvertised : false,
                Prdname,
                mobile,
                location,
                purcahseyear,
                description,
                condition,
                productName,
                postedDate,
                email : user?.email,
            }
           if(data.success === true){
            fetch(`https://assignement-12-server.vercel.app/addAproduct`,{
                method : 'POST',
                headers : {
                    'content-type' : 'application/json'
                },
                body : JSON.stringify(addproductInfo)
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                toast.success('Proudct added successfully')
                navigate("/dashboard/myproducts")
                setLoading(false)
            })
            .catch(err => {
                console.log(err);
                setLoading(false)
            })
           }
        })
    }
    return (
        <>
            <h1 className="text-2xl">Add a product</h1>
            <form onSubmit={handleAddProduct}>
                <div className='flex flex-col py-2'>
                    <label htmlFor="">Product Name</label>
                    <input type="text" name='Prdname' placeholder="product" className="input input-bordered input-accent w-full mt-1" />
                </div>
                <div className='flex flex-col py-2'>
                    <label htmlFor="">Mobile Number</label>
                    <input type="text" name='mobile' placeholder="number" className="input input-bordered input-accent w-full mt-1" />
                </div>
                <div className='flex flex-col py-2'>
                    <label htmlFor="">Location</label>
                    <input type="text" placeholder="location" name='location' className="input input-bordered input-accent w-full mt-1" />
                </div>
                <div className='flex flex-col py-2'>
                    <label htmlFor="">Year of purchase</label>
                    <input type="number" placeholder="purcahse year" name='purcahseyear' className="input input-bordered input-accent w-full mt-1" />
                </div>
                <div className='flex flex-col py-2'>
                    <label htmlFor="">Descriptions</label>
                    <textarea type="text" placeholder="description" name='description' className="input input-bordered input-accent w-full mt-1" />
                </div>
                <div className='flex flex-col py-2'>
                    <label htmlFor="">Add a picture</label>
                    <input accept="image/*" type="file" name='file'  />
                </div>
                <div className='flex flex-col py-2'>
                    <label htmlFor="">Select condition</label>
                    <div className="flex gap-3">
                        <span>
                            <input required type="radio" name="condition" value="Excellent" />
                            <label className="ml-2 mr-2">Excellent</label>
                        </span>
                        <span>
                            <input required type="radio" name="condition" value="Fair" />
                            <label className="ml-2 mr-2">Fair</label>
                        </span>
                        <span >
                            <input className="ml-2 mr-2" required type="radio" name="condition" value="Medium" />
                            <label>Medium</label>
                        </span>
                    </div>
                </div>
                <div className='flex flex-col py-2'>
                    <label htmlFor="category">Select Category</label>
                    <div className="flex gap-3">
                        <span>
                            <input required type="radio" name="category" value="Mount Bike" />
                            <label className="ml-2 mr-2">Mount Bike</label>
                        </span>
                        <span>
                            <input required type="radio" name="category" value="Road Bike" />
                            <label className="ml-2 mr-2">Road Bike</label>
                        </span>
                        <span >
                            <input className="ml-2 mr-2" required type="radio" name="category" value="Folding Bike" />
                            <label>Fold Bike</label>
                        </span>
                    </div>
                </div>
                <button className="btn btn-dark">{loading ? <Spinner/> : 'Submit'}</button>
            </form>
        </>
    );
};

export default AddaProducts;