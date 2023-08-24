"use client";
import { addItem } from "@/redux/slices/cart";
import { useDispatch } from "react-redux";


export default function AddToCart({ item }) {
  const dispatch = useDispatch();
  return (
    <button 
    className="bg-[#e17055] hover:bg-[#fab1a0] px-4 py-2 text-lg transition-all duration-100"
    onClick={() => {dispatch(addItem("Test"))}}>
      Add to Cart
    </button>
  );
}
