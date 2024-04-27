
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import LandingPage from './pages/user/landingPage';
import LoginPage from './pages/user/loginPage';

import ProductsPage from './pages/user/productsPage';

import Checkoutpage from './pages/user/checkoutPage';
import Profile from './pages/user/profilePage';
import AdminLogin from './pages/admin/adminLogin';
import ProductDetailsPage from './pages/user/productDetailsPage';
import SignUpPage from './pages/user/SignupPage';
import AdminDasboard from './pages/admin/admindashboard';
import CartPage from './pages/user/cartPage';



const router = createBrowserRouter ([
    { path: '/', element: <LandingPage /> },
    { path: '/login', element: <LoginPage/> },
    { path: '/register', element: <SignUpPage/> },
    { path: '/store', element: <ProductsPage /> },
    { path: '/cart', element: <CartPage /> },
    { path: '/checkout', element: <Checkoutpage /> },
    { path: '/profile', element: <Profile/> },
    { path: '/adminlogin', element: <AdminLogin/> },
    { path: '/productdetails/:id', element: <ProductDetailsPage /> },
    { path: '/admindashboard', element: <AdminDasboard/> }

  ]);
  

function App() {
  return (
    <>
    <RouterProvider router={router} />
    </>
  );
}

export default App;
