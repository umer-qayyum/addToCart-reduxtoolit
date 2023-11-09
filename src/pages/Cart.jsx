import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { remove } from "../store/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.cart);
  const handleRemove = (payload) => {
    dispatch(remove(payload));
  };
  if (products == "") {
    return (
      <div style={{ height: "90vh", position: "relative" }}>
        <h1
          style={{
            textAlign: "center",
            position: "absolute",
            left: "556px",
            top: "205px",
          }}
        >
          Cart is empty...
        </h1>
      </div>
    );
  }
  return (
    <>
      <div>
        <h3>Cart</h3>
        <div className="cartWrapper">
          {products.map((product) => (
            <div key={product.id} className="cartCard">
              <img src={product.image} alt="" />
              <h5>{product.title}</h5>
              <h5>{product.price}</h5>
              <button className="btn" onClick={() => handleRemove(product.id)}>
                Remove
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Cart;
