import React, { useState } from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function Categories() {
  const redirect  = useNavigate()
    const [category, setCategory] = useState([])
    const [jobCategoryId, setJobCategoryId] = useState(null)
    const [renderJobsInCategory, setRenderJobsInCategoryy] = useState([])
useEffect(()=>{
    fetch('https://japp.onrender.com/categories')
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
    <div className="card" key={job.id} onClick={handleDisplayCategories}>
  
    <div className="card-container">
    <div className="container">
    <h4 style={{textAlign:'center'}}><b>{job.title}</b></h4>
    <p>{job.description}</p>
    <button style={{marginLeft:'30%'}} className='apply-btn'>Apply</button>
  </div>
</div>
  </div> 
  </>
  )
})
const categories = category.map((cat)=>{
    return (
  <>


        <div className="card" key={cat.id} onClick={()=>handleJobCategories(cat)}>
  
        <div class="card-container">
  <div class="ccard">
    <div class="front">
   
      <div className="container">
    <h4 style={{textAlign:'center'}}><b>{cat.name}</b></h4>
    <p>{cat.description}</p>
  </div>
    </div>
    <div className="back">
   
      
      <button  style={{marginTop:'30%',marginLeft:'35%'}} className='apply-btn'>View jobs</button>
    </div>
  </div>
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