import React, { useContext } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { authContext } from '../contextAPI/ContextAPI';

const Navbar = () => {
  const {user, logOut} = useContext(authContext)

    const link = [<li className='mx-3'><Link to="/">Home</Link></li>,
                  <li className='mx-3'><Link to="/about">About</Link></li>,
                  <li className='mx-3'><Link to="/career">Career</Link></li>, 
                ]
const handleLogOut = () => {
   // LogOut from firebase
   logOut()
      .then()
      .catch()
}

    return (
        <div>
            <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
       {link}
       {user && user ? <li className='mx-3'><Link to="/profile">Profile</Link></li> : '' }
      </ul>
    </div>

  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
    {link}
    {user && user ? <li className='mx-3'><Link to="/profile">Profile</Link></li> : '' }
    </ul>
  </div>
 
  <div className="navbar-end">

      {
        user ?  
        <div className="w-10 rounded-full flex justify-end items-center">
          <img
            className='rounded-box z-[1]'
            alt="Tailwind CSS Navbar component"
            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"/>
            {user.email}
            <button className='btn btn-sm border-black m-2' onClick={handleLogOut}>Log Out</button>
        </div>
        
        :
         <Link to={'/login'}> <button className='btn btn-sm border-black'>Login</button> </Link>
      }
  
  </div>
</div>
        </div>
    );
};

export default Navbar;