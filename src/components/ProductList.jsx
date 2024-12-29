import { useState, useEffect } from "react";
import { useCart } from "../context/CartContext";

function ProductList() {
  const [products, setProducts] = useState([]);
  const { addToCart, removeFromCart, cart } = useCart();

  useEffect(() => {
    // Fetch products from Fake Store API
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  const isInCart = (productId) => {
    return cart.some((item) => item.id === productId);
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
      {products.map((product) => (
        <div key={product.id} className="bg-white p-4 rounded shadow">
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-48 object-cover"
          />
          <h3 className="text-xl mt-2">{product.title}</h3>
          <p className="text-gray-700">{product.description}</p>
          <div className="mt-2 flex justify-between items-center">
            <span className="text-lg font-semibold">${product.price}</span>
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded"
              onClick={() =>
                isInCart(product.id)
                  ? removeFromCart(product.id)
                  : addToCart(product)
              }
            >
              {isInCart(product.id) ? "Remove from Cart" : "Add to Cart"}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
