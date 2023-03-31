import React from 'react'
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <><nav>
   <div className="navbar-logo">
          <NavLink to="/">Wera</NavLink>
        </div>
        
        <div className="navbar-links">
          {/* <NavLink to="/auth">Currently working<br /> on REACT</NavLink> */}
          <NavLink to="/jobs">Jobs</NavLink>
          <NavLink to="/categories">Categories</NavLink>
          <NavLink to="/login">Login</NavLink>
          <NavLink to="/postjob">Post</NavLink>
          <NavLink to="/myjobs">My Jobs</NavLink>


          
          <button className='btn-logout'>Log Out</button>
        </div>
      </nav>
  </>
  )
}

export default Navbar