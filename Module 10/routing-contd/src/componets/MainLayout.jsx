import React from 'react'
import Nav from './Nav'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'

function MainLayout() {
  return (
    <>
     <Nav/>
     <Outlet/>  
     <Footer/>
    </>
  )
}

export default MainLayout
