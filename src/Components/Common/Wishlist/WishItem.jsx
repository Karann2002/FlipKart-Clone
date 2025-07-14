import { doc, deleteDoc } from "firebase/firestore";
import { db } from "../../../../firebase-config";
import { useAuth } from "../../Auth/useAuth";
import { toast } from "react-toastify";

const WishItem = ({ item }) => {
  const { user } = useAuth();

  const handleRemove = async () => {
    if (!user) return;
    try {
      const itemRef = doc(db, "users", user.uid, "wishlist", item.id);
      await deleteDoc(itemRef);
      toast.success("Item removed from Wishlist");
    } catch (err) {
      console.error("Remove failed:", err);
      toast.error("Failed to remove item");
    }
  };

  return (
    <div className="flex justify-between mt-5 w-full bg-white p-3  shadow-md hover:shadow-lg transition-shadow duration-300">
      

      <div className="mt-4 flex flex-col gap-1">
        <h3 className="text-md font-semibold text-gray-800 line-clamp-2">{item.title}</h3>
        <p className="text-gray-600 font-medium">₹{item.selling_price}</p>
        {item.product_rating && (
          <p className="text-sm text-gray-500">⭐ {item.product_rating}</p>
        )}
        <div className="flex m-2">
        <button
        onClick={handleRemove}
        className="mr-2  w-full mt-auto bg-red-500 text-white text-sm py-2 rounded-md hover:bg-red-600 transition-colors"
      >
        Remove
      </button>
       <button
        onClick={handleRemove}
        className=" w-full mt-auto bg-green-500 text-white text-sm py-2 rounded-md hover:bg-green-600 transition-colors"
      >
        Quantity
      </button>
      </div>
      </div>
<div className="relative  w-40 h-40  rounded-md overflow-hidden">
        <img
          src={item.image_links || "/placeholder-product.png"}
          alt={item.title}
          className="object-contain w-full h-full"
          onError={(e) => {
            e.target.src = "/placeholder-product.png";
          }}
        />
      </div>
      
    </div>
  );
};

export default WishItem;
