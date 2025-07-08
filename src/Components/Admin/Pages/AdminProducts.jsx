import React, { useEffect, useState } from "react";
import { db } from "../../../../firebase-config";
import { collection, onSnapshot,deleteDoc,doc } from "firebase/firestore";

const AdminProducts = () => {
  const [addProduct, setAddProduct] = useState([]);

  useEffect(() => {
    const unsub = onSnapshot(collection(db, "addProduct"), (snapshot) => {
      const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setAddProduct(data);
    });

    return () => unsub();
  }, []);

const handleDelete = async (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this product?");
    if (confirmDelete) {
      try {
        await deleteDoc(doc(db, "addProduct", id));
        console.log("Product deleted:", id);
      } catch (error) {
        console.error("Error deleting product:", error);
      }
    }
  };
  return (
   <div className="p-4">
  <h2 className="text-2xl font-semibold mb-6 text-center text-gray-800">Admin Product List</h2>

  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-6">
    {addProduct.map((product) => (
      <div key={product.title} className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
        <img
          src={product.image_links}
          alt={product.title}
          className="w-full h-48 object-contain"
        />
        <div className="p-4">
          <h3 className="text-lg font-bold text-gray-800 mb-1 truncate">{product.title}</h3>
          <p className="text-gray-600 font-medium">Rs.{product.selling_price}</p>
          <button
          onClick={() => handleDelete(product.id)}
          >Delete</button>
        </div>
      </div>
    ))}
  </div>
</div>

  );
};

export default AdminProducts;
