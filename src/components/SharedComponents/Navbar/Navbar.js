"use client";
import React, { useState, useEffect } from "react";
import Cart from "./Cart/Cart";
import Link from "next/link";

export default function Navbar() {
  const [width, setWidth] = useState(window.innerWidth);

  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }
  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  const isMobile = width <= 1200;
  console.log(isMobile);
  return (
    <>
      {!isMobile && (
        <nav className="bg-[#2d3436] h-[8vh] flex text-white uppercase w-full items-center justify-between px-12 lg:px-[16vh] text-[1.5vh]">
          <div className="flex justify-between gap-[3vh]">
            <Link
              href="/"
              name="nav-title"
              className="text-[2.5vh] tracking-widest"
            >
              Concepteur
            </Link>
            <div className="flex items-center gap-[4vh] child-hover:text-[#D9D9D9]">
              <Link href="/mens">Mens</Link>
              <Link href="/womens">Womens</Link>
              <Link href="/new-launch">New Drop</Link>
              <Link href="/accessories">Accessories</Link>
            </div>
          </div>
          <div
            name="nav-right"
            className="flex items-center justify-around w-[20vh]"
          >
            <div>Search</div>
            <Cart />
          </div>
        </nav>
      )}
    </>
  );
}
