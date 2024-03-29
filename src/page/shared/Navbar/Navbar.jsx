import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../../AuthProvider/AuthProvider';
import logo from '../../../assets/logo.png'

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogout = () => {
        logOut()
            .then(() => { })
            .catch(err => { console.log(err.message) })
    }
    const menuBar = <div className='md:flex flex-row'>
        <li className='font-bold'><NavLink className={({ isActive }) => isActive ? 'font-bold text-pink-600 mb-0' : ''} to='/'>Home</NavLink></li>
        <li className='font-bold'><NavLink className={({ isActive }) => isActive ? 'font-bold text-pink-600 mb-0' : ''} to='/all-toys'>All Toys</NavLink></li>
        {
            user && <><li className='font-bold'>
                <NavLink className={({ isActive }) => isActive ? 'font-bold text-pink-600 mb-0' : ''} to='/my-toys'>My Toys</NavLink>
            </li>
                <li className='font-bold'>
                    <NavLink className={({ isActive }) => isActive ? 'font-bold text-pink-600 mb-0' : ''} to='/add-toy'>Add Toys</NavLink>
                </li>
            </>
        }

        <li className='font-bold'><NavLink className={({ isActive }) => isActive ? 'font-bold text-pink-600 mb-0' : ''} to='/blog'>Blog</NavLink></li>
    </div>
    return (
        <div className="navbar md:px-14">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow w-52">
                        {menuBar}
                    </ul>
                </div>
                <Link to='/' className='flex gap-1 items-center'>
                    <img className='w-12' src={logo} alt="" />
                    <h2 className='font-bold text-2xl hidden md:block'>DollMart</h2>
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {menuBar}
                </ul>
            </div>
            <div className="navbar-end">
                {user ?
                    <>
                        <div className="avatar mr-4">
                            <div className="w-12 rounded-full">
                                <img title={user.displayName} src={user.photoURL} />
                            </div>
                        </div>
                        <button onClick={handleLogout} className='btn bg-pink-600'>Logout</button>
                    </> :
                    <button className='btn bg-pink-600'><Link to='/login'>Login</Link></button>
                }
            </div>
        </div>
    );
};

export default Navbar;