"use client";
import { CartItem } from "./CartItem";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addItem, removeItem } from "@/redux/slices/cart";
export default function Cart() {
  const [isActive, setIsActive] = useState(true);
  const numItems = useSelector((state) => state.cart.numItems);
  const cartContents = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const toggleCartDisplay = () => {
    setIsActive(!isActive);
  };

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
              <CartItem />
              
            </div>
          </div>
          <div className="w-full h-[10vh]"></div>
        </div>
      )}
    </>
  );
}
