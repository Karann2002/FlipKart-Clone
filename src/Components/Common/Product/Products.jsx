import React, { useEffect, useState } from "react";
import { Navigate, useSearchParams } from "react-router-dom";
import { db } from "../../../../firebase-config";
import Loading from "../../Others/Loading";
import {
  collection,getDocs,
} from "firebase/firestore";
import FilterSection from "./FilterSection";
import AddToCartButton from "../Cart/AddToCartButton";
import AddToWishList from "../Wishlist/AddToWishList";
// import { useCart } from "../Cart/CartList";

const Products = () => {
  const [searchParams] = useSearchParams();
  const category = searchParams.get("category")?.trim();
// const {addToCart} = useCart();
  
  
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
 

  const PRODUCTS_PER_PAGE = 30;


 
  

 useEffect(() => {
  const fetchWithAnyCategory = async () => {
    try {
       
      const snapshot = await getDocs(collection(db, "addProduct"));
    
      
      const filtered = snapshot.docs
        .map((doc) => ({ id: doc.id, ...doc.data() }))
        .filter((item) => {
  const c1 = item.category_1?.toLowerCase().trim();
  const c2 = item.category_2?.toLowerCase().trim();
  const c3 = item.category_3?.toLowerCase().trim();
  const cat = category?.toLowerCase().trim();

  return c1 === cat || c2 === cat || c3 === cat;
})
    
      setProducts(filtered);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching products by category:", error);
      setLoading(false);
    }
  };

  if (category) {
    fetchWithAnyCategory();
  }
}, [category]);



  return (
    <div className="">
      {loading ? (
        <Loading />
      ) : (
        <>
          {products.length === 0 ? (
            <div className=" p-4 text-center">
              No products found{category ? ` in category "${category}"` : ""}.
            </div>
          ) : (
            <div className="flex">
<FilterSection
  // filters={filters}
  onFilterChange={(updatedFilters) => {
    console.log("Apply these filters:", updatedFilters);
  }}
/>
              <div className="bg-white grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-4  px-4">
                {products.map((product) => (
                  <div key={product.id} 
                  className="relative rounded-md p-4 bg-white  z-25 transition-shadow">
                    <AddToWishList product={product}/>
<div
onClick={()=>window.open(`/products/${product.id}`, '_blank')}>
                    <img
                      src={product.image_links || product.image} // Fallback to product.image
                      alt={product.title}
                      className="object-contain mb-2 h-48 w-full"
                      onError={(e) => {
                        e.target.src = '/placeholder-product.png'; // Fallback image
                      }}
                    />
                    <h3 className="text-sm font-semibold line-clamp-2">{product.title}</h3>
                    <p className="text-gray-700 font-medium">₹{product.selling_price}</p>
                    {product.product_rating && (
                      <p className="text-gray-500 text-sm">Rating: {product.product_rating}</p>
                    )}

                    
                    </div>
                    <div className="flex mt-2">
                      <button className="flex-1 bg-yellow-300 py-2 mx-1 rounded hover:bg-yellow-400">
                        Buy Now
                      </button>
                      <AddToCartButton product={product}/>
                      
                    </div>
                  </div>
                ))}
              </div>
             

             
            </div>
          )}
        </>
      )}
      
    </div>
    
  );
};

export default Products;