"use client";
import Image from "next/image";

interface LoadingProps {
  isFadingOut?: boolean;
}

export function Loading({ isFadingOut = false }: LoadingProps) {
  return (
    <div 
      className={`fixed inset-0 z-50 flex items-center justify-center transition-opacity duration-500 ${
        isFadingOut ? "opacity-0" : "opacity-100"
      }`}
      style={{
        backgroundImage: "url('/BG_loading-blue.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundColor: "rgba(0,0,0,0.8)",
        backgroundBlendMode: "overlay"
      }}
    >
      <div className="flex flex-col items-center justify-center">
        {/* Logo animada */}
        <div>
          <Image
            src="/Dimelo_alpha_web.webp"
            alt="Dimelo Logo"
            width={600}
            height={400}
            className="max-w-md w-full h-auto"
            priority
            unoptimized
          />
        </div>
      </div>
    </div>
  );
}