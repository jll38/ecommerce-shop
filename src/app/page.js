import Image from "next/image";
import { Provider } from "react-redux"; 
//Constant Imports
import { products } from "@/constants/products";

//Component Imports
import AddToCart from "@/components/SharedComponents/UI/Buttons/AddToCart";

export default function Home() {
  return (
    <main className="flex min-h-screen px-24 py-12 bg-[#dfe6e9] gap-6 relative">
      <div className="w-1/3 h-[600px] border ">
        <img
          className="object-cover h-full"
          src={products[0].img}
          alt={products[0].name + " image"}
        ></img>
      </div>
      <div className="w-1/3 h-[600px] border p-6">
        <div name="collection-head" className="tracking-widest text-[#636e72]">
          New Collection
        </div>
        <div name="featured-prod-name" className="text-3xl text-[#2d3436]">
          {products[0].name}
        </div>
        <div
          name="feature-prod-price"
          className="tracking-widest text-[#636e72]"
        >
          ${products[0].price}
        </div>
        <AddToCart />
      </div>
      <div className="w-1/3 h-[600px] border"></div>
    </main>
  );
}
