import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
function Login() {
  const redirect = useNavigate()
const [email, setEmail] = useState('')
const [password, setPassword] = useState('')
const [error, setError] = useState('')

  function handleLogin(e){
    e.preventDefault(); 

    fetch('http://localhost:3000/users',{
      method: 'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body: JSON.stringify({
        email: email,
        password: password
      })
    }).then((res)=>{
      if(res.ok){
        return res.json()
      }else{
        throw new Error('Invalid email or Password')
      }
    }).then((info)=>{
      setUserId(users.id)
      localStorage.setItem('userId', users.id)
      localStorage.setItem('userInfo', users.first_name)
      localStorage.setItem('userLastName', users.last_name)

      redirect('/')
      window.location.reload();
    }).catch(error=>{
      setError(error.message)
    })
  }
  return (
    <>
        <div className="login-form">
            <form action="" method='post' onSubmit={handleLogin}>
            <h1>Log in to portfolio App</h1>
            <div className="form-group">
            <label>Email</label>
        <input type="email" name="email" className="form-control"  id="" placeholder='email' value={email} onChange={e=>setEmail(e.target.value)}/>
        </div>
        <div className="form-group">
        <label>Password</label>
        <input type="password" className="form-control"  name="password" id="" placeholder='password' value={password} onChange={e=>setPassword(e.target.value)}/>
        </div>
        <button type="submit" className="btn btn-primary">Log In</button>
        <div className="forgot-password">
        <span><p>Don't have an account?</p></span> <p className='link'> <span onClick={()=>redirect('/signup')}>Create!</span></p>
    </div>
        <p style={{color:'red'}}>{error}</p>
        
        </form>
        </div>



    </>
  )
}

export default Login