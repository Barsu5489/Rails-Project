import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom';

function Navbar() {
const redirect =   useNavigate()
  const userId = localStorage.getItem('userId');
  function handleLogout(id){
    fetch(`/users/logout`,{
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }  
    }).then((res) => {
      if (res.ok) {
        redirect('/login')
      }else{
        console.log(res)
      }
    })
  }

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


          
          <button className='btn-logout'onClick={handleLogout}>Log Out</button>
        </div>
      </nav>
  </>
  )
}

export default Navbar