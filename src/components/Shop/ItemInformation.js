"use client";
import React, {useState, useEffect } from "react";

import AddToCart from "../SharedComponents/UI/Buttons/AddToCart";

export function ItemInformation({slug}) {
    const [color, setColor] = useState("white"); // Once products are available, color will be set to the first in the array of available colors.
    const [size, setSize] = useState("small"); // default small
  return <div className="h-full w-[60vh] border ">
          <div className="text-[2vh] text-[#636e72]">____ Collection</div>
          <div className="text-[3vh] text-[#2d3436]">Casual Flock Tee</div>
          <div className="text-[2.25vh] text-[#636e72]">$39.99</div>
          <hr></hr>
          <div>
            <div className="capitalize text-[#636e72] font-light text-[2.25vh]">Color: {color}</div>
            <div className="flex gap-[1vh]"> {/*Map amount of color blocks based on array of available colors*/}
            {/*Add tooltop for color name on hovering over selectable colors */}
                <button name="white-select" className={`border-[.3vh] border-[${color === "white" ? ("#fdcb6e") : ("#2d3436")}] bg-white w-[4vh] h-[4vh] `} onClick={() => {setColor("white")}}></button> 
                <button name="orange-select" className="border-[.3vh] border-[#2d3436] bg-[#e17055] w-[4vh] h-[4vh]" onClick={() => {setColor("orange")}}></button> 
                <button name="blue-select" className="border-[.3vh] border-[#2d3436] bg-[#0984e3] w-[4vh] h-[4vh]" onClick={() => {setColor("blue")}}></button> 
            </div>
          </div>
          <AddToCart/>
        </div>;
}
  