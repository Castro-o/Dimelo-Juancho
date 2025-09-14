"use client";

import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import React, { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  { 
    src: "/jerridi/Salt-Lake-City.png", 
    title: "Jerri Di", 
    subtitle: "Utah - 05 Diciembre", 
    link: "https://www.tickeri.com/events/v4ksf2n3xan6/jerry-di-en-concierto-salt-lake-city-utah" 
  },
  { 
    src: "/jerridi/houston.png", 
    title: "Jerri Di", 
    subtitle: "Texas - 07 Noviembre", 
    link: "https://www.tickeri.com/events/vjckti8ztnvw/jerry-di-en-concierto-houston-texas" 
  },
  { 
    src: "/jerridi/Miami.png", 
    title: "Jerri Di", 
    subtitle: "Florida - 08 Noviembre", 
    link: "https://www.tickeri.com/events/xvvxpnppjn9k/jerry-di-en-concierto-miami-florida" 
  },
  { 
    src: "/jerridi/Orlando.png", 
    title: "Jerri Di", 
    subtitle: "Eua - 21 Noviembre", 
    link: "https://www.tickeri.com/events/2pjjo4ggiroy/jerry-di-en-concierto-orlando-florida" 
  },
    { 
    src: "/jerridi/Bueno-Aires.png", 
    title: "Jerri Di", 
    subtitle: "Argentina - 14 Noviembre", 
    link: "https://www.passline.com/eventos/jerry-di-en-concierto-buenos-aires" 
  },
];

interface CarrosselProps {
  searchTerm?: string;
}

export default function Carrossel({ searchTerm = "" }: CarrosselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "center",
    containScroll: "trimSnaps",
    loop: false,
  });

  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onSelect);
    onSelect();
    return () => {
      if (!emblaApi) return;
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  // Filtrar slides baseado no termo de busca
  const filteredSlides = slides.filter((slide) => {
    const query = searchTerm.toLowerCase();
    return (
      slide.title.toLowerCase().includes(query) ||
      slide.subtitle.toLowerCase().includes(query)
    );
  });

  return (
    <section className="relative w-full max-w-6xl mx-auto">
      <div ref={emblaRef} className="overflow-hidden">
        <div className="flex gap-0">
          {filteredSlides.length === 0 && searchTerm ? (
            <div className="w-full text-center py-20">
              <p className="text-white text-lg">Nenhum resultado encontrado para &ldquo;{searchTerm}&rdquo;</p>
            </div>
          ) : (
            filteredSlides.map((s, idx) => (
            <div key={idx} className="flex-none w-full sm:w-1/2 md:w-1/2 lg:w-1/3 px-2">
              {/* Envolvendo o card com Link */}
              <a 
                href={s.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="block cursor-pointer transition-transform duration-300 hover:scale-[0.98]"
              >
                <article className="relative overflow-hidden rounded-md shadow-lg h-full">
                  <div className="w-full h-[620px] sm:h-[520px] md:h-[580px] lg:h-[580px] relative">
                    <Image
                      src={s.src}
                      alt={s.title}
                      fill
                      className="object-contain sm:object-cover"
                      sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 30vw"
                    />
                  </div>

                  {/* caption overlay */}
                  <div className="absolute inset-0 flex flex-col items-center justify-end pb-6 md:pb-4 pointer-events-none">
                    <p className="text-blue-950 text-3xl font-bold px-3 py-0">{s.title}</p>
                    <p className="text-black text-lg font-medium">
                      <span className="font-bold">{s.subtitle.split(" - ")[0]}</span>
                      {" - " + s.subtitle.split(" - ")[1]}
                    </p>
                  </div>
                </article>
              </a>
            </div>
          ))
          )}
        </div>
      </div>

      <button onClick={scrollPrev} aria-label="Anterior" className="absolute -left-2 top-1/2 -translate-y-1/2 rounded-full bg-white p-2 text-black drop-shadow z-30 hover:bg-[#399BEB]">
        <ChevronLeft size={14} />
      </button>
      <button onClick={scrollNext} aria-label="Próximo" className="absolute -right-2 top-1/2 -translate-y-1/2 rounded-full bg-white p-2 text-black drop-shadow z-30 hover:bg-[#399BEB]">
        <ChevronRight size={14} />
      </button>

      <div className="flex items-center justify-center mt-6">
        {emblaApi && emblaApi.scrollSnapList().map((_, i) => (
          <button
            key={i}
            onClick={() => emblaApi && emblaApi.scrollTo(i)}
            aria-label={`Ir para página ${i + 1}`}
            className={`mx-2 w-2 h-2 rounded-full ${selectedIndex === i ? "bg-white" : "bg-white/40"}`}
          />
        ))}
      </div>
    </section>
  );
}