import React from "react";
//import { Button } from "./components/ui/button";
import { createBrowserRouter,RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import AppLayout from "./components/AppLayout";
import About from "./pages/About";
import PostJob from "./components/NavBarComponents/PostJob";
import SalaryEStimate from "./components/NavBarComponents/SalaryEStimate";
import MyJobs from "./components/NavBarComponents/MyJobs";
//import NabBar from "./components/Layouts/NavBar";
import { Toaster } from "@/components/ui/sonner"

function App (){
const router = createBrowserRouter ([
  {
    element : <AppLayout/>,
    children :[
      
      {path : '/',element:  <Home/>},
      {path :'/about',element:<About/>},
      {path:'/postJob',element:<PostJob/>},
      {path:'/salary',element:<SalaryEStimate/>},
      {path:'/myJobs',element:<MyJobs/>}
      
]
}

])
    return(   
      

      <RouterProvider router={router} />
    )
} 
export default App