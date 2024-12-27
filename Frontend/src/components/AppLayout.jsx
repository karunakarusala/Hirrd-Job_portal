import React from 'react'
import {Outlet } from 'react-router-dom'

import NavBar from './Layouts/NavBar'
import Footer from './Layouts/Footer'
//import { Toaster } from "@/components/ui/toaster"
import { Toaster } from "@/components/ui/sonner"


function AppLayout() {
  return (
    <div>
    <Toaster />
      <NavBar/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default AppLayout
