"use client";
import { SelectColor } from './SelectColor';
import React, { useState, useEffect } from "react";

import AddToCart from "../SharedComponents/UI/Buttons/AddToCart";
import { SelectSize } from './SelectSize';
export function ItemInformation({ slug }) {
  const [color, setColor] = useState("white"); // Once products are available, color will be set to the first in the array of available colors.
  const [size, setSize] = useState("small"); // default small
  return (
    <div className="h-full w-[40vh] border pt-[8vh]">
      <div className="text-[1.5vh] text-[#636e72] font-medium">
        Trendsetter Collection
      </div>
      <div className="text-[2vh] text-[#2d3436] font-bold mb-2">
        Casual Flock Tee
      </div>
      <div className="text-[1.5vh] text-[#636e72]">$39.99</div>
      <hr className='h-[.3vh] w-full bg-[#b2bec3] my-[2vh]'></hr>
      <div>
        <div className="capitalize text-[#636e72] font-light text-[1.5vh]">
          Color: {color}
        </div>
        <SelectColor color={color} setColor={setColor} availableColors={["white","black", "orange", "blue"]}  /> {/*Test Array, replace later with actual product array */}
        <div className="capitalize text-[#636e72] font-light text-[1.5vh]">
          Size:
        </div>
        <SelectSize size={size} setSize={setSize} availableSizes={["small", "medium", "large", "extra large"]}/>
      </div>
      <AddToCart />
    </div>
  );
}
