import React from 'react'
import Navbar from '../Components/Common/Navbar';
import DashBoard from '../Components/Common/DashBoard';
import { Outlet } from 'react-router-dom';
import ProductNavbar from '../Components/Common/Product/ProductNavbar';
import Productlist from '../Components/Common/Product/Productlist';
import Footer from '../Components/Others/Footer';

const ProductLayout = () => {
  return (
     <div className="">
      <ProductNavbar />
      <Productlist/>
      <main className="">
        <Outlet /> {/* Renders nested route components */}
      </main>
      <Footer/>
    </div>
  )
}

export default ProductLayout;
