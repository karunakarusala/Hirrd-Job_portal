//import React from 'react'

import Banner from "@/components/Layouts/Banner"
import Card from "@/components/Layouts/Card"
import SideBar from "@/components/Layouts/SideBar"

import { useEffect, useState } from "react"
import Jobs from "./Jobs"
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"
import RightSlide from "@/components/Layouts/RightSlide"



function Home() {
  const[jobs,setJobs] = useState([])
  const[query,setQuery] = useState('')
  const[selectedCategory,setSelectedCategory]=useState(null)
  const[isLoading,setIsLoading] = useState(true)
  
  useEffect(()=>{
    if(isLoading){
       <h1 className="text-9xl">loading............</h1>
    }
    setIsLoading(false)
    const response = async()=>{
    try {    
      const data = await fetch("jobs.json")
      const JsonData =await data.json()
      setJobs(JsonData)
      console.log(JsonData)
    }     
     catch (error) {
       console.log(error)
    }
  }
  response()
}
,[])
const handleInputChange =(event)=>{
  setQuery(event.target.value)
}
console.log(query)
const filterItems = jobs.filter((job) =>
  job.jobTitle.toLowerCase().replace(/\s+/g, "").includes(query.toLowerCase().replace(/\s+/g, "")) ||
  job.jobLocation.toLowerCase().replace(/\s+/g, "").includes(query.toLowerCase().replace(/\s+/g, "")),
);


const handleChange =(event)=>{
  setSelectedCategory(event.target.value)
}

const handleClick =(event)=>{
  setSelectedCategory(event.target.value)
}

const filterData = (jobs,selected,query) =>{
  let filterJobs = jobs
 if(query){
  filterJobs = filterItems
 }
 console.log(selectedCategory)

// const filterJobs1= filterJobs.map((job) =>(
//   const experience = job.experienceLevel[2]
//   console.log(experience,"return")
//  ))

 

 if (selectedCategory) {
      filterJobs = filterJobs.filter((job) =>
        job.jobLocation.toLowerCase().includes(selectedCategory.toLowerCase()) ||
        job.salaryType.toLowerCase().includes(selectedCategory.toLowerCase()) ||
        (Number(job.maxPrice) <= Number(selectedCategory)) ||
        job.postingDate>=selectedCategory ||
        job.WorkMode.toLowerCase().includes(selectedCategory.toLowerCase()) ||
        job.employmentType.toLowerCase().includes(selectedCategory.toLowerCase()) ||
        (Number(job.experienceLevel[2])<=Number(selectedCategory))  
      );
    }
          return   filterJobs.map((data,index)=>(
        <Card key={index} data={data}/>
      ))              
}

const result = filterData(jobs,selectedCategory,query)
  return (
    <div >
    
    <Banner query={query} handleInputChange={handleInputChange} />
    <div className="bg-gray-00 grid grid-cols-3 gap-1 items-stretch  px-12">
      <div className="inline-block px-6 mx-12 h-full  bg-gray-100 ">
      <SideBar handleChange={handleChange} handleClick={handleClick}/>
      </div>    
      <div className=" w-[600px]  py-6 px-6  bg-gray-100 ">
      <Jobs  result ={result}/>     
      </div>
      <div className=" px-6  ml-32 bg-gray-100" >
       <RightSlide/>
      </div>
    </div>       
    </div>
  )
}

export default Home
