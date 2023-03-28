import React, { useState } from 'react'
import { useEffect } from 'react'

function Jobs() {
    const [jobs, setJobs] = useState([])
    useEffect(()=>{
      fetch('http://localhost:3000/jobs')
      .then((r)=> r.json())
      .then((jobs)=>{
          setJobs(jobs)
      })
    },[])
    if (jobs === []){
      return
    }
    // Maping through each job
    const job = jobs.map((job)=>{
      return (
        <div className="job-card" key={job.id}>
  <div className="job-card-header">
    <h2 className="job-card-title">{job.title}</h2>
    <p className="job-card-location">{job.location}</p>
  </div>
  <div className="job-card-body">
    <p className="job-card-company">Acme Inc.</p>
    <p className="job-card-description">{job.description} </p>
  </div>
  <div className="job-card-footer">
    <p className="job-card-date">Posted 3 days ago</p>
    <button className="job-card-apply-btn">Apply Now</button>
  </div>
</div>

      )
    }) 
    console.log(jobs)
  return (
    <div>
{job}

    </div>
  )
}

export default Jobs