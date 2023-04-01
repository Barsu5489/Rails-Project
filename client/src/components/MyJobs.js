import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

function MyJobs() {
    
  const redirect = useNavigate() 
  const userId = localStorage.getItem('userId');
  // const [jobId, setJobId] = useState(null)
  const [jobs, setjob] = useState([])
  const [editingId, setEditingId] = useState(null);
  const [editingTitle, setEditingTitle] = useState('');
  const [editingDescription, setEditingDescription] = useState('');
// console.log(jobId)

  function handleDelete(id) {
    fetch(`/jobs`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((res) => {
      if (res.ok) {
        setjob(jobs.filter(job => job.id !== id))
      }
    })
  }

  function handleEdit(id) {
      setEditingId(id);
      setEditingTitle(jobs.find(job => job.id === id).title);
      setEditingDescription(jobs.find(job => job.id === id).description);
  }

  function handleSave(id, title, description) {
    fetch(`/jobs/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ title, description })
    }).then((res) => {
      if (res.ok) {
        setEditingId(null);
        setjob(jobs.map(job => job.id === id ? { ...job, title, description } : job))
      }
    })
  }

  useEffect(() => {
    fetch(`/users/${userId}`)
      .then(res => res.json()
        .then(data => {
            console.log(data)
            console.log(data.jobs)

          return setjob(data.jobs)
        }
        ))
  }, [])


  const userjob = jobs.map((job) => {
    const jobTime = new Date(job.created_at)
    const month = jobTime.toLocaleString('default', { month: 'long' })
    const day = jobTime.getDate()
    const year = jobTime.getFullYear();
    const timeString = `${month} ${day} ${year}`
    return (
      <div className="job" key={job.id}>
        <div className="job__header">
          {editingId === job.id ? (
            <input className="job__title" value={editingTitle} onChange={(e) => setEditingTitle(e.target.value)} />
          ) : (
            <h2 className="job__title">{job.title}</h2>
          )}
          <p className="job__date">{timeString}</p>
        </div>
        {/* <img src="https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDV8fHBvcnRmb2xpb3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="missing" srcSet="" className='jobImg'/> */}
        {editingId === job.id ? (
          <textarea className="job__description" value={editingDescription} onChange={(e) => setEditingDescription(e.target.value)}></textarea>
        ) : (
          <p className="job__description">{job.description}</p>
        )}
        <div className="job__footer">
          <ul className="job__skills">
            {/* <li className="job__skill"><a href="#">{job.repo_url}</a></li> */}
            <li className="job__skill">work</li>
            <li className="job__skill">focus</li>
          </ul>
          <div className="job__buttons">
            {editingId === job.id ? (
              <button className="job__button job__button--
save" onClick={() => handleSave(job.id, editingTitle, editingDescription)}>Save</button>
            ) : (
              <button onClick={() =>
handleEdit(job.id)} className="job__button job__button--edit">Edit</button>
            )}
            <button onClick={() => handleDelete(job.id)} className="job__button job__button--delete">Delete</button>
          </div>
        </div>
      </div>
    )
  })

  return (
    <>
      <div className="job-page">
        {/* <h1 className="job-page__title">My jobs  <span><button className='addjob'
        onClick={()=>redirect('/addjob')}
        >Add job</button></span></h1> */}

  

{userjob}
</div>


</>
  )
}

export default MyJobs

