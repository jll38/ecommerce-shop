import React from "react";
export function SelectColor({ color, setColor, availableColors }) {
  return (
    <div className="flex gap-[1vh] mb-2">
      {/*Map amount of color blocks based on array of available colors*/}
      {/*Add tooltop for color name on hovering over selectable colors */}
      {availableColors.map((colorItem, i) => 
        <button
        name={colorItem + "-select"}
        className={`border-[.3vh] border-[#2d3436] w-[2vh] h-[2vh] bg-${colorItem}-500 ${colorItem === "white" ? "bg-white" : ""} ${colorItem === "black" ? "bg-black" : ""}`}
        onClick={() => {
          setColor(colorItem);
        }}
        key={i}
      ></button>
      )}
     
    </div>
  );
}
