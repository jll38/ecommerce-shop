"use client";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addItem, removeItem } from "@/redux/slices/cart";
export default function Cart() {
  const [isActive, setIsActive] = useState(false);
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
        <div className="top-0 right-0 absolute h-screen w-[400px] bg-white ">
            <div className="border-b-2 h-[75px] w-full flex justify-between items-center px-12 text-gray-400">
                <div className="text-xl">CART</div>
                <button onClick={toggleCartDisplay} className="text-3xl">x</button>
            </div>
        </div>
      )}
    </>
  );
}
