import React from 'react'
import { useNavigate } from 'react-router-dom'

function UserHome() {
  const user_id = localStorage.getItem('userId');
  const userInfo = localStorage.getItem('userInfo')
  const userLastName = localStorage.getItem('userLastName')
  const redirect = useNavigate()

  console.log(userInfo)

 
  console.log(user_id)
  return (
    <>
    <div className='homeContainer'>
    <div className='currentJob'>
    {user_id ? (<h1> <span style={{color:'Green'}}>{userInfo}</span> <br />Discover</h1>):(<><h1>Create or<br />find opportunities <span className='access' onClick={()=>redirect('/login')}>Get a Job</span></h1> 
    
    </>
    )}
        
    </div>
    <div className='userImage'>
        <img style={{height:'25vh'}} src="https://images.unsplash.com/photo-1504292004442-f285299403fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1174&q=80" alt="" srcSet="" />
    </div>
    <div  className='userSummary'>
        
        <p style={{marginTop:'80px'}}>Simplify your job search and job posting with our platform. <br /> Join our community and find the ideal position.</p>
        {user_id ?(<h1><span style={{color:'green'}}>{userInfo}</span> <br /> {userLastName}</h1>):(<h1>Find jobs <br /> Post jobs</h1>)}
        
    </div>
    </div>
    </>
  )
}

export default UserHome