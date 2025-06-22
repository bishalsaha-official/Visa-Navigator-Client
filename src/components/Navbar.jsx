import { Link, NavLink } from "react-router-dom";
import logo from '../assets/visa_icon.png'

const Navbar = () => {
    const links = <>
        <li><NavLink className="text-gray-800 text-[16px]" to="/">Home</NavLink></li>
        <li><NavLink className="text-gray-800 text-[16px]" to="/allvisa">All Visa</NavLink></li>
        <li><NavLink className="text-gray-800 text-[16px]" to="/addvisa">Add Visa</NavLink></li>
        <li><NavLink className="text-gray-800 text-[16px]" to="/myaddedvisa">My Added Visa</NavLink></li>
        <li><NavLink className="text-gray-800 text-[16px]" to="/visaapplication">My Visa applications</NavLink></li>
    </>
    return (
        <div className="navbar bg-base-200 shadow-sm px-5">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
                <div className="flex items-center gap-2">
                    <img className="w-8" src={logo} alt="" />
                    <h2 className="font-bold text-2xl text-[#2B5FB5]">Visa Navigator</h2>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                <div className="flex items-center gap-2.5">
                    <NavLink to='/register' className="btn bg-base-300 border text-gray-800">Register</NavLink>
                    <NavLink to='/login' className="btn bg-base-300 border text-gray-800">Login</NavLink>
                </div>
            </div>
        </div>
    );
};

export default Navbar;