import React from "react";
export function CartItem({item}) {
  return <div className="flex items-center border border-blue-500 h-[10vh] gap-2 normal-case">
                <div className="h-[10vh] w-[10vh] border"></div>
                <div className="leading-4">
                  <div className="text-[#2d3436]">{item}</div>
                  <div className="text-[#636e72]">Price</div>
                  <div className="text-[#636e72]">Size</div>
                </div>
                <div className="text-[#2d3436]">Remove</div>
              </div>;
}
  