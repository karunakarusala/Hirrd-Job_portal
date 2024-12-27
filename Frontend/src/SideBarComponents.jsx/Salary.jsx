import { Button } from '@/components/ui/button'
import ButtonComponent from '@/Helpers/Button'
import InputField from '@/Helpers/InputField'
import React from 'react'

function Salary({handleClick,handleChange}) {
  return (
    <div>
       <h1 className='font-extraLight px-8'>Salary</h1>
       <div className='flex my-2 mx-4 gap-2'>                      
          <ButtonComponent 
          onClickHandler  = {handleClick}
          value='Hourly'
          name='test'
          title='Hourly'
          />
           <ButtonComponent 
          onClickHandler  = {handleClick}
          value='Monthly'
          name='test'
          title='Monthly'
          />
           <ButtonComponent 
          onClickHandler  = {handleClick}
          value='Yearly'
          name='test'
          title='Yearly'
          />
       </div>
       <div className=''>
      <label>
     <input type='radio' name='test' value='' 
     onChange={handleChange} 
     className='ml-10' />
        <span className='ml-3'>All</span>
        <InputField           
            handleChange = {handleChange}
            value = {60}
            name = 'test'
            title='<60 $'
        />
         <InputField           
            handleChange = {handleChange}
            value = {50}
            name = 'test'
            title='<50 $'
        />
         <InputField           
            handleChange = {handleChange}
            value = {40}
            name = 'test'
            title='<40 $'
        />
         <InputField           
            handleChange = {handleChange}
            value = {30}
            name = 'test'
            title='<30 $'
        />
      </label>
        
       </div>
    </div>
  )
}

export default Salary
