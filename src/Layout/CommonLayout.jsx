import React from 'react'
import Navbar from '../Components/Common/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../Components/Others/Footer';

const CommonLayout = () => {
  return (
     <div className="">
      <Navbar /> {/* Renders the Navbar component */}
      <main className="m-2 ml-4 mr-4">
        <Outlet /> {/* Renders nested route components */}
      </main>
      <Footer/>
    </div>
  )
}

export default CommonLayout
