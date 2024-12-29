function CartItem({
  item,
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
}) {
  return (
    <div className="flex justify-between items-center p-4 border-b">
      <div>
        <h3>{item.title}</h3>
        <p className="text-gray-600">
          ${item.price} x {item.quantity}
        </p>
      </div>
      <div className="flex items-center">
        <button
          onClick={() => decreaseQuantity(item.id)}
          className="px-2 py-1 bg-gray-200"
        >
          -
        </button>
        <button
          onClick={() => increaseQuantity(item.id)}
          className="px-2 py-1 bg-gray-200 ml-2"
        >
          +
        </button>
        <button
          onClick={() => removeFromCart(item.id)}
          className="px-4 py-2 bg-red-500 text-white ml-4"
        >
          Remove
        </button>
      </div>
    </div>
  );
}

export default CartItem;
