import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
function Navbar() {
 
  const [user_id, setUserId] = useState(null);

  useEffect(() => {
    const storedUserInfo = localStorage.getItem('userId');
    setUserId(storedUserInfo);
  }, []);
  //const user_id = localStorage.getItem('userId');
  //const [user_id, setUserId] = useState
  const redirect = useNavigate();
  function handleLogout() {
    // fetch(`https://japp.onrender.com/logout`, {
    //   method: 'DELETE',
    //   headers: {
    //     'Content-Type': 'application/json'
    //   }  
    // }).then((res) => {
    //   if (res.ok) {
    //     localStorage.removeItem('userId'); // remove user id from local storage
    //     setUserId(null)
       
    //     redirect('/');
    //     window.location.reload();
    //   } else {
    //     console.log(res);
    //   }
    // });
    localStorage.removeItem('userId'); // remove user id from local storage
    setUserId(null)
   
    redirect('/');
    window.location.reload();
    
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
