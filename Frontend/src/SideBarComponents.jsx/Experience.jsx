import InputField from '@/Helpers/InputField'
import React from 'react'

function Experience({handleChange}) {
  return (
    <div>   
        <h1 className='font-extraLight px-8'>Experience</h1>
        <div className='py-4'>
              <label className='px-10'>
                <input type='radio' 
                name='test' 
                onChange={handleChange}
                value=""/>
                <span className='px-2 font-light'>Any</span>
                <InputField handleChange={handleChange}
                    name="test"
                    value={1}
                    title='Fresher'
                    
                />
                <InputField
                handleChange={handleChange}
                    name="test"
                    value='Part-Time'
                    title='More  than 1 year'
                />
                <InputField
                handleChange={handleChange}
                    name="test"                 
                    value='Temporary'
                    title='More  than 3 year'
                /> 
                <InputField
                handleChange={handleChange}
                    name="test"                 
                    value='Temporary'
                    title='More  than 5 year'
                /> 

             </label>
        </div>
             
    </div>
  )
}

export default Experience