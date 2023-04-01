import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ResetPassword from './ResetPassword';
function Login() {
  const redirect = useNavigate()
const [username, setUsername] = useState('')
const [password, setPassword] = useState('')
const [error, setError] = useState('')
//const [userId, setUserId] = useState(null)

  function handleLogin(e){
    e.preventDefault(); 

    fetch('/users/login',{
      method: 'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body: JSON.stringify({
        username: username,
        password: password
      })
    }).then((res)=>{
      if(res.ok){
        redirect('/')
        return res.json()
       
      }
      // else{
      //   throw new Error('Invalid email or Password')
      // }
    })
    .then((info)=>{
      console.log(info)
     // setUserId(info.id)
      localStorage.setItem('userId', info.id)
      //localStorage.setItem('jobId', info)
      // localStorage.setItem('userInfo', info.first_name)
      // localStorage.setItem('userLastName', info.last_name)

      //redirect('/')
      // window.location.reload();
    })
     .catch(error=>{
     setError(error.message)
   })
  }
  return (
    <>
        <div className="login-form">
            <form action="" method='post' onSubmit={handleLogin}>
            <h1>Login</h1>
            <p style={{color:'red'}}>{error}</p>
            <div className="form-group">
            <label>Username</label>
        <input type="name" name="username" className="form-control"  id="" placeholder='username' value={username} onChange={e=>setUsername(e.target.value)}/>
        </div>
        <div className="form-group">
        <label>Password</label>
        <input type="password" className="form-control"  name="password" id="" placeholder='password' value={password} onChange={e=>setPassword(e.target.value)}/>
        </div>
        <button type="submit" className="btn btn-primary">Log In</button>
        <div className="forgot-password">
        <span><p>Don't have an account?</p></span> <p className='link'> <span onClick={()=>redirect('/register')} style={{color:'purple'}}>Create!</span></p>
        <span><p>If forgot-password?</p></span> <p className='link'> <span onClick={()=>redirect('/resetpassword')} style={{color:'purple'}}>password-reset!</span></p>
    </div>
       
        </form>
        </div>



    </>
  )
}

export default ResetPassword