"use client";
import { MagnifyingGlass } from "phosphor-react";

export function Header() {
  return (
    <header className="absolute w-full max-w-7xl mx-auto flex items-center top-3 px-6 gap-x-4 md:gap-x-16 z-10 left-0 right-0">
      <img
        src="/logo dimelo.png"
        alt="Logo"
        className="max-h-16 md:max-h-24 object-contain z-10"
        style={{ flexShrink: 0 }}
      />

      <p className="flex-1 text-center text-amber-50 z-10 text-xs md:text-sm lg:text-base">
         <span className="font-bold"> Welcome </span> to our world
      </p>

      <button className=" py-1 px-2 rounded-[8px] flex items-center justify-center  md:w-auto md:px-4 md:py-2 gap-4 bg-[rgba(217,217,217,0.1)]">
        <MagnifyingGlass
          className="inline-block"
          size={28}
          weight="fill"
          color="#399BEB"
        />

        <span className="text-white hidden md:inline">Search</span>
      </button>
    </header>
  );
}
