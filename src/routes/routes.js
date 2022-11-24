import { createBrowserRouter } from 'react-router-dom';
import Main from '../layout/Main';
import Home from '../pages/Home/Home';
import ProductDetails from '../pages/Home/ProductDetails';
import ProudctCataCard from '../pages/Home/ProudctCataCard';
import Login from '../pages/Login';
import Signup from '../pages/Signup';
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
        element: <ProductDetails />,
        loader : ({params}) => fetch(`http://localhost:5000/allCategories/${params.id}`)
      },
      {
        path: '/login',
        element: <Login />
      },
      {
        path : '/signup',
        element : <Signup/>
      }
    ]
  }
])