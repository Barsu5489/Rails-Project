import React from 'react'
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function Navbar() {
  return (
    <><nav>
   <div className="navbar-logo">
          <NavLink to="/">Wera</NavLink>
        </div>
        
        <div className="navbar-links">
          {/* <NavLink to="/auth">Currently working<br /> on REACT</NavLink> */}
          <NavLink to="/jobs">My Jobs</NavLink>
          <NavLink to="/categories">Categories</NavLink>
          <NavLink to="/Postjob">Post job</NavLink>
          <button className='btn-logout'>Log Out</button>
        </div>
      </nav>
  </>
  )
}

export default Navbar