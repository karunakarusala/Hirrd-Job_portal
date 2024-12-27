
import React from 'react'
import Location from '@/SideBarComponents.jsx/Location'
import Salary from '@/SideBarComponents.jsx/Salary'
import PostingData from '@/SideBarComponents.jsx/PostingData'
import WorkMode from '@/SideBarComponents.jsx/WorkMode'
import EmploymentType from '@/SideBarComponents.jsx/EmploymentType'
import Experience from '@/SideBarComponents.jsx/Experience'
function SideBar({handleChange,handleClick}) {
  return (
    <div className='  bg-white my-6 '>    
      <span className='inline-block font-bold py-2 mx-4'>Filters</span>
      <div className=' font-extraLight'>
        <Location handleChange={handleChange}/>
        <Salary handleChange={handleChange} handleClick={handleClick} />
        <PostingData  handleChange={handleChange}/>
        <WorkMode handleChange={handleChange}/>
        <EmploymentType handleChange={handleChange}/> 
        <Experience handleChange={handleChange}/>
      
      </div>
    </div>
  )
}

export default SideBar
