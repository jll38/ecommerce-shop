"use client";
import React from "react";

import { motion } from "framer-motion";

export function DiscountButton({}) {
  function handleDiscountBtn() {
    const btn = document.getElementById("discount-btn")
  }
  return (
    <motion.div
      id="discount-btn"
      className="fixed flex justify-center items-start pt-[.5vh] -bottom-[3vh] -left-[8vh] w-[20vh] h-[10vh] bg-black rotate-45 text-white text-[1.5vh] hover:scale-110 transition-all duration-200"
      onClick={() => {
        handleDiscountBtn;
      }}
    >
      <button className="w-full h-full flex items-start justify-center">
      Get 15% off
      </button>
    </motion.div>
  );
}
