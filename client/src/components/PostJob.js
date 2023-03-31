import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function PostJob() {
  const user_id = localStorage.getItem('userId');
    const redirect = useNavigate()
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [requirements, setRequirements] = useState("");
    const [location, setLocation] = useState("");
    const [salary, setSalary] = useState("");
    const [datePosted, setDatePosted] = useState("");
    // const [userId, setUserId] = useState("");
    const [companyName, setCompanyName] = useState("");
    const [companyPhone, setCompanyPhone] = useState("");
    const [experience, setExperience] = useState("");
    const [companyLogo, setCompanyLogo] = useState("");
    
    

    function handleSubmit(e){
        e.preventDefault()
        
        fetch(`/jobs`,{
            method:'POST',
            headers:{
                'Content-Type': 'application/json'
            }, 
             body: JSON.stringify({
                title:title,
                description:description,
                requirements:requirements,
                location:location,
                user_id:user_id,
                salary:salary,
                datePosted:datePosted,
                companyName:companyName,
                companyLogo:companyLogo,
                companyPhone:companyPhone,
                experience:experience,
                companyLogo:companyLogo
                
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
  <input type="text" name="title" className="form-control" id="" placeholder='Job title' value={title} onChange={e => setTitle(e.target.value)} />
</div>

<div className="form-group">
  <label>Description</label>
  <textarea name="description" className="form-control" placeholder='Job description' value={description} onChange={e => setDescription(e.target.value)}></textarea>
</div>

<div className="form-group">
  <label>Requirements</label>
  <textarea name="requirements" className="form-control" placeholder='Job requirements' value={requirements} onChange={e => setRequirements(e.target.value)}></textarea>
</div>

<div className="form-group">
  <label>Location</label>
  <input type="text" name="location" className="form-control" id="" placeholder='Job location' value={location} onChange={e => setLocation(e.target.value)} />
</div>

<div className="form-group">
  <label>Salary</label>
  <input type="number" name="salary" className="form-control" id="" placeholder='Job salary' value={salary} onChange={e => setSalary(e.target.value)} />
</div>

<div className="form-group">
  <label>Date Posted</label>
  <input type="date" name="date_posted" className="form-control" id="" placeholder='Job date posted' value={datePosted} onChange={e => setDatePosted(e.target.value)} />
</div>

<div className="form-group">
  <label>Company Name</label>
  <input type="text" name="company_name" className="form-control" id="" placeholder='Company name' value={companyName} onChange={e => setCompanyName(e.target.value)} />
</div>

<div className="form-group">
  <label>Company Phone</label>
  <input type="tel" name="company_phone" className="form-control" id="" placeholder='Company phone' value={companyPhone} onChange={e => setCompanyPhone(e.target.value)} />
</div>

<div className="form-group">
  <label>Experience</label>
  <input type="text" name="experience" className="form-control" id="" placeholder='Job experience required' value={experience} onChange={e => setExperience(e.target.value)} />
</div>

<div className="form-group">
  <label>Company Logo</label>
  <input type="name" name="company_logo" className="form-control" id="" placeholder='Company logo' value={companyLogo} onChange={e => setCompanyLogo(e.target.value)} />
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