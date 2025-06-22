import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import MainLayouts from './layouts/MainLayouts';
import Login from './components/Login';
import Register from './components/Register';
import AddVisa from './components/AddVisa';
import MyAddedVisa from './components/MyAddedVisa';
import MyVisaApplication from './components/MyVisaApplication';
import Home from './pages/Home';
import AllVisa from './components/AllVisas';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts></MainLayouts>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: 'login',
        element: <Login></Login>
      },
      {
        path: 'register',
        element: <Register></Register>
      },
      {
        path: 'allvisa',
        element: <AllVisa></AllVisa>
      },
      {
        path: 'addvisa',
        element: <AddVisa></AddVisa>
      },
      {
        path: 'myaddedvisa',
        element: <MyAddedVisa></MyAddedVisa>
      },
      {
        path: 'visaapplication',
        element: <MyVisaApplication></MyVisaApplication>
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router} />
  </StrictMode>,
)
