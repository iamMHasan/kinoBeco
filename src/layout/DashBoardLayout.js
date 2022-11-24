import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { useUserType } from '../api/user';
import { AuthContext } from '../context/Authprovider';
import Navbar from '../shared/Navbar';

const DashBoardLayout = () => {
    const { user } = useContext(AuthContext)
    const [usertype] = useUserType(user?.email)
    console.log(usertype);

    return (
        <div className="drawer drawer-mobile">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                {/* <!-- Page content here --> */}
                <Outlet />
               

            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 bg-base-100 text-base-content">
                    {/* <!-- Sidebar content here --> */}
                    {
                        usertype === 'Buyer' && (
                            <li><Link to='/dashboard/myorders'>My orders</Link></li>
                        )
                    }
                </ul>

            </div>
        </div>
    );
};

export default DashBoardLayout;
