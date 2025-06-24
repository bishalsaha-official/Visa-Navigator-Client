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
import VisaProvider from './providers/VisaProvider';
import ErrorPage from './components/ErrorPage';
import VisaDetails from './components/VisaDetails';
import AuthProvider from './providers/AuthProvider';
import PrivateRoute from './components/PrivateRoute';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts></MainLayouts>,
    errorElement: <ErrorPage></ErrorPage>,
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
        path: 'visa/:id',
        element: <PrivateRoute><VisaDetails></VisaDetails></PrivateRoute>,
        loader: ({ params }) => fetch(`http://localhost:5000/visas/${params.id}`)
      },
      {
        path: 'addvisa',
        element: <PrivateRoute><AddVisa></AddVisa></PrivateRoute>
      },
      {
        path: 'myaddedvisa',
        element: <PrivateRoute><MyAddedVisa></MyAddedVisa></PrivateRoute>
      },
      {
        path: 'visaapplication',
        element: <PrivateRoute><MyVisaApplication></MyVisaApplication></PrivateRoute>
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <VisaProvider>
        <RouterProvider router={router} />
      </VisaProvider>
    </AuthProvider>
  </StrictMode>,
)
