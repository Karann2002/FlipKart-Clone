import { doc, deleteDoc } from "firebase/firestore";
import { db } from "../../../../firebase-config";
import { useAuth } from "../../Auth/useAuth";
import { toast } from "react-toastify";

const CartItem = ({ item }) => {
  const { user } = useAuth();

  const handleRemove = async () => {
    if (!user) return;
    try {
      const itemRef = doc(db, "users", user.uid, "cart", item.id);
      await deleteDoc(itemRef);
      toast.success("Item removed from cart");
    } catch (err) {
      console.error("Remove failed:", err);
      toast.error("Failed to remove item");
    }
  };

  return (
    <div className="flex flex-col bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
      <div className="relative w-full h-40  rounded-md overflow-hidden">
        <img
          src={item.image_links || "/placeholder-product.png"}
          alt={item.title}
          className="object-contain w-full h-full"
          onError={(e) => {
            e.target.src = "/placeholder-product.png";
          }}
        />
      </div>

      <div className="mt-4 flex flex-col gap-1">
        <h3 className="text-md font-semibold text-gray-800 line-clamp-2">{item.title}</h3>
        <p className="text-gray-600 font-medium">₹{item.selling_price}</p>
        {item.product_rating && (
          <p className="text-sm text-gray-500">⭐ {item.product_rating}</p>
        )}
      </div>

      <button
        onClick={handleRemove}
        className="mt-auto bg-red-500 text-white text-sm py-2 rounded-md hover:bg-red-600 transition-colors"
      >
        Remove
      </button>
    </div>
  );
};

export default CartItem;
