"use client";
import { addItem } from "@/redux/slices/cart";
import { useDispatch } from "react-redux";

import { fallbackProductAddCart as fallback } from "@/constants/fallbackProduct";

export default function AddToCart({ item = fallback}) {
  const dispatch = useDispatch();
  return (
    <button 
    className="bg-[#2d3436] w-[35vh] text-[2.5vh] h-[50px] tracking-wider hover:tracking-widest transition-all duration-200 text-[#dfe6e9]"
    onClick={() => {dispatch(addItem(item))}}>
      Add to Cart
    </button>
  );
}
