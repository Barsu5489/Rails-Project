import React, { useRef, useState } from 'react'
import { useEffect } from 'react'

function Jobs() {
    const [jobs, setJobs] = useState([])
    const [id, setId] = useState(null)
    const [divDetails, setDivDetails] = useState(null)
    const divRef = useRef(null)

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
    // useEffect(() => {
    //   const handleClickOutside = (event) => {
    //     if (divRef.current && !divRef.current.contains(event.target)) {
    //       setId(null)
    //     }
    //   }
    
    //   document.addEventListener("mousedown", handleClickOutside)
    
    //   return () => {
    //     document.removeEventListener("mousedown", handleClickOutside)
    //   }
    // }, [divRef])
function handleShowDiv(id){
      console.log(id)
      setId(id)

    const divDetail = <div className='job-details-div'>

      <h1>All Details about specific job</h1>
    </div>;
     
    
setDivDetails(divDetail)
    }
    
    // Maping through each job
    const job = jobs.map((job)=>{
      return (
        <div className="job-card" key={job.id} onClick={()=>handleShowDiv(job.id,job.title,job.description)}  ref={divRef}>
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
    <button className="job-card-apply-btn">Apply Now /  Details</button>
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