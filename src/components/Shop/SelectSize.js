import React from "react";
export function SelectSize({ size, setSize, availableSizes }) {
  return (
    <div className="flex flex-wrap gap-[1vh] mb-4 max-w-[60vh]">
      {/*Map amount of color blocks based on array of available colors*/}
      {/*Add tooltop for color name on hovering over selectable colors */}
      {availableSizes.map((sizeItem, i) => 
        <button
        name={sizeItem + "-select"}
        className={`border-[.3vh] ${size === sizeItem ? "border-[#2d3436]" : "border-[#b2bec3]" }   w-[8vh] h-[3vh] capitalize text-[1.25vh]`}
        onClick={() => {
          setSize(sizeItem);
        }}
        key={i}
      >{sizeItem}</button>
      )}
     
    </div>
  );
}
