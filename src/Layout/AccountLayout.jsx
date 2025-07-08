import React from 'react'
import { Outlet } from 'react-router-dom';
import AccSideBar from '../Components/Common/Account/AccSideBar';
import ProductNavbar from '../Components/Common/Product/ProductNavbar';
import Productlist from '../Components/Common/Product/Productlist';

const AccountLayout = () => {
  return (
    <div>
        <ProductNavbar/>
        <Productlist/>
     <div className="flex flex-1 ml-35 mt-4">
      <AccSideBar/>
      <main className="">
        <Outlet /> 
      </main>
    </div>
    </div>
  )
}

export default AccountLayout;
