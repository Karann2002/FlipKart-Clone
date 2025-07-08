import React from "react";
import { ChevronDown } from "lucide-react";
import Banner from "../Others/Banner";
import { useNavigate, Link } from "react-router-dom";
// import { useEffect,useState } from "react";
// import { collection, getDocs,query } from "firebase/firestore";
// import { db } from "../../../firebase-config";

const Electronics = [
  {
    id: 1,
    image: "Electronics/-original-imah3zvdthupfejc.webp",
    title: "Best Truewireless Handset",
    price: "Grab Now!",
    category: "Headphones & Headsets",
  },
  {
    id: 2,
    image: "Electronics/-original-imagb54tb6fpurze.webp",
    title: "Noise SmartWatches",
    price: "From ₹1,299",
    category:"smart watches"
  },
  {
    id: 3,
    image: "Electronics/-original-imagxrhetgfuebnn.webp",
    title: "Fastrack SmartWatches ",
    price: "From ₹1,099",
    category: "Fastrack"
  },
  {
    id: 4,
    image:
      "Electronics/philips-s1121-45-s1121-45-original-imafry2qgxcwnm9r.webp",
    title: "Best For Savers",
    price: "From ₹1,649",
    category:"trimmers",
  },
  {
    id: 5,
    image: "Electronics/-original-imafkykednshkhx5.webp",
    title: "Printers",
    price: "From 2,000",
    category:"printer",

  },
  {
    id: 6,
    image: "Electronics/srs-xb23-sony-original-imaftk66vjxp86h5.webp",
    title: "Best Selling Mobile Speaker",
    price: "From ₹1,199",
    category:"Bluetooth Speakers",

  },
  {
    id: 7,
    image:
      "Electronics/zeb-pixaplay-63-zeb-mlp-7-13-05-zeb-pixaplay-63-zeb-mlp-7-led-original-imah8r9fgjfs27jh.webp",
    title: "ASUS Monitors",
    price: "From ₹5,199",
    category:"monitors",

  },
  {
    id: 8,
    image:
      "Electronics/kids-camera-mini-rechargeable-and-shockproof-camera-creative-diy-original-imag5h7gdjzrvzdr.webp",
    title: "Top Mirror Camera",
    price: "Shop Now",
    category:"camera",

  },
  {
    id: 9,
    image: "Electronics/-original-imah9hc5md7furca.webp",
    title: "Monitors",
    price: "From ₹10,199",
    category:"monitors",

  },
];

