import React from 'react';
import { useContext } from 'react';
import { Link, useLocation, useNavigate } from "react-router-dom"
import toast, { Toaster } from 'react-hot-toast';
import { AuthContext } from '../context/Authprovider';
import Spinner from '../spinner/Spinner';
import { useState } from 'react';
import useTitle from '../hooks/useTitle';

const Signup = () => {
    useTitle('Signup')
    const [error, setError] = useState('')
    const { signInWithGoogle,createUser,updateUserProfile,loading, setLoading } = useContext(AuthContext)
    const location = useLocation()
    const navigate = useNavigate()
    const from = location?.state?.from?.pathname || '/'

    const handleSignup = e => {
        setLoading(true)
        e.preventDefault()
        const form = e.target
        const name = form.name.value
        const email = form.email.value
        const password = form.password.value
        const userType = form.userType.value
        createUser(email, password)
        .then(result =>{
            const user = result.user 
            const userInfo = {
                email : user?.email,
                userType : userType,
                displayName : name,
            }
            updateUserProfile(name)
            .then(()=>{
                fetch('https://kinobeco-server.vercel.app/users',{
                    method : 'POST',
                    headers : {
                        'content-type' : 'application/json'
                    },
                    body : JSON.stringify(userInfo)
                })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    toast.success('user created')
                    localStorage.setItem('kenoBeco', data.token)
                    navigate(from, { replace: true })
                    setLoading(false)
                })
                .catch(err =>{
                    console.log(err)
                    setLoading(false)
                })
            })
        })
        .catch(err => {
            console.log(err);
            setError(err.message)
            setLoading(false)
        })
    }
    const handleGoogleLogin = () => {
        signInWithGoogle()
            .then(result => {
                const user = result.user
                console.log(user);
                const userInfo = {
                    email : user?.email,
                    userType : 'Buyer',
                    displayName : user?.displayName,
                }
                fetch('https://kinobeco-server.vercel.app/users',{
                    method : 'POST',
                    headers : {
                        'content-type' : 'application/json'
                    },
                    body : JSON.stringify(userInfo)
                })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    toast.success('user created')
                    localStorage.setItem('kenoBeco', data.token)
                    navigate(from, { replace: true })
                    setLoading(false)
                })
                .catch(err =>{
                    console.log(err)
                    setLoading(false)
                })
            })
            .catch(err => console.log(err))
    }
    return (
        <div className="flex justify-center">
            <div className="w-full max-w-md p-8 space-y-3 rounded-xl bg-gray-200  text-black">
                <h1 className="text-2xl font-bold text-center">Sign up</h1>
                <form
                    onSubmit={handleSignup}
                    className="space-y-6 ng-untouched ng-pristine ng-valid">
                    <div className="space-y-1 text-sm">
                        <label for="username" className="block text-gray-400">Full name</label>
                        <input required type="text" name="name" id="username" placeholder="Username" className="w-full px-4 py-3 rounded-md border-gray-700 bg-gray-900 text-gray-100 focus:border-violet-400" />
                    </div>
                    <div className="space-y-1 text-sm">
                        <label for="username" className="block text-gray-400">Email</label>
                        <input required type="email" name="email" id="username" placeholder="email" className="w-full px-4 py-3 rounded-md border-gray-700 bg-gray-900 text-gray-100 focus:border-violet-400" />
                    </div>
                    <div className="space-y-1 text-sm">
                        <label for="password" className="block text-gray-400">Password</label>
                        <input required type="password" name="password" id="password" placeholder="Password" className="w-full px-4 py-3 rounded-md border-gray-700 bg-gray-900 text-gray-100 focus:border-violet-400" />
                        <div className="flex justify-end text-xs text-gray-400">
                            <Link rel="noopener noreferrer" href="#">Forgot Password?</Link>
                        </div>
                    </div>
                    <div className="space-y-1 text-sm">
                    <label for="password" className="block">Select who you are</label>
                            <span>
                                <input required type="radio" name="userType" value="Buyer" />
                                    <label  className="ml-2 mr-2">Buyer</label>
                            </span>
                            <span >
                                <input  className="ml-2 mr-2" required type="radio" name="userType" value="Seller" />
                                    <label>Seller</label>
                            </span>
                        
                    </div>
                   
                      <button className="block w-full p-3 text-center rounded-sm text-white bg-black ">{loading ? <Spinner/> : 'Sign up'}</button>
                      <p className="text-red-700">{error}</p>
                   
                </form>
                <div className="flex items-center pt-4 space-x-1">
                    <div className="flex-1 h-px sm:w-16 bg-gray-700"></div>
                    <p className="px-3 text-sm text-gray-400">Login with social accounts</p>
                    <div className="flex-1 h-px sm:w-16 bg-gray-700"></div>
                </div>
                <div className="flex justify-center space-x-4">
                    <button
                        onClick={handleGoogleLogin}
                        aria-label="Log in with Google" className="p-3 rounded-sm">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-current">
                            <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
                        </svg>
                    </button>
                </div>
                <p className="text-xs text-center sm:px-6 ">Don't have an account?
                    <Link to='/login' rel="noopener noreferrer" href="#" className="underline"> Log in</Link>
                </p>
            </div>
        </div>
    );
};

export default Signup;