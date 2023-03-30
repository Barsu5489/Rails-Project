import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

function MyJobs() {
  const redirect = useNavigate() 
  const userId = localStorage.getItem('userId');
  const [jobs, setjob] = useState([])
  const [editingId, setEditingId] = useState(null);
  const [editingTitle, setEditingTitle] = useState('');
  const [editingDescription, setEditingDescription] = useState('');

  function handleDelete(id) {
    fetch(`https://port-folio-xtgn.onrender.com/jobs/${id}`, {
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
    fetch(`https://port-folio-xtgn.onrender.com/job/${id}`, {
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
    fetch(`https://port-folio-xtgn.onrender.com/jobs/${userId}`)
      .then(res => res.json()
        .then(data => {
          return setjob(data.data)
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
        <img src="https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDV8fHBvcnRmb2xpb3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="missing" srcSet="" className='jobImg'/>
        {editingId === job.id ? (
          <textarea className="job__description" value={editingDescription} onChange={(e) => setEditingDescription(e.target.value)}></textarea>
        ) : (
          <p className="job__description">{project.description}</p>
        )}
        <div className="project__footer">
          <ul className="project__skills">
            <li className="project__skill"><a href="#">{project.repo_url}</a></li>
            <li className="project__skill">work</li>
            <li className="project__skill">focus</li>
          </ul>
          <div className="project__buttons">
            {editingId === project.id ? (
              <button className="project__button project__button--
save" onClick={() => handleSave(project.id, editingTitle, editingDescription)}>Save</button>
            ) : (
              <button onClick={() =>
handleEdit(project.id)} className="project__button project__button--edit">Edit</button>
            )}
            <button onClick={() => handleDelete(project.id)} className="project__button project__button--delete">Delete</button>
          </div>
        </div>
      </div>
    )
  })

  return (
    <>
      <div className="project-page">
        {/* <h1 className="project-page__title">My jobs  <span><button className='addProject'
        onClick={()=>redirect('/addProject')}
        >Add project</button></span></h1> */}

  

{userProject}
</div>


</>
  )
}

export default MyJobs

