import './Cart.css';

import React, { useState } from 'react';

const Cart = () => {
  // State to manage the items in the cart
  const [cartItems, setCartItems] = useState([]);

  // Function to add an item to the cart
  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  // Function to remove an item from the cart
  const removeFromCart = (index) => {
    const updatedCart = [...cartItems];
    updatedCart.splice(index, 1);
    setCartItems(updatedCart);
  };

  return (
    <div>
      <h2>Shopping Cart</h2>

      {/* Render the items in the cart */}
      <ul>
        {cartItems.map((item, index) => (
          <li key={index}>
            {item.name} - ${item.price}
            <button onClick={() => removeFromCart(index)}>Remove</button>
          </li>
        ))}
      </ul>

      {/* Example of items that can be added to the cart */}
      <div>
        <h3>Available Items</h3>
        <button onClick={() => addToCart({ name: 'Item 1', price: 10 })}>
          Add Item 1 to Cart
        </button>
        <button onClick={() => addToCart({ name: 'Item 2', price: 15 })}>
          Add Item 2 to Cart
        </button>
      </div>
    </div>
  );
};

export default Cart;