"use client";
import { useRef, useEffect } from "react";
import { MagnifyingGlass, X } from "phosphor-react";

interface SearchBoxProps {
  isOpen: boolean;
  onToggle: () => void;
  onSearch: (term: string) => void;
  searchTerm: string;
}

export function SearchBox({ isOpen, onToggle, onSearch, searchTerm }: SearchBoxProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onSearch(e.target.value);
  };

  if (isOpen) {
    return (
      <div className="flex items-center gap-2 bg-[rgba(217,217,217,0.1)] rounded-[8px] py-1 px-2 md:px-4 md:py-2">
        <MagnifyingGlass
          size={28}
          weight="fill"
          color="#399BEB"
        />
        <input
          ref={inputRef}
          type="text"
          placeholder="Pesquisar..."
          value={searchTerm}
          onChange={handleInputChange}
          className="bg-transparent text-white placeholder-gray-300 border-none outline-none text-sm md:text-base w-32 md:w-48"
        />
        <button
          onClick={onToggle}
          className="p-1 hover:bg-white/20 rounded"
          aria-label="Fechar pesquisa"
        >
          <X size={20} color="white" />
        </button>
      </div>
    );
  }

  return (
    <button 
      onClick={onToggle}
      className="py-1 px-2 rounded-[8px] flex items-center justify-center md:w-auto md:px-4 md:py-2 gap-4 bg-[rgba(217,217,217,0.1)]"
    >
      <MagnifyingGlass
        className="inline-block"
        size={28}
        weight="fill"
        color="#399BEB"
      />
      <span className="text-white hidden md:inline">Search</span>
    </button>
  );
}