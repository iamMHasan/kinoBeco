import { createBrowserRouter } from 'react-router-dom';
import DashBoardLayout from '../layout/DashBoardLayout';
import Main from '../layout/Main';
import AllOrders from '../pages/AllOrders/AllOrders';
import Dashboard from '../pages/DashBord/Dashboard';
import Home from '../pages/Home/Home';
import ProductDetails from '../pages/Home/ProductDetails';
import ProudctCataCard from '../pages/Home/ProudctCataCard';
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import PrivateRoute from '../privateRoute.js/PrivateRoute';
import Error from '../shared/Error';


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
        path : '/dashboard',
        element : <PrivateRoute><DashBoardLayout/></PrivateRoute>,
        children : [
          {
            path : '/dashboard/myorders',
            element : <Dashboard/>
          }
        ]
      }
    ]
  }
])