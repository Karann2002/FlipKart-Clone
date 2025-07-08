import React, { useEffect, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../firebase-config";
import Loading from "../Others/Loading";

const SearchResults = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("query") || "";
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const snapshot = await getDocs(collection(db, "addProduct"));
        const products = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        const matched = products.filter((p) =>
          p.title.toLowerCase().includes(query.toLowerCase())
        );
        setResults(matched);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
      setLoading(false);
    };

    if (query) {
      fetchData();
    }
  }, [query]);

  return (
    <div className="p-4 max-w-7xl mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">
        Search results for: <span className="text-blue-600">"{query}"</span>
      </h2>

      {loading ? (
        <Loading />
      ) : results.length > 0 ? (
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {results.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-xl shadow hover:shadow-lg transition duration-300 flex flex-col"
            >
              <div
                className="cursor-pointer"
                onClick={() => navigate(`/product/${product.id}`)}
              >
                <img
                  src={product.image_links}
                  alt={product.title}
                  className="w-full h-48 object-contain rounded-t-xl p-4"
                />
                <div className="px-4 pb-4">
                  <h3 className="text-lg font-semibold text-gray-800 truncate">
                    {product.title}
                  </h3>
                  <p className="text-green-600 font-medium mt-1 text-base">
                    ₹{product.selling_price}
                  </p>
                  <p className="text-sm text-gray-500">
                    Rating: {product.product_rating || "N/A"}
                  </p>
                </div>
              </div>

              <div className="mt-auto px-4 pb-4 flex gap-2">
                <button className="flex-1 bg-yellow-400 hover:bg-yellow-500 text-sm font-medium py-2 rounded-md text-white">
                  Buy Now
                </button>
                <button className="flex-1 bg-orange-500 hover:bg-orange-600 text-sm font-medium py-2 rounded-md text-white">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center text-gray-600 mt-8 text-lg">
          No products found for <span className="font-semibold">"{query}"</span>.
        </div>
      )}
    </div>
  );
};

export default SearchResults;
