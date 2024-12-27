import React from 'react'
import { MdWork } from "react-icons/md";
import { MdOutlineHourglassFull } from "react-icons/md";
import { MdLocationPin } from "react-icons/md";
import { IoReaderOutline } from "react-icons/io5";
import { FaStarHalfAlt } from "react-icons/fa";
import { LiaDollarSignSolid } from "react-icons/lia";

function Card({data}) {
  const {companyName,jobTitle,companyLogo,minPrice,maxPrice,salaryType,
    jobLocation,description,employmentType,experienceLevel,postingDate,starRating
  } =data
  return (
    <div >        
      <div className='border-solid  rounded-md my-1 '>
                 
        <div className='  bg-white 
        hover:shadow-2xl hover:bg-blue-100
        border-solid border-2 py-3 px-6 shadow-md 
        rounded-md '>
        
        <div className='flex gap-4'>
        <img src={companyLogo} className='w-10'/>
        <h1 className='font-semiBold text-xl'>{companyName}</h1>
        </div>
        <div className='flex gap-3'>
        <h1 className='py-2 font-extraLight text-xl'> Role : {jobTitle}</h1> 
        <span className='mt-3'>|</span> 
 
        <FaStarHalfAlt className='mt-4'/>
        <span  className='mt-3  '>{starRating}</span>
        </div>

        <div className=' flex gap-4  font-light'>
        <MdWork className='mt-1 '/><span>{experienceLevel}</span> |
        <LiaDollarSignSolid className='mt-1 font-extraBold' /><span className=''>{minPrice}-{maxPrice}</span> |
        {/* <MdOutlineHourglassFull className='mt-1 '/><span>{employmentType}</span> | */}         
          <MdLocationPin className='mt-1'/><span>{jobLocation}</span>
        </div>
        <div className='flex gap-2'><IoReaderOutline
          className='text-5xl '
        />
         <span className='mt-2 font-light'>{description}</span>
        </div>
        <div className='pt-4 font-extralight'>{postingDate}</div>
        </div>

      </div>             
    </div>
  )
}

export default Card

