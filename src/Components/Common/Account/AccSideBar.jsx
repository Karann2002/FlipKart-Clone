import React from "react";
import { useNavigate } from "react-router-dom";
import { LogOut,HandCoins,Shuffle,ArrowLeftRight, UserRound} from 'lucide-react';
// import { auth } from "../../../../firebase-config";

const AccSideBar = () => {
  const navigate = useNavigate();
  // const user = auth.currentUser;

 const handleLogout = () => {
    localStorage.clear();
    navigate("/auth/login");
  };
  
  return (
    <div>
      <div>
        <aside className="w-80  mb-5 ">
          <div className="p-3  mb-4 bg-white shadow-sm">
            <div className="flex items-center space-x-4 ">
              <div className="w-12 h-12 bg-yellow-200 rounded-full flex items-center justify-center text-2xl">
                👤
              </div>
              <span className="font-semibold text-lg">Hello </span>
            </div>
          </div>
          <nav className=" bg-white shadow-sm cursor-pointer">
            <ul className="flex gap-2 items-center h-15 p-4 m-0 text-left w-full border-b border-slate-300 text-lg font-semibold text-slate-500 hover:text-blue-600 "  onClick={() => {
                navigate("/account/orders");
              }}>
              <ArrowLeftRight />MY ORDERS
            </ul>
            <ul className="flex gap-2 items-center h-15 p-4 m-0 text-left w-full  text-lg  font-semibold text-slate-500 hover:text-blue-600">
             <UserRound /> ACCOUNT SETTINGS
            </ul>
            <li
              className="h-10 p-3 ml-10  list-none text-left w-full  text-black  font-normal text-sm hover:text-blue-600"
              onClick={() => {
                navigate("/account/personalInfo");
              }}
            >
              Personal Information
            </li>
            <li className="h-10 p-3 ml-10 list-none text-left w-full  text-black  font-normal text-sm hover:text-blue-600 "  onClick={() => {
                navigate("/account/manageaddress");
              }}>
              Manage Addresses
            </li>
            <li className="h-10 p-3 ml-10 list-none text-left w-full  text-black  font-normal text-sm hover:text-blue-600 "  onClick={() => {
                navigate("/account/pan_info");
              }}>
              PAN Card Information
            </li>

            <ul className="flex gap-2 items-center h-15 p-4 m-0 text-left w-full border-t border-slate-300 text-lg font-semibold text-slate-500 hover:text-blue-600">
             <HandCoins /> PAYMENTS
            </ul>
            <li className="h-10 p-3 ml-10 list-none text-left w-full  text-black  font-normal text-sm hover:text-blue-600 "  onClick={() => {
                navigate("/account/giftcards");
              }}>
              Gift Cards
            </li>
            <li className="h-10 p-3 ml-10 list-none text-left w-full  text-black  font-normal text-sm hover:text-blue-600 "  onClick={() => {
                navigate("/account/upis");
              }}>
              Saved UPI
            </li>
            <li className="h-10 p-3 ml-10 list-none text-left w-full  text-black  font-normal text-sm hover:text-blue-600 "  onClick={() => {
                navigate("/account/cards");
              }}>
              Saved Cards
            </li>

            <ul className="flex gap-2 items-center h-15 p-4 m-0 text-left w-full border-b border-slate-300 text-lg font-semibold text-slate-500 hover:text-blue-600">
             <Shuffle /> MY STUFF
            </ul>
            <li className="h-10 p-3 ml-10 list-none text-left w-full  text-black  font-normal text-sm hover:text-blue-600 "  onClick={() => {
                navigate("/account/coupons");
              }}>
              My Coupons
            </li>
            <li className="h-10 p-3 ml-10 list-none text-left w-full  text-black  font-normal text-sm hover:text-blue-600 "  onClick={() => {
                navigate("/account/review&rating");
              }}>
              My Reviews & Rating
            </li>
            <li className="h-10 p-3 ml-10 list-none text-left w-full  text-black  font-normal text-sm hover:text-blue-600 "  onClick={() => {
                navigate("/account/notification");
              }}>
              All Notifications
            </li>
            <li
              className="h-10 p-3 ml-10 list-none text-left w-full  text-black  font-normal text-sm hover:text-blue-600"
              onClick={() => {
                navigate("/account/wishlist");
              }}
            >
              My Wishlist
            </li>

            <ul className="flex gap-2 items-center  h-15 p-4 m-0 text-left w-full border-t border-slate-300 text-lg font-semibold text-slate-500 hover:text-blue-600 "  onClick={handleLogout}>
             <LogOut /> Logout
            </ul>
          </nav>
        </aside>
      </div>
    </div>
  );
};

export default AccSideBar;