const ToysnBeauty = [
  {
    id: 1,
    image: "Beauty&Toys/-original-imagbwf3wvhzfh5z.webp",
    title: "Coffe Powder",
    price: "Up to 80% Off",
    category:"",

  },
  {
    id: 2,
    image:
      "Beauty&Toys/4-function-remote-control-high-speed-big-racing-car-toy-funkey-original-imafkg33umd8dy93.webp",
    title: "Remote Control Cars",
    price: "Upto 80% Off",
    category:"",

  },
  {
    id: 3,
    image:
      "Beauty&Toys/xc-900-grey-lite-26-15-5-cradiac-21-gear-120-original-imagczuzpxeweczm.webp",
    title: "Geared Cycles ",
    price: "Upto 70% Off",
    category:"",

  },
  {
    id: 4,
    image: "Beauty&Toys/3-30155-mcfarlane-2-5-original-imagbeyyzehpyk2m.webp",
    title: "Best For Action Toys",
    price: "Upto 70% Off",
    category:"",

  },
  {
    id: 5,
    image:
      "Beauty&Toys/push-up-bar-0-8-long-ankaro-original-imafu9dmvdk3rzvy.webp",
    title: "Gym Essentials",
    price: "From ₹139",
    category:"Home Gyms ",

  },
  {
    id: 6,
    image:
      "Beauty&Toys/4-feet-pink-very-beautiful-best-quality-for-special-gift-125-13-original-imafgv92puzkdytg.webp",
    title: "Soft Toys",
    price: "Upto 70% Off",
    category:"",

  },
  {
    id: 7,
    image: "Beauty&Toys/-original-imagfykthgudy4qz.webp",
    title: "Electric Cylces",
    price: "Upto 40% Off",
    category:"",

  },
  {
    id: 8,
    image:
      "Beauty&Toys/200-100-natural-california-pouch-happilo-original-imafzvw2tcazeur6.webp",
    title: "Dry Fruits",
    price: "Upto 45% Off",
    category:"Nuts and Dry Fruits",

  },
];
const SportnHealthcare = [
  {
    id: 1,
    image:
      "/Sports&Healthcare/200-100-natural-california-pouch-happilo-original-imafzvw2tcazeur6 (1).webp",
    title: "Dry Fruits",
    price: "Upto 75% Off",
    category:"Nuts and Dry Fruits",

  },
  {
    id: 2,
    image:
      "/Sports&Healthcare/510-chocolate-peanut-butter-crunchy-510g-jar-nut-butter-original-imagyzpqqfaguxny.webp",

    title: "Food Spreads",
    price: "Upto 75% Off",
    category:"",

  },
  {
    id: 3,
    image:
      "/Sports&Healthcare/push-up-bar-0-8-long-ankaro-original-imafu9dmvdk3rzvy.webp",
    title: "Gym Essentials",
    price: "From ₹139",
    category:"Home Gyms",

  },
  {
    id: 4,
    image:
      "/Sports&Healthcare/anadi-01-yoga-mat-4-30-anadi-enterprise-15-original-imagfsxudxcm7r48.webp",

    title: "Yoga Mat",
    price: "From ₹159",
    category:"Exercise Fitness ",

  },
  {
    id: 5,
    image:
      "/Sports&Healthcare/60-wooden-earth-jigsaw-puzzle-60-pcs-webby-original-imagyc8hsdztzdzb.webp",
    title: "Puzzle & Cubes",
    price: "From ₹79",
    category:"",

  },
  {
    id: 6,
    image:
      "Sports&Healthcare/4-feet-pink-very-beautiful-best-quality-for-special-gift-125-13-original-imafgv92puzkdytg.webp",
    title: "Soft Toys",
    price: "Upto 70% Off",
    category:"",

  },
  {
    id: 7,
    image:
      "/Sports&Healthcare/1-oats-veggies-masala-oats-pouch-yogabar-original-imag5suhzvwy3xh4.webp",

    title: "Breakfast Cereal",
    price: "Upto 75% Off",
    category:"Food Essentials",

  },
  {
    id: 8,
    image:
      "/Sports&Healthcare/premium-pouch-regular-tea-powder-tata-original-imafzuf2mnubzphd.webp",
    title: "Tea Powder",
    price: "Upto 75% Off",
    category:"",

  },
];

const Fashion = [
  {
    id: 1,
    image:
      "Fashion/6-art-100-judgement-grey-original-imah7p89xh6wsxsk (1).webp",
    title: "Men’s Slippers & Flip Flops",
    price: "Min. 70% Off",
    category:"Flip -Flops ",

  },
  {
    id: 2,
    image:
      "Fashion/6-rng-854-grey-40-bruton-grey-original-imahb2e63hhyb3hp.webp",
    title: "Men's Casual Shoes",
    price: "Min. 70% Off",
    category:"Foot Wear",

  },
  {
    id: 3,
    image: "Fashion/l-spy-boxer-c26-rusksun-original-imah923zrmvvhsca.webp",
    title: "Men's Boxers",
    price: "Special Offer",
    category:"Shorts ",

  },
  {
    id: 4,
    image: "Fashion/s-grey-red-tocayo-original-imah483g8wgqwjg7.webp",
    title: "Men's Vests",
    price: "Min. 50% Off",
    category:"Women's wear",

  },
];

