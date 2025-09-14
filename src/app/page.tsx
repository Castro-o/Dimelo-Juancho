"use client";
import { useState, useEffect } from "react";
import { Header } from "./header";
import { Footer } from "./footer";
import { Loading } from "./components/Loading";
import Carrossel from "./components/carrossel";


export default function Page() {
  const [isLoading, setIsLoading] = useState(true);
  const [isFadingOut, setIsFadingOut] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchToggle = () => {
    setShowSearch(!showSearch);
    if (showSearch) {
      setSearchTerm(""); // Limpa a busca quando fecha
    }
  };

  const handleSearch = (term: string) => {
    setSearchTerm(term);
  };

  useEffect(() => {
    // Inicia o fade out depois de 1.5 segundos
    const fadeTimer = setTimeout(() => {
      setIsFadingOut(true);
    }, 1500);

    // Remove o loading completamente depois do fade out (2 segundos total)
    const loadingTimer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(loadingTimer);
    };
  }, []);

  if (isLoading) {
    return <Loading isFadingOut={isFadingOut} />;
  }

  return (
    <div className="relative min-h-screen flex flex-col">
      <Header 
        isSearchOpen={showSearch}
        onSearchToggle={handleSearchToggle}
        onSearch={handleSearch}
        searchTerm={searchTerm}
      />
      <main className="flex-1 flex items-center justify-center">
      <Carrossel showSearch={showSearch} searchTerm={searchTerm} />
      </main>
      <Footer />
    </div>
  );
}