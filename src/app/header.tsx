"use client";
import { SearchBox } from "./components/SearchBox";

interface HeaderProps {
  isSearchOpen: boolean;
  onSearchToggle: () => void;
  onSearch: (term: string) => void;
  searchTerm: string;
}

export function Header({ isSearchOpen, onSearchToggle, onSearch, searchTerm }: HeaderProps) {
  return (
    <header className="absolute w-full max-w-7xl mx-auto flex items-center top-3 px-6 gap-x-4 md:gap-x-16 z-10 left-0 right-0">
      <img
        src="/logo dimelo.png"
        alt="Logo"
        className="max-h-16 md:max-h-24 object-contain z-10"
        style={{ flexShrink: 0 }}
      />

      <p className="flex-1 text-center text-white z-10 text-xs md:text-sm lg:text-base">
         <span className="font-bold"> Welcome </span> to our world
      </p>

      <SearchBox 
        isOpen={isSearchOpen}
        onToggle={onSearchToggle}
        onSearch={onSearch}
        searchTerm={searchTerm}
      />
    </header>
  );
}
