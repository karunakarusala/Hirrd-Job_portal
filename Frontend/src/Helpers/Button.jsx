import { Button } from '@/components/ui/button'
import React from 'react'

function ButtonComponent({onClickHandler,value,title}) {
  return (
    <div className='mx-2'>
         <Button variant='outline'
         className='bg-white hover:bg-slate-100 '
          onClick={onClickHandler}
         value={value}>{title}</Button>
    </div>
  )
}

export default ButtonComponent
