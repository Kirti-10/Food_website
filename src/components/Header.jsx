import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";
import UserContext from "../utils/UserContext"
import { useSelector } from "react-redux";

const Logo = () => (
  <Link to="/">
    <img
      src="https://th.bing.com/th/id/OIP._v_ec_7PHGoB6mPAGO-PqAHaHa?rs=1&pid=ImgDetMain"
      alt="Swiggy Logo"
      className="w-32 h-auto"
    />
  </Link>
);

const Header = () => {
  const isOnline = useOnline();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const {loggedInUser}=useContext(UserContext);

  const cartItems=useSelector((store)=>store.cart.items)
  
  console.log(cartItems);

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto py-4 px-6 flex justify-between items-center">
        <Logo />
        <nav className="space-x-6">
          <Link to="/" className="text-gray-600 text-xl hover:text-orange-600 transition-colors duration-300">
            Home
          </Link>
          <Link to="/contact" className="text-gray-600 text-xl hover:text-orange-600 transition-colors duration-300">
            Contact
          </Link>
          <Link to="/cart" className="text-gray-600 text-xl hover:text-orange-600 transition-colors duration-300">
            Cart-{cartItems.length}
          </Link>
          <span className="text-gray-600 text-xl">{isOnline ? "Online" : "Offline"}</span>
          <Link to="/instamart" className="text-gray-600 text-xl hover:text-orange-600 transition-colors duration-300">
            Instamart
          </Link>
        </nav>
        <div>
          {isLoggedIn ? (
            <button
              className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 transition-colors duration-300"
              onClick={() => setIsLoggedIn(false)}
            >
              Logout
            </button>
          ) : (
            <button
              className="bg-orange-500 text-white py-2 px-4 rounded hover:bg-red-400-600 transition-colors duration-300"
              onClick={() => setIsLoggedIn(true)}
            >
              Login
            </button>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
