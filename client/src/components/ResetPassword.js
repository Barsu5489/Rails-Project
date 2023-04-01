import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function ResetPassword() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError("Passwords don't match");
      return;
    }

    fetch('/reset_password', {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: email,
          password: password
        })
      })
      .then((res) => {
        if (res.ok) {
            console.log(res)
          return res.json();
        } else {
          throw new Error('Something went wrong');
        }
      })
      .then((user) => {
        // Do something with the updated user, such as redirecting to the login page
        navigate('/login');
      })
      .catch((error) => {
        setError(error.message);
      });
      
  }

  return (
    <div className="login-form">
      <h1>Reset Password</h1>
      <form onSubmit={handleSubmit}>
      <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input className="form-control" type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div className="form-group">
          <label htmlFor="password">New Password:</label>
          <input className="form-control" type="password" id="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </div>
        <div className="form-group">
          <label htmlFor="confirm-password">Confirm New Password:</label>
          <input className="form-control" type="password" id="confirm-password" name="confirm-password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
        </div>
        <button  className="btn btn-primary" type="submit">Reset Password</button>
        {error && <p>{error}</p>}
      </form>
      <span><p>I remember my password!</p></span> <p className='link'> <span onClick={()=>navigate('/login')} style={{color:'purple'}}>Login!</span></p>
    </div>
  );
}

export default ResetPassword;
