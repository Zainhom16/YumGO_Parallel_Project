import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="header-contents">
        <h2>Order a delicious meal here</h2>
        <p>
          Indulge in our diverse menu, offering a delectable array of dishes
          crafted with the finest ingredients and culinary expertise. Enjoy one
          delicious meal at a time, delivered straight to your doorstep.
        </p>
        <a href="#explore-menu" className="view-menu">
          View Menu &darr;
        </a>
      </div>
    </div>
  );
};

export default Header;
