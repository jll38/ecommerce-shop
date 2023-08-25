"use client";

import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import cart, {
  addItem,
  removeItem,
  setCart,
  clearCart,
} from "@/redux/slices/cart";

import { ENV } from "@/constants/environment";

import { CartItem } from "./CartItem";

export default function Cart() {
  const [isActive, setIsActive] = useState(false);
  const numItems = useSelector((state) => state.cart.numItems);
  const cartContents = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const toggleCartDisplay = () => {
    setIsActive(!isActive);
  };

  // Retrieve Saved Cart from Local Storage
  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      const parsedCart = JSON.parse(savedCart);
      dispatch(setCart(parsedCart));
    }
  }, [dispatch]);

  // Saves Current Cart to Local Storage on cartContents state being updated
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartContents));
  }, [cartContents]);

  return (
    <>
      <button onClick={toggleCartDisplay}><i className="fa-solid fa-cart-shopping hover:-rotate-45 transition-all duration-200"></i></button>
      {isActive && (
        <div className="top-0 right-0 fixed h-screen w-[47vh] bg-white z-10">
          <div
            name="cart-header"
            className="border-b-2 h-[10vh] w-full flex justify-between items-center px-12 text-[#2d3436]"
          >
            <div className="text-xl">CART | {numItems}</div>
            <button onClick={toggleCartDisplay} className="text-3xl">
              x
            </button>
            {ENV === "dev" && <button onClick={() => {dispatch(clearCart())}}>Clear Cart</button>}
          </div>
          <div name="cart-body" className="w-full h-[80vh] p-6">
            <div
              name="scroll-area"
              className=" h-full w-full overflow-y-scroll"
            >
              {cartContents.map((product, i) => {
                return (
                  <CartItem item={product} key={"cart-item-" + i} index={i} />
                );
              })}
            </div>
          </div>
          <div className="w-full h-[10vh] border-t-2 p-6 pt-3">
            <button className="bg-[#2d3436] w-full h-[50px] tracking-wider hover:tracking-widest transition-all duration-200">
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </>
  );
}
