import { useEffect, useState } from "react";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../../../../firebase-config";
import { useAuth } from "../../Auth/useAuth";
import WishItem from "./WishItem";

const WishList = () => {
  const { user } = useAuth();
  const [wishItems, setWishItems] = useState([]);

  useEffect(() => {
    if (!user) return;

    const cartRef = collection(db, "users", user.uid, "wishlist");
    const unsubscribe = onSnapshot(cartRef, (snapshot) => {
      const items = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setWishItems(items);
    });

    return () => unsubscribe();
  }, [user]);

  return (
    <div className="ml-5 mr-5  mx-auto">
      <div className="sticky top-0  bg-white z-10 p-4">
        <h2 className="text-2xl font-bold text-gray-800  pb-2">
          🛒 Wishlist ({wishItems.length})
        </h2>
      </div>

      {wishItems.length === 0 ? (
        <div className="mt-8 text-center text-gray-500">
          <p>No items in your cart yet.</p>
        </div>
      ) : (
        <div className="flex flex-col">

          {wishItems.map((item) => (
            <WishItem key={item.id} item={item} />
          ))}
        </div>
      )}
    </div>
  );
};

export default WishList;
