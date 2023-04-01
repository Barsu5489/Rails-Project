import React, { useState } from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function Categories() {
  const redirect  = useNavigate()
    const [category, setCategory] = useState([])
    const [jobCategoryId, setJobCategoryId] = useState(null)
    const [renderJobsInCategory, setRenderJobsInCategoryy] = useState([])
useEffect(()=>{
    fetch('/categories')
    .then((r)=>r.json())
    .then((categories)=>{
      console.log(categories)
      
        setCategory(categories)
    })
},[])
function handleJobCategories(cat){
  setJobCategoryId(cat.id)
  if (jobCategoryId === null){
    setRenderJobsInCategoryy(cat.jobs)
  }
}
function handleDisplayCategories(){
  setJobCategoryId(null)
  
    redirect('/jobs')
  
  
}
const jobsUnderCategory = renderJobsInCategory.map((job)=>{
  return (
    <>
    <div className="card" index={job.id} onClick={handleDisplayCategories}>
  
    <div className="container">
      <h4><b>{job.title}</b></h4>
      <p>{job.description}</p>
    </div>
  </div> 
  </>
  )
})
const categories = category.map((cat)=>{
    return (
  <>
  {/* {renderJobsInCategory ? ( <div className="card" key={renderJobsInCategory.id} >
  
  <div className="container">
    <h4><b>{c.name}</b></h4>
    <p>{cat.description}</p>
  </div>
</div>):(<div className="card" key={cat.id} onClick={()=>handleJobCategories(cat)}>
  
  <div className="container">
    <h4><b>{cat.name}</b></h4>
    <p>{cat.description}</p>
  </div> */}
{/* </></div>)} */}
        <div className="card" key={cat.id} onClick={()=>handleJobCategories(cat)}>
  
  <div className="container">
    <h4><b>{cat.name}</b></h4>
    <p>{cat.description}</p>
  </div>
</div> 
</>
    )
})
    
  return (
    <>
   {jobCategoryId !== null? (<div className="grid-container">
        {jobsUnderCategory}
    </div>):( <div className="grid-container">
        {categories}
    </div>)}
    {/* <div className="grid-container">
        {categories}
    </div> */}
    </>
  )
}

export default Categories