import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function PostJob() {
    const userId = localStorage.getItem('userId');
    const redirect = useNavigate()
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [location, setLocation] = useState('')
    

    function handleSubmit(e){
        e.preventDefault()
        
        fetch(`http://localhost:3000/jobs`,{
            method:'POST',
            headers:{
                'Content-Type': 'application/json'
            }, 
             body: JSON.stringify({
                title:title,
                description:description,
                location:location
            })
        }).then((res)=>{
            if(res.ok){
               
                redirect('/jobs')
                return res.json()
            }
        })
    }

  return (
    <div className="addProject-form">
        <h2>Post Job</h2>
                <form action="" method="post"  onSubmit={handleSubmit}>
        <div className="form-group">
            <label>Title</label>
        <input type="text" name="title" className="form-control"  id="" placeholder='Enter title' value={title} onChange={e=>setTitle(e.target.value)}/>
        </div>
        <div className="form-group">
            <label>Description</label>
            <textarea className="form-control" name='description' value={description} onChange={(e) => setDescription(e.target.value)} required ></textarea>
            
        </div>
        <div className="form-group">
            <label>Location</label>
            <input type="name" name="location" className="form-control"  placeholder="project Url"  value={location} onChange={(e)=>setLocation(e.target.value)} required/>
        </div>
        <button type="submit" className="btn btn-primary">Post</button>
        {/* <div className="forgot-password">
        <span><p>Already have an account?</p></span> <p> <span onClick={()=>redirect('/auth')}>Login!</span></p>
    </div> */}
        {/* <p style={{color:'red'}}>{error}</p> */}
        </form>
    </div>
  )
}

export default PostJob