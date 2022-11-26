import { createBrowserRouter } from 'react-router-dom';
import DashBoardLayout from '../layout/DashBoardLayout';
import Main from '../layout/Main';
import AllOrders from '../pages/AllOrders/AllOrders';
import Blog from '../pages/Blog/Blog';
import AddaProducts from '../pages/DashBord/AddaProducts/AddaProducts';
import AllSellers from '../pages/DashBord/AllSellers';
import AllAdmin from '../pages/DashBord/Allusers/AllAdmin';
import AllBuyers from '../pages/DashBord/Allusers/AllBuyers';
import Allusers from '../pages/DashBord/Allusers/Allusers';
import Dashboard from '../pages/DashBord/Dashboard';
import MyProducts from '../pages/DashBord/MyProducts/MyProducts';
import Welcome from '../pages/DashBord/Welcome';
import Home from '../pages/Home/Home';
import ProductDetails from '../pages/Home/ProductDetails';
import ProudctCataCard from '../pages/Home/ProudctCataCard';
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import PrivateRoute from '../privateRoute.js/PrivateRoute';
import Error from '../shared/Error';
import Footer from '../shared/Footer';


export const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/allCategories/:id',
        element: <PrivateRoute><ProductDetails /></PrivateRoute>,
        loader : ({params}) => fetch(`http://localhost:5000/allCategories/${params.id}`)
      },
      {
        path: '/login',
        element: <Login />
      },
      {
        path : '/signup',
        element : <Signup/>
      },
      {
        path : '/myOrders',
        element : <AllOrders/>
      },
      {
        path : '/blog',
        element : <Blog/>
      },
      {
        path : '/footer',
        element : <Footer/>
      },
      {
        path : '/dashboard',
        errorElement: <Error />,
        element : <PrivateRoute><DashBoardLayout/></PrivateRoute>,
        children : [
          {
            path : '/dashboard',
            element : <Welcome/>
          },
          {
            path : '/dashboard/myorders',
            element : <Dashboard/>
          },
          {
            path : "/dashboard/myproducts",
            element : <MyProducts/>,
          },
          {
            path : '/dashboard/addaproduct',
            element : <AddaProducts/>
          },
          {
            path : '/dashboard/allUsers',
            element : <Allusers/>
          },
          {
            path : '/dashboard/allBuyers',
            element : <AllBuyers></AllBuyers>
          },
          {
            path : '/dashboard/allSellers',
            element : <AllSellers/>
          },
          {
            path : '/dashboard/allAdmin',
            element : <AllAdmin/>
          }
        ]
      }
    ]
  }
])