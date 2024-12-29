import { useCart } from "../context/CartContext";
import CartItem from "./CartItem";

function CartPage() {
  const { cart, removeFromCart, increaseQuantity, decreaseQuantity } =
    useCart();
  const discount = 0.1; // 10% discount

  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const totalWithDiscount = total * (1 - discount);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
      <div>
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          cart.map((item) => (
            <CartItem
              key={item.id}
              item={item}
              removeFromCart={removeFromCart}
              increaseQuantity={increaseQuantity}
              decreaseQuantity={decreaseQuantity}
            />
          ))
        )}
      </div>
      <div className="mt-4">
        <div className="flex justify-between font-semibold">
          <span>Total: ${total.toFixed(2)}</span>
          <span>Discounted Price: ${totalWithDiscount.toFixed(2)}</span>
        </div>
      </div>
    </div>
  );
}

export default CartPage;
