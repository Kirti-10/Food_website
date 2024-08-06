import { useSelector, useDispatch } from "react-redux";
import FoodItem from "./FoodItem";
import { clearCart } from "../utils/cartSlice";
const Cart = () => {

    const cartItems = useSelector(store => store.cart.items);
    const dispatch = useDispatch();
    const handleClearCart = () => {
        dispatch(clearCart());
    }
    return (
        <div>
            <h1 className="font-bold my-4 flex text-2xl flex-wrap">Cart Items-{cartItems.length}</h1>
            <button className="bg-orange-400 w-28 h-12 hover:bg-orange-800 text-white text-xl  my-2 rounded-2xl" onClick={() => handleClearCart()}>Clear cart</button>
            <div className="flex flex-wrap">{cartItems.map(item => <FoodItem key={item.id}{...item} />)}</div>

        </div>
    );
}

export default Cart;