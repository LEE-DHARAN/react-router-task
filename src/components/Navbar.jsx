import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-gray-800 text-white p-4 flex justify-between items-center">
      <Link to="/" className="text-xl font-bold">
        Shop
      </Link>
      <Link to="/cart" className="text-xl font-bold">
        Cart
      </Link>
    </nav>
  );
}

export default Navbar;
