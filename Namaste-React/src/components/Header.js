import { useEffect, useState, useContext } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import userContext from "../utils/userContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [BtnName, setBtnName] = useState("Login");

  const onlineStatus = useOnlineStatus();

  const { loggedInUser} = useContext(userContext);
  // console.log(loggedInUser);

//subscribing to the store using a selector
  const cartItems = useSelector((store) => store.cart.items); //Tells what portion do we need to read
  console.log(cartItems);
  

  useEffect(() => {
    console.log("useEffect Called");
  }, [BtnName]);

  return (
    <div className="flex justify-between bg-pink-100 sm:bg-green-200 lg:bg-pink-200">
      <div className="logo-container">
        <img className="w-24" src={LOGO_URL} alt="This is an Image" />
      </div>
      <div className="nav-item">
        <ul className="flex m-2 p-4 ml-11 items-start">
          <li>Online Status : {onlineStatus ? "🟢" : "🔴"}</li>
          <li className="px-4">
            {" "}
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            <Link to="/about">About us</Link>
          </li>
          <li className="px-4">
            {" "}
            <Link to="/contact">Contact us</Link>
          </li>
          <li className="px-4">
            {" "}
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-4 font-bold ">
            <Link to="/cart">Cart-({cartItems.length})</Link>
          </li>
          <button
            className="Login-Btn"
            onClick={() => {
              BtnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
            }}
          >
            {BtnName}
          </button>
          <li className="px-4 font-bold">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