const menuItems = {
  "Men's Top Wear": [
    "All",
    "Men's T-Shirts",
    "Men's Casual Shirts",
    "Men's Formal Shirts",
    "Men's Kurtas",
    "Men's Ethnic Sets",
    "Men's Blazers",
    "Men's Raincoat",
    "Men's Windcheaters",
    "Men's Suit",
    "Men's Fabrics",
  ],
  "Men's Bottom Wear": [],
  "Women Ethnic": [],
  "Men Footwear": [],
  "Women Footwear": [],
  "Watches and Accessories": [],
  "Women Western": [],
  "Bags, Suitcases & Luggage": [],
  "Kids": [],
  "Essentials": [],
  "Winter": []
};


const DashBoard = () => {
  // const [ref, isInView] = useInView({ threshold: 0.3 });

  const navigate = useNavigate();

  return (
    <div className=" bg-slate-100 gap-2 mw-9xl mx-auto top-20 justify-center items-center ">
     <div
  className="bg-white mb-5 p-5 relative z-40"
  style={{ overflowX: "auto", overflowY: "hidden", whiteSpace: "nowrap", WebkitOverflowScrolling: "touch" }}
>
  <ul
    className="flex flex-nowrap md:flex-wrap justify-center items-center md:justify-center  gap-6 md:gap-9 px-4"
    style={{ minWidth: "max-content" }}
  >
    {/* Example static item */}
    <li className="flex flex-col justify-center items-center font-semibold min-w-[80px]">
      <img src="ChatGPT Image Jun 19, 2025, 11_14_20 PM.png" alt="Kilos" className="h-17 w-17 object-cover" />
      <span className="text-sm mt-1">Kilos</span>
    </li>

    <li className="flex flex-col justify-center items-center font-semibold min-w-[80px]">
      <img src="22fddf3c7da4c4f4.webp" alt="Mobiles" className="h-17 w-17 object-cover" />
      <span className="text-sm mt-1">Mobiles</span>
    </li>

    {/* Electronics with dropdown */}
   <li className="flex flex-col justify-center items-center font-semibold relative group min-w-[100px] z-50">
  <div className="relative">
    <img
      src="Screenshot 2025-04-17 144437.png"
      alt="Electronics"
      className="h-12 w-12 object-contain"
    />
    <button className="text-sm mt-1 flex items-center hover:text-stone-900">
      Electronics <ChevronDown className="ml-1 h-4 w-4" />
    </button>

    {/* Dropdown */}
    <div className="absolute top-full left-1/2 -translate-x-1/2 w-48 bg-white shadow-lg py-2 opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-200 z-50">
      {Object.entries(menuItems).map(([category, subItems], index) => (
        <div key={index} className="relative group/item">
        <a
          key={index}
          href="#"
          className="block px-4 py-2 hover:bg-gray-100 text-sm z-50 "
        >
          {category}
        </a>
        {subItems.length > 0 && (
              <div className="absolute top-0 left-full mt-0 ml-1 w-56 bg-white shadow-lg opacity-0 group-hover/item:opacity-100 invisible group-hover/item:visible transition-all duration-200 z-50">
                {subItems.map((subItem, subIndex) => (
                  <a
                    key={subIndex}
                    href="#"
                    className="block px-4 py-2 hover:bg-gray-100 text-sm"
                  >
                    {subItem}
                  </a>
                ))}
              </div>
            )}
</div>
      ))}
    </div>
  </div>
</li>
<li className="flex flex-col justify-center items-center font-semibold relative group min-w-[100px] z-50">
  <div className="relative">
    <img
      src="Screenshot 2025-04-17 144424.png"
      alt="Electronics"
      className="h-12 w-12 object-cover"
    />
    <button className="text-sm mt-1 flex items-center hover:text-stone-900">
      Fashion <ChevronDown className="ml-1 h-4 w-4" />
    </button>

    {/* Dropdown */}
    <div className="absolute top-full left-1/2 -translate-x-1/2 w-48 bg-white shadow-lg py-2 opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-200 z-50">
      {[
        "Men's Top Wear",
"Men's Bottom Wear",
"Women Ethnic",
"Men Footwear",
"Women Footwear",
"Watches and Accessories",
"Women Western",
"Bags, Suitcases & Luggage",
"Kids",
"Essentials",
"Winter",
      ].map((item, index) => (
        <a
          key={index}
          href="#"
          className="block px-4 py-2 hover:bg-gray-100 text-sm z-50 "
        >
          {item}
        </a>
      ))}
    </div>
  </div>
</li>
<li className="flex flex-col justify-center items-center font-semibold relative group min-w-[100px] z-50">
  <div className="relative">
    <img
      src="Screenshot 2025-04-17 144447.png"
      alt="Electronics"
      className="h-12 w-12 object-cover"
    />
    <button className="text-sm mt-1 flex items-center hover:text-stone-900">
      Home & Fruniture <ChevronDown className="ml-1 h-4 w-4" />
    </button>

    {/* Dropdown */}
    <div className="absolute top-full left-1/2 -translate-x-1/2 w-48 bg-white shadow-lg py-2 opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-200 z-50">
      {[
        "Financial Planning",
        "Consulting Agency",
        "Strategy Consulting",
        "Digital Transformation",
        "Marketing Consulting",
        "Insurance Consultancy",
        "Tax Advisory",
      ].map((item, index) => (
        <a
          key={index}
          href="#"
          className="block px-4 py-2 hover:bg-gray-100 text-sm z-50 "
        >
          {item}
        </a>
      ))}
    </div>
  </div>
</li>

    {/* Repeat the structure below for other categories like Fashion, Beauty, etc. */}

    <li className="flex flex-col justify-center items-center font-semibold min-w-[80px]">
      <img src="0139228b2f7eb413.webp" alt="Appliances" className="h-17 w-17 object-cover" />
      <span className="text-sm mt-1">Appliances</span>
    </li>

    <li className="flex flex-col justify-center items-center font-semibold min-w-[80px]">
      <img src="71050627a56b4693.webp" alt="Flight" className="h-17 w-17 object-cover" />
      <span className="text-sm mt-1">Flight Bookings</span>
    </li>
    <li className="flex flex-col justify-center items-center font-semibold relative group min-w-[100px] z-50">
  <div className="relative">
    <img
      src="Screenshot 2025-04-17 124217.png"
      alt="Electronics"
      className="h-12 w-12 object-cover"
    />
    <button className="text-sm mt-1 flex items-center hover:text-stone-900">
      Beauty, Toys & more <ChevronDown className="ml-1 h-4 w-4" />
    </button>

    {/* Dropdown */}
    <div className="absolute top-full left-1/2 -translate-x-1/2 w-48 bg-white shadow-lg py-2 opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-200 z-50">
      {[
        "Financial Planning",
        "Consulting Agency",
        "Strategy Consulting",
        "Digital Transformation",
        "Marketing Consulting",
        "Insurance Consultancy",
        "Tax Advisory",
      ].map((item, index) => (
        <a
          key={index}
          href="#"
          className="block px-4 py-2 hover:bg-gray-100 text-sm z-50 "
        >
          {item}
        </a>
      ))}
    </div>
  </div>
</li>
<li className="flex flex-col justify-center items-center font-semibold relative group min-w-[100px] z-50">
  <div className="relative">
    <img
      src="Screenshot 2025-04-17 144516.png"
      alt="Electronics"
      className="h-12 w-12 object-cover justify-center items-center"
    />
    <button className="text-sm mt-1 flex items-center hover:text-stone-900">
      Two Wheelers <ChevronDown className="ml-1 h-4 w-4" />
    </button>

    {/* Dropdown */}
    <div className="absolute top-full left-1/2 -translate-x-1/2 w-48 bg-white shadow-lg py-2 opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-200 z-50">
      {[
        "Petrol Vehicles",
        "Electric Vehicles",
      ].map((item, index) => (
        <a
          key={index}
          href="#"
          className="block px-4 py-2 hover:bg-gray-100 text-sm z-50 "
        >
          {item}
        </a>
      ))}
    </div>
  </div>
</li>
  </ul>
</div>


      <div className="flex justify-center items-center mb-5 z-25">
        <Banner />
       
      </div>
 <div className="w-auto mb-5 overflow-visible">
  {[
    { title: "Best in Electronics", data: Electronics },
    { title: "Beauty, Food, Toys & more", data: ToysnBeauty },
    { title: "Sports, Healthcare & more", data: SportnHealthcare },
  ].map((section, index) => (
    <div key={index} className="mb-5 bg-white">
      <h1 className="text-2xl font-semibold justify-center items-center pt-5 pl-5">
        {section.title}
      </h1>
      <div className="mb-5">
        <div className="flex overflow-x-auto no-scrollbar px-2">
          {section.data.map((card) => (
            <div
              key={card.id}
              className="relative group mb-5 min-w-[200px] sm:min-w-[255px] h-[270px] p-10 bg-white  overflow-hidden "
            >
              <img
                src={card.image}
                alt={card.title}
                className="md:h-ls h-[150px] w-[200px] object-contain cursor-pointer"
                onClick={() => navigate(`/products?category=${encodeURIComponent(card.category)}`)}
              />

              <div className="  text-black flex flex-col items-center justify-center pt-4 ">
                      <h3 className=" text-sm justify-center items-center align-middle">
                        {card.title}
                      </h3>
                      <h5 className="font-semibold text-sm">{card.price}</h5>
                    </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  ))}
</div>

      <div className="flex flex-col gap-6 md:flex-row md:flex-wrap mb-5">
        {[
          { title: "Fashion Top Deals", data: Fashion },
          { title: "Trending Gadgets & Appliances", data: Fashion },
          { title: "Season's Top Picks", data: Fashion },
          { title: "Home Decor & Furnishings", data: Fashion },
          { title: "Make Your Home Styles", data: Fashion },
          { title: "Beauty & Wellness", data: Fashion },
          { title: "Hot Deals on Fashion", data: Fashion },
          { title: "Monsoon Must-Haves", data: Fashion },
        ].map((section, index) => (
          <div key={index} className="bg-white p-2 w-full md:w-[32%]">
            <h1 className="font-bold text-xl md:text-2xl pt-5 pb-5">
              {section.title}
            </h1>
            <div className="grid grid-cols-2 gap-2">
              {section.data.map((card) => (
                <div
                  key={card.id}
                  onClick={() => navigate(`/products?category=${encodeURIComponent(card.category)}`)}
                  className="border border-blue-100 rounded-sm p-2 cursor-pointer"
                >
                  <div className="relative group w-full h-[180px] bg-white overflow-hidden flex items-center justify-center">
                    <img
                      src={card.image}
                      alt={card.title}
                      className="h-full w-full object-contain"
                    />
                  </div>
                  <div className="text-black flex flex-col pt-2">
                    <h3 className="text-sm md:text-lg">{card.title}</h3>
                    <h5 className="font-semibold text-green-600 text-sm md:text-lg">
                      {card.price}
                    </h5>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
<div className="w-auto mb-5 overflow-visible ">
        {[
          { title: "Furniture Deals", data: Electronics },
          { title: "Fashion Top Deals", data: ToysnBeauty },
          { title: "Top Deals", data: SportnHealthcare },
        ].map((section, index) => (
          <div key={index} className="mb-5 bg-white">
            <h1 className="text-2xl font-semibold justify-center items-center pt-5 pl-5">
              {section.title}
            </h1>
            <div className=" mb-5">
              <div className="flex overflow-x-auto no-scrollbar px-2">
                {section.data.map((card) => (
                  <div
                    key={card.id}
                    className="relative group mb-5 min-w-[200px] sm:min-w-[255px] h-[270px] p-10 bg-white  overflow-hidden "
                  >
                    <img
                      src={card.image}
                      alt={card.title}
                      className="md:h-ls h-[150px] w-[200px] object-contain cursor-pointer"
                      onClick={() => navigate(`/products?category=${encodeURIComponent(card.category)}`)}
                    />

                    <div className="  text-black flex flex-col items-center justify-center pt-4 ">
                      <h3 className=" text-sm justify-center items-center align-middle">
                        {card.title}
                      </h3>
                      <h5 className="font-semibold text-sm">{card.price}</h5>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      
    </div>
  );
};

export default DashBoard;
