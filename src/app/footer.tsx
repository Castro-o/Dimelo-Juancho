"use client";

import { InstagramLogo, EnvelopeOpen } from "phosphor-react";
export function Footer() {
  return (
    <footer className="absolute left-0 right-0 bottom-4 z-20 flex flex-col gap-0 items-center w-auto">
      <div className="w-full max-w-7xl mx-auto flex items-center justify-center gap-x-4 flex-col md:flex-row sm:gap-x-8 md:gap-x-16">
       <a href="https://www.instagram.com/dimelojuancho/" target="_blank"> <div className="flex items-center gap-x-3 text-white text-xs  hover:bg-[#399BEB] rounded-full py-2 px-4 md:text-sm ">
          <InstagramLogo weight="fill" className="size-6  md:size-8" />
          <span>Dimelojuancho</span>
        </div> </a>
        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=info@dimelojuancho.com" target="_blank"> <div className="flex items-center gap-x-3 text-white hover:bg-[#399BEB] rounded-full py-2 px-4 text-xs md:text-sm">
          <EnvelopeOpen weight="fill" className="size-6 md:size-8" />
          <span>info@dimelojuancho.com</span>
        </div> </a>
      </div>

    </footer>
  );
}
