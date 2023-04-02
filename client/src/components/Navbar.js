import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom';

function Navbar() {

  const user_id = localStorage.getItem('userId');
  const redirect = useNavigate();

  function handleLogout() {
    fetch(`/logout`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }  
    }).then((res) => {
      if (res.ok) {
        localStorage.removeItem(user_id); // remove user id from local storage
        redirect('/login');
      } else {
        console.log(res);
      }
    });
    
  }
function handlePostJob(){
  redirect('/login')
}
  return (
    <>
   {user_id ? (    <nav>
      <div className="navbar-logo">
        <NavLink to="/">💼Wera</NavLink>
      </div>
        
      <div className="navbar-links">
        <NavLink to="/jobs">Jobs</NavLink>
        <NavLink to="/categories">Categories</NavLink>
        <NavLink to="/postjob">Post</NavLink>
        <NavLink to="/myjobs">My Jobs</NavLink>
        <button className='btn-logout' onClick={handleLogout}>Log Out</button>
      </div>
    </nav>):(    <nav>
      <div className="navbar-logo">
        <NavLink to="/">💼Wera</NavLink>
      </div>
        
      <div className="navbar-links">

        <button className='btn-logout' onClick={handlePostJob} style={{marginLeft:'80%',backgroundColor:'#3d5c3f'}}>Post Job</button>
      </div>
    </nav>)}
    {/* <nav>
      <div className="navbar-logo">
        <NavLink to="/">Wera</NavLink>
      </div>
        
      <div className="navbar-links">
        <NavLink to="/jobs">Jobs</NavLink>
        <NavLink to="/categories">Categories</NavLink>
        <NavLink to="/login">Login</NavLink>
        <NavLink to="/postjob">Post</NavLink>
        <NavLink to="/myjobs">My Jobs</NavLink>
        <button className='btn-logout' onClick={handleLogout}>Log Out</button>
      </div>
    </nav> */}
    </>
  );
}

export default Navbar;
