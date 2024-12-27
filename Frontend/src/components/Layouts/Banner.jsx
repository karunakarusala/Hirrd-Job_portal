import React, { useState } from 'react';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { CiSearch } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";
import axios from 'axios';
import Card from './Card';
import Jobs from '@/pages/Jobs';

function Banner({ query, handleInputChange }) {
  const [roleData, setRoleData] = useState('');
  const [locationData, setLocationData] = useState('');
  const[data,setData]=useState([])

  // Handle role data input change
  const handleRoleChange = (e) => {
    setRoleData(e.target.value);
  };

  // Handle location data input change
  const handleLocationChange = (e) => {
    setLocationData(e.target.value);
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent form from reloading the page
    // Make GET request with the input values
    axios.get(`http://localhost:3000/search?jobTitle=${roleData}&location=${locationData}`)
      .then((response) => {
        console.log(response.data);
        setData(response.data) // Log the response from the server
      })
      .catch((error) => {
        console.error(error); // Log any errors
      });
       return   data.map((data,index)=>(
        <Card key={index} data={data}/> ))
  };
 

  return (
    <div className="">
      <div className="mx-28 my-8 gap-2">
        <span className="font-bold text-4xl">
          Find your <span className="text-blue-500">new job</span> today
        </span>
        <h1 className="my-2 mx-2 font-light text-lg">
          Thousands of jobs in the market are waiting for you today in different sectors like Information Technology, Telecom, Marketing, and more.
        </h1>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="flex mx-28 my-16 gap-4">
          <CiSearch className="absolute text-2xl ml-2 mt-2" />
          <Input
            placeholder="What position are you looking for?"
            className="bg-gray-100 border-solid rounded-lg shadow-lg placeholder:font-medium px-16"
            onChange={handleRoleChange}
            value={roleData}
          />

          <CiLocationOn className="absolute text-3xl ml-[610px] pt-2" />
          <Input
            placeholder="Enter location"
            className="bg-gray-100 shadow-lg pl-24 placeholder:px- text-black"
            onChange={handleLocationChange}
            value={locationData}
            name="jobLocation"
          />


          <Button className="px-10 bg-blue-500 hover:bg-blue-300" type="submit">
            Search
          </Button>
        </div>
       
      </form>
    </div>
  );
}

export default Banner;
