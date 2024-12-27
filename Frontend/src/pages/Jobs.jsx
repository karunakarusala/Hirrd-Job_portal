import React from 'react'

function Jobs({result}) {
  return (
    <div >
    {result.length >0 ? 
    <div>
    <h1 className='font-bold mb-5 text-center'>No of jobs found- {result.length}</h1>
    <h1>{result}</h1>
    </div>
          : 
         <div className='flex gap-2 bg-white h-64 items-center justify-center '>
          <span className=' font-bold text-2xl'>sorry no data found       
        </span>
        <img className='w-20 h-20'
        src='https://thumbs.dreamstime.com/b/oops-sign-18087812.jpg'/>
        <span className='text-5xl'>!</span>
         </div>

         
        
    }
       
    </div>
  )
}

export default Jobs
