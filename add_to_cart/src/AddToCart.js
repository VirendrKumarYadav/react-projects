// AddToCartPage.js

import React, { useState } from "react";

const AddToCartPage = () => {
  const [quantity, setQuantity] = useState(1);
  const [cart, setCart] = useState([]);

  const handleIncreaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const handleDecreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleAddToCart = () => {
    // Add the product to the cart with the current quantity
    const newItem = { quantity, productName: "Product Title" }; // Replace 'Product Title' with the actual product name
    setCart([...cart, newItem]);

    // Reset quantity to 1
    setQuantity(1);

    console.log(`Added ${quantity} items to the cart`);
  };

  return (
    <div className="container mx-auto mt-8">
      <div className="max-w-md mx-auto bg-white p-8 border rounded-lg shadow-lg">
        <div className="mb-4">
          <img
            className="rounded-lg w-full h-auto"
            src="https://placekitten.com/500/300" // Replace with your actual image URL
            alt="Product"
          />
        </div>
        <h2 className="text-2xl font-semibold mb-4">Product Title</h2>
        <p className="text-gray-600 mb-4">Product description goes here.</p>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <button
              className="bg-gray-300 text-gray-700 px-2 py-1 rounded-md mr-2"
              onClick={handleDecreaseQuantity}
            >
              -
            </button>
            <span className="text-xl">{quantity}</span>
            <button
              className="bg-gray-300 text-gray-700 px-2 py-1 rounded-md ml-2"
              onClick={handleIncreaseQuantity}
            >
              +
            </button>
          </div>
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-md"
            onClick={handleAddToCart}
          >
            Add to Cart
          </button>
        </div>
      </div>

      {/* Display the cart */}
      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-4">Shopping Cart</h2>
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <ul>
            {cart.map((item, index) => (
              <li key={index}>
                {item.productName} - Quantity: {item.quantity}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default AddToCartPage;
