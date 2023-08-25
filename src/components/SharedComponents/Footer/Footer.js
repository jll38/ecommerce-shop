import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#2d3436]  px-[16vh] py-6 text-[3vh] text-[#dfe6e9]">
      <div className="flex justify-between">
        <div className="text-[4vh] tracking-widest">Concepteur</div>
        <div className="w-1/3 flex justify-around">
          <div>
            <div className="mb-4 font-semibold">Follow Us!</div>
            <div className="flex flex-col text-[#b2bec3] gap-2"></div>
          </div>
          <div>
            <div className="mb-4 font-semibold">Legal</div>
            <div className="flex flex-col text-[#b2bec3] child-hover:underline gap-2">
              <Link href="/">Privacy Policy</Link>
              <Link href="/">Terms & Conditions</Link>
            </div>
          </div>
        </div>
      </div>
      <hr className="mt-4"></hr>
      <div className="mt-2">
      © Julian Lechner, 2023
      </div>
    </footer>
  );
}
