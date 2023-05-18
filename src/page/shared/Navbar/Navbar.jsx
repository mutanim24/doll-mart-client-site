import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../../AuthProvider/AuthProvider';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogout = () => {
        logOut()
        .then(() => {})
        .catch(err => {console.log(err.message)})
    }
    const menuBar = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/all-toys'>All Toys</Link></li>
        <li><a href="">My Toys</a></li>
        <li><a href="">Add Toys</a></li>
        <li><a href="">Blog</a></li>
    </>
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuBar}
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-xl">DollMart</a>
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