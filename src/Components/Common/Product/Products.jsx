import React, { useEffect, useState } from "react";
import { Navigate, useSearchParams } from "react-router-dom";
import { db } from "../../../../firebase-config";
import Loading from "../../Others/Loading";
import {
  collection,getDocs
} from "firebase/firestore";
import { Heart } from "lucide-react";
import { useNavigate } from "react-router-dom";
import FilterSection from "./FilterSection";
const Products = () => {
  const [searchParams] = useSearchParams();
  const category = searchParams.get("category")?.trim();
 const [showAlert, setShowAlert] = useState();
  console.log(category);
  
  const [products, setProducts] = useState([]);
  const [lastDoc, setLastDoc] = useState(null);
  const [loading, setLoading] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);
  const [liked, setLiked] = useState([]);
  const [filters, updatedFilters] = useState([]);

  const [hasMore, setHasMore] = useState(true);
  const [error, setError] = useState(null);
  const PRODUCTS_PER_PAGE = 30;
  const navigate = useNavigate();

  
  const toggleLike = (productId) => {
  
    
    setLiked((prevLiked) =>
      prevLiked.includes(productId)
        ? prevLiked.filter((id) => id !== productId)
        : [...prevLiked, productId]
        
    );
    setShowAlert(true);
      setTimeout(() => setShowAlert(false), 3000);
  };

 useEffect(() => {
  const fetchWithAnyCategory = async (isLoadMore = false) => {
    try {
       if (isLoadMore && !lastDoc) return;
isLoadMore ? setLoadingMore(true) : setLoading(true);
      const snapshot = await getDocs(collection(db, "addProduct"));
      // console.log(snapshot);
      
      const filtered = snapshot.docs
        .map((doc) => ({ id: doc.id, ...doc.data() }))
        .filter((item) => {
  const c1 = item.category_1?.toLowerCase().trim();
  const c2 = item.category_2?.toLowerCase().trim();
  const c3 = item.category_3?.toLowerCase().trim();
  const cat = category?.toLowerCase().trim();

  return c1 === cat || c2 === cat || c3 === cat;
})
console.log(filtered);

      setProducts(filtered);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching products by category:", error);
      setError("Failed to fetch category products.");
      setLoading(false);
    }
  };

  if (category) {
    fetchWithAnyCategory();
  }
}, [category]);



  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <>
          {products.length === 0 ? (
            <div className="p-4 text-center">
              No products found{category ? ` in category "${category}"` : ""}.
            </div>
          ) : (
            <div className="flex">
<FilterSection
  filters={filters}
  onFilterChange={(updatedFilters) => {
    // Call backend or filter frontend data based on updatedFilters
    console.log("Apply these filters:", updatedFilters);
  }}
/>
              <div className="bg-white grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-4  px-4">
                {products.map((product) => (
                  <div key={product.id} 
                  className="relative rounded-md p-4 bg-white  z-25 transition-shadow">
                    <button
                      onClick={() => toggleLike(product.id)}
                      className="absolute top-2 right-2 p-1 bg-white rounded-full hover:bg-red-100 z-10"
                      aria-label={liked.includes(product.id) ? "Unlike product" : "Like product"}
                    >
                      <Heart
                        className={`w-5 h-5 ${
                          liked.includes(product.id)
                            ? "text-red-500 fill-red-500"
                            : "text-gray-500"
                        }`}
                        onClick={()=>{<div class="p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400" role="alert">
  <span class="font-medium">Success alert!</span> Change a few things up and try submitting again.
</div>}}
                      />
                    </button>
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

                    <div className="flex mt-2">
                      <button className="flex-1 bg-yellow-300 py-2 mx-1 rounded hover:bg-yellow-400">
                        Buy Now
                      </button>
                      <button className="flex-1 bg-orange-400 py-2 mx-1 rounded hover:bg-orange-500">
                        Add To Cart
                      </button>
                    </div>
                    </div>
                  </div>
                ))}
              </div>
             

              {/* {hasMore && (
                <div className="flex justify-center mt-6">
                  <button
                    onClick={() => fetchWithAnyCategory(true)}
                    disabled={loadingMore}
                    className="px-6 py-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600 disabled:bg-blue-300"
                  >
                    {loadingMore ? "Loading..." : "Load More"}
                  </button>
                </div>
              )} */}
            </div>
          )}
        </>
      )}
       {showAlert && (
        <div className="fixed bottom-5 left-1/2 z-50">
          <div
            className="p-4 text-sm text-green-800 bg-green-100 rounded-lg shadow-lg border border-green-300"
            role="alert"
          >
            <span className="font-medium">Success!</span> Added to wishlist.
          </div>
        </div>
      )}
    </div>
    
  );
};

export default Products;