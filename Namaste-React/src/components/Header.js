import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
const Header = () => {
const [BtnName, setBtnName] = useState("Login")

  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src={LOGO_URL}
          alt="This is an Image"
        />
      </div>
      <div className="nav-item">
        <ul>
          <li>Home</li>
          <li>About us</li>
          <li>Contact us</li>
          <li>Cart</li>
          <button className="Login-Btn" onClick={()=>{BtnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
            
          }}>{BtnName}</button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
