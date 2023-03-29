import React, { useState } from 'react'
import { useEffect } from 'react'

function Categories() {
    const [category, setCategory] = useState([])
useEffect(()=>{
    fetch('http://localhost:3000/categories')
    .then((r)=>r.json())
    .then((categories)=>{
        setCategory(categories)
    })
},[])
const categories = category.map((cat)=>{
    return (
    
        <div className="card" index={cat.id}>
  
  <div className="container">
    <h4><b>{cat.name}</b></h4>
    <p>{cat.description}</p>
  </div>
</div>

    )
})
    
  return (
    <div className="grid-container">
        {categories}
    </div>
  )
}

export default Categories