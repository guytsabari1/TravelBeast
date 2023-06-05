
import { useState } from 'react';
import CartHikeCard from '../CartHikeCard/CartHikeCard';
import PaymentBtn from '../Payment/PaymentBtn'
import './CartPage.css';
import { Context } from '../../context/context';
import { React, useContext } from "react";


function CartPage() {

  const {cart, setCart} = useContext(Context);
  console.log(cart);

  return (
    <div className="cart-page">
      <PaymentBtn/>
      {cart && cart.map((item, index) => (
        <CartHikeCard
          value={item}
          index={index}
          key={index}
          getUserCartArrFromLs={cart}
          setGetUserCartArrFromLs={setCart}
        />
      ))}
    </div>
  );
}

export default CartPage;