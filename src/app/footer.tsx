"use client";

import { InstagramLogo, EnvelopeOpen } from "phosphor-react";
export function Footer() {
  return (
    <footer className="absolute left-0 right-0 bottom-0 z-20 flex flex-col gap-3 items-center w-full">
      <div className="w-full max-w-7xl mx-auto flex items-center justify-center gap-x-4 flex-col md:flex-row sm:gap-x-8 md:gap-x-16">
        <div className="flex items-center gap-x-3 text-white text-xs  hover:bg-[#399BEB] rounded-full py-2 px-4 md:text-sm ">
          <InstagramLogo weight="fill" className="size-6  md:size-8" />
          <span>Dimelojuancho</span>
        </div>
        <a href="https://drive.google.com/drive/folders/16JArztYchL0aQN3X-PLpbG1Wk4SKsL5H" target="_blank"> <div className="flex items-center gap-x-3 text-white hover:bg-[#399BEB] rounded-full py-2 px-4 text-xs md:text-sm">
          <EnvelopeOpen weight="fill" className="size-6 md:size-8" />
          <span>info@dimelojuancho.com</span>
        </div> </a>
      </div>
      <div className="mb-8 w-full">{/* Texto de Lorem Ipsum 
        <p className="text-white text-center text-[10px] md:text-[12px] px-4">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.
        </p> */}
      </div>
    </footer>
  );
}
