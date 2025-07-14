import React, { useState, useEffect } from "react";
import {
  CircleUserRound,
  ShoppingBag,
  ShoppingCart,
  Bell,
  Search,
  Menu,
  X,
  ChevronDown,
  LogOut,
  Tag,
  ArrowUpDown,
  Heart,
  Gift,
  Coins,
  EllipsisVertical,
  Headset,
  TrendingUp,
  Download,
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import SearchBar from "../Others/SearchBar";
import { useAuth } from "../Auth/useAuth";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../../../firebase-config";

const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [accountOpen, setAccountOpen] = useState(false);
    const [categoryOpen, setCategoryOpen] = useState(false);
const [notification, setNotification] = useState([]);
const [wishlistCount, setWishlistCount] = useState([]);

const { user } = useAuth();
  
  const [othersOpen, setOthersOpen] = useState(false);
  const isProductsPage = window.location.pathname === "/products";

  const navigate = useNavigate();
  
  useEffect(() => {
      if (!user) return;
  
      const cartRef = collection(db, "users", user.uid, "cart");
      const unsubscribe = onSnapshot(cartRef, (snapshot) => {
        const items = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setNotification(items);
      });
  
      return () => unsubscribe();
    }, [user]);
 useEffect(() => {
      if (!user) return;
  
      const cartRef = collection(db, "users", user.uid, "wishlist");
      const unsubscribe = onSnapshot(cartRef, (snapshot) => {
        const items = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setWishlistCount(items);
      });
  
      return () => unsubscribe();
    }, [user]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
  }, []);

  const handleLogout = () => {
    localStorage.clear();
    setIsLoggedIn(false);
    navigate("/auth/login");
    setSidebarOpen(false);
  };

  return (
    <nav className={`sticky top-0 z-50  shadow-md ${
          !isProductsPage ? "bg-white  " : " bg-blue-700   "
        }`}>
      <div className="flex justify-between items-center px-4 py-3 md:px-8 h-16">
        {/* Logo */}
        <button
          className="md:hidden p-2 focus:outline-none"
          onClick={() => setSidebarOpen(true)}
          aria-label="Open Menu"
        >
          <Menu size={25} />
        </button>
        
        {
          !isProductsPage?
          <Link to="/" className="flex items-center ">
             <img
            src="/fkheaderlogo_exploreplus-44005d.svg"
            alt="Logo"
            className="h-6 md:h-8"
          />
        </Link>:
        <Link to="/" className="flex items-center align-center gap-2 ">
                  <img
                    src="/logo/flipkart-plus_8d85f4.png"
                    alt="Logo"
                    className="h-4 md:h-6"
                  />
                </Link>
        }
         

        {/* Desktop Search Bar */}
        <div className="flex">
        <div >
          <SearchBar />
        </div>
        <div className="md:hidden">
          <button
  onClick={() => navigate("/cart")}
  className="relative flex items-center gap-1  hover:text-emerald-500"
>
  <div className="relative mr-2">
    <ShoppingBag size={18} />
    {notification.length > 0 && (
      <span
        className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold px-1.5 py-0.5 rounded-full"
      >
        {notification.length}
      </span>
    )}
  </div>

</button>
</div>
        </div>

        {/* Desktop Right Actions */}
        <div className={`hidden md:flex items-center gap-6 ${
          !isProductsPage ? "text-black  " : "  text-white "
        }`}>
          {isLoggedIn ? (
            <div className="relative group">
              <button className="flex items-center gap-1  hover:text-emerald-500">
                <CircleUserRound size={18} />
                Account
                <span className="ml-1">
                  <X className="hidden" /> {/* Placeholder for ChevronDown if needed */}
                </span>
              </button>
              {/* Dropdown */}
              <div className="absolute top-full left-1/2 -translate-x-1/2 w-48 bg-white shadow-lg py-2 rounded-lg opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-opacity duration-200 z-50">
                <ul className="flex flex-col justify-start px-4 py-2 space-y-2 text-sm font-medium text-gray-700 ">
                    <li
                      className="hover:bg-slate-100 p-1 flex items-center gap-1 cursor-pointer"
                      onClick={() => {
                        navigate("/account");
                      }}
                    >
                      {" "}
                      <CircleUserRound className="ml-1 h-4 w-4  mr-2" />
                      My Profile
                    </li>
                    <li
                      className="hover:bg-slate-100 p-1 flex items-center gap-1 cursor-pointer"
                      onClick={() => {
                        navigate("/super-coin");
                      }}
                    >
                      <Coins className="ml-1 h-4 w-4 mr-2" />
                      SuperCoin Zone
                    </li>
                    <li
                      className="hover:bg-slate-100 p-1 flex items-center gap-1 cursor-pointer"
                      onClick={() => {
                        navigate("/plus-zone");
                      }}
                    >
                      <CircleUserRound className="ml-1 h-4 w-4 mr-2" />
                      FlipMart Plus Zone
                    </li>
                    <li
                      className="hover:bg-slate-100 p-1 flex items-center gap-1 cursor-pointer"
                      onClick={() => {
                        navigate("/orders");
                      }}
                    >
                      <ArrowUpDown className="ml-1 h-4 w-4 mr-2" />
                      Orders
                    </li>
                    <li
                      className="hover:bg-slate-100 p-1 flex items-center gap-1 cursor-pointer"
                      onClick={() => {
                        navigate("/account/wishlist");
                      }}
                    >
                      <Heart className="ml-1 h-4 w-4 mr-2" />
                      Wishlist
                       <div className="relative mr-2">
    
    {wishlistCount.length > 0 && (
      <span
        className="absolute -top-2 left-15 bg-red-600 text-white text-xs font-bold px-1.5 py-0.5 rounded-full"
      >
        {wishlistCount.length}
      </span>
    )}
  </div>
                    </li>
                    <li className="hover:bg-slate-100 p-1 flex items-center gap-1 cursor-pointer"
                    onClick={() => {
                      navigate("/account/coupons")}}>
                      <Tag className="ml-1 h-4 w-4 mr-2" />
                      Coupons
                    </li>
                    <li className="hover:bg-slate-100 p-1 flex items-center gap-1 cursor-pointer"
                                           onClick={() => {
                      navigate("/account/giftcards")}}>
                      <Gift className="ml-1 h-4 w-4 mr-2" />
                      Gift Cards
                    </li>
                    <li className="hover:bg-slate-100 p-1 flex items-center gap-1 cursor-pointer"
                                         onClick={() => {
                      navigate("/account/notification")}}>
                      <Bell className="ml-1 h-4 w-4 mr-2" />
                      Notification
                    </li>
                    <li
                      className="hover:bg-slate-100 p-1 flex items-center gap-1 cursor-pointer"
                      mr-2
                      onClick={handleLogout}
                    >
                      <LogOut className="ml-1 w-4 h-4 mr-2" /> Logout
                    </li>
                  </ul>
              </div>
            </div>
          ) : (
            <button
              onClick={() => navigate("/auth/login")}
              className=" hover:text-emerald-500"
            >
              Login
            </button>
          )}

         <button
  onClick={() => navigate("/cart")}
  className="relative flex items-center gap-1  hover:text-emerald-500"
>
  <div className="relative mr-2">
    <ShoppingBag size={18} />
    {notification.length > 0 && (
      <span
        className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold px-1.5 py-0.5 rounded-full"
      >
        {notification.length}
      </span>
    )}
  </div>
  Cart
</button>



          <button
            onClick={() => navigate("/becomeSeller")}
            className="flex items-center gap-1  hover:text-emerald-500"
          >
            <ShoppingCart size={18} />
            Become A Seller
          </button>
<div className="flex flex-col justify-center items-center  relative group min-w-[100px] z-50">
            <div className="relative">
              <button className=" hover:text-emerald-500 flex items-center  ">
                {isProductsPage? "More" :<EllipsisVertical className="ml-1 h-4 w-4" />}
              
              </button>

              {/* Dropdown */}
              <div className="absolute top-full -left-15 -translate-x-1/2 w-50 bg-white shadow-xl/30 rounded-lg py-2 opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-200 z-50">
                <ul className="flex flex-col justify-start px-4 py-2 space-y-5 text-sm  text-gray-700">
                  <li className="hover:border-b border-slate-200 flex items-center gap-1 cursor-pointer"
                  onClick={() => {
                      navigate("/account/notification")}}>
                    {" "}
                    <Bell className=" h-4 w-4 gap-2 mr-2" />
                    Notification Prefrences
                  </li>
                  <li className="hover:border-b border-slate-200 flex items-center gap-1 cursor-pointer "
                  onClick={() => {
                      navigate("/account/notification")}}>
                    <Headset className=" h-4 w-4  mr-2" />
                    24*7 Customer Care
                  </li>
                  <li className="hover:border-b border-slate-200 flex items-center gap-1 cursor-pointer "
                  onClick={() => {
                      navigate("/account/notification")}}>
                    <TrendingUp className=" h-4 w-4 mr-2" />
                    Advertise
                  </li>
                  <li className="hover:border-b border-slate-200 flex items-center gap-1 cursor-pointer ">
                    <Download className="h-4 w-4 mr-2" />
                    Download App
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
        </div>

        {/* Mobile Hamburger Menu Button */}
        
      </div>

      {/* Sidebar Backdrop */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-0 transition-opacity duration-300 z-40 ${
          sidebarOpen ? "opacity-50 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setSidebarOpen(false)}
      ></div>

      {/* Sidebar Panel */}
      <div
  className={`fixed top-0 left-0 h-screen w-64 bg-white  shadow-lg z-50 transform transition-transform duration-300 ${
    sidebarOpen ? "translate-x-0" : "-translate-x-full"
  }`}
>
  {/* Sticky header (Logo + Close button) */}
  <div className="flex justify-between items-center p-4 border-b sticky top-0 bg-white z-10">
    <Link to="/" className="flex items-center">
      <img
        src="/fkheaderlogo_exploreplus-44005d.svg"
        alt="Logo"
        className="h-6 md:h-8"
      />
    </Link>
    <button
      className="p-2 focus:outline-none"
      onClick={() => setSidebarOpen(false)}
      aria-label="Close Menu"
    >
      <X size={25} />
    </button>
  </div>
<div className="overflow-y-auto h-[calc(100vh-64px)] px-4 pb-6 ">
    <nav className="flex flex-col mt-4 space-y-3">

          {isLoggedIn ? (
            <>
              
             <div className="w-full">
                  <button
                    onClick={() => setCategoryOpen(!categoryOpen)}
                    className="text-left w-full py-2 px-3 hover:bg-red-100 flex items-center justify-between gap-2 border-b-2 border-slate-200"
                  >
                    <div className="flex items-center gap-2">
                      <CircleUserRound size={20} />
                      Categories
                    </div>
                    <ChevronDown
                      className={`transition-transform duration-200 ${
                        categoryOpen ? "rotate-180" : "rotate-0"
                      }`}
                      size={18}
                    />
                  </button>

                  {categoryOpen && (
                    <ul className="flex flex-col justify-start px-4 py-2 space-y-4 text-sm font-medium text-gray-700  border-gray-200 ml-2">
                      <li
                        className="hover:bg-slate-100 px-2 py-1 rounded flex items-center gap-2 cursor-pointer"
                        onClick={() => {
                          
                          setSidebarOpen(false);
                        }}
                      >
                        <CircleUserRound size={16} />
                        Kilos
                      </li>
                      <li
                        className="hover:bg-slate-100 px-2 py-1 rounded flex items-center gap-2 cursor-pointer"
                        onClick={() => {
                          navigate("/super-coin");
                          setSidebarOpen(false);
                        }}
                      >
                        <Coins size={16} />
                        Mobiles
                      </li>
                      <li
                        className="hover:bg-slate-100 px-2 py-1 rounded flex items-center gap-2 cursor-pointer"
                        onClick={() => {
                          navigate("/plus-zone");
                          setSidebarOpen(false);
                        }}
                      >
                        <CircleUserRound size={16} />
                        Appliances
                      </li>
                      <li
                        className="hover:bg-slate-100 px-2 py-1 rounded flex items-center gap-2 cursor-pointer"
                        onClick={() => {
                          navigate("/orders");
                          setSidebarOpen(false);
                        }}
                      >
                        <ArrowUpDown size={16} />
                        flight Bookings
                      </li>
                      <li
                        className="hover:bg-slate-100 px-2 py-1 rounded flex items-center gap-2 cursor-pointer"
                        onClick={() => {
                          navigate("/wishlist");
                          setSidebarOpen(false);
                        }}
                      >
                        <Heart size={16} />
                        Electronics
                      </li>
                      <li className="hover:bg-slate-100 px-2 py-1 rounded flex items-center gap-2 cursor-pointer">
                        <Tag size={16} />
                        Fashion
                      </li>
                      <li className="hover:bg-slate-100 px-2 py-1 rounded flex items-center gap-2 cursor-pointer">
                        <Gift size={16} />
                        Home & Furniture
                      </li>
                      <li className="hover:bg-slate-100 px-2 py-1 rounded flex items-center gap-2 cursor-pointer">
                        <Bell size={16} />
                        Beauty,Toys & more
                      </li>
                      <li
                        className="hover:bg-slate-100 px-2 py-1 rounded flex items-center gap-2 cursor-pointer "
                       
                      >
                        <LogOut size={16} />
                        Two Wheelers
                      </li>
                    </ul>
                  )}
                </div>
            <button
                onClick={() => {
                  navigate("/listing");
                  setSidebarOpen(false);
                }}
                className="text-left py-2 px-3  hover:bg-gray-100 flex items-center gap-2  border-b-2 border-slate-200"
              >
                <ShoppingBag size={20} />
                Cart
              </button>

              <button
                onClick={() => {
                  navigate("/seller");
                  setSidebarOpen(false);
                }}
                className="text-left py-2 px-3  hover:bg-gray-100 flex items-center gap-2 border-b-2 border-slate-200"
              >
                <ShoppingCart size={20} />
                Become A Seller
              </button>

               <div className="w-full">
                                 <button
                                   onClick={() => setAccountOpen(!accountOpen)}
                                   className="text-left w-full py-2 px-3 hover:bg-red-100 flex items-center justify-between gap-2 border-b-2 border-slate-200"
                                 >
                                   <div className="flex items-center gap-2">
                                     <CircleUserRound size={20} />
                                     Account
                                   </div>
                                   <ChevronDown
                                     className={`transition-transform duration-200 ${
                                       accountOpen ? "rotate-180" : "rotate-0"
                                     }`}
                                     size={18}
                                   />
                                 </button>
               
                                 {accountOpen && (
                                   <ul className="flex flex-col justify-start px-4 py-2 space-y-4 text-sm font-medium text-gray-700  border-gray-200 ml-2">
                                     <li
                                       className="hover:bg-slate-100 px-2 py-1 rounded flex items-center gap-2 cursor-pointer"
                                       onClick={() => {
                                         navigate("/account");
                                         setSidebarOpen(false);
                                       }}
                                     >
                                       <CircleUserRound size={16} />
                                       My Profile
                                     </li>
                                     <li
                                       className="hover:bg-slate-100 px-2 py-1 rounded flex items-center gap-2 cursor-pointer"
                                       onClick={() => {
                                         navigate("/super-coin");
                                         setSidebarOpen(false);
                                       }}
                                     >
                                       <Coins size={16} />
                                       SuperCoin Zone
                                     </li>
                                     <li
                                       className="hover:bg-slate-100 px-2 py-1 rounded flex items-center gap-2 cursor-pointer"
                                       onClick={() => {
                                         navigate("/plus-zone");
                                         setSidebarOpen(false);
                                       }}
                                     >
                                       <CircleUserRound size={16} />
                                       FlipMart Plus Zone
                                     </li>
                                     <li
                                       className="hover:bg-slate-100 px-2 py-1 rounded flex items-center gap-2 cursor-pointer"
                                       onClick={() => {
                                         navigate("/orders");
                                         setSidebarOpen(false);
                                       }}
                                     >
                                       <ArrowUpDown size={16} />
                                       Orders
                                     </li>
                                     <li
                                       className="hover:bg-slate-100 px-2 py-1 rounded flex items-center gap-2 cursor-pointer"
                                       onClick={() => {
                                         navigate("/wishlist");
                                         setSidebarOpen(false);
                                       }}
                                     >
                                       <Heart size={16} />
                                       Wishlist
                                     </li>
                                     <li className="hover:bg-slate-100 px-2 py-1 rounded flex items-center gap-2 cursor-pointer">
                                       <Tag size={16} />
                                       Coupons
                                     </li>
                                     <li className="hover:bg-slate-100 px-2 py-1 rounded flex items-center gap-2 cursor-pointer">
                                       <Gift size={16} />
                                       Gift Cards
                                     </li>
                                     <li className="hover:bg-slate-100 px-2 py-1 rounded flex items-center gap-2 cursor-pointer">
                                       <Bell size={16} />
                                       Notification
                                     </li>
                                     <li
                                       className="hover:bg-slate-100 px-2 py-1 rounded flex items-center gap-2 cursor-pointer text-red-600"
                                       onClick={handleLogout}
                                     >
                                       <LogOut size={16} />
                                       Logout
                                     </li>
                                   </ul>
                                 )}
                               </div>

              
             
              <div className="w-full">
  <button
    onClick={() => setOthersOpen(!othersOpen)}
    className="text-left w-full py-2 px-3 hover:bg-red-100 flex items-center justify-between gap-2 border-b-2 border-slate-200"
  >
    <div className="flex items-center gap-2">
      <CircleUserRound size={20} />
      Others
    </div>
    <ChevronDown
      className={`transition-transform duration-200 ${
        othersOpen ? "rotate-180" : "rotate-0"
      }`}
      size={18}
    />
  </button>

  {othersOpen && (
    <ul className="flex flex-col justify-start px-4 py-2 space-y-4 text-sm font-medium text-gray-700 border-gray-200 ml-2">
      <li className="hover:bg-slate-100 px-2 py-1 rounded flex items-center gap-2 cursor-pointer">
        <Bell size={16} />
        Notification Preferences
      </li>
      <li className="hover:bg-slate-100 px-2 py-1 rounded flex items-center gap-2 cursor-pointer">
        <Headset size={16} />
        24×7 Customer Care
      </li>
      <li className="hover:bg-slate-100 px-2 py-1 rounded flex items-center gap-2 cursor-pointer">
        <TrendingUp size={16} />
        Advertise
      </li>
      <li className="hover:bg-slate-100 px-2 py-1 rounded flex items-center gap-2 cursor-pointer">
        <Download size={16} />
        Download App
      </li>
    </ul>
    
  )}
                 
</div>

<button
                onClick={handleLogout}
                className="text-left py-2 px-3  hover:bg-red-100 text-red-600 flex items-center gap-2 border-b-2 border-slate-200"
              >
                <LogOut size={20} />
                Logout
              </button> 

            </>
          ) : (
            <div>
            <button
              onClick={() => {
                navigate("/auth/login");
                setSidebarOpen(false);
              }}
              className="text-left py-2 px-3  hover:bg-gray-100 border-b-2 border-slate-200"
            >
              Login
            </button>
            <button
                onClick={() => {
                  navigate("/seller");
                  setSidebarOpen(false);
                }}
                className="text-left py-2 px-3  hover:bg-gray-100 flex items-center gap-2 border-b-2 border-slate-200"
              >
                <ShoppingCart size={20} />
                Become A Seller
              </button>
              <button
                onClick={() => {
                  navigate("/listing");
                  setSidebarOpen(false);
                }}
                className="text-left py-2 px-3  hover:bg-gray-100 flex items-center gap-2 border-b-2 border-slate-200"
              >
                <ShoppingBag size={20} />
                Cart
              </button>
              
            </div>
          )}
         
          
          
        </nav>
         
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
 