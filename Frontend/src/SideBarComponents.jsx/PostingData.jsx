import InputField from '@/Helpers/InputField'
import React from 'react'

function PostingData({handleChange}) {
    let now = new Date()
    console.log(now)
    console.log(now.toISOString())
    const twentyFourHoursAgo = new Date(now-24*60*60*1000)
    const sevenDaysAgo = new Date(now-7*24*60*60*1000)
    const thirtyDaysAgo = new Date(now-30*24*60*60*1000)   
    
    const twentyFourHoursAgoData = twentyFourHoursAgo.toISOString().slice(0,10)
    const sevenDaysAgoData = sevenDaysAgo.toISOString().slice(0,10)
    const thirtyDaysAgoData = thirtyDaysAgo.toISOString().slice(0,10)

    let x ='2024-12-12'
    console.log(x <= twentyFourHoursAgoData)
    
  return (
    <div>
       <div className='py-4'>
              <h1 className='font-extraLight px-8 py-3'>PostingDate</h1>
              <label className='px-10'>
                <input type='radio' 
                name='test' 
                onChange={handleChange}
                value=""/>
                <span className='px-2 font-light'>All Time</span>
                <InputField handleChange={handleChange}
                    name="test"
                    value={twentyFourHoursAgoData&&sevenDaysAgoData}
                    title='Most recent'
                />
                <InputField
                handleChange={handleChange}
                    name="test"
                    value={twentyFourHoursAgoData}
                    title='24 hours ago'
                />
                <InputField
                handleChange={sevenDaysAgoData}
                    name="test"
                    value='Hyderabad'
                    title='Last 7 days '
                />
                <InputField
                handleChange={handleChange}
                    name="test"
                    value={thirtyDaysAgoData}
                    title='Last  month '
                />
             </label>
        </div>
    </div>
  )
}

export default PostingData
