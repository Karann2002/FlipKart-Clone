import React from 'react'
import { Outlet } from 'react-router-dom';
import AccSideBar from '../Components/Common/Account/AccSideBar';
import Navbar from '../Components/Common/Navbar';
import Productlist from '../Components/Common/Product/Productlist';

const AccountLayout = () => {
  return (
    <div>
        <Navbar/>
        <Productlist/>
     <div className="flex flex-1 ml-35 mt-4">
      <AccSideBar/>
      <main className="w-full ml-5 mr-5">
        <Outlet /> 
      </main>
    </div>
    </div>
  )
}

export default AccountLayout;
