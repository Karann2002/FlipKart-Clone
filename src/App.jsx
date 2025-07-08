import React from "react";
import "./App.css";
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import Dashboard from "./Components/Common/DashBoard";
import Footer from "./Components/Others/Footer";
import AuthLayout from "./Layout/AuthLayout";
import Features from "./Components/Admin/Pages/Features";
import Orders from "./Components/Admin/Pages/Orders";
import AdminProducts from "./Components/Admin/Pages/AdminProducts";
import AdminLayout from "./Layout/AdminLayout";
import Checkout from "./Components/Common/Checkout";
import Listing from "./Components/Common/Listing";
import ClientAcc from "./Components/Common/Account/ClientAcc";
import AdminDashBoard from "./Components/Admin/Pages/AdminDashBoard";
import UnAuthPage from "./Components/Others/UnAuthPage";
import PageNotFound from "./Components/Others/PageNotFound";
import CommonLayout from "./Layout/CommonLayout";
import ProtectedRoute from "./routes/ProtectedRoutes";
import AdminProductForm from "./Components/Admin/AdminComponents/Products/AdminProductForm";
import Products from "./Components/Common/Product/Products";
import CSVUploader from "./Components/Admin/AdminComponents/Products/CSVUploader";
import ProductDetail from "./Components/Common/Product/ProductDetail";
import SearchResults from "./Components/Common/SearchResults";
import ProductLayout from "./Layout/ProductLayout";
import AccountSettings from "./Components/Common/Account/ClientAcc";
import AccountLayout from "./Layout/AccountLayout";
import AuthPage from "./Components/Auth/AuthPage";
import { ToastContainer } from 'react-toastify';
import Users from "./Components/Admin/Pages/Users";


function App() {
  return (
    <> <ToastContainer position="bottom-right" autoClose={3000} />
    <BrowserRouter>
    
      <Routes>  
        <Route path="/" element={<CommonLayout />}>
          <Route index element={<Navigate to="/dashboard" replace />} />
          <Route path="dashboard" element={<Dashboard />} />
          
          <Route element={<ProtectedRoute allowedRoles={"client"} />}>
            <Route path="listing" element={<Listing />} />
          </Route>
          
          <Route path="checkout" element={<Checkout />} />
          <Route path="account" element={<AccountLayout />} />
        </Route>
        <Route path="/account" element={<AccountLayout/>}>
        <Route index element={<Navigate to="/account/personalInfo" replace />} />
          <Route path="personalInfo" element={<ClientAcc />} />
          

</Route>

        <Route path="/products" element={<ProductLayout/>}>
          <Route index element={<Products replace />}/>
          {/* <Route path="products" element={< />} /> */}
          <Route path="search" element={<SearchResults />} />

          <Route path=":id" element={<ProductDetail />} />


          </Route>

        <Route path="/auth" element={<AuthLayout />}>
          {/* <Route path="login" element={<Login />} /> */}
          <Route path="login" element={<AuthPage />} />

        </Route>
        <Route element={<ProtectedRoute allowedRoles={"admin"} />}>
          <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<Navigate to="/admin/dashboard" replace />} />


            <Route path="dashboard" element={<AdminDashBoard />} />
            <Route path="features" element={<Features />} />
            <Route path="orders" element={<Orders />} />
            <Route path="products" element={<AdminProducts />} />
            <Route path="addproduct" element={<AdminProductForm />} />
            <Route path="uploadCSV" element={<CSVUploader />} />
            <Route path="users" element={<Users />} />



          </Route>
        </Route>

        <Route path="/unauthorized" element={<UnAuthPage />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      {/* <Footer /> */}
    </BrowserRouter>
    </>
  );
}

export default App;
