import InputField from '@/Helpers/InputField'

import React from 'react'

function Location({handleChange}) {
  return (
    <div>   
                <h1 className='font-extraLight px-8'>Location</h1>
        <div className='py-4'>
              <label className='px-10'>
                <input type='radio' 
                name='test' 
                onChange={handleChange}
                value=""/>
                <span className='px-2 font-light'>All</span>
                <InputField handleChange={handleChange}
                    name="test"
                    value='London'
                    title='London'
                />
                <InputField
                handleChange={handleChange}
                    name="test"
                    value='seattle'
                    title='seattle'
                />
                <InputField
                handleChange={handleChange}
                    name="test"
                    value='Hyderabad'
                    title='Hyderabad'
                />
                <InputField
                handleChange={handleChange}
                    name="test"
                    value='Bengaluru'
                    title='Bengaluru'
                />
             </label>
        </div>
             
    </div>
  )
}

export default Location
