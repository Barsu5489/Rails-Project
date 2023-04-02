import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'


function Register() {
    const redirect = useNavigate()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [first_name, setFirstName] = useState('')
    const [last_name, setLastName] = useState('')
    const [username, setUsername] = useState('')
    const [error, setError] = useState('')
    function handleSubmit(e){
    e.preventDefault()
        fetch('/register',{
            method: 'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body: JSON.stringify({
                username:username,
                email:email,
                first_name:first_name,
                last_name:last_name,
                password:password
            })
        }).then((res)=>{
            if(res.ok){
                return res.json()
                
            }
        }).then((info)=>{
            if(info.error){
                setError("Email error")
            }else
            redirect('/login')
        }).catch(error=>{
            setError(error.message)
        })
    }
  return (
    <div>
        <div className="signup-form">    
        <h1>signup</h1>
        <form action="" method="post"  onSubmit={handleSubmit}>
        <div className="form-group">
            <label>Username</label>
        <input type="name" name="username" className="form-control"  id="" placeholder='username' value={username} onChange={e=>setUsername(e.target.value)}/>
        </div>
        <div className="form-group">
            <label>Email</label>
        <input type="email" name="email" className="form-control"  id="" placeholder='email' value={email} onChange={e=>setEmail(e.target.value)}/>
        </div>
        <div className="form-group">
            <label>First Name</label>
            <input type="name" name="first_name" className="form-control"  placeholder='First name' value={first_name} onChange={(e)=>setFirstName(e.target.value)} required/>
        </div>
        <div className="form-group">
            <label>Last Name</label>
            <input type="name" name="last_name" className="form-control"  placeholder="Last name"  value={last_name} onChange={(e)=>setLastName(e.target.value)} required/>
        </div>
        <div className="form-group">
            <label>Password</label>
            <input type="password" name='password' className="form-control"  placeholder='password'value={password} onChange={(e)=>setPassword(e.target.value)}  required />
        </div>
        
        <button type="submit" className="btn btn-primary">Signup</button>
        <div className="forgot-password">
        <span><p>Already have an account?</p></span> <p className='link'> <span onClick={()=>redirect('/login')} style={{color:'purple'}}>Login!</span></p>
    </div>
        <p style={{color:'red'}}>{error}</p>
        </form>

        </div>
    </div>
  )
}

export default Register
