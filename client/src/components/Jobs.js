import React, { useRef, useState } from 'react'
import { useEffect } from 'react'

function Jobs() {
    const [jobs, setJobs] = useState([])
    const [id, setId] = useState(null)
    const [divDetails, setDivDetails] = useState(null)
    const divRef = useRef(null)
      console.log(jobs)
    useEffect(() => {
      if (divRef.current) {
        divRef.current.scrollIntoView({ behavior: 'smooth' });
      }
    }, [divDetails]);
    useEffect(()=>{
      fetch('/jobs')
      .then((r)=> r.json())
      .then((jobs)=>{
          setJobs(jobs)
      })
    },[])
    useEffect(() => {
      function handleClickOutside(event) {
        if (divRef.current && !divRef.current.contains(event.target)) {
          setId(null);
        }
      }
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }, [divRef]);
    if (jobs === []){
      return
    }
function handleApply(company){
alert(`Application sent to ${company}`)
window.location.reload()

}
function handleShowDiv(job){
      console.log(job)
      setId(job)

    const divDetail = <div className='job-details-div'>

      <div className="card_more_details">
  <div className="card-header">
    {/* <h2>logo</h2> */}
    <h2>{job.title}</h2>
    <p className="date">{job.date_posted}</p>
  </div>
 <div className='apply-btn-container' >  <button className='apply-btn' onClick={()=>handleApply(job.company_name)}>Apply</button></div>
  <hr/>
  <div className="card-body">
    <h3>{job.company_name}</h3>
    <p className="description">{job.description}</p>
    <hr/>
    <h4>Requirements:</h4>
    <ul>
      <li>{job.requirements}</li>
    </ul>
    <hr/>
    <h4>Location:</h4>
    <p className="location">{job.location}</p>
    <hr/>
    <h4>Salary:</h4>
    <p className="salary">ksh {job.salary}</p>
    <hr/>
    <h4>Contact:</h4>
    <p className="company-name">{job.company_name}.</p>
    <p className="company-phone">{job.company_phone}</p>
    <hr/>
    <h4>Experience:</h4>
    <p className="experience">{job.experience}</p>
  </div>
</div>

      
    </div>;
     
    
setDivDetails(divDetail)
    }
    
    // Maping through each job
    const job = jobs.map((job)=>{
      return (
        <div className="job-card" key={job.id} onClick={()=>handleShowDiv(job)}  ref={divRef}>
  <div className="job-card-header">
    <h2 className="job-card-title">{job.title}</h2>
    <p className="job-card-location">{job.location}</p>
  </div>
  <div className="job-card-body">
    <p className="job-card-company">{job.company_name}.</p>
    <p className="job-card-description">{job.description} </p>
  </div>
  <div className="job-card-footer">
    <p className="job-card-date">Posted 3 days ago</p>
    <button className="job-card-apply-btn"> Details</button>
  </div>
</div>

      )
    }) 
    console.log(jobs)

 
  return (
    <>
    {id !== null ? (
        <div className='jobs-container'>
          <div className='job-card-container'>{job}</div>
          <div className='job-details-container' ref={divRef}>{divDetails} </div>
        </div>) : (<div>{job}</div>)}
    {/* <div >
     
{job}

    </div> */}
    </>
  )
}

export default Jobs