import InputField from '@/Helpers/InputField'
import React from 'react'

function EmploymentType({handleChange}) {
  return (
    <div>   
        <h1 className='font-extraLight px-8'>Work Mode</h1>
        <div className='py-4'>
              <label className='px-10'>
                <input type='radio' 
                name='test' 
                onChange={handleChange}
                value=""/>
                <span className='px-2 font-light'>Any</span>
                <InputField handleChange={handleChange}
                    name="test"
                    value='Full-Time'
                    title='Full-Time'
                    
                />
                <InputField
                handleChange={handleChange}
                    name="test"
                    value='Part-Time'
                    title='Part-Time'
                />
                <InputField
                handleChange={handleChange}
                    name="test"                 
                    value='Temporary'
                    title='Temporary'
                />               
             </label>
        </div>
             
    </div>
  )
}

export default EmploymentType
