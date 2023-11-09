import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
const Navbar = () => {
  const items = useSelector((state) => state.cart);
  console.log(items);
  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <span className="logo">
          <b>REDUX STORE</b>
        </span>
        <div>
          <Link className="navLink" to="/">
            <b>Home</b>
          </Link>
          <Link className="navLink" to="/cart">
            <b>Cart</b>
          </Link>
          <span className="cartCount">items:{items.length}</span>
        </div>
      </div>
    </>
  );
};

export default Navbar;
