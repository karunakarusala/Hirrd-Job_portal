import React from 'react'
import { IoMdJet } from "react-icons/io";
import { Button } from '../ui/button';
function RightSlide() {
  return (
    <div  className='bg-white  py-20 mt-20'>
    <div className=' flex gap-2 mt-1 px-4' >
         <IoMdJet className='mt-1'/> 
          <h1 className='text-md text-center font-bold '>Get Notified Faster</h1> 
          
    </div>
    <h1 className='font-light text-md mx-4 my-2'>
    Get Notification from companies fast by uploading your resume
    </h1>
    <Button variant='' className='bg-blue-500
    hover:bg-blue-400 mx-8 px-8 my-2
    '>Upload Your Resume</Button>
     
    </div>
  )
}

export default RightSlide
