import { doc, deleteDoc } from "firebase/firestore";
import { db } from "../../../../firebase-config";
import { useAuth } from "../../Auth/useAuth";





const Cart = ({item}) => {
const { user } = useAuth();


 const handleRemove = async () => {
    const itemRef = doc(db, "users", user.uid, "cart", item.id);
    await deleteDoc(itemRef);
  };
  return (
    // <div className="p-4">
    //   <h1 className="text-xl font-bold mb-4">Cart</h1>
    //   {item.length === 0 ? (
    //     <p>Your cart is empty.</p>
    //   ) : (
        <div className="flex justify-between items-center p-4 border-b">
      <div>
        <h3>{item.title}</h3>
        <p>₹{item.price}</p>
      </div>
      <button onClick={handleRemove} className="text-red-500 font-semibold">
        Remove
      </button>
    </div>
        // cartItems.map((product) => (
        //   <div key={product.id} className="flex justify-between items-center border-b py-2">
        //     <div>
        //       {product.name} x {product.quantity}
        //     </div>
        //     <button
        //       onClick={() => removeFromCart(item.id)}
        //       className="text-red-500"
        //     >
        //       Remove
        //     </button>
        //   </div>
//           <div className="bg-white grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-4  px-4">
//                 {cartItems.map((product) => (
//                   <div key={product.id} 
//                   className="relative rounded-md p-4 bg-white  z-25 transition-shadow">
                    
// <div
// onClick={()=>window.open(`/products/${product.id}`, '_blank')}>
//                     <img
//                       src={product.image_links || product.image} // Fallback to product.image
//                       alt={product.title}
//                       className="object-contain mb-2 h-48 w-full"
//                       onError={(e) => {
//                         e.target.src = '/placeholder-product.png'; // Fallback image
//                       }}
//                     />
//                     <h3 className="text-sm font-semibold line-clamp-2">{product.title}</h3>
//                     <p className="text-gray-700 font-medium">₹{product.selling_price}</p>
//                     {product.product_rating && (
//                       <p className="text-gray-500 text-sm">Rating: {product.product_rating}</p>
//                     )}

                    
//                     </div>
//                     <div className="flex mt-2">
//                       <button className="flex-1 bg-green-600 py-2 mx-1 rounded hover:bg-green-400">
//                         Buy Now
//                       </button>
//                       <button
//             onClick={() => removeFromCart(product.id)}
//               className=" flex-1 bg-red-400 py-2 mx-1 rounded hover:bg-red-300 text-white"
//              >
//               Remove
//             </button>
//                     </div>
//                   </div>
//                 ))}
//               </div>
    //     )
    //   }
    // </div>
  );
};

export default Cart;
