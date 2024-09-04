import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";
import { useDispatch } from "react-redux";

const Cart = () => {
    const cartItems = useSelector((store)=> store.cart.items)
    const dispatch = useDispatch();
     const  handleClearCart = () => {
        dispatch(clearCart())
    }
    return (
      <div className="m-4 p-4 text-center">
        <h1 className="text-2xl font-bold">Cart</h1>
        <div className="w-6/12 m-auto">
          <button
            className="p-2 m-4 border border-black bg-black text-white px-4 rounded-lg"
            onClick={handleClearCart}
          >
            Clear Cart
          </button>

          <ItemList items={cartItems} />
        </div>
        {cartItems.length === 0 && (
          <h1 className="text-4xl font-bold align-bottom">
            Your Cart is Empty. Please Go and Add something to cart
          </h1>
        )}
      </div>
    );
}
export default Cart;