import React, { useEffect } from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../context/Authprovider';
import Spinner from '../../../spinner/Spinner';

const AddaProducts = () => {
    const [loading, setLoading] = useState(false)
    const [selectedCategory, setSelectedCategory] = useState('');
    const navigate = useNavigate()
    const { user } = useContext(AuthContext)
    const [products, setProducts] = useState([])
    // all product
    useEffect(() => {
        fetch("https://kinobeco-server.vercel.app/allProducts")
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    // get unique cata
    const uniqueCata = [...new Set(products.map(item => item.category))];

    const handleAddProduct = e => {
        setLoading(true)
        e.preventDefault()
        const form = e.target
        const productName = form.Prdname.value
        const location = form.location.value
        const resalePrice = form.rprice.value
        const originalPrice = form.oprice.value
        const sellerName = user?.displayName
        const description = form.description.value
        const image = form.file.files[0]
        const category = selectedCategory
        console.log(productName, resalePrice, description, location, originalPrice, sellerName, category);
        const picform = new FormData()
        picform.append('image', image)
        if (selectedCategory) {
            fetch("https://api.imgbb.com/1/upload?key=e0f610ef6061d376338a241ce664db2f", {
                method: 'POST',
                body: picform
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data.data.url)
                    const addproductInfo = {
                        category,
                        productName,
                        image: data?.data?.url,
                        isAdvertised: false,
                        location,
                        email: user?.email,
                        originalPrice,
                        resalePrice,
                        sellerName
                    }
                    if (data.success === true) {
                        fetch(`https://kinobeco-server.vercel.app/addAproduct`, {
                            method: 'POST',
                            headers: {
                                'content-type': 'application/json'
                            },
                            body: JSON.stringify(addproductInfo)
                        })
                            .then(res => res.json())
                            .then(data => {
                                console.log(data);
                                toast.success('Proudct added successfully')
                                navigate("/dashboard/myproducts")
                                setLoading(false)
                            })
                    }
                })
                .catch(err => {
                    console.log(err);
                    setLoading(false)
                })
        } else {
            toast.error('Select a category')
        }
    }
    return (
        <>
            <h1 className="text-2xl">Add a product</h1>
            <form onSubmit={handleAddProduct}>
                <div className='flex flex-col py-2'>
                    <label htmlFor="">Product Name</label>
                    <input required type="text" name='Prdname' placeholder="product" className="input input-bordered input-accent w-full mt-1" />
                </div>
                <div className='flex flex-col py-2'>
                    <label htmlFor="">Location</label>
                    <input required type="text" placeholder="location" name='location' className="input input-bordered input-accent w-full mt-1" />
                </div>
                <div className='flex flex-col py-2'>
                    <label htmlFor="">Price</label>
                    <div className="flex gap-2">
                        <input required type="number" placeholder="Original Price" name='oprice' className="input input-bordered input-accent w-full mt-1" />
                        <input required type="number" placeholder="Resell Price" name='rprice' className="input input-bordered input-accent w-full mt-1" />
                    </div>
                </div>
                <div className='flex flex-col py-2'>
                    <label htmlFor="">Descriptions</label>
                    <textarea required type="text" placeholder="description" name='description' className="input input-bordered input-accent w-full mt-1" />
                </div>
                <div className='flex flex-col py-2'>
                    <label htmlFor="category">Select Category</label>
                    {/* <select required className='input input-bordered input-accent w-full mt-1' oncl={(e) => handleCategoryChange(e.target.value)}>
                        {uniqueCata.map((category) => (
                            <option key={category} value={category}>
                                {category}
                            </option>
                        ))}
                    </select> */}
                    <div className='flex items-center gap-4'>
                        {uniqueCata.map((category) => (
                            <label required key={category}>
                                <input
                                    required
                                    className='mr-1'
                                    type="radio"
                                    value={category}
                                    checked={selectedCategory === category}
                                    onClick={(e) => setSelectedCategory(e.target.value)}
                                />
                                {category}
                            </label>
                        ))}
                    </div>
                </div>
                <div className='flex flex-col py-2'>
                    <label htmlFor="">Add a picture</label>
                    <input required accept="image/*" type="file" name='file' />
                </div>
                <button className="btn btn-dark">{loading ? 'Submit..': 'Submit'}</button>
            </form>
        </>
    );
};

export default AddaProducts;