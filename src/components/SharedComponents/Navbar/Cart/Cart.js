"use client";

import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addItem, removeItem, setCart, clearCart } from "@/redux/slices/cart";

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
      <button onClick={toggleCartDisplay}>Cart</button>
      {isActive && (
        <div className="top-0 right-0 fixed h-screen w-[47vh] bg-white z-10">
          <div
            name="cart-header"
            className="border-b-2 h-[10vh] w-full flex justify-between items-center px-12 text-[#2d3436]"
          >
            <div className="text-xl">CART</div>
            <button onClick={toggleCartDisplay} className="text-3xl">
              x
            </button>
          </div>
          <div name="cart-body" className="w-full h-[80vh] p-6">
            <div
              name="scroll-area"
              className="border-2 h-full w-full border-red-500 overflow-y-scroll"
            >
              <CartItem item={cartContents[0]} />
            </div>
          </div>
          <div className="w-full h-[10vh]">
            {ENV === "dev" && (
              <button
                className="text-black"
                onClick={() => {
                  dispatch(clearCart());
                }}
              >
                Clear Cart
              </button>
            )}
          </div>
        </div>
      )}
    </>
  );
}
