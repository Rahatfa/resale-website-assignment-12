import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="navbar bg-base-100">
                <div className="flex-1">
                    <Link to='/home' className="btn btn-ghost normal-case text-xl">Mobile <span className='text-red-600 hover:text-sky-400'>World</span> </Link>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal p-0"> 
                        <li className='text-black-600 hover:text-sky-400'><Link to='/'>Home</Link></li>
                        <li className='text-black-600 hover:text-sky-400'><Link to='/blog'>Blog</Link></li>
                        <li className='text-black-600 hover:text-sky-400'><Link to='/login'>Log In</Link></li>
                    </ul>
                </div>
        </div>
        
    );
};

export default Navbar;