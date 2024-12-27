import  { useState } from 'react'
import { Input } from '../ui/input'
import { Label } from '../ui/label'
import { Button } from "@/components/ui/button"
import CreatableSelect from 'react-select/creatable';
import  {colourOptions}  from './data.js';
import axios from 'axios'
//import { toaster } from '../ui/toaster';
import { toast } from "sonner"
import { useToast } from "../../hooks/use-toast"
import { ToastAction } from "@/components/ui/toast"

function PostJob() {   
  //  const { toast } = useToast() 
  const[skillChange,setSkillChange] = useState([])
    const [formData,setFormData] = useState({
        jobTitle : "",
        jobLocation : "",
        companyName : "",
        postingDate : "",
        WorkMode : "",
        employmentType:"",
        skills : [],
      description: ""

})

const handleSkillChange = (setOptions) =>{
         setFormData((previousData)=>({
          ...previousData,
          skills : setOptions
         }))
}
const handleChange = (e) =>{
    const {name,value} = e.target    
    setFormData((previousData)=>({
     ...previousData,
     [name] :value
    }))
}
const handleSubmit = async(e)=>{
        e.preventDefault()
         console.log(formData)        
         const data  = await axios.post('http://localhost:3000/postData',formData)
         console.log(data)
         toast.success('Event has been created')

    }
  return (
    <div className='bg-white p-20  mx-12 '>
    <form onSubmit={handleSubmit}>
      <div className='  grid grid-cols-2   mx-10'>
        <div className='mr-16 mb-5'>
          <Label >Job Title</Label>
          <Input 
          className='my-2  bg-blue-50
          hover:bg-slate-100 hover:border- shadow-md '
          value = {formData.jobTitle}
          name = "jobTitle"
          onChange ={handleChange}
          type="text"  placeholder="Enter Job Title" />
        </div>
        <div className=' mb-5  '>
          <Label className='ml-4'>Job Location</Label>        
          <select placeholder='select job location' 
          className='w-full py-2 rounded-md mt-2 
          px-4 bg-blue-50 hover:bg-slate-100 border-2 shadow-md'
          value = {formData.jobLocation}
          name = "jobLocation"
          onChange ={handleChange}
          >      
            <option placeholder='sdf' className='font-light'>select Job Location</option>
            <option>Hyderabad</option>
            <option>Bangalore</option>
            <option>Mumbai</option>
            <option>Chennai</option>
          </select>

        </div>
        <div className='mr-16 mt-2'>
          <Label>Job Posting Date</Label>
          <Input 
          value = {formData.postingDate}
          name = "postingDate"
          onChange ={handleChange}
          className='my-2 bg-blue-50 shadow-md'
          type="Date"  placeholder="Enter Job posting Date" />
          
        </div>
        <div className='mt-2'>
         <Label>Work Mode</Label>
          <select className='w-full py-2 rounded-md
           mt-2 px-4 hover:bg-slate-100 border-1 bg-blue-50 shadow-md'
          value = {formData.WorkMode}
          name = "WorkMode"
          onChange ={handleChange}
          >      
            <option className='font-light'>Select Work Mode</option>
            <option>WorkFromOffice</option>
            <option>Remote</option>
            <option>Hybrid</option>
          </select>
        </div>
        <br/>
        <div className='col-span-2 '>
          <Label>Enter Required Skill Set</Label>         
         <CreatableSelect 
         className='bg-blue-200 shadow-md'
         placeholder="select skills" isMulti options={colourOptions} 
          value={formData.skills}
          onChange={handleSkillChange}                 
         />         
        </div>               
        <div className='mr-16 mt-5'>
         <Label>Experience Level</Label>
          <Input 
          value = {formData.ExperienceLevel}
          name = "ExperienceLevel"
          onChange ={handleChange}
          className='my-2 bg-blue-50 shadow-md'
          type="text"  placeholder="Enter Experience Level" />
        </div>                
        <div className='mt-5'>
          <Label>Company Logo</Label>
          <Input 
          className='my-2 bg-blue-50 shadow-md'
          type="text"  placeholder="Enter Job Location" />
        </div>                 
    </div>
    <div className='my-4 mx-10 '>
    <Label >Job Description</Label>
          <textarea
          rows={10}
          placeholder=' Enter Job Description...... '
          className='border-2 rounded-md w-full bg-blue-50 shadow-md h-20 my-2 pl-2 pt-2'
          value={formData.description}
          onChange={handleChange}
          name='description'
          ></textarea>
    </div>
    <div className='my-4 mx-10 '>
       <Label> Job Posted By</Label>
       <Input className='my-2'  placeholder='Provide Email to contact'/>
    </div>
    <Button type='submit'>  submit</Button>
    </form>     
    </div>
  )
}

export default PostJob