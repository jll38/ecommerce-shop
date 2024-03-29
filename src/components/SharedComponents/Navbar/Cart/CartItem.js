"useClient";
import React, {useEffect} from "react";
import { removeItem } from "@/redux/slices/cart";
import { useSelector, useDispatch } from "react-redux";
export function CartItem({ item, index }) {
  const quantity = useSelector((state) => state.cart.quantity);
  const items = useSelector((state) => state.cart.items);

  const dispatch = useDispatch();
  const id = item.id;
  const name = item.name;
  const size = item.size;
  const price = item.price;
  const img = item.img;
  const numItems = 1;
  useEffect(() => {
    console.log("Quantity: " + quantity)
    console.log(items)
  }, [quantity])
  console.log(item);
  return (
    <div className="flex items-center border h-[12vh] justify-between normal-case overflow-hidden bg-[#e9e9e9] rounded-xl mb-4 py-4 px-2">
      <div className="flex items-center gap-2">
        <div className="h-[10vh] w-[10vh] object-cover overflow-hidden rounded-lg">
          <img src={img} alt={name + " preview image"}></img>
        </div>
        <div className="leading-4">
          <div className="text-[#2d3436]">{name}</div>
          <div className="text-[#636e72]">{price}</div>
          <div className="text-[#636e72]">{size}</div>
          <div className="text-[#2d3436]">{quantity[0]}</div>
        </div>
      </div>
      <button
        onClick={() => {
          dispatch(removeItem(item));
        }}
        className="text-[#2d3436] mr-6"
      >
        x
      </button>
    </div>
  );
}
