import { useEffect, useState } from "react";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../../../../firebase-config";
import { useAuth } from "../../Auth/useAuth";
import CartItem from "./CartItem";

const CartList = () => {
  const { user } = useAuth();
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    if (!user) return;

    const cartRef = collection(db, "users", user.uid, "cart");
    const unsubscribe = onSnapshot(cartRef, (snapshot) => {
      const items = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setCartItems(items);
    });

    return () => unsubscribe();
  }, [user]);

  return (
    <div className="  mx-auto">
      <div className="sticky top-0 bg-white z-10 p-5 md:rounded-2xl">
        <h2 className="text-2xl font-bold text-gray-800 ">
          🛒 Your Cart ({cartItems.length})
        </h2>
      </div>

      {cartItems.length === 0 ? (
        <div className="mt-5 text-center text-gray-500">
          <p>No items in your cart yet.</p>
        </div>
      ) : (
        <div className="grid gap-4 mt-5  grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {cartItems.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}
        </div>
      )}
    </div>
  );
};

export default CartList;
