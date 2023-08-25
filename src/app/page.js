import Image from "next/image";
import { Provider } from "react-redux";
//Constant Imports
import { products } from "@/constants/products";

//Component Imports
import AddToCart from "@/components/SharedComponents/UI/Buttons/AddToCart";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#dfe6e9] gap-6 relative">
      <div className="bg-[#ffeaa7] h-[70vh] w-full px-24 py-12 flex overflow-hidden">
        <div className="hidden lg:w-1/2 h-[95%] p-12 object-cover lg:flex items-center bg-[url('/assets/homepage/material.png')] bg-local bg-cover bg-norepeat">
          <img
            draggable="false"
            src="/assets/homepage/male-model.webp"
            alt=" "
            className=""
          ></img>
        </div>
        <div className="w-full lg:w-1/2 border border-black p-12 flex flex-col justify-center items-center">
          <div className="flex flex-col justify-center items-center">
            <div className="tracking-widest text-center font-semibold text-[#ff7675] drop-shadow-sm text-[3vh]">
              CONCEPTEUR
            </div>
            <div className="text-center uppercase text-white font-bold text-[7vh] drop-shadow-md">
              Summer <span className="text-[#ff7675]">Savings</span>
            </div>
            <div className="text-center text-[#2d3436]">Shop our lowest prices yet!</div>
          </div>

          <div className="flex w-1/2 mt-4 ">
            <button className="w-1/2 bg-[#ff7675] hover:bg-[#fab1a0] py-4 font-semibold text-white transition-all duration-100">Shop Sale</button>
          </div>
        </div>
      </div>

      <div className="px-24 py-12"></div>
    </main>
  );
}
