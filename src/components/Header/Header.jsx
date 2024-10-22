import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="header-contents">
        <h2>Order your favourite food here</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
          aliquid, dignissimos, recusandae nisi numquam id fuga minima amet
          reiciendis soluta voluptatem saepe maiores quisquam earum nobis, nam
          labore expedita autem.
        </p>
        <button><a href='#explore-menu'>View menu</a></button>
      </div>
    </div>
  );
};

export default Header;
