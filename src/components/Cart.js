import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ItemList from './ItemList';
import { clearCart } from '../utils/cartSlice';
import FoodItem from './FoodItem';

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <>
    <FoodItem {...cartItems[0]}/>
    </>
  )
}

export default Cart;
