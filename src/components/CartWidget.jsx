import React from 'react';


import { AiOutlineShoppingCart } from 'react-icons/ai';




const CartWidget = () => {
 
  return (
    <div className="cart-widget">
      {AiOutlineShoppingCart}
      <AiOutlineShoppingCart icon={AiOutlineShoppingCart} size=" 30px" color="white" />
      <div className="qty-display">0</div>
    </div>
  );
};

export default CartWidget;