import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "../../../../firebase-config";
import { doc, getDoc } from "firebase/firestore";




const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

 
    useEffect(() => {
  const fetchProduct = async () => {
    const docRef = doc(db, "addProduct", id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      const data = { id: docSnap.id, ...docSnap.data() };
      setProduct(data);
      document.title = data.title || "Product Detail";
    } else {
      document.title = "Product Detail";
    }
  };

  fetchProduct();
}, [id]);


  if (!product) {
    return <div className="text-center py-10">Loading...</div>;
  }

  return (
    <div className="max-w-6xl mx-auto p-6 grid md:grid-cols-2 gap-10">
      {/* Image Section */}
      <div className="rounded-xl overflow-hidden ">
        <img
          src={product.image_links?.[0]}
          alt={product.title}
          className="w-full h-auto object-cover p-10"
        />
      </div>

      {/* Info Section */}
      <div className="flex flex-col space-y-4">
        {/* Title */}
        <h1 className="text-xl">{product.title}</h1>

        {/* Category */}
        <p className="text-gray-600">
          {product.category_1} / {product.category_2} / {product.category_3}
        </p>

        {/* Ratings */}
        <div className="flex items-center gap-2 text-yellow-500">
          <span>⭐ {product.product_rating}</span>
          <span className="text-sm text-gray-600">Seller: {product.seller_name} ({product.seller_rating})</span>
        </div>

        {/* Price */}
        <div className="flex items-center gap-4">
          <span className="text-2xl font-semibold text-green-600">₹{product.selling_price}</span>
          <span className="line-through text-gray-500">₹{product.mrp}</span>
        </div>

        {/* Description */}
        <div>
          <h3 className="font-semibold text-lg">Description:</h3>
          <p className="text-gray-700">{product.description}</p>
        </div>

        {/* Highlights */}
        <div>
          <h3 className="font-semibold text-lg">Highlights:</h3>
          {/* <ul className="list-disc list-inside text-gray-700">
            {product.highlights?.split(",").map((item, index) => (
              <li key={index}>{item.trim()}</li>
            ))}
          </ul> */}
        </div>

        {/* Buy Button */}
        <button
          onClick={() => window.open(`/buy/${product.id}`, "_blank")}
          className="mt-4 px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition"
        >
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default ProductDetail;
