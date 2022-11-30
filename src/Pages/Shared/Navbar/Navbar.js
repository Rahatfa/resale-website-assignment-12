import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';

const Navbar = () => {
    const {user, logOut} = useContext(AuthContext)

    const handleLogOut = ()=>{
        logOut()
        .then (() =>{})
        .catch(err => console.log(err))
    }
    return (
        <div className="navbar bg-base-100">
                <div className="flex-1">
                    <Link to='/home' className="btn btn-ghost normal-case text-xl">Mobile <span className='text-red-600 hover:text-sky-400'>World</span> </Link>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal p-0"> 
                        <li className='text-black-600 hover:text-sky-400'><Link to='/'>Home</Link></li>
                        <li className='text-black-600 hover:text-sky-400'><Link to='/blog'>Blog</Link></li>
                        {user?.uid ? 
                            <>
                                <li><Link to='/dashboard'>Dashboard</Link></li>
                                <li className='text-black-600 hover:text-sky-400'><button onClick={handleLogOut}>Sign Out</button></li>
                            
                            
                            </>
                            : <li className='text-black-600 hover:text-sky-400'><Link to='/login'>Log In</Link></li>}
                    </ul>
                </div>
                <label htmlFor="dashboard-drawer" tabIndex={2} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
        </div>
        
    );
};

export default Navbar;