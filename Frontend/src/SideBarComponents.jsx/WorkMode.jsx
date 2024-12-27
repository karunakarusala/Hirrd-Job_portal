import InputField from '@/Helpers/InputField'
import React from 'react'

function WorkExperience({handleChange}) {
  return (
     <div>   
        <h1 className='font-extraLight px-8'>Employment Type</h1>
        <div className='py-4'>
              <label className='px-10'>
                <input type='radio' 
                name='test' 
                onChange={handleChange}
                value=""/>
                <span className='px-2 font-light'>Flexible</span>
                <InputField handleChange={handleChange}
                    name="test"
                    value='WorkFromOffice'
                    title='Work From Office'
                />
                <InputField
                handleChange={handleChange}
                    name="test"
                    value='Remote'
                    title='Remote/WFH'
                />
                <InputField
                handleChange={handleChange}
                    name="test"
                    value='Hybrid'
                    title='Hybrid'
                />               
             </label>
        </div>
             
    </div>
  )
}

export default WorkExperience
