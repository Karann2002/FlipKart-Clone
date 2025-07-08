import React from 'react'
import { CircleUserRound ,ShoppingBag ,ShoppingCart,Bell, Search ,Menu, X,ChevronDown, LogOut, Tag,ArrowUpDown,Heart,Gift, Coins, EllipsisVertical, Headset, TrendingUp, Download} from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState ,useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import SearchBar from '../Others/SearchBar';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
const navigate = useNavigate();

  // const toggleMobileDropdown = (key) => {
  //   setActiveDropdown((prev) => (prev === key ? null : key));
  // };

  
 
  useEffect(() => {
    const token = localStorage.getItem("token");
    const token2 = localStorage.getItem("_grecaptcha")

    // const userRole = localStorage.getItem("role");
    setIsLoggedIn(!!token || !!token2) 
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
    <nav className="sticky top-0 z-50 bg-white ">
      <div className="flex justify-between items-center  px-4 py-3 md:px-8 h-17">
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
            <img src="/fkheaderlogo_exploreplus-44005d.svg" alt="Logo" className="h-6 md:h-8" />
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
        <div className="">
          <SearchBar/>
          
          
        </div>

        {/* Right actions */}
        <div className="hidden md:flex items-center gap-4">
           {isLoggedIn ? (
            <div className="flex flex-col justify-center items-center  relative group min-w-[100px] z-50">
           <div className="relative ">

               <button className="hover:text-emerald-500 flex items-center gap-1 mr-8 "
               >
                <CircleUserRound  size={18} className=""/>Account 
                <ChevronDown className="ml-1 h-4 w-4" />
               </button>
           
               {/* Dropdown */}
               <div className="absolute top-full left-1/2 -translate-x-1/2 w-48 bg-white shadow-xl/30 py-2  rounded-lg opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-200 z-50">
  <ul className="flex flex-col justify-start px-4 py-2 space-y-5 text-sm font-medium text-gray-700 ">
    <li className="hover:bg-slate-100 flex items-center gap-1 cursor-pointer" onClick={()=>{navigate("/account")}}> <CircleUserRound className="ml-1 h-4 w-4  mr-2" />My Profile</li>
    <li className="hover:bg-slate-100 flex items-center gap-1 cursor-pointer"onClick={()=>{navigate("/super-coin")}}><Coins className="ml-1 h-4 w-4 mr-2" />SuperCoin Zone</li>
    <li className="hover:bg-slate-100 flex items-center gap-1 cursor-pointer"onClick={()=>{navigate("/plus-zone")}}><CircleUserRound className="ml-1 h-4 w-4 mr-2" />FlipMart Plus Zone</li>
    <li className="hover:bg-slate-100 flex items-center gap-1 cursor-pointer"onClick={()=>{navigate("/orders")}}><ArrowUpDown className="ml-1 h-4 w-4 mr-2" />Orders</li>
    <li className="hover:bg-slate-100 flex items-center gap-1 cursor-pointer"onClick={()=>{navigate("/wishlist")}}><Heart className="ml-1 h-4 w-4 mr-2" />Wishlist</li>
    <li className="hover:bg-slate-100 flex items-center gap-1 cursor-pointer"><Tag className="ml-1 h-4 w-4 mr-2" />Coupons</li>
    <li className="hover:bg-slate-100 flex items-center gap-1 cursor-pointer"><Gift className="ml-1 h-4 w-4 mr-2" />Gift Cards</li>
    <li className="hover:bg-slate-100 flex items-center gap-1 cursor-pointer"><Bell className="ml-1 h-4 w-4 mr-2" />Notification</li>
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
          <button
            className="hover:text-emerald-500 flex items-center gap-1 mr-8"
            onClick={() => navigate('/listing')}
          >
            <ShoppingBag size={18} />
            Cart
          </button>
          
          <button className="hover:text-emerald-500 flex items-center gap-1 mr-2">
            <ShoppingCart size={18} />
            Become A Seller
          </button>
          <div className="flex flex-col justify-center items-center  relative group min-w-[100px] z-50">
           <div className="relative">

               <button className="hover:text-emerald-500 flex items-center  ">
                <EllipsisVertical className="ml-1 h-4 w-4" />
               </button>
           
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
         {/* Mobile Sidebar Overlay */}
<div
  className={` top-0 left-0 h-full w-[60%] bg-white z-50 shadow-lg transform transition-transform duration-300 ease-in-out ${
    menuOpen ? 'translate-x-0' : '-translate-x-full'
  } md:hidden`}
>
  <div className="flex items-center justify-between p-4 border-b border-gray-200">
    <img src="/fkheaderlogo_exploreplus-44005d.svg" alt="Logo" className="h-6" />
    <button onClick={() => setMenuOpen(false)}>
      <X className="w-6 h-6" />
    </button>
  </div>

  <div className="p-4 space-y-4 overflow-y-auto h-[calc(100vh-64px)]">
    <SearchBar />

    <hr className="my-2" />

    {isLoggedIn && (
      <>
        <button onClick={() => navigate("/account")} className="block w-full text-left">👤 My Profile</button>
        <button onClick={() => navigate("/orders")} className="block w-full text-left">📦 Orders</button>
        <button onClick={() => navigate("/wishlist")} className="block w-full text-left">❤️ Wishlist</button>
        <button onClick={() => navigate("/super-coin")} className="block w-full text-left">🪙 SuperCoin Zone</button>
        <button onClick={() => navigate("/plus-zone")} className="block w-full text-left">💎 FlipMart Plus</button>
        <button onClick={() => navigate("/listing")} className="block w-full text-left">🛍️ Cart</button>
        <button className="block w-full text-left">🎟️ Coupons</button>
        <button className="block w-full text-left">🎁 Gift Cards</button>
        <button className="block w-full text-left">🔔 Notifications</button>
        <button className="block w-full text-left">⬇️ Download App</button>
        <button onClick={handleLogout} className="block w-full text-left text-red-600 font-semibold">🚪 Logout</button>
      </>
    )}

    {!isLoggedIn && (
      <button
        onClick={() => navigate('/auth/login')}
        className="block w-full text-left text-blue-600 font-semibold"
      >
        🔐 Login
      </button>
    )}
  </div>

  {/* Optional: Dimmed background behind sidebar */}
  {/* <div
    className="fixed inset-0 bg-black bg-opacity-30 z-40"
    onClick={() => setMenuOpen(false)}
  /> */}
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

export default Navbar
