import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../../Redux/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();

  const handelClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="text-center m-4 p-4">
      <h1 className="text-2xl font-bold">Cart</h1>
      {cartItems.length === 0 ? (
        <h1 className="m-4">Cart is empty Add Items to the cart</h1>
      ) : (
        <button
          className="p-2 m-4 cursor-pointer bg-black text-white rounded-lg"
          onClick={handelClearCart}
        >
          Clear Cart
        </button>
      )}

      <div className="w-6/12 m-auto">
        <ItemList items={cartItems} /> 
      </div>

    </div>
  );
};

export default Cart;
