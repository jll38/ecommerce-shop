"useClient";
import React from "react";
import { removeItem } from "@/redux/slices/cart";
import { useSelector, useDispatch } from "react-redux";
export function CartItem({item, index}) {
    const dispatch = useDispatch();
    const id = item.id;
    const name = item.name;
    const size = item.size;
    const price = item.price;
    const img = item.img;
    const numItems = 1;

    console.log(item);
  return <div className="flex items-center border  h-[12vh] gap-2 normal-case overflow-hidden bg-[#e9e9e9] rounded-xl mb-4 py-4 px-2">
                <div className="h-[10vh] w-[10vh] object-cover overflow-hidden rounded-lg"><img src={img}></img></div>
                <div className="leading-4">
                  <div className="text-[#2d3436]">{name}</div>
                  <div className="text-[#636e72]">Price</div>
                  <div className="text-[#636e72]">Size</div>
                </div>
                <button 
                onClick={() => {dispatch(removeItem(item))}}
                className="text-[#2d3436]">Remove</button>
              </div>;
}
  