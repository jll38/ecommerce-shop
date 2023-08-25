import Image from "next/image";
import Link from "next/link";
import { Provider } from "react-redux";
//Constant Imports
import { products } from "@/constants/products";

//Component Imports
import AddToCart from "@/components/SharedComponents/UI/Buttons/AddToCart";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#dfe6e9] gap-6 relative">
      <div className="bg-[#ffeaa7] h-[70vh] w-full px-24 py-12 flex overflow-hidden">
        <div className="hidden lg:w-1/2 h-[95%] p-12 object-cover lg:flex items-center bg-[url('/assets/homepage/material.png')] bg-local bg-cover bg-norepeat mt-6">
          <img
            draggable="false"
            src="/assets/homepage/male-model.webp"
            alt=" "
            className="relative bottom-0"
          ></img>
        </div>
        <div className="w-full lg:w-1/2 p-6 sm:p-12 flex flex-col justify-center items-center bg-[url('/assets/homepage/golden-sparkle-clipart-background-24.png')] bg-cover">
          <div className="flex flex-col justify-center items-center">
            <div className="tracking-widest text-center font-bold text-[#ff7675] drop-shadow-sm text-[3vh]">
              CONCEPTEUR
            </div>
            <div className="text-center uppercase text-white font-black text-[7vh] drop-shadow-md">
              Summer <span className="text-[#ff7675]">Savings</span>
            </div>
            <div className="text-center text-white drop-shadow font-semibold uppercase text-[3vh]">
              Our lowest prices yet!
            </div>
          </div>

          <div className="flex w-full sm:w-1/2 mt-4 gap-4">
            <button className="w-1/2 bg-[#ff7675] hover:bg-[#fab1a0] py-4 font-semibold text-white transition-all duration-100">
              Shop Sale
            </button>
            <button className="w-1/2 bg-[#ffeaa7] border-2 border-[#ff7675] py-4 font-semibold text-[#ff7675] transition-all duration-100 hover:tracking-wider">
              Shop All
            </button>
          </div>
        </div>
      </div>

      <div className="px-[16vh] py-[6vh] text-white">
        <h3 className="font-bold text-[4vh] text-[#2d3436]">Trending</h3>
        <hr className="h-[.5vh] w-[30vh] bg-[#2d3436] rounded-md"></hr>
      </div>
    </main>
  );
}
