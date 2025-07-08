import React from 'react'
import { CircleUserRound ,ShoppingBag ,ShoppingCart,Bell, Search ,Menu, X,ChevronDown, LogOut, Tag,ArrowUpDown,Heart,Gift, Coins, EllipsisVertical, Headset, TrendingUp, Download} from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState ,useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import { collection,where,query,getDocs } from 'firebase/firestore';
import { db } from '../../../../firebase-config';
import SearchBar from '../../Others/SearchBar';

const ProductNavbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [searchTerm,setSearchTerm] = useState("");
const navigate = useNavigate();

  const toggleMobileDropdown = (key) => {
    setActiveDropdown((prev) => (prev === key ? null : key));
  };

  
 
  useEffect(() => {
     const token = localStorage.getItem("token");
     const token2 = localStorage.getItem("_grecaptcha")
 
     // const userRole = localStorage.getItem("role");
     setIsLoggedIn(!!token) || setIsLoggedIn(!!token2)
   }, []);
 const handleLogout = () => {
     localStorage.removeItem("token");
     localStorage.removeItem("_grecaptcha")
 
    localStorage.removeItem("role"); // Remove role if stored
    setIsLoggedIn(false);
    navigate("/auth/login"); // Redirect to login page
  };
  const MobileDropdown = (dropdown) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };


  return (
    <nav className="sticky top-0 z-50 bg-blue-700 text-base font-semibold text-white ">
      <div className="flex justify-between items-center  px-4 py-3 md:px-8 h-14">
        {/* Left section */}
        <div className="flex items-center gap-3">
          {/* Hamburger Menu */}
          <div className=" flex items-center gap-22">
          
            <button onClick={() => setMenuOpen(!menuOpen)}
              className='md:hidden p-2 rounded hover:bg-gray-100'>
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
         

          {/* Logo */}
          <Link to="/" className="flex items-center align-center gap-2 ">
            <img src="/logo/flipkart-plus_8d85f4.png" alt="Logo" className="h-4 md:h-6" />
          </Link>
          <div className='flex items-center justify-center it gap-2 md:hidden '>
          <button onClick={() => setShowSearch(true)}
            className='flex items-end  gap-2'>
              <Search size={22} />
            </button>
            {isLoggedIn ? (
 
            <button onClick={handleLogout} className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600">
              Logout
            </button>
          ) : (
            <button onClick={() => navigate('/auth/login')} className="px-3 py-1 rounded hover:bg-gray-100">
              Login
            </button>
          )}
           
        </div>
         </div>
        </div>


        {/* Search bar (hidden on small) */}
        <div className=" text-black bg-white">
          <SearchBar/>
          
          
        </div>

        {/* Right actions */}
        <div className="hidden md:flex items-center gap-4">
           {isLoggedIn ? (
            <div className="flex flex-col justify-center items-center  relative group min-w-[100px] z-50">
           <div className="relative ">

               <button className="hover:text-emerald-500 flex items-center gap-1 mr-8 ">
                My Account 
                <ChevronDown className="ml-1 h-4 w-4" />
               </button>
                
           
               {/* Dropdown */}
               <div className="absolute top-full left-1/2 -translate-x-1/2 w-48 bg-white shadow-xl/30 py-2  rounded-lg opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-200 z-50">
  <ul className="flex flex-col justify-start px-4 py-2 space-y-5 text-sm font-medium text-gray-700 ">
    <li className="hover:bg-slate-100 flex items-center gap-1 cursor-pointer" onClick={()=>{navigate("/account")}}> <CircleUserRound className="ml-1 h-4 w-4  mr-2" />My Profile</li>
    <li className="hover:bg-slate-100 flex items-center gap-1 cursor-pointer" onClick={()=>{navigate("/super-coin")}}><Coins className="ml-1 h-4 w-4 mr-2" />SuperCoin Zone</li>
    <li className="hover:bg-slate-100 flex items-center gap-1 cursor-pointer" onClick={()=>{navigate("/plus-zone")}}><CircleUserRound className="ml-1 h-4 w-4 mr-2" />FlipMart Plus Zone</li>
    <li className="hover:bg-slate-100 flex items-center gap-1 cursor-pointer" onClick={()=>{navigate("/orders")}}><ArrowUpDown className="ml-1 h-4 w-4 mr-2" />Orders</li>
    <li className="hover:bg-slate-100 flex items-center gap-1 cursor-pointer" onClick={()=>{navigate("/wishlist")}}><Heart className="ml-1 h-4 w-4 mr-2" />Wishlist</li>
    <li className="hover:bg-slate-100 flex items-center gap-1 cursor-pointer" onClick={()=>{navigate("/coupons")}}><Tag className="ml-1 h-4 w-4 mr-2" />Coupons</li>
    <li className="hover:bg-slate-100 flex items-center gap-1 cursor-pointer" onClick={()=>{navigate("/giftcard")}}><Gift className="ml-1 h-4 w-4 mr-2" />Gift Cards</li>
    <li className="hover:bg-slate-100 flex items-center gap-1 cursor-pointer" onClick={()=>{navigate("/notification")}}><Bell className="ml-1 h-4 w-4 mr-2" />Notification</li>
    <li className="hover:bg-slate-100 flex items-center gap-1 cursor-pointer" mr-2
    onClick={handleLogout}>
      <LogOut className="ml-1 w-4 h-4 mr-2" /> Logout
    </li>
  </ul>
</div>

             </div>
             </div>
          ) : (
            <button onClick={() => navigate('/auth/login')} className="px-3 py-1 rounded hover:bg-gray-100">
              Login
            </button>
          )}
          <button className="hover:text-emerald-500 flex items-center gap-1 mr-2">
            {/* <ShoppingCart size={18} /> */}
            Become A Seller
          </button>
         
          
         
          <div className="flex flex-col justify-center items-center  relative group min-w-[100px] z-50">
           <div className="relative">

               <button className="hover:text-emerald-500 flex items-center  ">
More               </button>
           
               {/* Dropdown */}
               <div className="absolute top-full -left-15 -translate-x-1/2 w-50 bg-white shadow-xl/30 rounded-lg py-2 opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-200 z-50">
  <ul className="flex flex-col justify-start px-4 py-2 space-y-5 text-sm  text-gray-700">
    <li className="hover:bg-slate-100 flex items-center gap-1 cursor-pointer"> <Bell className=" h-4 w-4 gap-2 mr-2" />Notification Prefrences</li>
    <li className="hover:bg-slate-100 flex items-center gap-1 cursor-pointer "><Headset className=" h-4 w-4  mr-2" />24*7 Customer Care</li>
    <li className="hover:bg-slate-100 flex items-center gap-1 cursor-pointer "><TrendingUp className=" h-4 w-4 mr-2" />Advertise</li>
    <li className="hover:bg-slate-100 flex items-center gap-1 cursor-pointer "><Download className="h-4 w-4 mr-2" />Download App</li>
    
  </ul>
</div>

             </div>
             </div>
          <button
            className="hover:text-emerald-500 flex items-center gap-1 mr-8"
            onClick={() => navigate('/listing')}
          >
            {/* <ShoppingBag size={18} /> */}
            Cart
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden px-4 pb-6 bg-white shadow-lg space-y-3">
          <a href="#" className="block py-2 text-sm text-gray-800 hover:text-blue-600">Home</a>
          <a href="#" className="block py-2 text-sm text-gray-800 hover:text-blue-600">About</a>

          {/* Dropdown */}
          <div>
            <button
              onClick={() => MobileDropdown('services')}
              className="block w-full text-left py-2 text-sm text-gray-800 hover:text-blue-600"
            >
              Services
            </button>
            {activeDropdown === 'services' && (
              <div className="ml-4 space-y-2 text-sm text-gray-700">
                <a href="#" className="block hover:text-blue-500">Consulting</a>
                <a href="#" className="block hover:text-blue-500">Investment</a>
                <a href="#" className="block hover:text-blue-500">Accounting</a>
              </div>
            )}
          </div>

          <a href="#" className="block py-2 text-sm text-gray-800 hover:text-blue-600">Contact</a>

          {/* Footer (Mobile) */}
          <div className="mt-4 text-xs text-gray-600">
            <p>📍 101 E 129th St, East Chicago, IN</p>
            <p>📧 example@gmail.com</p>
            <p>📞 8952456454564</p>
          </div>
        </div>
      )}
    </nav>
  )
};

export default ProductNavbar
