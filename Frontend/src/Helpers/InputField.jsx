import React from 'react'

function InputField({handleChange,name,title,value}) {
  return (
    <div>
         <div>
            <label className='px-10'>
                <input 
                className='py-2'
                type='radio' 
                name={name} 
                onChange={handleChange}
                value={value}        
                 />
                <span className='px-2  font-light'>{title}</span>
             </label>
         </div>
    </div>
  )
}

export default InputField
