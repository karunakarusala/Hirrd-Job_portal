import axios from 'axios'
import React, { useEffect, useState } from 'react'

function MyJobs() {
    const [data,setData] = useState([])

    useEffect(()=>{
      const fetchData = async() =>{
       const getData   = await  axios.get("http://localhost:3000/allJobs")
      // .then((res)=>{
      //            console.log(res.data) 
      console.log(getData)
      setData(getData.data)
      //   .map(job=>
      //   job.jobTitle 
      // ))
      } 
       fetchData() 
      }
     
    ,[])

  return (
    <div className='mt-20'>
          
      {data.length > 0 ? (
        data.map((job, index) => (
          <div key={index}>
            {/* Display all job properties */}
            <h1>Job Title: {job.jobTitle}</h1>
            <p>Location: {job.jobLocation}</p>
            <p>Company: {job.companyName}</p>
            <p>Posting Date: {job.postingDate}</p>
            <p>Work Mode: {job.WorkMode}</p>
            <p>Employment Type: {job.employmentType}</p>
            <p>Skills: {job.skills.map(skill=>skill.value).join(', ')}</p>  {/* Assuming skills is an array */}
            <p>Description: {job.description}</p>
          </div>
        ))
      ) : (
        <p>No jobs found</p>  // Display a message if no jobs are found
      )}
        
        
    </div>
  )
}

export default MyJobs