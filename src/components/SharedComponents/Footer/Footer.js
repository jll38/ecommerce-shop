import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#2d3436] flex justify-between px-24 py-6 text-lg text-[#dfe6e9]">
      <div className="text-3xl tracking-widest">Concepteur</div>
      <div className="w-1/3 flex justify-around">
        <div>
          <div className="mb-4 font-semibold">Follow Us!</div>
          <div className="flex flex-col text-[#b2bec3] gap-2">

          </div>
        </div>
        <div>
          <div className="mb-4 font-semibold">Legal</div>
          <div className="flex flex-col text-[#b2bec3] child-hover:underline gap-2">
            <Link href="/">Privacy Policy</Link>
            <Link href="/">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
